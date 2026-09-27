"use client"

import React from "react"
import Link from "next/link"
import {
  BookOpen,
  BarChart3,
  MessageCircle,
  FileCheck,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react"

const products = [
  {
    icon: BookOpen,
    badge: "Team Assistant",
    accent: "cyan",
    title: "Staff Q&A Assistant",
    tagline: "Answers employee questions in 5 seconds using your company guides.",
    points: [
      "Instant answers to company policy and SOP questions",
      "Exact document page cited for verified accuracy",
      "Eliminates repetitive manager interruptions",
    ],
    metric: "5 Secs",
    metricLabel: "Average lookup time",
  },
  {
    icon: BarChart3,
    badge: "Instant Numbers",
    accent: "amber",
    title: "Ask Your Sales Data",
    tagline: "Type questions in plain English — see clean visual charts instantly.",
    points: [
      "Ask 'Show me sales in March' — zero code or SQL needed",
      "Clear visual revenue charts and growth percentages",
      "Connects to your existing spreadsheets or sales records",
    ],
    metric: "3 Secs",
    metricLabel: "From prompt to chart",
  },
  {
    icon: MessageCircle,
    badge: "Sales & Inquiries",
    accent: "blue",
    title: "24/7 WhatsApp Receptionist",
    tagline: "Replies to customer inquiries in 20 seconds, day or night.",
    points: [
      "Answers customer inquiries 24/7 so you never lose a sale",
      "Answers common service and pricing questions accurately",
      "Books appointments straight into your Google Calendar",
    ],
    metric: "20 Secs",
    metricLabel: "Average reply time",
  },
  {
    icon: FileCheck,
    badge: "Zero Paperwork",
    accent: "indigo",
    title: "Automatic Bill & Invoice Reader",
    tagline: "Stop typing numbers from bills into spreadsheets by hand.",
    points: [
      "Reads incoming PDF bills and vendor receipts automatically",
      "Catches billing mistakes and overcharges before payment",
      "Saves verified data straight into your books",
    ],
    metric: "15+ Hrs",
    metricLabel: "Saved weekly on data entry",
  },
]

export function IndustrySolutions() {
  return (
    <section className="section-wrap products-clean-wrap" id="products">
      <div className="section-head reveal-item">
        <span className="section-kicker">READY-TO-USE BUSINESS TOOLS</span>
        <h2>
          Simple tools that save your team<br />
          <span className="accent-text">hours of busywork every week.</span>
        </h2>
        <p>
          No complex coding or software to learn. We set up practical tools that do the repetitive work for you.
        </p>
      </div>

      {/* Clean 4-Card Simple Grid */}
      <div className="products-clean-grid">
        {products.map((p, i) => {
          const Icon = p.icon
          return (
            <article
              key={p.title}
              className={`product-clean-card card-accent-${p.accent} reveal-item`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="product-card-top">
                <div className={`product-icon-badge badge-${p.accent}`}>
                  <Icon size={22} />
                </div>
                <span className={`product-pill pill-${p.accent}`}>{p.badge}</span>
              </div>

              <h3>{p.title}</h3>
              <p className="product-card-tagline">{p.tagline}</p>

              <div className="product-points-list">
                {p.points.map((pt) => (
                  <div key={pt} className="product-point-item">
                    <CheckCircle2 size={15} className={`text-${p.accent}`} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="product-card-bottom">
                <div className="product-metric-wrap">
                  <strong className={`metric-num text-glow-${p.accent}`}>{p.metric}</strong>
                  <span>{p.metricLabel}</span>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Single Clean Centered CTA */}
      <div className="products-clean-cta reveal-item">
        <Link className="btn-primary btn-shimmer" href="#contact">
          Deploy a Tool in Your Business <ArrowUpRight size={16} />
        </Link>
        <span className="cta-caption">Live in 2–4 weeks · Scoped pilot with guaranteed delivery</span>
      </div>
    </section>
  )
}
