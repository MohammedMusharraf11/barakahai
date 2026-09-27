"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, UserRound, Compass } from "lucide-react"
import { roadmapSteps } from "@/content/process"

export function ProcessRoadmap() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const startOffset = windowHeight * 0.72
      const totalScrollable = trackRect.height
      const currentScroll = startOffset - trackRect.top
      const pct = Math.min(1, Math.max(0, currentScroll / totalScrollable))
      setProgress(pct)

      // Step thresholds based on progress
      if (pct >= 0.82) {
        setActiveStep(4)
      } else if (pct >= 0.62) {
        setActiveStep(3)
      } else if (pct >= 0.42) {
        setActiveStep(2)
      } else if (pct >= 0.2) {
        setActiveStep(1)
      } else if (pct >= 0.04) {
        setActiveStep(0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToStep = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  // Active step name calculation for dynamic status
  const currentStepName =
    activeStep === 0
      ? "Step 01 · Find your biggest time-wasters"
      : activeStep === 1
      ? "Step 02 · See a working test in 7 days"
      : activeStep === 2
      ? "Your Choice · Continue only if you love it"
      : activeStep === 3
      ? "Step 03 · Connect to your everyday tools"
      : "Step 04 · Runs quietly on autopilot"

  return (
    <section
      className="approach roadmap-section full-bleed-dark"
      id="process"
      ref={sectionRef}
      aria-labelledby="roadmap-title"
    >
      {/* Background ambient lighting orbs */}
      <div className="roadmap-bg-glow-1" aria-hidden="true" />
      <div className="roadmap-bg-glow-2" aria-hidden="true" />

      <div className="roadmap-inner-wrapper">
        {/* Header */}
        <div className="roadmap-header">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <p className="eyebrow roadmap-eyebrow mb-0">
              <span className="eyebrow-dot" /> How we work
            </p>
            {/* Live Progress Pill */}
            <div className="roadmap-live-pill">
              <span className="live-pill-dot" />
              <span>{currentStepName}</span>
            </div>
          </div>

          <h2 id="roadmap-title">
            Simple, honest steps. <em>Zero guesswork.</em>
          </h2>
          <p className="roadmap-subhead">
            Try a working sample first. Only continue if it clearly saves your team hours.
          </p>
        </div>

        {/* Roadmap Track */}
        <div
          ref={trackRef}
          className="roadmap-track-container"
          style={{ "--roadmap-progress": progress } as React.CSSProperties}
        >
          {/* Vertical Spine Layer behind cards */}
          <div className="roadmap-spine-layer" aria-hidden="true">
            <div className="roadmap-spine-base" />
            <div
              className="roadmap-spine-fill"
              style={{ height: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            >
              {/* Glowing Liquid Plasma Beam */}
              <div className="spine-liquid-beam" />
              {/* Glowing comet head at tip of scroll progress */}
              <div className="roadmap-spine-comet">
                <div className="comet-halo" />
                <div className="comet-spark-1" />
                <div className="comet-spark-2" />
              </div>
            </div>
          </div>

          {/* Day 0 Node (Top of Spine) */}
          <div
            className={`roadmap-day0-node ${progress > 0.02 ? "is-reached" : ""}`}
            onClick={() => scrollToStep("roadmap-card-01")}
            role="button"
            tabIndex={0}
            aria-label="Scroll to Day 0"
          >
            <span className="day0-dot">
              <span className="day0-ping" />
            </span>
            <span className="day0-label">Day 0: 15-minute quick discovery call</span>
          </div>

          {/* Stepped Process List */}
          <div className="roadmap-steps-flow">
            {/* Step 01: Left */}
            <div
              className={`roadmap-row row-left ${activeStep >= 0 ? "is-active" : ""}`}
              data-roadmap-step="0"
            >
              <div className="roadmap-card-col">
                <article
                  className={`roadmap-card ${hoveredCard === "01" ? "card-hovered" : ""}`}
                  id="roadmap-card-01"
                  onMouseEnter={() => setHoveredCard("01")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-ambient-light" />
                  <div className="roadmap-card-top">
                    {roadmapSteps[0].duration && (
                      <span className="roadmap-duration">{roadmapSteps[0].duration}</span>
                    )}
                    <span className="step-indicator-pill">
                      <span className="pill-pulse-dot" />
                      Step 01
                    </span>
                  </div>
                  <h3>{roadmapSteps[0].title}</h3>
                  <p>{roadmapSteps[0].text}</p>
                  <div className="deliverables">
                    <strong>You get:</strong>
                    {roadmapSteps[0].deliverables.map((item, i) => (
                      <span
                        key={item}
                        style={{ animationDelay: `${i * 120}ms` }}
                        className="deliverable-pill"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>

              {/* Laser Connector */}
              <div className="roadmap-connector" aria-hidden="true">
                <div className="connector-laser laser-left" />
                <div className="connector-dock-dot dock-left" />
              </div>

              {/* Node on Spine */}
              <div className="roadmap-node-col">
                <button
                  type="button"
                  onClick={() => scrollToStep("roadmap-card-01")}
                  className="roadmap-node"
                  aria-label="Jump to Step 01: Map the opportunity"
                >
                  <span className="node-glow-ring" />
                  <span className="node-outer-aura" />
                  <span>01</span>
                </button>
              </div>
              <div className="roadmap-empty-col" aria-hidden="true" />
            </div>

            {/* Step 02: Right */}
            <div
              className={`roadmap-row row-right ${activeStep >= 1 ? "is-active" : ""}`}
              data-roadmap-step="1"
            >
              <div className="roadmap-empty-col" aria-hidden="true" />

              {/* Node on Spine */}
              <div className="roadmap-node-col">
                <button
                  type="button"
                  onClick={() => scrollToStep("roadmap-card-02")}
                  className="roadmap-node"
                  aria-label="Jump to Step 02: Design a focused pilot"
                >
                  <span className="node-glow-ring" />
                  <span className="node-outer-aura" />
                  <span>02</span>
                </button>
              </div>

              {/* Laser Connector */}
              <div className="roadmap-connector" aria-hidden="true">
                <div className="connector-laser laser-right" />
                <div className="connector-dock-dot dock-right" />
              </div>

              <div className="roadmap-card-col">
                <article
                  className={`roadmap-card ${hoveredCard === "02" ? "card-hovered" : ""}`}
                  id="roadmap-card-02"
                  onMouseEnter={() => setHoveredCard("02")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-ambient-light" />
                  <div className="roadmap-card-top">
                    {roadmapSteps[1].duration && (
                      <span className="roadmap-duration">{roadmapSteps[1].duration}</span>
                    )}
                    <span className="step-indicator-pill">
                      <span className="pill-pulse-dot" />
                      Step 02
                    </span>
                  </div>
                  <h3>{roadmapSteps[1].title}</h3>
                  <p>{roadmapSteps[1].text}</p>
                  <div className="deliverables">
                    <strong>You get:</strong>
                    {roadmapSteps[1].deliverables.map((item, i) => (
                      <span
                        key={item}
                        style={{ animationDelay: `${i * 120}ms` }}
                        className="deliverable-pill"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>

            {/* Decision Gate: Between Step 02 and 03 */}
            <div
              className={`roadmap-decision-gate-row ${activeStep >= 2 ? "is-active" : ""}`}
              data-roadmap-step="2"
            >
              <div className="gate-callout-col">
                <aside
                  className="decision-gate-callout"
                  id="decision-gate"
                  aria-label="Decision Gate Checkpoint"
                >
                  <div className="callout-shimmer-border" />
                  <div className="callout-icon">
                    <Check size={16} />
                  </div>
                  <div className="callout-text">
                    <span className="callout-kicker">
                      YOUR CHOICE
                    </span>
                    <h4>Try before you decide</h4>
                    <p>If you love the test sample, we roll it out. If not, you walk away with zero obligations.</p>
                  </div>
                  <span className="callout-badge" aria-hidden="true">
                    <ArrowUpRight size={15} />
                  </span>
                </aside>
              </div>

              {/* Gate Connector */}
              <div className="gate-connector" aria-hidden="true">
                <div className="connector-laser laser-left" />
                <div className="connector-dock-dot dock-left" />
              </div>

              {/* Diamond Node on Spine */}
              <div className="gate-node-col">
                <button
                  type="button"
                  onClick={() => scrollToStep("decision-gate")}
                  className="decision-diamond-node"
                  aria-label="Jump to Decision Gate Checkpoint"
                  title="Decision Gate"
                >
                  <span className="diamond-glow-ring" />
                  <span className="diamond-outer-aura" />
                  <div className="diamond-shape" />
                </button>
              </div>
              <div className="gate-empty-col" aria-hidden="true" />
            </div>

            {/* Step 03: Left */}
            <div
              className={`roadmap-row row-left ${activeStep >= 3 ? "is-active" : ""}`}
              data-roadmap-step="3"
            >
              <div className="roadmap-card-col">
                <article
                  className={`roadmap-card ${hoveredCard === "03" ? "card-hovered" : ""}`}
                  id="roadmap-card-03"
                  onMouseEnter={() => setHoveredCard("03")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-ambient-light" />
                  <div className="roadmap-card-top">
                    {roadmapSteps[2].duration && (
                      <span className="roadmap-duration">{roadmapSteps[2].duration}</span>
                    )}
                    {roadmapSteps[2].humanLoop && (
                      <span className="human-loop">
                        <UserRound size={14} /> You stay in full control
                      </span>
                    )}
                    <span className="step-indicator-pill">
                      <span className="pill-pulse-dot" />
                      Step 03
                    </span>
                  </div>
                  <h3>{roadmapSteps[2].title}</h3>
                  <p>{roadmapSteps[2].text}</p>
                  <div className="deliverables">
                    <strong>You get:</strong>
                    {roadmapSteps[2].deliverables.map((item, i) => (
                      <span
                        key={item}
                        style={{ animationDelay: `${i * 120}ms` }}
                        className="deliverable-pill"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>

              {/* Laser Connector */}
              <div className="roadmap-connector" aria-hidden="true">
                <div className="connector-laser laser-left" />
                <div className="connector-dock-dot dock-left" />
              </div>

              {/* Node on Spine */}
              <div className="roadmap-node-col">
                <button
                  type="button"
                  onClick={() => scrollToStep("roadmap-card-03")}
                  className="roadmap-node"
                  aria-label="Jump to Step 03: Build, test, and refine"
                >
                  <span className="node-glow-ring" />
                  <span className="node-outer-aura" />
                  <span>03</span>
                </button>
              </div>
              <div className="roadmap-empty-col" aria-hidden="true" />
            </div>

            {/* Step 04: Right */}
            <div
              className={`roadmap-row row-right ${activeStep >= 4 ? "is-active" : ""}`}
              data-roadmap-step="4"
            >
              <div className="roadmap-empty-col" aria-hidden="true" />

              {/* Node on Spine */}
              <div className="roadmap-node-col">
                <button
                  type="button"
                  onClick={() => scrollToStep("roadmap-card-04")}
                  className="roadmap-node"
                  aria-label="Jump to Step 04: Handoff with confidence"
                >
                  <span className="node-glow-ring" />
                  <span className="node-outer-aura" />
                  <span>04</span>
                </button>
              </div>

              {/* Laser Connector */}
              <div className="roadmap-connector" aria-hidden="true">
                <div className="connector-laser laser-right" />
                <div className="connector-dock-dot dock-right" />
              </div>

              <div className="roadmap-card-col">
                <article
                  className={`roadmap-card ${hoveredCard === "04" ? "card-hovered" : ""}`}
                  id="roadmap-card-04"
                  onMouseEnter={() => setHoveredCard("04")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="card-ambient-light" />
                  <div className="roadmap-card-top">
                    {roadmapSteps[3].duration && (
                      <span className="roadmap-duration">{roadmapSteps[3].duration}</span>
                    )}
                    <span className="step-indicator-pill">
                      <span className="pill-pulse-dot" />
                      Step 04
                    </span>
                  </div>
                  <h3>{roadmapSteps[3].title}</h3>
                  <p>{roadmapSteps[3].text}</p>
                  <div className="deliverables">
                    <strong>You get:</strong>
                    {roadmapSteps[3].deliverables.map((item, i) => (
                      <span
                        key={item}
                        style={{ animationDelay: `${i * 120}ms` }}
                        className="deliverable-pill"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* End Flag (Bottom of Spine) */}
          <div className={`roadmap-end-node ${progress >= 0.88 ? "is-reached" : ""}`}>
            <span className="end-flag-circle">
              <Check size={17} strokeWidth={2.5} />
              <span className="flag-ping" />
              <span className="flag-outer-glow" />
            </span>
            <span className="end-flag-label">Live, tested, and saving hours</span>
          </div>
        </div>

        {/* Primary CTA on Dark background: gold-500 fill with ink text */}
        <div className="roadmap-cta-wrap">
          <Link className="button button-gold-dark group" href="#contact">
            Book a Free 15-Minute Audit{" "}
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessRoadmap
