"use client"

import React from "react"

const integrations = [
  { name: "OpenAI", category: "LLM Core" },
  { name: "Anthropic Claude", category: "Reasoning" },
  { name: "n8n", category: "Orchestration" },
  { name: "Make.com", category: "Automations" },
  { name: "LangChain", category: "Agent Framework" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "Enterprise CRM" },
  { name: "Slack", category: "Team Comms" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Vector / Auth" },
  { name: "Stripe", category: "Payments" },
  { name: "WhatsApp API", category: "Messaging" },
  { name: "Twilio", category: "Voice / SMS" },
  { name: "Notion", category: "Knowledge Base" },
  { name: "NetSuite", category: "ERP" },
]

export function IntegrationMarquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-label-top">
        <span>SEAMLESSLY INTEGRATING WITH YOUR EXISTING TECH STACK</span>
      </div>
      <div className="marquee-track-container">
        <div className="marquee-track">
          {[...integrations, ...integrations].map((item, idx) => (
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
