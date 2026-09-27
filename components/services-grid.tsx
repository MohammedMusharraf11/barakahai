"use client"

import React from "react"
import {
  Cpu,
  Bot,
  MessageCircle,
  PhoneCall,
  Mic,
  Video,
  FileText,
  BarChart3,
  ArrowRight,
} from "lucide-react"

export const servicesData = [
  {
    icon: Cpu,
    title: "Autonomous Task Agents",
    text: "Put repetitive multi-step computer tasks on autopilot — syncing customer info, updating spreadsheets, and routing files without manual babysitting.",
    accent: "cyan",
  },
  {
    icon: Bot,
    title: "24/7 Website Chatbots",
    text: "Answer customer inquiries the second they land on your site, answer common questions accurately, and collect qualified leads while you sleep.",
    accent: "sky",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    text: "Turn incoming WhatsApp messages into booked appointments, answered customer questions, and captured orders automatically.",
    accent: "blue",
  },
  {
    icon: PhoneCall,
    title: "AI Phone Calling Agents",
    text: "Friendly, natural-sounding voice calls to confirm appointments, follow up with new inquiries, and send reminders so no customer is lost.",
    accent: "amber",
  },
  {
    icon: Mic,
    title: "Front-Desk Voice AI",
    text: "Voice assistants that answer front-desk calls, handle routine customer questions, and smoothly transfer high-priority calls to your staff.",
    accent: "purple",
  },
  {
    icon: Video,
    title: "Automated Video Creation",
    text: "Generate customer walkthroughs, training clips, and marketing videos in minutes without hiring an expensive video production team.",
    accent: "rose",
  },
  {
    icon: FileText,
    title: "Document & Invoice AI",
    text: "Stop typing invoice numbers by hand. Automatically read PDF bills, vendor receipts, and contracts, and save them straight to your books.",
    accent: "blue",
  },
  {
    icon: BarChart3,
    title: "Ask-Your-Data Analytics",
    text: "Ask simple questions in plain English like 'What were our sales this month?' and get clear visual charts without needing to write any code.",
    accent: "gold",
  },
]

export function ServicesSection() {
  return (
    <section className="services-growth-wrap section-wrap" id="services">
      <div className="section-head reveal-item">
        <span className="services-kicker-cyan">WHAT WE BUILD FOR YOU</span>
        <h2>AI Solutions Built for Real Business Work</h2>
        <p>
          No complicated technology setups. We install practical automation systems that save your team
          10 to 20+ hours of manual computer work every week.
        </p>
      </div>

      <div className="services-growth-grid">
        {servicesData.map(({ icon: Icon, title, text, accent }, i) => (
          <article
            className={`service-growth-card accent-${accent} reveal-item`}
            key={title}
            style={{ transitionDelay: `${(i % 4) * 70}ms` }}
          >
            <div className="service-growth-card-glow" />
            <div className={`service-growth-icon-box box-${accent}`}>
              <Icon size={26} className={`service-lucide-icon icon-${accent}`} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
