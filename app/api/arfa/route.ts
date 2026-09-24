import { NextRequest, NextResponse } from "next/server"

// Per-IP rate limiting: maximum 10 requests per minute
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60_000 })
    return true
  }

  if (record.count >= 10) {
    return false
  }

  record.count += 1
  return true
}

const SYSTEM_PROMPT = `You are Arfa, the AI workflow assistant for BarakahAI.
BarakahAI is an AI automation partner for modern businesses that builds practical, human-centred AI systems (agentic workflows, WhatsApp chatbots, operations automation, and intelligent document processing).
Always keep your answers concise, practical, professional, and directly focused on how BarakahAI can automate business workflows while keeping humans in the loop.`

const FALLBACK_ANSWERS: Record<string, string> = {
  "how does arfa work":
    "Arfa connects your everyday communication channels (email, WhatsApp, ticketing, forms) directly to internal databases and APIs. When a request arrives, Arfa extracts the intent and key data, generates proposed actions and draft responses, and queues them for human approval before execution.",
  "what is human in the loop":
    "Human-in-the-loop means AI handles tedious extraction, drafting, and preliminary validation, but critical decisions—such as issuing refunds, sending client-facing agreements, or approving purchase orders—remain safeguarded by your team with 1-click approvals.",
  "how long does a pilot take":
    "A typical BarakahAI pilot takes 2 to 3 weeks to scope, build, and deploy into staging. We test with real scenarios and measure against agreed KPIs before you decide whether to roll it out company-wide.",
  "default":
    "BarakahAI pairs specialized AI agents with your existing stack. Arfa ingests multi-format inputs, extracts structured records, coordinates approvals, and hands off edge cases smoothly to human team members.",
}

function getScriptedResponse(query: string): string {
  const q = query.toLowerCase()
  if (q.includes("how does") || q.includes("how it works") || q.includes("what does arfa do")) {
    return FALLBACK_ANSWERS["how does arfa work"]
  }
  if (q.includes("human") || q.includes("control") || q.includes("approval") || q.includes("loop")) {
    return FALLBACK_ANSWERS["what is human in the loop"]
  }
  if (q.includes("pilot") || q.includes("how long") || q.includes("time") || q.includes("duration") || q.includes("cost")) {
    return FALLBACK_ANSWERS["how long does a pilot take"]
  }
  return FALLBACK_ANSWERS["default"]
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1"

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Please wait a minute before asking another question." },
      { status: 429 }
    )
  }

  let prompt = ""
  try {
    const body = await req.json()
    prompt = body.message || body.prompt || ""
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  if (!prompt.trim()) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 })
  }

  // Check if an external LLM key is present
  const geminiApiKey = process.env.GEMINI_API_KEY
  const openAiApiKey = process.env.OPENAI_API_KEY

  if (geminiApiKey) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${geminiApiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { maxOutputTokens: 350, temperature: 0.3 },
          }),
        }
      )

      if (response.ok && response.body) {
        // Return stream
        return new Response(response.body, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
          },
        })
      }
    } catch {
      // Fallback below
    }
  }

  // Scripted streaming fallback with realistic token cadence
  const fallbackText = getScriptedResponse(prompt)
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      const words = fallbackText.split(" ")
      for (const word of words) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: word + " " })}\n\n`))
        await new Promise((resolve) => setTimeout(resolve, 35))
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"))
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}
