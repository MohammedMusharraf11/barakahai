import Link from "next/link"
import { ArrowUpRight, Bot, Check, ChevronDown, FileText, MessageCircle, Play, Sparkles, Workflow, Zap } from "lucide-react"

const services = [
  { icon: Bot, title: "Agentic AI", text: "Purpose-built agents that move work forward, not just answer questions." },
  { icon: MessageCircle, title: "AI chatbots & WhatsApp", text: "Helpful, on-brand conversations across the channels your customers already use." },
  { icon: Workflow, title: "Workflow automation", text: "Connect the tools, approvals, and handoffs that slow your team down." },
  { icon: FileText, title: "Intelligent documents", text: "Extract, classify, and route information from the documents your business depends on." },
]

const steps = [
  ["01", "Map the opportunity", "We find the repetitive work, customer friction, and high-value handoffs worth improving."],
  ["02", "Design a focused pilot", "You get a clear workflow, success criteria, and an implementation path before a large commitment."],
  ["03", "Build, test, and refine", "We connect the right systems, test with real scenarios, and keep humans in control."],
  ["04", "Handoff with confidence", "Your team gets documentation, ownership, and a practical next step for scaling."],
]

const faqs = [
  ["Is BarakahAI only for large companies?", "No. We scope around the workflow and opportunity, not a fixed company size. A focused pilot is often the best place to start."],
  ["Can you work with our existing tools?", "That is the goal. We design around the systems your team already uses and identify where a new connection is genuinely useful."],
  ["Will a human still be involved?", "Yes. Every useful automation needs clear boundaries, review points, and a human handoff for edge cases."],
  ["How do we get started?", "Book a consultation. We will use the conversation to understand your workflow, priorities, and what a sensible first step could be."],
]

const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/barakahai_logo-TFi7FaV9im11hODPCMVerYOgIdb3SB.png"

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? "brand-logo brand-logo-compact" : "brand-logo"} src={logoUrl} alt="BarakahAI — AI Automation Partner for Modern Businesses" />
}

function LogoMark() {
  return <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
}

