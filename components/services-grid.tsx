"use client"

import React from "react"
import {
  FileText,
  BarChart3,
  UserCheck,
  Globe,
  Bot,
  MessageCircle,
  Video,
  Cpu,
} from "lucide-react"

export const servicesData = [
  {
    icon: FileText,
    title: "Document Intelligence",
    tagline: "Your Organisation's Knowledge. One Assistant.",
    text: "Transform your organisation's documents into an intelligent AI knowledge assistant. Search company information and get context-aware answers with exact source citations.",
    accent: "cyan",
  },
  {
    icon: BarChart3,
    title: "Natural Language Analytics",
    tagline: "Ask Your Data. Get Instant Insights.",
    text: "Make data-driven decisions without writing code. Convert plain English questions like 'Show me sales in March' into automated queries, interactive dashboards, and reports.",
    accent: "amber",
  },
  {
    icon: UserCheck,
    title: "Recruitment Buddy",
    tagline: "Smarter Hiring. Faster Decisions.",
    text: "Simplify hiring with AI-powered resume screening, explainable candidate matching scores, automated interview scheduling, and HR-approved offer letters.",
    accent: "purple",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    tagline: "Your Vision. Our Technology.",
    text: "Establish a powerful digital presence with modern, responsive, and SEO-friendly corporate websites, e-commerce stores, and web applications with built-in AI chatbots.",
    accent: "blue",
  },
  {
    icon: Bot,
    title: "24/7 AI Website Chatbots",
    tagline: "Engage Visitors. Capture Leads.",
    text: "Turn your website into an always-available customer assistant. Instantly answer enquiries from your website content, qualify leads, and book consultations 24/7.",
    accent: "cyan",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    tagline: "Automate Conversations. Accelerate Growth.",
    text: "Transform WhatsApp into an intelligent business channel. Automate customer enquiries, capture leads, schedule appointments, and send order updates effortlessly.",
    accent: "blue",
  },
  {
    icon: Video,
    title: "AI Video Creation & Marketing",
    tagline: "Your Products. Brought to Life with AI.",
    text: "Transform product images into engaging cinematic advertisements, Instagram Reels, and YouTube Shorts with natural AI voiceovers without expensive studio setups.",
    accent: "rose",
  },
  {
    icon: Cpu,
    title: "Autonomous Task Agents",
    tagline: "Automate Repetitive Tasks. Empower Teams.",
    text: "Put operations on autopilot. Execute multi-step workflows, sync customer data across CRMs and spreadsheets, process files, and route tasks with human approval.",
    accent: "amber",
  },
]

export function ServicesSection() {
  return (
    <section className="services-growth-wrap section-wrap" id="services">
      <div className="section-head reveal-item">
        <span className="services-kicker-cyan">USE CASES &amp; SOLUTIONS</span>
        <h2>AI Solutions Built for Real Business Work</h2>
        <p>
          Practical, production-ready AI systems tailored to your workflows — designed to eliminate
          repetitive computer friction and help your business scale efficiently.
        </p>
      </div>

      <div className="services-growth-grid">
        {servicesData.map(({ icon: Icon, title, tagline, text, accent }, i) => (
          <article
            className={`service-growth-card accent-${accent} reveal-item`}
            key={title}
            style={{ transitionDelay: `${(i % 4) * 70}ms` }}
          >
            <div className="service-growth-card-glow" />
            <div className={`service-growth-icon-box box-${accent}`}>
              <Icon size={26} className={`service-lucide-icon icon-${accent}`} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
