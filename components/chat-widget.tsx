"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { X, Send, Bot } from "lucide-react"

interface Message {
  id: string
  sender: "bot" | "user"
  text: string
  time: string
}

const initialBotMessage = `👋 Welcome to BarakahAI!
I'm Arfa, your AI Automation Assistant.

I can help you with:
🤖 24/7 Customer Chatbots
💬 WhatsApp Automation
📄 Automated Bill & Invoice Processing
📊 Sales & Revenue Analytics
📞 AI Phone Calling Agents
🧠 Company Knowledge Base

How can I help you today?`

const defaultSuggestions = [
  "What can you automate for me?",
  "How much does it cost?",
  "How fast can we get started?",
  "Book a 15-min strategy call",
]

const cannedReplies: Record<string, string> = {
  cost:
    "We work on transparent, fixed-scope milestones so you know the exact investment upfront with zero surprises, followed by monthly optimization retainers. You can request a custom pricing audit on our free strategy call!",
  fast:
    "Our pilots ship fast! We audit your biggest workflow bottleneck in Week 1, deliver a live working prototype by Week 2, and complete full production setup in 2 to 4 weeks.",
  automate:
    "We automate repetitive computer tasks — answering customer WhatsApp messages in 20 seconds, reading invoice PDFs without manual typing, answering employee questions using your company guides, and turning plain English questions into sales charts.",
  call:
    "You can schedule a free, zero-pressure 15-minute automation audit directly on this page! Just scroll down to our contact form, email us at info@barakahai.com, or call us at +91 90366 00668.",
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPill, setShowPill] = useState(true)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m-welcome",
      sender: "bot",
      text: initialBotMessage,
      time: "Just now",
    },
  ])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
    setShowPill(false)
  }

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim()
    if (!text) return

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      time: "Just now",
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput("")
    setIsTyping(true)

    setTimeout(() => {
      let reply =
        "Thank you for asking! We build tailored automation systems directly into your existing tools (WhatsApp, Gmail, spreadsheets). Would you like to schedule a quick 15-minute strategy call with our team?"

      const lower = text.toLowerCase()
      if (lower.includes("cost") || lower.includes("price") || lower.includes("pricing") || lower.includes("fee")) {
        reply = cannedReplies.cost
      } else if (lower.includes("fast") || lower.includes("start") || lower.includes("timeline") || lower.includes("how long")) {
        reply = cannedReplies.fast
      } else if (lower.includes("call") || lower.includes("book") || lower.includes("meeting") || lower.includes("schedule")) {
        reply = cannedReplies.call
      } else if (lower.includes("automate") || lower.includes("service") || lower.includes("what can you") || lower.includes("offer")) {
        reply = cannedReplies.automate
      }

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: reply,
        time: "Just now",
      }

      setIsTyping(false)
      setMessages((prev) => [...prev, botMsg])
    }, 850)
  }

  return (
    <div className="chat-widget-root">
      {/* Floating Prompt Pill */}
      {showPill && !isOpen && (
        <div className="chat-prompt-pill" onClick={handleToggle}>
          <span className="pill-dot" />
          <span>Chat with Arfa · Active now</span>
          <button
            type="button"
            className="pill-close"
            onClick={(e) => {
              e.stopPropagation()
              setShowPill(false)
            }}
            aria-label="Dismiss chat prompt"
          >
            ×
          </button>
        </div>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar-box">
                <Image
                  src="/arfa.jpg"
                  alt="Arfa - BarakahAI"
                  width={38}
                  height={38}
                  className="chat-avatar-img"
                  priority
                />
                <span className="online-indicator" />
              </div>
              <div>
                <strong>Arfa</strong>
                <span>AI Automation Assistant · Active</span>
              </div>
            </div>
            <button
              type="button"
              className="chat-close-btn"
              onClick={handleToggle}
              aria-label="Close chat window"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chat-body">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chat-bubble-row ${m.sender === "user" ? "user-row" : "bot-row"}`}
              >
                {m.sender === "bot" && (
                  <div className="chat-bubble-avatar-box">
                    <Image
                      src="/arfa.jpg"
                      alt="Arfa"
                      width={28}
                      height={28}
                      className="chat-bubble-avatar-img"
                    />
                  </div>
                )}
                <div className={`chat-bubble ${m.sender === "user" ? "user-bubble" : "bot-bubble"}`}>
                  <div className="chat-text-formatted">
                    {m.text.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < m.text.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="chat-time">{m.time}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row bot-row">
                <div className="chat-bubble-avatar-box">
                  <Image
                    src="/arfa.jpg"
                    alt="Arfa"
                    width={28}
                    height={28}
                    className="chat-bubble-avatar-img"
                  />
                </div>
                <div className="chat-bubble bot-bubble typing-bubble">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="chat-suggestions-bar">
            {defaultSuggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="chat-suggestion-chip"
                onClick={() => handleSend(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            className="chat-input-bar"
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
          >
            <input
              type="text"
              placeholder="Ask Arfa a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Chat message input"
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>

          {/* Footer note */}
          <div className="chat-footer-brand">
            <span>BarakahAI · Intelligent Business Automation</span>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        className={`chat-launcher-btn ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
        aria-label={isOpen ? "Close chat" : "Chat with Arfa"}
      >
        <span className="launcher-glow" />
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="launcher-avatar-wrap">
            <Image
              src="/arfa.jpg"
              alt="Chat with Arfa"
              width={56}
              height={56}
              className="launcher-avatar-img"
              priority
            />
            <span className="launcher-online-dot" />
          </div>
        )}
      </button>
    </div>
  )
}
