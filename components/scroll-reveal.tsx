"use client"

import React, { useEffect } from "react"

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "#engine") {
        window.history.replaceState(null, "", window.location.pathname)
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-item, .hero-load-item").forEach((el) => {
        el.classList.add("is-revealed")
      })
      return
    }

    let lastScrollY = window.scrollY
    let scrollDirection: "down" | "up" = "down"

    const handleScrollDir = () => {
      const currentScrollY = window.scrollY
      if (Math.abs(currentScrollY - lastScrollY) > 4) {
        scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
        document.body.setAttribute("data-scroll-dir", scrollDirection)
        lastScrollY = currentScrollY
      }
    }

    window.addEventListener("scroll", handleScrollDir, { passive: true })

    const selector =
      ".reveal-item, .reveal-up, .reveal-scale, .reveal-fade, .reveal-left, .reveal-right, .service-card, .blueprint-card, .stat-box, .ba-column, .faq-list details"

    const elements = document.querySelectorAll<HTMLElement>(selector)
    const vh = window.innerHeight

    // Initial pass on mount:
    elements.forEach((el) => {
      // If it's a hero load item or inside hero-wrap, don't stamp it with is-revealed immediately!
      // Let its CSS load-in keyframe animations play!
      if (el.classList.contains("hero-load-item") || el.closest(".hero-wrap")) {
        return
      }

      const rect = el.getBoundingClientRect()
      // If already in initial viewport, mark revealed
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        el.classList.add("is-revealed")
        el.classList.add("reveal-from-bottom")
      } else if (rect.top >= vh * 0.92) {
        // Below viewport: prepare to enter from bottom
        el.classList.remove("is-revealed")
        el.classList.add("reveal-from-bottom")
        el.classList.remove("reveal-from-top")
      } else {
        // Above viewport: prepare to enter from top
        el.classList.remove("is-revealed")
        el.classList.add("reveal-from-top")
        el.classList.remove("reveal-from-bottom")
      }
    })

    document.body.classList.add("js-reveal-ready")

    // Intersection observer for both scroll down and scroll up
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          const rect = entry.boundingClientRect

          if (entry.isIntersecting) {
            // Element entered viewport (either from bottom or top): animate it in!
            el.classList.add("is-revealed")
          } else {
            // Element left the viewport:
            const buffer = 40
            const exitedAbove = rect.bottom < -buffer
            const exitedBelow = rect.top > window.innerHeight + buffer

            if (exitedAbove) {
              // It exited above viewport (scrolling down past it).
              // When user scrolls back UP, it will re-enter from top!
              el.classList.remove("is-revealed")
              el.classList.remove("reveal-from-bottom")
              el.classList.add("reveal-from-top")
            } else if (exitedBelow) {
              // It exited below viewport (scrolling up past it).
              // When user scrolls back DOWN, it will re-enter from bottom!
              el.classList.remove("is-revealed")
              el.classList.remove("reveal-from-top")
              el.classList.add("reveal-from-bottom")
            }
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: "30px 0px 30px 0px",
      }
    )

    // Observe non-hero elements immediately
    elements.forEach((el) => {
      if (!el.classList.contains("hero-load-item") && !el.closest(".hero-wrap")) {
        observer.observe(el)
      }
    })

    // After 1.3s (when page load animations have finished playing),
    // register hero items into the scroll observer for scroll-up and scroll-down!
    const heroTimer = setTimeout(() => {
      const heroItems = document.querySelectorAll<HTMLElement>(".hero-load-item, .hero-wrap .reveal-item")
      heroItems.forEach((el) => {
        el.classList.add("is-revealed")
        observer.observe(el)
      })
    }, 1300)

    return () => {
      clearTimeout(heroTimer)
      window.removeEventListener("scroll", handleScrollDir)
      observer.disconnect()
      document.body.classList.remove("js-reveal-ready")
    }
  }, [])

  return <>{children}</>
}

export default ScrollRevealProvider
