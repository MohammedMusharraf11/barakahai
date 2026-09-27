"use client"

import React from "react"
import { Star, Quote, CheckCircle2 } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Managing Partner",
    company: "Vance Commercial Realty",
    industry: "Commercial Real Estate (18 Brokers)",
    metric: "82% faster viewing bookings",
    quote:
      "Our brokers used to lose weekend leads because inquiry response times were 8 to 12 hours. BarakahAI’s WhatsApp assistant now responds in 20 seconds, answers property questions, and books walkthroughs directly into our calendars. It paid for itself in the first two weeks.",
  },
  {
    name: "Elena Rostova",
    role: "Head of Operations",
    company: "Apex Wholesale & Supply",
    industry: "Distribution & Logistics",
    metric: "18+ hours saved weekly",
    quote:
      "We process over 400 vendor invoices every month. What used to eat two full-time accounting days every Monday now runs automatically in under five minutes. Not a single duplicate payment or price mismatch has slipped through since launch.",
  },
  {
    name: "David Chen",
    role: "Founder & CEO",
    company: "Metro Climate Systems",
    industry: "Field Services & HVAC (24 Technicians)",
    metric: "$42k+ captured revenue",
    quote:
      "Capturing emergency repair jobs after 6 PM used to mean paying an expensive answering service that just took down names while customers called competitors. The new booking agent diagnoses the emergency and dispatches our on-call tech directly.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-wrap testimonials-section-wrap" id="testimonials">
      <div className="section-head reveal-item">
        <span className="section-kicker">PROVEN OPERATIONAL LEVERAGE</span>
        <h2>
          Built for owners who demand<br />
          <span className="accent-text">measurable bottom-line ROI.</span>
        </h2>
        <p>
          Here is what happens when high-friction administrative bottlenecks get replaced with reliable, custom autonomous workflows.
        </p>
        <div className="rating-pill-trust">
          <div className="stars-row">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span><strong>4.9 / 5</strong> average rating across 24+ production deployments</span>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <article
            key={t.name}
            className="testimonial-card reveal-item"
            style={{ transitionDelay: `${idx * 90}ms` }}
          >
            <div className="testimonial-top">
              <Quote size={24} className="quote-icon" />
              <span className="testimonial-metric-pill">
                <CheckCircle2 size={13} className="text-cyan-400" /> {t.metric}
              </span>
            </div>

            <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>

            <div className="testimonial-author">
              <div className="author-avatar">
                <span>{t.name.split(" ").map((n) => n[0]).join("")}</span>
              </div>
              <div className="author-details">
                <strong>{t.name}</strong>
                <span>{t.role} · {t.company}</span>
                <small className="author-industry">{t.industry}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
