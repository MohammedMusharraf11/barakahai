import React from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Bot,
  Brain,
  ChevronDown,
  FileText,
  Layers,
  Mail,
  MessageCircle,
  Workflow,
  Zap,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { ScrollRevealProvider } from "@/components/scroll-reveal"
import { IntegrationMarquee } from "@/components/integration-marquee"
import { AutomationCalculator } from "@/components/automation-calculator"
import { BeforeAfter } from "@/components/before-after"
import { ProcessRoadmap } from "@/components/process-roadmap"
import { AnimatedCounter } from "@/components/counter"

const services = [
  {
    icon: Bot,
    kicker: "AUTONOMOUS REASONING",
    title: "Autonomous AI Agents",
    metric: "Save 30+ hrs / wk",
    text: "Multi-agent systems that autonomously triage inbound requests, reason through complex decisions, and execute multi-step business actions across your SaaS tools.",
    tags: ["Tool Calling", "Loop Reasoning", "Human-in-the-Loop"],
    accentClass: "scard-emerald",
    featured: true,
  },
  {
    icon: MessageCircle,
    kicker: "24/7 OMNICHANNEL",
    title: "Conversational & Voice Concierge",
    metric: "< 600ms latency",
    text: "Bespoke WhatsApp, web, and voice assistants tuned on your operational data that qualify leads, resolve customer support, and book meetings without robotic scripts.",
    tags: ["WhatsApp Business API", "Voice AI", "Multi-lingual RAG"],
    accentClass: "scard-gold",
    featured: false,
  },
  {
    icon: Workflow,
    kicker: "OPERATIONAL THROUGHPUT",
    title: "End-to-End Workflow Automation",
    metric: "10x throughput",
    text: "Connecting your CRM, ERP, spreadsheets, and databases into one intelligent pipeline. Eliminating manual data re-entry, status updates, and copy-paste errors.",
    tags: ["n8n & Make Orchestration", "Bi-directional Sync", "Auto-Error Handling"],
    accentClass: "scard-orange",
    featured: false,
  },
  {
    icon: FileText,
    kicker: "VISION & OCR PARSER",
    title: "Intelligent Document Processing",
    metric: "99.8% extraction accuracy",
    text: "Turn unformatted PDFs, invoices, vendor contracts, and claims into structured, verified database records in seconds — automatically reconciled against purchase orders.",
    tags: ["Multi-modal OCR", "3-Way Reconciliation", "Fraud Checks"],
    accentClass: "scard-emerald",
    featured: false,
  },
  {
    icon: Brain,
    kicker: "ENTERPRISE KNOWLEDGE",
    title: "Custom LLM & RAG Architectures",
    metric: "Zero-retention privacy",
    text: "Domain-specific Retrieval Augmented Generation architectures that let your team search, synthesize, and query proprietary operational knowledge safely.",
    tags: ["Hybrid Vector Search", "Role-based Access", "Strict Guardrails"],
    accentClass: "scard-gold",
    featured: false,
  },
  {
    icon: Layers,
    kicker: "ZERO DOWNTIME BRIDGES",
    title: "Enterprise System Integration",
    metric: "Zero workflow downtime",
    text: "Custom API microservices bridging legacy ERPs (NetSuite, SAP) with modern cloud platforms (HubSpot, Salesforce, Slack) without replacing your existing toolchain.",
    tags: ["Legacy System Bridges", "Webhook Webnets", "Audit Logging"],
    accentClass: "scard-orange",
    featured: false,
  },
]

