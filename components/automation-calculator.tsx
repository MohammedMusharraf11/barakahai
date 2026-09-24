"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, Calculator, CheckCircle2, TrendingUp, Sparkles, Cpu, Clock, DollarSign, Users } from "lucide-react"

function SmoothCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number
  prefix?: string
  suffix?: string
}) {
  const [displayVal, setDisplayVal] = useState(value)
  const currentRef = useRef(value)

  useEffect(() => {
    const start = currentRef.current
    const diff = value - start
    if (diff === 0) return

    const duration = 480
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + diff * ease)
      currentRef.current = current
      setDisplayVal(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        currentRef.current = value
        setDisplayVal(value)
      }
    }

    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [value])

  return (
    <span>
      {prefix}
      {new Intl.NumberFormat("en-US").format(displayVal)}
      {suffix}
    </span>
  )
}

export function AutomationCalculator() {
  const [teamSize, setTeamSize] = useState<number>(8)
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12)
  const [hourlyCost, setHourlyCost] = useState<number>(45)

  // Calculations
  const weeklyHoursLost = teamSize * hoursPerWeek
  const monthlyHoursSaved = Math.round(weeklyHoursLost * 4.2 * 0.75) // 75% automation efficiency
  const monthlyDollarsSaved = Math.round(monthlyHoursSaved * hourlyCost)
  const annualDollarsSaved = monthlyDollarsSaved * 12
  const fullTimeEquivalent = (monthlyHoursSaved / 160).toFixed(1)

  // Estimated ROI ratio
  const estimatedAgencyMonthly = Math.max(3000, Math.round(monthlyDollarsSaved * 0.16))
  const roiMultiplier = Math.max(3.2, Math.round((monthlyDollarsSaved / estimatedAgencyMonthly) * 10) / 10).toFixed(1)

  const getRangeBackground = (val: number, min: number, max: number) => {
    const pct = ((val - min) / (max - min)) * 100
    return `linear-gradient(to right, #00d97e 0%, #e8b84b ${pct}%, rgba(255, 255, 255, 0.08) ${pct}%, rgba(255, 255, 255, 0.08) 100%)`
  }

  const presets = [
    { label: "Lean Team", size: 4, hours: 10, cost: 40 },
    { label: "Growth Agency", size: 12, hours: 14, cost: 50 },
    { label: "Mid-Market", size: 28, hours: 18, cost: 65 },
  ]

  return (
    <div className="calculator-card" id="calculator">
      {/* Ambient background glow that shifts with ROI value */}
      <div className="calc-ambient-aura" aria-hidden="true" />

      <div className="calculator-header">
        <div className="calc-kicker">
          <Calculator size={14} className="calc-kicker-icon" />
          <span>REALISTIC AUTOMATION ROI</span>
        </div>
        <h3>How much manual friction is costing your business?</h3>
        <p>
          Simulate how much operational bandwidth BarakahAI can unlock for your team each month.
        </p>

        {/* Dynamic Scenario Presets */}
        <div className="calc-presets-row">
          <span className="preset-label">Quick Scenarios:</span>
          {presets.map((p) => {
            const isActive = teamSize === p.size && hoursPerWeek === p.hours && hourlyCost === p.cost
            return (
              <button
                key={p.label}
                type="button"
                className={`calc-preset-btn ${isActive ? "active" : ""}`}
                onClick={() => {
                  setTeamSize(p.size)
                  setHoursPerWeek(p.hours)
                  setHourlyCost(p.cost)
                }}
              >
                {p.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="calculator-grid">
        {/* Sliders Side */}
        <div className="calculator-inputs">
          <div className="slider-group">
            <div className="slider-label-row">
              <label htmlFor="teamSize" className="flex items-center gap-1.5">
                <Users size={14} className="text-emerald-400 inline" />
                Team members in repetitive workflows
              </label>
              <span className="slider-val-badge">{teamSize} people</span>
            </div>
            <input
              id="teamSize"
              type="range"
              min="2"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="calc-range"
              style={{ background: getRangeBackground(teamSize, 2, 50) }}
            />
            <div className="range-hints">
              <span>2 members</span>
              <span>25 members</span>
              <span>50+ members</span>
            </div>
          </div>

          <div className="slider-group">
            <div className="slider-label-row">
              <label htmlFor="hoursPerWeek" className="flex items-center gap-1.5">
                <Clock size={14} className="text-emerald-400 inline" />
                Hours spent on manual busywork / week / person
              </label>
              <span className="slider-val-badge">{hoursPerWeek} hrs / wk</span>
            </div>
            <input
              id="hoursPerWeek"
              type="range"
              min="3"
              max="25"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="calc-range"
              style={{ background: getRangeBackground(hoursPerWeek, 3, 25) }}
            />
            <div className="range-hints">
              <span>3 hrs (Light copy-paste)</span>
              <span>12 hrs (Heavy triage)</span>
              <span>25 hrs (Full grind)</span>
            </div>
          </div>

          <div className="slider-group">
            <div className="slider-label-row">
              <label htmlFor="hourlyCost" className="flex items-center gap-1.5">
                <DollarSign size={14} className="text-emerald-400 inline" />
                Blended hourly team cost
              </label>
              <span className="slider-val-badge">${hourlyCost} / hr</span>
            </div>
            <input
              id="hourlyCost"
              type="range"
              min="25"
              max="120"
              step="5"
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
              className="calc-range"
              style={{ background: getRangeBackground(hourlyCost, 25, 120) }}
            />
            <div className="range-hints">
              <span>$25/hr</span>
              <span>$60/hr</span>
              <span>$120/hr</span>
            </div>
          </div>

          {/* Efficiency Spectrum Meter */}
          <div className="efficiency-meter-card">
            <div className="efficiency-meter-header">
              <div className="meter-header-left">
                <Cpu size={14} className="text-emerald-400" />
                <span>Autonomous Capacity Meter</span>
              </div>
              <span className="meter-val-tag">75% Workload Automated</span>
            </div>
            <div className="efficiency-bar-track">
              <div className="efficiency-bar-fill" style={{ width: "75%" }}>
                <div className="efficiency-bar-beam" />
              </div>
            </div>
            <div className="efficiency-stats-footer">
              <span>
                Manual overhead eliminated: <strong>{weeklyHoursLost} hrs/wk</strong>
              </span>
              <span className="roi-badge-pill">
                <TrendingUp size={12} /> {roiMultiplier}x ROI Ratio
              </span>
            </div>
          </div>
        </div>

        {/* Output Dials Side */}
        <div className="calculator-results">
          <div className="result-stat-box primary">
            <div className="flex items-center justify-between">
              <span className="result-label">Reclaimed Team Time / Month</span>
              <span className="status-live-pill">
                <span className="status-live-dot" /> LIVE MODEL
              </span>
            </div>
            <div className="result-hero-number">
              <strong>
                <SmoothCounter value={monthlyHoursSaved} />
              </strong>
              <span>hours</span>
            </div>
            <span className="result-sub">
              Equivalent to gaining <strong>+{fullTimeEquivalent}</strong> full-time team members without hiring or payroll overhead.
            </span>
          </div>

          <div className="result-stats-row">
            <div className="result-stat-mini">
              <span className="mini-label">Monthly Value Recovered</span>
              <strong className="text-emerald-400">
                <SmoothCounter value={monthlyDollarsSaved} prefix="$" />
              </strong>
            </div>
            <div className="result-stat-mini">
              <span className="mini-label">Projected Annual Savings</span>
              <strong className="text-amber-400">
                <SmoothCounter value={annualDollarsSaved} prefix="$" />
              </strong>
            </div>
          </div>

          <div className="calculator-cta-box">
            <Link className="btn-primary w-full justify-center btn-shimmer" href="#contact">
              Automate this with BarakahAI <ArrowUpRight size={16} />
            </Link>
            <span className="calc-disclaimer">
              <CheckCircle2 size={12} className="inline text-emerald-400 mr-1" />
              Empirical client pilot benchmarks · Zero disruption guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
