"use client"

import React, { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"

export const DEFAULT_CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "mush4rr4f-gjfryw/15min"
export const CAL_NAMESPACE = "15min"

/**
 * Initializes Cal.com global API for modal popups on elements with `data-cal-link`.
 */
export function CalEmbedProvider() {
  useEffect(() => {
    ;(async function () {
      try {
        const cal = await getCalApi({ namespace: CAL_NAMESPACE })
        cal("ui", {
          theme: "dark",
          styles: {
            branding: { brandColor: "#00f0ff" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        })
      } catch (err) {
        console.error("Failed to initialize Cal.com embed:", err)
      }
    })()
  }, [])

  return null
}

/**
 * Inline Cal.com interactive booking calendar.
 */
export function CalInlineBooking({
  calLink = DEFAULT_CAL_LINK,
  namespace = CAL_NAMESPACE,
}: {
  calLink?: string
  namespace?: string
}) {
  return (
    <div className="cal-inline-wrapper">
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "580px", overflow: "hidden" }}
        config={{
          layout: "month_view",
          theme: "dark",
        }}
      />
    </div>
  )
}

/**
 * Reusable Schedule Call Button that opens the custom dark booking modal on click
 */
export function ScheduleCallButton({
  children,
  className = "btn-primary btn-shimmer",
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("open-booking-modal"))
        }
      }}
      className={className}
    >
      {children || "Schedule Call"}
    </button>
  )
}
