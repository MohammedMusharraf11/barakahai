"use client"

import React from "react"

const integrations = [
  { name: "WhatsApp", category: "Customer Messaging" },
  { name: "Slack", category: "Team Communications" },
  { name: "HubSpot", category: "CRM & Sales Pipeline" },
  { name: "Stripe", category: "Billing & Invoicing" },
  { name: "Google Workspace", category: "Docs, Sheets & Gmail" },
]

export function IntegrationMarquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-label-top">
        <span>CONNECTS SEAMLESSLY WITH THE TOOLS YOU ALREADY USE</span>
      </div>
      <div className="marquee-track-container">
        <div className="marquee-track">
          {[...integrations, ...integrations, ...integrations, ...integrations].map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="marquee-chip">
              <span className="marquee-dot" />
              <span className="marquee-name">{item.name}</span>
              <span className="marquee-cat">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
