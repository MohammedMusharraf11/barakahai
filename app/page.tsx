import React from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  Shield,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { ScrollRevealProvider } from "@/components/scroll-reveal"
import { IntegrationMarquee } from "@/components/integration-marquee"
import { BeforeAfter } from "@/components/before-after"
import { ProcessRoadmap } from "@/components/process-roadmap"
import { ServicesSection } from "@/components/services-grid"
import { IndustrySolutions } from "@/components/industry-solutions"
import { TestimonialsSection } from "@/components/testimonials"
import { ChatWidget } from "@/components/chat-widget"

const faqs = [
  [
    "What kind of businesses does BarakahAI work with?",
    "We work with growing service businesses, agencies, contractors, clinics, real estate firms, and distributors (5 to 100+ team members) bogged down by repetitive daily computer busywork, delayed customer replies, or messy paperwork.",
  ],
  [
    "How fast can we see a working automation in our business?",
    "Fast: we audit your biggest bottleneck in Week 1, deliver a working prototype in your environment by Week 2, and complete full setup within 2 to 4 weeks. No six-month consulting delays.",
  ],
  [
    "Do we need to replace our current software or buy new tools?",
    "No. We connect directly into the tools your team already uses every day — WhatsApp, Gmail, Google Sheets, Excel, Slack, and your current CRM or accounting software. You don't have to learn a complicated new platform.",
  ],
  [
    "What happens if the AI makes a mistake?",
    "We build human safety checkpoints into every sensitive action. For example, before an invoice is paid or an unusual refund is sent, someone on your team reviews and approves it with one click. The AI handles the tedious preparation work, while you stay in full control.",
  ],
  [
    "How does your pricing work?",
    "We provide clear, fixed-price setup milestones with guaranteed deliverable commitments, followed by simple monthly maintenance and support. You know the exact cost and expected time savings before starting.",
  ],
  [
    "Is our company and customer data kept private?",
    "Yes, 100%. Your business data is strictly yours and encrypted. We never use your customer lists, emails, or internal files to train public AI models.",
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
            <Link href="#comparison">The Difference</Link>
            <Link href="#services">Services</Link>
            <Link href="#products">Products</Link>
            <Link href="#testimonials">Reviews</Link>
            <Link href="#process">Blueprint</Link>
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
              <span>PRACTICAL AI AUTOMATION FOR GROWING BUSINESSES</span>
            </div>

            <h1 className="hero-load-title hero-load-item">
              Your business,<br />
              running on <em className="aurora-text">autopilot.</em>
            </h1>

            <p className="hero-sub hero-load-sub hero-load-item">
              BarakahAI designs, builds, and deploys practical AI systems and automated workflows
              that eliminate manual busywork, answer customers 24/7, and free your team to focus on growth.
            </p>

            <div className="hero-ctas hero-load-ctas hero-load-item">
              <Link className="btn-primary btn-shimmer" href="#contact">
                Book a free strategy call <ArrowUpRight size={16} />
              </Link>
              <Link className="btn-ghost" href="#services">
                Explore Capabilities <ArrowRight size={16} />
              </Link>
            </div>

            {/* Focused Delivery Badges */}
            <div className="trust-row hero-load-trust hero-load-item">
              <span className="trust-chip" style={{ animationDelay: "0.55s" }}>
                <CheckCircle2 size={13} className="text-cyan" /> Live in 2–4 Weeks
              </span>
              <span className="trust-chip" style={{ animationDelay: "0.65s" }}>
                <CheckCircle2 size={13} className="text-amber" /> 15+ Hours Saved / Wk
              </span>
              <span className="trust-chip" style={{ animationDelay: "0.75s" }}>
                <CheckCircle2 size={13} className="text-indigo" /> Zero New Code to Learn
              </span>
            </div>
          </div>
        </section>

        {/* ───── BEFORE / AFTER TRANSFORMATION ───── */}
        <section className="section-wrap ba-section-wrap reveal-item" id="comparison">
          <div className="section-head reveal-item">
            <span className="section-kicker">WHY AUTOMATE WITH BARAKAHAI</span>
            <h2>
              Stop losing team hours to<br />
              <span className="accent-text">repetitive daily busywork.</span>
            </h2>
            <p>
              Most teams waste 15+ hours every week copy-pasting between tabs, answering repetitive questions,
              and chasing updates. Here is what happens when BarakahAI handles the repetitive work.
            </p>
          </div>

          <BeforeAfter />
        </section>

        {/* ───── OUR SERVICES (AI Solutions Built for Growth) ───── */}
        <ServicesSection />

        {/* ───── FLAGSHIP PRODUCTS (Built for Your Industry) ───── */}
        <IndustrySolutions />

        {/* ───── TESTIMONIALS & SOCIAL PROOF ───── */}
        <TestimonialsSection />

        {/* ───── TECH LOGO MARQUEE ───── */}
        <section className="reveal-item">
          <IntegrationMarquee />
        </section>

        {/* ───── DEPLOYMENT BLUEPRINT (Process Roadmap) ───── */}
        <div id="process">
          <ProcessRoadmap />
        </div>

        {/* ───── AGENCY COMMITMENT & RISK-REVERSAL ───── */}
        <section className="proof-wrap">
          <div className="section-wrap">
            <div className="proof-card reveal-item">
              <div className="proof-glow" aria-hidden="true" />
              <div className="proof-kicker">
                <Shield size={14} className="text-cyan-400" />
                <span>OUR IRONCLAD PROMISE</span>
              </div>
              <h2>
                We build our<br />
                <em>proof in the open.</em>
              </h2>
              <p>
                BarakahAI stands on transparent execution. Rather than inflated marketing promises,
                we design a scoped, low-risk pilot in your environment and earn the right to automate your core business.
              </p>
              <div className="proof-ctas">
                <Link className="btn-primary" href="#contact">
                  Explore a pilot with us <ArrowUpRight size={16} />
                </Link>
              </div>
              <div className="proof-chips">
                <span><Shield size={13} /> Strict zero-data retention</span>
                <span><Clock size={13} /> Working prototype in 7–14 days</span>
                <span><Users size={13} /> Direct access to senior builders</span>
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

        {/* ───── CONTACT & STRATEGY CALL ROADMAP ───── */}
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

            {/* What to Expect on Call Friction Reducer */}
            <div className="call-roadmap-card">
              <h4>What to Expect on Your Free Call</h4>
              <div className="call-steps-list">
                <div className="call-step-item">
                  <span className="call-step-num">1</span>
                  <div>
                    <strong>15-Minute Operational Audit</strong>
                    <p>We map your team&apos;s single biggest manual bottleneck or spreadsheet drag.</p>
                  </div>
                </div>
                <div className="call-step-item">
                  <span className="call-step-num">2</span>
                  <div>
                    <strong>Candid Feasibility &amp; ROI Check</strong>
                    <p>We calculate honestly if custom AI makes financial sense for your volume.</p>
                  </div>
                </div>
                <div className="call-step-item">
                  <span className="call-step-num">3</span>
                  <div>
                    <strong>Custom Deployment Blueprint</strong>
                    <p>You receive an actionable workflow architecture you keep regardless.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <a href="mailto:hello@barakahai.com">
                <Mail size={16} /> hello@barakahai.com
              </a>
              <span>Usually reply within 4 hours during business days</span>
            </div>

            <div className="contact-guarantees">
              <div className="c-guarantee">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Zero high-pressure sales pitch</span>
              </div>
              <div className="c-guarantee">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Mutual NDA signed upfront upon request</span>
              </div>
              <div className="c-guarantee">
                <CheckCircle2 size={14} className="text-cyan-400" />
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
                Eliminating manual friction so growing teams can scale with leverage.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <span>Navigation</span>
                <Link href="#comparison">The Difference</Link>
                <Link href="#services">Services</Link>
                <Link href="#products">Products</Link>
                <Link href="#testimonials">Reviews</Link>
                <Link href="#process">Deployment Blueprint</Link>
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

        {/* ───── FLOATING BOTTOM-RIGHT CHAT WIDGET ───── */}
        <ChatWidget />

      </main>
    </ScrollRevealProvider>
  )
}
