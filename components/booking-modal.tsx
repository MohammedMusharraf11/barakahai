"use client"

import React, { useEffect, useState, createContext, useContext } from "react"
import { X, Calendar, Sparkles } from "lucide-react"

export const CAL_URL = "https://cal.com/mush4rr4f-gjfryw/15min?theme=dark"

interface BookingModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const BookingModalContext = createContext<BookingModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

export function useBookingModal() {
  return useContext(BookingModalContext)
}

export function openBookingModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-booking-modal"))
  }
}

export function BookingButton({
  children,
  className = "btn-primary btn-shimmer",
  href = "#contact",
}: {
  children?: React.ReactNode
  className?: string
  href?: string
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        openBookingModal()
      }}
    >
      {children}
    </a>
  )
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Listen for global custom events from any link or button
  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener("open-booking-modal", handleOpen)
    return () => window.removeEventListener("open-booking-modal", handleOpen)
  }, [])

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="custom-booking-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
          <div
            className="custom-booking-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="custom-booking-header">
              <div className="booking-header-title-wrap">
                <div className="booking-header-icon-box">
                  <Calendar size={18} className="text-cyan" />
                </div>
                <div>
                  <h3>Schedule a 45-Minute Strategy Call</h3>
                  <p>Free operational automation audit · Direct with senior architects</p>
                </div>
              </div>

              <button
                type="button"
                className="booking-modal-close-btn"
                onClick={closeModal}
                aria-label="Close scheduling modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body / Cal.com Iframe with dark theme */}
            <div className="custom-booking-body">
              <iframe
                src={CAL_URL}
                title="Schedule a Call via Cal.com"
                className="custom-cal-iframe"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  )
}
