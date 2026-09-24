"use client"

import React, { useState, useEffect } from "react"
import {
  Play,
  CheckCircle2,
  Clock,
  Cpu,
  ArrowRight,
  Database,
  Send,
  Zap,
  RefreshCw,
  Sliders,
  Layers,
  Sparkles,
} from "lucide-react"

interface PipelineStep {
  name: string
  detail: string
  service: string
  duration: string
  status: "pending" | "running" | "completed"
}

interface Scenario {
  id: string
  title: string
  tag: string
  trigger: string
  steps: { name: string; detail: string; service: string; duration: string }[]
  metrics: { latency: string; cost: string; accuracy: string; humanIntervention: string }
  outputSummary: string
}

const scenarios: Scenario[] = [
  {
    id: "lead-qualification",
    title: "Inbound Lead Triage & CRM Dispatch",
    tag: "Revenue Ops",
    trigger: "New Enterprise Inbound: Acme Global ($150k ARR tier)",
    steps: [
      {
        name: "Intake & Enrichment",
        detail: "Captured from webform · Clearbit & LinkedIn APIs queried · Company size: 450",
        service: "Webhook API",
        duration: "110ms",
      },
      {
        name: "Intent & Persona Scoring",
        detail: "Claude 3.5 Sonnet evaluated decision maker authority · Score: 96/100 (Tier 1 High Intent)",
        service: "AI Reasoning",
        duration: "340ms",
      },
      {
        name: "Multi-System Routing",
        detail: "Created deal in HubSpot CRM · Reserved slot on VP Sales calendar · Notified #enterprise-wins",
        service: "HubSpot & Slack",
        duration: "210ms",
      },
      {
        name: "Personalized Outreach",
        detail: "Drafted tailored contextual briefing deck & emailed lead within 45 seconds of submission",
        service: "Email Agent",
        duration: "180ms",
      },
    ],
    metrics: { latency: "840ms", cost: "$0.004", accuracy: "99.8%", humanIntervention: "0%" },
    outputSummary: "Deal created, calendar booked, and briefing sent in < 1 second.",
  },
  {
    id: "invoice-processing",
    title: "Document & Invoice Autonomous Triage",
    tag: "Finance Ops",
    trigger: "Vendor PDF uploaded: 38-page multi-line statement ($42,850)",
    steps: [
      {
        name: "OCR & Layout Analysis",
        detail: "High-resolution parsing · Table structure extraction · Tax IDs & line items vectorized",
        service: "Vision Parser",
        duration: "420ms",
      },
      {
        name: "PO 3-Way Reconciliation",
        detail: "Cross-checked line items with NetSuite purchase orders & shipping receipts",
        service: "ERP Connector",
        duration: "290ms",
      },
      {
        name: "Fraud & Duplicate Detection",
        detail: "Verified bank IBAN against vendor master data · Verified 0% duplicate probability",
        service: "Guardrail Agent",
        duration: "160ms",
      },
      {
        name: "Ledger Posting & Payment",
        detail: "Scheduled ACH batch release on due date · Auto-filed audit trail PDF in Google Drive",
        service: "Stripe & NetSuite",
        duration: "220ms",
      },
    ],
    metrics: { latency: "1,090ms", cost: "$0.009", accuracy: "99.9%", humanIntervention: "0%" },
    outputSummary: "Reconciled with ERP, fraud-checked, and scheduled for payment without manual entry.",
  },
  {
    id: "support-concierge",
    title: "24/7 WhatsApp & Omnichannel Concierge",
    tag: "Support & Retention",
    trigger: "WhatsApp query: 'Need to reschedule international booking #B7894 & add extra baggage'",
    steps: [
      {
        name: "Natural Language Understanding",
        detail: "Detected language (English/Arabic) · Extracted booking ref #B7894 · Authenticated phone number",
        service: "Voice/NLP Agent",
        duration: "95ms",
      },
      {
        name: "Policy & Knowledge Retrieval",
        detail: "Queried internal vector database for airline rescheduling fee waivers and seat inventory",
        service: "Hybrid RAG",
        duration: "180ms",
      },
      {
        name: "API Action Execution",
        detail: "Modified flight segment in reservation engine · Processed payment link for baggage ($45)",
        service: "Ticketing API",
        duration: "310ms",
      },
      {
        name: "Instant Customer Confirmation",
        detail: "Dispatched new boarding pass PDF & WhatsApp confirmation message in fluent Arabic & English",
        service: "WhatsApp Business API",
        duration: "140ms",
      },
    ],
    metrics: { latency: "725ms", cost: "$0.003", accuracy: "99.6%", humanIntervention: "0%" },
    outputSummary: "Reservation updated and confirmed on WhatsApp in 725ms without holding on support queues.",
  },
]

