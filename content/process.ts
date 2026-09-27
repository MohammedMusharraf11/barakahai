export interface ProcessStep {
  number: string
  title: string
  text: string
  duration?: string
  deliverables: string[]
  humanLoop?: boolean
}

export const roadmapSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Find your biggest time-wasters",
    text: "We look at what eats up your team's day — repetitive typing, answering the same customer questions, or chasing spreadsheets — and pick the quickest win.",
    duration: "Week 1",
    deliverables: ["List of repetitive tasks found", "Estimated weekly hours saved", "Clear fixed-price quote"],
  },
  {
    number: "02",
    title: "See a working test in 7 days",
    text: "Before making any commitments, we build a private working test version so you can try it with your own examples and see the results firsthand.",
    duration: "Weeks 1–2",
    deliverables: ["Working demo to try out", "Tested with your real scenarios", "Zero obligation to continue"],
  },
  {
    number: "03",
    title: "Connect to your everyday tools",
    text: "We connect the tool directly to your WhatsApp, Gmail, or spreadsheets. Your team keeps full control with easy one-click approvals for important actions.",
    duration: "Weeks 2–4",
    deliverables: ["Connected to your existing tools", "One-click approval safety check", "Simple 5-minute team walkthrough"],
    humanLoop: true,
  },
  {
    number: "04",
    title: "Relax while it runs in the background",
    text: "Your new automation runs smoothly 24/7. We monitor everything, make quick adjustments whenever needed, and help you save even more hours over time.",
    duration: "Ongoing",
    deliverables: ["Simple monthly time-saved report", "Ongoing maintenance & tweaks", "Fast direct support whenever you need help"],
  },
]