export default function Page() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="#top" aria-label="BarakahAI home"><BrandLogo compact /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="#solutions">Solutions</Link><Link href="#approach">Our approach</Link><Link href="#demo">Illustrative workflow</Link><Link href="#faq">FAQ</Link>
        </nav>
        <Link className="button button-small button-dark header-cta" href="#contact">Book a consultation <ArrowUpRight size={15} /></Link>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> AI automation partner for modern businesses</p>
          <h1>Make your business <em>move</em> smarter.</h1>
          <p className="hero-lede">BarakahAI helps companies automate workflows, improve customer experiences, and increase productivity with practical, human-centred AI.</p>
          <div className="hero-actions"><Link className="button button-accent" href="#contact">Book a consultation <ArrowUpRight size={17} /></Link><Link className="text-link" href="#demo"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See an illustrative workflow</Link></div>
          <p className="microcopy">A focused conversation. A clearer next step.</p>
        </div>
        <div className="hero-visual" aria-label="Illustration of an AI workflow connecting a customer message to business actions">
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-label">BARAKAH / SYSTEM 001</div>
          <div className="visual-status"><span /> READY TO WORK</div>
          <div className="workflow-line line-a" /><div className="workflow-line line-b" /><div className="workflow-line line-c" />
          <div className="workflow-center"><LogoMark /><strong>Barakah<span>AI</span></strong><small>your intelligent layer</small></div>
          <div className="node node-top"><MessageCircle size={17} /><span>Customer message</span><b>01</b></div>
          <div className="node node-right"><Zap size={17} /><span>Smart action</span><b>02</b></div>
          <div className="node node-bottom"><Check size={17} /><span>Team notified</span><b>03</b></div>
          <div className="visual-note">Connect the dots.<br /><i>Keep the judgement.</i></div>
        </div>
      </section>

      <section className="intro section-wrap">
        <p className="eyebrow">The opportunity</p>
        <div className="intro-grid"><h2>Less busywork.<br /><span>More forward motion.</span></h2><p>Most teams do not need another disconnected tool. They need a thoughtful partner to turn repetitive work into reliable systems — without losing the human judgement that makes their business work.</p></div>
      </section>

      <section className="demo-section section-wrap" id="demo">
        <div className="section-heading"><div><p className="eyebrow">See it in context</p><h2>One conversation.<br /><span>Several useful next steps.</span></h2></div><p className="heading-note">Illustrative example — not a client result.</p></div>
        <div className="demo-board"><div className="demo-sidebar"><span className="sidebar-active">Arfa workflow</span><span>Customer support</span><span>Operations</span><span>Documents</span></div><div className="chat-demo"><div className="chat-top"><span><span className="status-dot" /> Arfa, AI assistant</span><small>Illustrative example</small></div><div className="message message-in">Can you turn this customer request into the right next steps?</div><div className="message message-out">Of course. I found the request, summarised the key details, drafted a reply for review, and created a follow-up task for the team.</div><div className="action-row"><span><Check size={14} /> Draft reply ready</span><span><Check size={14} /> Task created</span><span><Check size={14} /> Human review</span></div><div className="demo-input">Ask Arfa about a workflow <ArrowUpRight size={15} /></div></div></div>
      </section>

      <section className="services section-wrap" id="solutions"><div className="section-heading"><div><p className="eyebrow">What we build</p><h2>Practical intelligence,<br /><span>built for your world.</span></h2></div><Link className="text-link" href="#contact">Talk through your use case <ArrowUpRight size={15} /></Link></div><div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <article className={i === 0 ? "service-card service-featured" : "service-card"} key={title}><span className="service-number">0{i + 1}</span><Icon size={22} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>)}</div><div className="also-build"><span>ALSO BUILDING</span><p>AI video creation <i>·</i> Voice AI <i>·</i> Custom integrations <i>·</i> Intelligent knowledge bases</p></div></section>

      <section className="approach section-wrap" id="approach"><div className="section-heading"><div><p className="eyebrow">A considered approach</p><h2>Start small.<br /><span>Build what matters.</span></h2></div><p className="heading-note">No oversized promises.<br />Just a clear path forward.</p></div><div className="steps">{steps.map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

      <section className="proof section-wrap"><div className="proof-card"><Sparkles size={23} /><p className="eyebrow">A transparent beginning</p><h2>We are building our<br /><em>proof in the open.</em></h2><p>BarakahAI is at the beginning of its journey. Rather than invent case studies or inflate numbers, we would rather show you how we think, build a useful pilot, and earn the right to share the outcome.</p><Link className="button button-light" href="#contact">Explore a pilot <ArrowUpRight size={16} /></Link></div></section>

      <section className="faq section-wrap" id="faq"><div className="section-heading"><div><p className="eyebrow">Good questions</p><h2>Before we<br /><span>get started.</span></h2></div></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>

      <section className="contact section-wrap" id="contact"><div><p className="eyebrow">Let&apos;s make work better</p><h2>Bring us the<br /><em>messy bit.</em></h2><p>Tell us what is slowing your team down. We will bring curiosity, clarity, and a practical point of view.</p></div><div className="contact-actions"><Link className="button button-accent" href="mailto:hello@barakahai.com">Book a consultation <ArrowUpRight size={17} /></Link><p>Prefer WhatsApp? <Link href="https://wa.me/" target="_blank">Start a conversation <ArrowUpRight size={14} /></Link></p></div></section>

      <footer className="site-footer"><Link className="wordmark footer-brand" href="#top"><BrandLogo /></Link><p>AI automation with intention.</p><div><Link href="#solutions">Solutions</Link><Link href="#approach">Approach</Link><Link href="#contact">Contact</Link></div><small>© 2026 BarakahAI. All rights reserved.</small></footer>
    </main>
  )
}