export function AgencyAgentRunner() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("lead-qualification")
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(3) // all completed initially
  const [isSimulating, setIsSimulating] = useState<boolean>(false)

  const scenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  const runSimulation = () => {
    setIsSimulating(true)
    setCurrentStepIndex(-1)

    let step = 0
    const interval = setInterval(() => {
      setCurrentStepIndex(step)
      step++
      if (step >= scenario.steps.length) {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 600)
  }

  // Auto-switch tabs gently every 12s if user is just watching
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isSimulating) {
        setActiveScenarioId((prev) => {
          const idx = scenarios.findIndex((s) => s.id === prev)
          return scenarios[(idx + 1) % scenarios.length].id
        })
      }
    }, 12000)
    return () => clearInterval(timer)
  }, [isSimulating])

  return (
    <div className="agent-runner-container">
      {/* Console Topbar */}
      <div className="runner-header">
        <div className="runner-left-status">
          <span className="live-pulse-dot" />
          <span className="runner-engine-title">BARAKAH ORCHESTRATION ENGINE</span>
          <span className="runner-mode-badge">PRODUCTION v2.4</span>
        </div>

        <div className="runner-actions">
          <button
            type="button"
            className="runner-sim-btn"
            onClick={runSimulation}
            disabled={isSimulating}
          >
            <RefreshCw size={13} className={isSimulating ? "animate-spin" : ""} />
            {isSimulating ? "Simulating Execution..." : "Replay Execution"}
          </button>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="scenario-tabs">
        {scenarios.map((sc) => {
          const isActive = sc.id === activeScenarioId
          return (
            <button
              key={sc.id}
              type="button"
              className={`scenario-tab-btn ${isActive ? "active" : ""}`}
              onClick={() => {
                setActiveScenarioId(sc.id)
                setCurrentStepIndex(3)
              }}
            >
              <span className="scenario-tag-pill">{sc.tag}</span>
              <span className="scenario-tab-title">{sc.title}</span>
            </button>
          )
        })}
      </div>

      {/* Runner Body */}
      <div className="runner-body">
        {/* Trigger Header */}
        <div className="runner-trigger-banner">
          <div className="trigger-badge">
            <Zap size={14} className="text-emerald-400" />
            <span>EVENT TRIGGER</span>
          </div>
          <p className="trigger-text">{scenario.trigger}</p>
        </div>

        {/* Steps Pipeline */}
        <div className="pipeline-steps-grid">
          {scenario.steps.map((st, i) => {
            const isDone = currentStepIndex >= i
            const isRunning = currentStepIndex === i && isSimulating

            return (
              <div
                key={st.name}
                className={`pipeline-step-card ${isDone ? "is-done" : ""} ${
                  isRunning ? "is-running" : ""
                }`}
              >
                <div className="step-card-header">
                  <div className="step-num-badge">
                    {isDone ? (
                      <CheckCircle2 size={14} className="text-emerald-400" />
                    ) : (
                      <span>0{i + 1}</span>
                    )}
                  </div>
                  <span className="step-service-tag">{st.service}</span>
                  <span className="step-duration">{st.duration}</span>
                </div>

                <h4 className="step-name">{st.name}</h4>
                <p className="step-detail">{st.detail}</p>

                <div className="step-status-bar">
                  <div className="status-progress-line" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Console Execution Footer */}
        <div className="runner-metrics-bar">
          <div className="runner-metrics-grid">
            <div className="metric-item">
              <span className="metric-label">Execution Latency</span>
              <span className="metric-val text-emerald-400">{scenario.metrics.latency}</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Inference Cost</span>
              <span className="metric-val">{scenario.metrics.cost}</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Accuracy Rate</span>
              <span className="metric-val text-emerald-400">{scenario.metrics.accuracy}</span>
            </div>
            <div className="metric-item">
              <span className="metric-label">Human Escalation</span>
              <span className="metric-val">{scenario.metrics.humanIntervention}</span>
            </div>
          </div>

          <div className="runner-summary-box">
            <Sparkles size={14} className="text-amber-400 flex-shrink-0" />
            <span>{scenario.outputSummary}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