const faqs = [
  [
    "What kind of businesses does BarakahAI work with?",
    "We specialize in high-growth B2B services, real estate, e-commerce, logistics, and agency teams that have 5 to 100+ team members bogged down by repetitive administrative workflows, lead qualification, or document reconciliation.",
  ],
  [
    "How fast can we see a working automation in production?",
    "Our pilots move quickly: you receive an operational teardown in Week 1, a live interactive prototype by Week 2, and production deployment within 2 to 4 weeks. No six-month consulting roadmaps.",
  ],
  [
    "Do we need to replace our current software tools?",
    "No. We build directly on top of your existing software stack — HubSpot, Salesforce, Slack, Notion, PostgreSQL, NetSuite, Google Workspace, and WhatsApp. We connect and orchestrate, rather than disrupt.",
  ],
  [
    "How do you prevent AI hallucinations or bad autonomous decisions?",
    "We engineer deterministic guardrails: structured JSON schema validation, multi-step verification checks, strict RAG context boundaries, and human-in-the-loop approval thresholds for high-stakes actions (e.g. issuing refunds or sending contracts).",
  ],
  [
    "How does your pricing model work?",
    "We operate on fixed-scope pilot milestones with clear deliverable commitments, followed by transparent monthly optimization retainers. You know exactly what you are investing and what ROI to expect before writing a single check.",
  ],
  [
    "What is your data security and privacy posture?",
    "Your proprietary data is never used to train public models. We implement zero-retention enterprise API endpoints, encrypted secrets management, and role-based permissions adhering to SOC-2 compliance standards.",
  ],
]

