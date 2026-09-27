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

    let startTimestamp: number | null = null
    let animationFrameId: number
    let timeoutId: NodeJS.Timeout

    const startCounting = () => {
      if (hasAnimatedRef.current) return
      hasAnimatedRef.current = true

      timeoutId = setTimeout(() => {
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
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      startCounting()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          startCounting()
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
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
