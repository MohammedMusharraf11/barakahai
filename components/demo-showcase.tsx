"use client"

import React, { useState, useEffect, useRef } from "react"
import {
  Check,
  RotateCcw,
  Send,
  MessageCircle,
  FileText,
  Boxes,
  Clock,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Edit3,
} from "lucide-react"
import { demoScenarios, DemoScenario } from "@/content/demo-scenarios"

const tabs = [
  { id: "customer-support", label: "Customer support", icon: MessageCircle },
  { id: "operations", label: "Operations", icon: Boxes },
  { id: "documents", label: "Documents", icon: FileText },
]

const suggestions = [
  "How does Arfa work with our CRM?",
  "What is the human-in-the-loop guarantee?",
  "How long does a focused pilot take?",
]

export function DemoShowcase() {
  const [activeTab, setActiveTab] = useState<string>("customer-support")
  const [completedSteps, setCompletedSteps] = useState<number>(0)
  const [isApproved, setIsApproved] = useState<boolean>(false)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editableBody, setEditableBody] = useState<string>("")
  const [askQuery, setAskQuery] = useState<string>("")
  const [askResponse, setAskResponse] = useState<string>("")
  const [isAsking, setIsAsking] = useState<boolean>(false)
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState<boolean>(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const tabListRef = useRef<HTMLDivElement>(null)

  const currentScenario: DemoScenario = demoScenarios[activeTab] || demoScenarios["customer-support"]

  // Reset editable body when scenario changes
  useEffect(() => {
    setEditableBody(currentScenario.outputs.draftReply.body)
    setIsApproved(false)
    setIsEditing(false)
  }, [activeTab, currentScenario])

  // Step ticking logic
  const runStepSequence = () => {
    setCompletedSteps(0)
    const total = currentScenario.steps.length
    for (let i = 1; i <= total; i++) {
      setTimeout(() => {
        setCompletedSteps(i)
      }, i * 450)
    }
  }

  // Scroll into view trigger
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasScrolledIntoView) {
          setHasScrolledIntoView(true)
          runStepSequence()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasScrolledIntoView])

  // Re-run step ticking on tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCompletedSteps(0)
    const total = demoScenarios[tabId].steps.length
    for (let i = 1; i <= total; i++) {
      setTimeout(() => {
        setCompletedSteps(i)
      }, i * 380)
    }
  }

  // Keyboard navigation for role="tablist"
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      const nextIdx = (index + 1) % tabs.length
      handleTabChange(tabs[nextIdx].id)
      const nextBtn = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIdx]
      nextBtn?.focus()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      const prevIdx = (index - 1 + tabs.length) % tabs.length
      handleTabChange(tabs[prevIdx].id)
      const prevBtn = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[prevIdx]
      prevBtn?.focus()
    }
  }

  // Send question to /api/arfa
  const handleAskArfa = async (textToAsk?: string) => {
    const query = (textToAsk ?? askQuery).trim()
    if (!query || isAsking) return

    setIsAsking(true)
    setAskResponse("")

    try {
      const res = await fetch("/api/arfa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      })

      if (!res.ok) {
        throw new Error("Request failed")
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let done = false
      let fullText = ""

      if (reader) {
        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone
          if (value) {
            const chunk = decoder.decode(value, { stream: true })
            const lines = chunk.split("\n")
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const dataStr = line.slice(6).trim()
                if (dataStr === "[DONE]") break
                try {
                  const parsed = JSON.parse(dataStr)
                  if (parsed.text) {
                    fullText += parsed.text
                    setAskResponse((prev) => prev + parsed.text)
                  }
                } catch {
                  // raw string fallback
                }
              }
            }
          }
        }
      }
    } catch {
      setAskResponse(
        "Arfa coordinates incoming multi-channel requests, runs strict entity extractions, drafts contextual replies, and stages human approval tasks directly within your workflow."
      )
    } finally {
      setIsAsking(false)
      setAskQuery("")
    }
  }

  return (
    <section className="demo-section section-wrap" id="demo" ref={sectionRef} aria-labelledby="demo-heading">
      {/* Section Header */}
      <div className="section-heading mb-8">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-dot" /> See it in context
          </p>
          <h2 id="demo-heading">
            One conversation.<br />
            <span>Several useful next steps.</span>
          </h2>
        </div>
        {/* AA Contrast Illustrative chip */}
        <div className="chip-illustrative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium">
          <ShieldCheck size={14} className="text-[var(--emerald-700)]" />
          <span>Illustrative example — not a client result.</span>
        </div>
      </div>

      {/* Main Flat Demo Panel */}
      <div className="flat-demo-panel">
        {/* Panel Top Bar: Tabs + Replay */}
        <div className="demo-header-bar">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Workflow scenario tabs"
            className="demo-tabs"
          >
            {tabs.map((tab, idx) => {
              const Icon = tab.icon
              const isSelected = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => handleTabChange(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`demo-tab-btn ${isSelected ? "demo-tab-active" : ""}`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[13px] text-[var(--muted)] hidden sm:inline">
              Fictional sample data
            </span>
            <button
              type="button"
              onClick={runStepSequence}
              className="replay-btn"
              aria-label="Replay step animation"
              title="Replay step animation"
            >
              <RotateCcw size={14} />
              <span>Replay flow</span>
            </button>
          </div>
        </div>

        {/* 3 Panes Flat Layout */}
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="demo-panes-grid"
        >
          {/* PANE 1: Incoming */}
          <div className="demo-pane incoming-pane">
            <div className="pane-header">
              <span className="pane-tag">Pane 01</span>
              <h3>Incoming Request</h3>
            </div>

            <div className="incoming-card">
              <div className="incoming-card-meta">
                <span className="channel-badge">{currentScenario.incoming.channel}</span>
                <span className="text-[13px] text-[var(--muted)]">{currentScenario.incoming.timestamp}</span>
              </div>
              <p className="incoming-sender">{currentScenario.incoming.sender}</p>
              <h4 className="incoming-title">{currentScenario.incoming.title}</h4>
              <p className="incoming-body">{currentScenario.incoming.content}</p>

              {currentScenario.incoming.meta && (
                <div className="incoming-chips">
                  {currentScenario.incoming.meta.map((m) => (
                    <span key={m.label} className="meta-chip">
                      <strong>{m.label}:</strong> {m.value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* PANE 2: What Arfa Did */}
          <div className="demo-pane steps-pane">
            <div className="pane-header">
              <span className="pane-tag">Pane 02</span>
              <h3>What Arfa Did</h3>
            </div>

            <div className="steps-timeline" role="list">
              {currentScenario.steps.map((step, idx) => {
                const isDone = completedSteps > idx
                const isCurrent = completedSteps === idx + 1
                return (
                  <div
                    key={step.id}
                    role="listitem"
                    className={`step-item ${isDone ? "step-done" : ""} ${isCurrent ? "step-active" : ""}`}
                  >
                    <div className="step-indicator">
                      {isDone ? (
                        <Check size={14} strokeWidth={3} className="text-white" />
                      ) : (
                        <span className="step-number">{idx + 1}</span>
                      )}
                    </div>
                    <div className="step-content">
                      <div className="flex items-center gap-2">
                        <h4 className="step-name">{step.name}</h4>
                        {isDone && <span className="step-pill">Complete</span>}
                      </div>
                      <p className="step-detail">{step.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* PANE 3: Structured Output */}
          <div className="demo-pane output-pane">
            <div className="pane-header">
              <span className="pane-tag">Pane 03</span>
              <h3>Output & Approvals</h3>
            </div>

            <div className="output-stack">
              {/* Extraction Card */}
              <div className="output-card extraction-card">
                <div className="output-card-title flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[var(--gold-700)]" />
                    <h4>Structured Extraction</h4>
                  </div>
                  <span
                    className={`urgency-badge ${
                      currentScenario.outputs.extraction.urgency === "Urgent"
                        ? "urgency-urgent"
                        : "urgency-normal"
                    }`}
                  >
                    {currentScenario.outputs.extraction.urgency} Urgency
                  </span>
                </div>

                <div className="field-grid">
                  <div className="field-row">
                    <span className="field-label">Intent:</span>
                    <span className="field-value font-semibold text-[var(--ink)]">
                      {currentScenario.outputs.extraction.intent}
                    </span>
                  </div>
                  {currentScenario.outputs.extraction.keyFields.map((f) => (
                    <div key={f.label} className="field-row">
                      <span className="field-label">{f.label}:</span>
                      <span className="field-value">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Draft Reply Card */}
              <div className="output-card reply-card">
                <div className="output-card-title flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-[var(--emerald-700)]" />
                    <h4>Proposed Draft Response</h4>
                  </div>
                  <span className="text-[13px] text-[var(--muted)]">Human review required</span>
                </div>

                <div className="reply-body-box">
                  <div className="text-[13px] text-[var(--muted)] mb-1 pb-1 border-b border-[var(--line)]">
                    To: {currentScenario.outputs.draftReply.recipient}
                  </div>
                  {isEditing ? (
                    <textarea
                      value={editableBody}
                      onChange={(e) => setEditableBody(e.target.value)}
                      rows={3}
                      className="edit-textarea"
                    />
                  ) : (
                    <p className="reply-text">{editableBody}</p>
                  )}
                </div>

                {/* Approve / Edit Action Buttons */}
                <div className="reply-action-row">
                  {isApproved ? (
                    <div className="approved-pill">
                      <CheckCircle2 size={16} />
                      <span>Approved by a human</span>
                    </div>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsApproved(true)}
                        className="approve-btn"
                      >
                        <Check size={15} />
                        <span>Approve response</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(!isEditing)}
                        className="edit-btn"
                      >
                        <Edit3 size={14} />
                        <span>{isEditing ? "Save edit" : "Edit draft"}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Small Task Card */}
              <div className="output-card task-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[var(--gold-700)]" />
                    <span className="text-[13px] font-semibold text-[var(--ink)]">
                      {currentScenario.outputs.task.title}
                    </span>
                  </div>
                  <span className="task-status-pill">{currentScenario.outputs.task.status}</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[var(--line)] text-[13px] text-[var(--muted)]">
                  <span>Assignee: {currentScenario.outputs.task.assignee}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {currentScenario.outputs.task.dueDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ask Arfa interactive section */}
        <div className="ask-arfa-bar">
          <div className="ask-arfa-header">
            <div className="flex items-center gap-2">
              <Bot size={18} className="text-[var(--emerald-700)]" />
              <span className="font-semibold text-[15px] text-[var(--ink)]">Ask Arfa</span>
              <span className="text-[13px] text-[var(--muted)]">— Interactive workflow preview</span>
            </div>
            <div className="suggestion-chips">
              {suggestions.map((sugg) => (
                <button
                  key={sugg}
                  type="button"
                  onClick={() => {
                    setAskQuery(sugg)
                    handleAskArfa(sugg)
                  }}
                  className="sugg-chip"
                >
                  {sugg}
                </button>
              ))}
            </div>
          </div>

          {/* Ask Response Bubble if answered */}
          {askResponse && (
            <div className="ask-response-box">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[var(--emerald-700)] text-white flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5">
                  A
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--ink)] m-0">
                  {askResponse}
                </p>
              </div>
            </div>
          )}

          {/* Input backed by /api/arfa with Send Icon (not arrow!) */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleAskArfa()
            }}
            className="ask-input-form"
          >
            <input
              type="text"
              value={askQuery}
              onChange={(e) => setAskQuery(e.target.value)}
              placeholder="Ask Arfa about connecting workflows, handling exceptions, or pilot timelines..."
              className="ask-input"
              disabled={isAsking}
            />
            <button
              type="submit"
              disabled={isAsking || !askQuery.trim()}
              className="ask-send-btn"
              aria-label="Send query to Arfa"
              title="Send query to Arfa"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DemoShowcase
