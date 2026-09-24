"use client"

import React, { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  delay?: number
  className?: string
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  delay = 200,
  className = "",
}: AnimatedCounterProps) {
  const [currentVal, setCurrentVal] = useState<number>(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimatedRef = useRef<boolean>(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    // IntersectionObserver so it triggers on page load when visible,
    // or when scrolled into view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          // Start counting
          let startTimestamp: number | null = null
          let animationFrameId: number

          const timeoutId = setTimeout(() => {
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp
              const elapsed = timestamp - startTimestamp
              const progress = Math.min(elapsed / duration, 1)

              // Smooth ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const value = easeOut * target

              setCurrentVal(value)

              if (progress < 1) {
                animationFrameId = requestAnimationFrame(step)
              } else {
                setCurrentVal(target)
              }
            }
            animationFrameId = requestAnimationFrame(step)
          }, delay)

          return () => {
            clearTimeout(timeoutId)
            cancelAnimationFrame(animationFrameId)
          }
        } else {
          // Reset when scrolled far away so it re-animates on scroll back
          setCurrentVal(0)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, delay])

  const formatted = decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal).toString()

  return (
    <span
      ref={elementRef}
      className={`counter-number ${className}`}
      style={{ fontSize: "inherit", fontWeight: "inherit", lineHeight: "inherit", display: "inline-block" }}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
