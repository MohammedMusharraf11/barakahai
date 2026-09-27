"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { MessageSquare, Zap, Check } from "lucide-react"

export function HeroWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  // Cycle through active nodes 1 -> 2 -> 3 every 2.4s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1)
    }, 2400)
    return () => clearInterval(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      className="hero-visual group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive workflow diagram of BarakahAI connecting incoming messages to automated actions and team notifications"
    >
      {/* Background ribbon/geometric art pushed back with emerald-900 overlay at 55% */}
      <div
        className="hero-art-container"
        style={{
          transform: `scale(1.06) translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
          transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
        aria-hidden="true"
      >
        <Image
          className="hero-art"
          src="/barakahai-hero.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Emerald-900 overlay at ~55% with dark depth */}
        <div className="hero-art-overlay" />
        {/* Radiant golden central glow */}
        <div className="hero-ambient-glow" />
      </div>

      {/* Top Scrim Header: System tag + Ready to work */}
      <div className="hero-top-scrim">
        <div className="visual-system-tag">
          BARAKAH / SYSTEM 001
        </div>
        <div className="visual-status-pill">
          <span className="status-indicator-dot" />
          <span>READY TO WORK</span>
        </div>
      </div>

      {/* SVG Connecting Paths with Travelling Gold Pulse */}
      <svg
        className="hero-workflow-svg"
        viewBox="0 0 600 480"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Connections */}
        {/* Path 1: Node 01 (right top ~ 440, 120) to Hub (300, 240) */}
        <path
          d="M 440 120 C 370 120, 340 190, 300 240"
          className="workflow-base-line"
        />
        {/* Path 2: Hub (300, 240) to Node 02 (right bottom ~ 440, 380) */}
        <path
          d="M 300 240 C 340 280, 370 380, 440 380"
          className="workflow-base-line"
        />
        {/* Path 3: Hub (300, 240) to Node 03 (left bottom ~ 160, 380) */}
        <path
          d="M 300 240 C 260 280, 230 380, 160 380"
          className="workflow-base-line"
        />

        {/* Travelling Gold Pulses */}
        <path
          d="M 440 120 C 370 120, 340 190, 300 240"
          className="workflow-pulse-line pulse-line-1"
          filter="url(#goldGlow)"
        />
        <path
          d="M 300 240 C 340 280, 370 380, 440 380"
          className="workflow-pulse-line pulse-line-2"
          filter="url(#goldGlow)"
        />
        <path
          d="M 300 240 C 260 280, 230 380, 160 380"
          className="workflow-pulse-line pulse-line-3"
          filter="url(#goldGlow)"
        />
      </svg>

      {/* Orbiting Ring around Hub */}
      <div className="hero-orbital-system" aria-hidden="true">
        <div className="orbital-ring ring-1">
          <span className="orbital-satellite sat-1" />
        </div>
        <div className="orbital-ring ring-2">
          <span className="orbital-satellite sat-2" />
        </div>
      </div>

      {/* Central Hub: BarakahAI (emerald-700 disc, gold hairline ring, no mint) */}
      <div
        className="flow-hub-center"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 0.15}px), calc(-50% + ${mousePos.y * 0.15}px))`,
        }}
      >
        <div className="hub-aura" />
        <div className="hub-inner-disc">
          <div className="hub-logo-mark" aria-hidden="true">
            <span className="hub-dot" />
            <span className="hub-line" />
          </div>
          <strong className="hub-brand">
            Barakah<span className="text-[var(--gold-500)]">AI</span>
          </strong>
          <small className="hub-tagline">your intelligent layer</small>
        </div>
      </div>

      {/* Node 01: Customer message with 2-line fictional sample */}
      <div
        className={`flow-node node-customer-message ${activeStep === 1 ? "node-step-active" : ""}`}
        style={{
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        }}
      >
        <div className="flow-node-header">
          <div className="flex items-center gap-1.5">
            <MessageSquare size={14} className="text-[var(--gold-500)]" />
            <span className="node-title">Customer message</span>
          </div>
          <span className="node-number">01</span>
        </div>
        <div className="node-sample-bubble">
          <p className="sample-text">&ldquo;Hi, can I move my appointment to Friday?&rdquo;</p>
          <span className="sample-tag">Illustrative</span>
        </div>
      </div>

      {/* Node 02: Smart action */}
      <div
        className={`flow-node node-smart-action ${activeStep === 2 ? "node-step-active" : ""}`}
        style={{
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        }}
      >
        <div className="flow-node-header">
          <div className="flex items-center gap-1.5">
            <Zap size={14} className="text-[var(--gold-500)]" />
            <span className="node-title">Smart action</span>
          </div>
          <span className="node-number">02</span>
        </div>
        <p className="node-subdetail">Schedule checked &amp; draft routed</p>
      </div>

      {/* Node 03: Team notified */}
      <div
        className={`flow-node node-team-notified ${activeStep === 3 ? "node-step-active" : ""}`}
        style={{
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
        }}
      >
        <div className="flow-node-header">
          <div className="flex items-center gap-1.5">
            <Check size={14} className="text-[var(--emerald-400)]" />
            <span className="node-title">Team notified</span>
          </div>
          <span className="node-number">03</span>
        </div>
        <p className="node-subdetail">Ready for 1-click human approval</p>
      </div>

      {/* Bottom Scrim Caption: Connect the dots. Keep the judgement. */}
      <div className="hero-bottom-scrim">
        <p className="bottom-caption-text">
          Connect the dots.<br />
          <em>Keep the judgement.</em>
        </p>
      </div>
    </div>
  )
}

export default HeroWorkflow
