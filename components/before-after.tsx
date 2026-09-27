"use client"

import React from "react"
import { XCircle, CheckCircle2 } from "lucide-react"

const comparisons = [
  {
    category: "Customer Inquiry Replies",
    before: "Inquiries wait 4 to 12 hours for a reply — customers get impatient and buy from a competitor instead.",
    after: "Instant 20-second reply on WhatsApp or website that answers their question and books a call.",
  },
  {
    category: "Invoices & Receipts",
    before: "Staff spends hours reading PDF bills, typing numbers into spreadsheets, and fixing costly typos.",
    after: "Bills are read automatically, verified against orders, and saved to your accounts without manual typing.",
  },
  {
    category: "Internal Team Questions",
    before: "Employees repeatedly interrupt managers or spend 45 minutes digging through messy folders for policies.",
    after: "Staff asks the company assistant in plain English and gets the exact verified answer in 5 seconds.",
  },
  {
    category: "Spreadsheet Copy-Pasting",
    before: "Customer details scattered across WhatsApp, emails, and notes — hours wasted copying data between tabs.",
    after: "Everything syncs automatically. When a job is done or form is filled, your spreadsheets update on autopilot.",
  },
]

export function BeforeAfter() {
  return (
    <div className="before-after-container">
      <div className="before-after-grid">
        {/* The Old Way */}
        <div className="ba-column before-col">
          <div className="ba-header">
            <span className="ba-badge before-badge">Manual Business Work</span>
            <h3>The Daily Grind</h3>
            <p>How teams lose time, burn hours, and miss customer deals</p>
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
            <span className="ba-badge after-badge">Automated Systems</span>
            <h3>The BarakahAI Advantage</h3>
            <p>Practical AI setups that run quietly in the background</p>
          </div>
          <div className="ba-items-list">
            {comparisons.map((c) => (
              <div key={c.category} className="ba-item after-item">
                <div className="ba-icon-col">
                  <CheckCircle2 size={18} className="text-cyan-400" />
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
