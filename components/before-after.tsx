"use client"

import React from "react"
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react"

const comparisons = [
  {
    category: "Lead Response Time",
    before: "4 to 12 hours waiting for manual SDR triage — 40% of leads drop off",
    after: "Instant sub-second qualification, CRM enrichment, and automated booking",
  },
  {
    category: "Document Processing",
    before: "Manual PDF reading, copy-pasting line items into spreadsheets, high error rate",
    after: "Autonomous OCR extraction, 3-way PO reconciliation, direct ERP sync",
  },
  {
    category: "Customer Queries",
    before: "Tier-1 agents burned out answering repetitive status & refund questions",
    after: "Multi-turn WhatsApp & Web AI concierge resolving 80% without human touch",
  },
  {
    category: "Tool Sprawl & Data Silos",
    before: "10 disconnected SaaS tools, manual data imports, fragmented customer records",
    after: "Unified agent orchestrator syncing CRM, databases, ERP, and Slack seamlessly",
  },
]

export function BeforeAfter() {
  return (
    <div className="before-after-container">
      <div className="before-after-grid">
        {/* The Old Way */}
        <div className="ba-column before-col">
          <div className="ba-header">
            <span className="ba-badge before-badge">Manual Operations</span>
            <h3>The Old Grind</h3>
            <p>How high-friction teams burn time and lose deals</p>
          </div>
          <div className="ba-items-list">
            {comparisons.map((c) => (
              <div key={c.category} className="ba-item before-item">
                <div className="ba-icon-col">
                  <XCircle size={18} className="text-red-400" />
                </div>
                <div className="ba-text-col">
                  <strong>{c.category}</strong>
                  <p>{c.before}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The BarakahAI Way */}
        <div className="ba-column after-col">
          <div className="ba-header">
            <span className="ba-badge after-badge">Autonomous Systems</span>
            <h3>The BarakahAI Engine</h3>
            <p>Production-grade AI architectures that run quietly in the background</p>
          </div>
          <div className="ba-items-list">
            {comparisons.map((c) => (
              <div key={c.category} className="ba-item after-item">
                <div className="ba-icon-col">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                </div>
                <div className="ba-text-col">
                  <strong>{c.category}</strong>
                  <p>{c.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
