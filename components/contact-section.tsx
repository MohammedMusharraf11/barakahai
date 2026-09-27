"use client"

import React from "react"
import {
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"

export function ContactSection() {
  return (
    <section className="contact-wrap section-wrap" id="contact">
      <div className="contact-intro reveal-item">
        <span className="section-kicker">GET IN TOUCH</span>
        <h2>
          Bring us your<br />
          <em>messiest workflow.</em>
        </h2>
        <p>
          Tell us what is slowing your team down or eating your weekend hours.
          We will review your operational setup and provide a concrete, actionable automation roadmap.
        </p>

        <div className="contact-details-card">
          <div className="contact-detail-item">
            <MapPin size={18} className="text-cyan" />
            <div>
              <span className="contact-detail-label">OFFICE LOCATION</span>
              <p className="contact-detail-val">54/1, 3rd Cross, Popular Colony, Bommanahalli, Bangalore 560068</p>
            </div>
          </div>

          <div className="contact-detail-item">
            <Phone size={18} className="text-cyan" />
            <div>
              <span className="contact-detail-label">PHONE &amp; WHATSAPP</span>
              <div className="contact-links-inline">
                <a href="tel:+919036600668">+91 90366 00668</a>
                <span className="contact-sep">·</span>
                <a href="tel:+918040906478">+91 80-40906478</a>
              </div>
            </div>
          </div>

          <div className="contact-detail-item">
            <Mail size={18} className="text-cyan" />
            <div>
              <span className="contact-detail-label">EMAIL INQUIRIES</span>
              <a href="mailto:info@barakahai.com" className="contact-detail-val">info@barakahai.com</a>
            </div>
          </div>

          <div className="contact-detail-item">
            <Globe size={18} className="text-cyan" />
            <div>
              <span className="contact-detail-label">WEBSITE</span>
              <a href="https://www.barakahai.com" target="_blank" rel="noreferrer" className="contact-detail-val">www.barakahai.com</a>
            </div>
          </div>
        </div>

        <div className="contact-guarantees">
          <div className="c-guarantee">
            <CheckCircle2 size={14} className="text-cyan" />
            <span>Zero high-pressure sales pitch</span>
          </div>
          <div className="c-guarantee">
            <CheckCircle2 size={14} className="text-cyan" />
            <span>Mutual NDA signed upfront upon request</span>
          </div>
          <div className="c-guarantee">
            <CheckCircle2 size={14} className="text-cyan" />
            <span>Custom architecture assessment included</span>
          </div>
        </div>
      </div>

      <div className="contact-interactive-col reveal-item">
        {/* Quick Cal.com Schedule Banner */}
        <div className="contact-cal-banner">
          <div className="cal-banner-left">
            <div className="cal-banner-icon">
              <Calendar size={18} className="text-cyan" />
            </div>
            <div>
              <h4>Prefer a direct conversation?</h4>
              <p>Book a 45-minute operational audit directly on our calendar.</p>
            </div>
          </div>
          <a
            href="https://cal.com/mush4rr4f-gjfryw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm btn-shimmer"
          >
            Book on Cal.com <ArrowUpRight size={14} />
          </a>
        </div>

        <form
          className="contact-form"
          action="mailto:info@barakahai.com"
          method="post"
          encType="text/plain"
        >
          <div className="form-row">
            <label>
              Your name
              <input name="name" type="text" placeholder="Sarah Jenkins" required />
            </label>
            <label>
              Work email
              <input name="email" type="email" placeholder="sarah@company.com" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Company / Website
              <input name="company" type="text" placeholder="Acme Logistics Inc." />
            </label>
            <label>
              Primary software tools you use
              <input name="stack" type="text" placeholder="e.g. WhatsApp, HubSpot, Slack, Google Sheets" />
            </label>
          </div>
          <label>
            What repetitive bottleneck would you like to automate?
            <textarea
              name="message"
              rows={4}
              placeholder="e.g. Inbound leads take 6 hours to get qualified, or we spend 15 hours every week manually cross-checking vendor invoice PDFs..."
              required
            />
          </label>
          <div className="form-submit">
            <button className="btn-primary" type="submit">
              Request Free Automation Audit <ArrowUpRight size={17} />
            </button>
            <span>Direct discussion with senior automation architects. No aggressive follow-ups.</span>
          </div>
        </form>
      </div>
    </section>
  )
}