export default function Page() {
  return (
    <ScrollRevealProvider>
      <main className="dark-site">

        {/* ───── STICKY HEADER ───── */}
        <header className="dsite-header site-header-animated">
          <Link className="wordmark" href="#top" aria-label="BarakahAI home">
            <Logo variant="dark" height={42} />
          </Link>
          <nav className="dsite-nav" aria-label="Primary navigation">
            <Link href="#services">Capabilities</Link>
            <Link href="#process">Deployment Blueprint</Link>
            <Link href="#calculator">ROI Calculator</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          <Link className="btn-primary btn-sm btn-shimmer" href="#contact">
            Book Strategy Call <ArrowUpRight size={14} />
          </Link>
        </header>

        {/* ───── HERO ───── */}
        <section className="hero-wrap section-wrap" id="top">
          <div className="orb orb-a" aria-hidden="true" />
          <div className="orb orb-b" aria-hidden="true" />
          <div className="orb orb-c" aria-hidden="true" />
          <div className="grid-bg" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-kicker-pill hero-load-kicker hero-load-item">
              <span className="kicker-pulse" />
              <span>AI AUTOMATION & AUTONOMOUS SYSTEMS AGENCY</span>
            </div>

            <h1 className="hero-load-title hero-load-item">
              Your business,<br />
              running on <em className="aurora-text">autopilot.</em>
            </h1>

            <p className="hero-sub hero-load-sub hero-load-item">
              BarakahAI designs, builds, and deploys production-grade AI agents and autonomous workflows
              that eliminate manual busywork, slash response times, and scale your operations 24/7.
            </p>

            <div className="hero-ctas hero-load-ctas hero-load-item">
              <Link className="btn-primary btn-shimmer" href="#contact">
                Book a free strategy call <ArrowUpRight size={16} />
              </Link>
              <Link className="btn-ghost" href="#services">
                Explore Capabilities <ArrowRight size={16} />
              </Link>
            </div>

            <div className="trust-row hero-load-trust hero-load-item">
              {[
                "Enterprise Guardrails",
                "Human-in-the-Loop Safeguards",
                "Live in 2–4 Weeks",
                "Zero Workflow Downtime",
              ].map((t, idx) => (
                <span
                  key={t}
                  className="trust-chip"
                  style={{ animationDelay: `${0.62 + idx * 0.08}s` }}
                >
                  <CheckCircle2 size={13} /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Core Agency Impact Stats */}
          <div className="stats-row hero-load-stats hero-load-item">
            <div className="stats-laser-line" aria-hidden="true" />
            {[
              { target: 10, suffix: "x", l: "Faster Workflow Execution", decimals: 0 },
              { target: 85, suffix: "%", l: "Manual Cost Reduction", decimals: 0 },
              { target: 24, suffix: "/7", l: "Autonomous Uptime", decimals: 0 },
              { target: 99.8, suffix: "%", l: "Extraction Precision", decimals: 1 },
            ].map(({ target, suffix, l, decimals }, idx) => (
              <div
                key={l}
                className="stat-box stat-box-load"
                style={{ animationDelay: `${0.82 + idx * 0.08}s` }}
              >
                <strong className="stat-metric-num">
                  <AnimatedCounter
                    target={target}
                    suffix={suffix}
                    decimals={decimals}
                    delay={350 + idx * 100}
                    duration={1600}
                  />
                </strong>
                <span className="stat-label">{l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ───── INTEGRATION MARQUEE ───── */}
        <section className="reveal-item">
          <IntegrationMarquee />
        </section>

        {/* ───── BEFORE / AFTER TRANSFORMATION ───── */}
        <section className="section-wrap ba-section-wrap reveal-item">
          <div className="section-head reveal-item">
            <span className="section-kicker">THE AGENCY ADVANTAGE</span>
            <h2>
              Stop losing team hours to<br />
              <span className="accent-text">repetitive operational drag.</span>
            </h2>
            <p>
              Most teams are trapped in copy-pasting between tabs, chasing status updates, and manually triaging data.
              Here is what happens when BarakahAI automates the heavy lifting.
            </p>
          </div>

          <BeforeAfter />
        </section>

        {/* ───── SERVICES ───── */}
        <section className="services-wrap section-wrap" id="services">
          <div className="section-head reveal-item">
            <span className="section-kicker">CORE CAPABILITIES</span>
            <h2>
              Practical intelligence,<br />
              <span className="accent-text">engineered for your world.</span>
            </h2>
            <p>
              From autonomous reasoning agents to 24/7 WhatsApp customer concierges —
              we build high-performance systems that deliver measurable bottom-line ROI.
            </p>
            <Link className="text-link" href="#contact">
              Discuss your company&apos;s bottlenecks <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, kicker, title, metric, text, tags, accentClass, featured }, i) => (
              <article
                className={`service-card ${accentClass} ${featured ? "is-featured" : ""} reveal-item`}
                key={title}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="card-glow-edge" />
                <div className="card-top-row">
                  <div className="card-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <div className="card-metric-pill">
                    <span className="metric-glow-dot" />
                    <span>{metric}</span>
                  </div>
                </div>

                <span className="card-kicker">{kicker}</span>
                <h3>{title}</h3>
                <p>{text}</p>

                <div className="card-tags-list">
                  {tags.map((tg) => (
                    <span key={tg} className="card-tag-item">
                      <span className="tag-hash">#</span>{tg}
                    </span>
                  ))}
                </div>

                <div className="card-footer-link">
                  <Link href="#contact" className="card-link">
                    <span>Explore architecture</span>
                    <ArrowUpRight size={14} className="card-link-icon" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="also-build reveal-item delay-150">
            <span>Specialized Custom Builds</span>
            <p>Voice AI Agents · Multi-modal Vision Parsing · Self-Healing Scrapers · Real-time Telegram/WhatsApp B2B Portals</p>
          </div>
        </section>

        {/* ───── DEPLOYMENT BLUEPRINT (INTERACTIVE SCROLL-UP LIQUID SPINE ROADMAP) ───── */}
        <ProcessRoadmap />

        {/* ───── INTERACTIVE ROI CALCULATOR ───── */}
        <section className="calculator-section-wrap section-wrap reveal-item">
          <AutomationCalculator />
        </section>

        {/* ───── PROOF / COMMITMENT ───── */}
        <section className="proof-wrap">
          <div className="section-wrap">
            <div className="proof-card reveal-item">
              <div className="proof-glow" aria-hidden="true" />
              <div className="proof-kicker">
                <Shield size={14} className="text-emerald-400" />
                <span>OUR AGENCY COMMITMENT</span>
              </div>
              <h2>
                We build our<br />
                <em>proof in the open.</em>
              </h2>
              <p>
                BarakahAI stands on transparent execution. Rather than inflated marketing claims,
                we design a scoped, low-risk pilot in your environment and earn the right to automate your core business.
              </p>
              <div className="proof-ctas">
                <Link className="btn-primary" href="#contact">
                  Explore a pilot with us <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="proof-chips">
                <span><Shield size={13} /> Strict zero-data retention</span>
                <span><Clock size={13} /> Staging prototype in 7 days</span>
                <span><Users size={13} /> Direct access to senior AI engineers</span>
              </div>
            </div>
          </div>
        </section>

        {/* ───── FAQ ───── */}
        <section className="faq-wrap section-wrap" id="faq">
          <div className="section-head reveal-item">
            <span className="section-kicker">COMMON QUESTIONS</span>
            <h2>
              Everything you need to know<br />
              <span className="accent-text">before we begin.</span>
            </h2>
            <p>Clear answers to how we work, how we protect your data, and how fast we ship.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], idx) => (
              <details key={q} className="reveal-item" style={{ transitionDelay: `${idx * 60}ms` }}>
                <summary>
                  <span>{q}</span>
                  <ChevronDown size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ───── CONTACT ───── */}
        <section className="contact-wrap section-wrap" id="contact">
          <div className="contact-intro reveal-item">
            <span className="section-kicker">GET IN TOUCH</span>
            <h2>
              Bring us your<br />
              <em>messiest workflow.</em>
            </h2>
            <p>
              Tell us what is slowing your team down or eating your weekend hours.
              We will review your operational stack and provide a concrete, actionable automation roadmap.
            </p>
            <div className="contact-info">
              <a href="mailto:hello@barakahai.com">
                <Mail size={16} /> hello@barakahai.com
              </a>
              <span>Usually reply within 4 hours during business days</span>
            </div>

            <div className="contact-guarantees">
              <div className="c-guarantee">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>No high-pressure sales pitch</span>
              </div>
              <div className="c-guarantee">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>NDA signed upfront upon request</span>
              </div>
              <div className="c-guarantee">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Custom architecture assessment included</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form reveal-item"
            action="mailto:hello@barakahai.com"
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
                Primary software stack
                <input name="stack" type="text" placeholder="e.g. HubSpot, Slack, PostgreSQL" />
              </label>
            </div>
            <label>
              What repetitive bottleneck would you like to automate?
              <textarea
                name="message"
                rows={4}
                placeholder="e.g. Inbound leads take 6 hours to get qualified, or we spend 15 hours/week cross-checking vendor invoice PDFs with NetSuite..."
                required
              />
            </label>
            <div className="form-submit">
              <button className="btn-primary" type="submit">
                Request Free Automation Audit <ArrowUpRight size={17} />
              </button>
              <span>Practical discussion with senior engineers. No aggressive follow-ups.</span>
            </div>
          </form>
        </section>

        {/* ───── FOOTER ───── */}
        <footer className="site-footer reveal-item">
          <div className="footer-inner">
            <div className="footer-brand">
              <Link className="wordmark" href="#top" aria-label="BarakahAI home">
                <Logo variant="dark" />
              </Link>
              <p>
                Production AI systems & autonomous workflows built with intention.<br />
                Eliminating manual friction so high-growth teams can scale with leverage.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <span>Navigation</span>
                <Link href="#services">Capabilities</Link>
                <Link href="#process">Deployment Blueprint</Link>
                <Link href="#calculator">ROI Calculator</Link>
                <Link href="#faq">FAQ</Link>
              </div>
              <div>
                <span>Engage</span>
                <Link href="#contact">Book Consultation</Link>
                <a href="mailto:hello@barakahai.com">hello@barakahai.com</a>
                <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</Link>
                <Link href="https://twitter.com" target="_blank" rel="noreferrer">X / Twitter</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <small>© 2026 BarakahAI. All rights reserved.</small>
            <span>Production-grade AI automation architectures.</span>
            <div>
              <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</Link>
            </div>
          </div>
        </footer>

      </main>
    </ScrollRevealProvider>
  )
}
