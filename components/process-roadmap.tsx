"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, UserRound } from "lucide-react"

const roadmapSteps = [
  { number: "01", title: "Map the opportunity", text: "We find the repetitive work, customer friction, and high-value handoffs worth improving.", duration: "[DURATION_1]", deliverables: ["Workflow map", "Ranked opportunities"] },
  { number: "02", title: "Design a focused pilot", text: "You get a clear workflow, success criteria, and an implementation path before a large commitment.", duration: "[DURATION_2]", deliverables: ["Scope", "Success metrics", "Implementation plan"] },
  { number: "03", title: "Build, test, and refine", text: "We connect the right systems, test with real scenarios, and keep humans in control.", duration: "[DURATION_3]", deliverables: ["Working automation", "Test report", "Human-review rules"], humanLoop: true },
  { number: "04", title: "Handoff with confidence", text: "Your team gets documentation, ownership, and a practical next step for scaling.", duration: "[DURATION_4]", deliverables: ["Documentation", "Ownership transfer", "Next-step plan"] },
]

export function ProcessRoadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const update = () => {
      const rect = section.getBoundingClientRect()
      const range = Math.max(section.offsetHeight - window.innerHeight, 1)
      const next = Math.min(1, Math.max(0, -rect.top / range))
      setProgress(next)
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", update, { passive: true })
        update()
      } else window.removeEventListener("scroll", update)
    }, { rootMargin: "120px 0px" })
    const nodes = section.querySelectorAll("[data-roadmap-step]")
    const nodeObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveStep((current) => Math.max(current, Number((entry.target as HTMLElement).dataset.roadmapStep)))
    }), { threshold: 0.35 })
    observer.observe(section)
    nodes.forEach((node) => nodeObserver.observe(node))
    return () => { observer.disconnect(); nodeObserver.disconnect(); window.removeEventListener("scroll", update) }
  }, [])

  return (
    <section className="approach roadmap-section" id="approach" ref={sectionRef} aria-labelledby="roadmap-title">
      <div className="roadmap-heading">
        <div><p className="eyebrow roadmap-eyebrow">How we work</p><h2 id="roadmap-title">Build what <em>matters.</em></h2></div>
        <p>A focused pilot first. Scale only if it works.</p>
      </div>
      <div className="roadmap-track" style={{ "--roadmap-progress": progress } as CSSProperties}>
        <svg className="roadmap-path" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true"><path className="roadmap-path-faint" d="M50 0 C50 120 18 140 18 250 S82 380 82 500 S18 630 18 750 S50 880 50 1000" /><path className="roadmap-path-drawn" d="M50 0 C50 120 18 140 18 250 S82 380 82 500 S18 630 18 750 S50 880 50 1000" /></svg>
        <div className="roadmap-start"><span className="roadmap-dot" /><span>Day 0: workflow teardown call</span></div>
        <ol className="roadmap-list">
          {roadmapSteps.map((step, index) => <li className={`roadmap-item roadmap-item-${index % 2 ? "right" : "left"} ${activeStep >= index ? "is-active" : ""}`} data-roadmap-step={index} key={step.number}>
            <button className="roadmap-node" type="button" aria-label={`Jump to step ${step.number}: ${step.title}`} onClick={() => document.getElementById(`roadmap-card-${step.number}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}><span>{step.number}</span></button>
            <article className="roadmap-card" id={`roadmap-card-${step.number}`} tabIndex={-1}><div className="roadmap-card-top"><span className="roadmap-duration">{step.duration}</span>{step.humanLoop && <span className="human-loop"><UserRound size={13} /> Human in the loop</span>}</div><h3>{step.title}</h3><p>{step.text}</p><div className="deliverables"><strong>You get:</strong>{step.deliverables.map((item) => <span key={item}>{item}</span>)}</div></article>
          </li>)}
        </ol>
        <div className="roadmap-checkpoint"><span>◆</span><p><strong>Go / no-go checkpoint</strong><br />You decide before any large commitment.</p></div>
        <div className="roadmap-end"><span className="end-flag"><Check size={14} /></span><span>Live, documented, yours</span></div>
      </div>
      <Link className="button button-accent roadmap-cta" href="#contact">Start with a workflow teardown <ArrowUpRight size={16} /></Link>
    </section>
  )
}

export default ProcessRoadmap

// TODO: replace [DURATION_1] through [DURATION_4] with confirmed commitments.
// TODO: replace the illustrative workflow language only when real proof is available.
// TODO: use the provided source image description: cream editorial roadmap with italic green heading and four numbered rows as the visual reference.

interface CSSProperties { [key: string]: string | number }
