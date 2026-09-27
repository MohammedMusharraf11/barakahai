# BarakahAI — Production Web Platform

<div align="center">

![BarakahAI Banner](/public/barakahai-hero.png)

### **Practical AI Automation Systems for Growing Businesses**
*Your business, running on autopilot.*

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Repository](https://img.shields.io/badge/GitHub-MohammedMusharraf11%2Fbarakahai-00f0ff?style=flat&logo=github)](https://github.com/MohammedMusharraf11/barakahai)

</div>

---

## 🌟 Overview

**BarakahAI** designs, engineers, and deploys production-grade AI systems and autonomous workflows for growing businesses, service companies, clinics, real estate firms, and distributors. 

We eliminate repetitive computer busywork, automate customer communication across WhatsApp and Gmail, process complex business documents with zero data entry, and give leadership instant natural language answers directly from company data.

---

## 🚀 Key Features & Capabilities

- **⚡ 8 Practical AI Turnkey Use Cases**:
  1. **Document Intelligence**: Search and extract data from invoices, contracts, and PDFs with citations.
  2. **Natural Language Analytics**: Plain English queries converted to SQL, charts, and metrics without coding.
  3. **Recruitment Buddy**: Automated candidate scoring, screening, and interview workflows.
  4. **Website Design & Development**: High-converting web applications with native AI integrations.
  5. **24/7 AI Website Chatbots**: Custom-trained customer support agents that capture leads around the clock.
  6. **WhatsApp Automation**: Omnichannel lead qualification, order notifications, and appointment booking.
  7. **AI Video Creation & Marketing**: Fast AI-generated marketing videos and visual social assets.
  8. **Autonomous Task Agents**: Multi-step worker agents managing cross-platform workflows.

- **🤖 Arfa AI Assistant**:
  - Interactive on-site conversational assistant with natural subtle animation and blinking.
  - Answers inquiries instantly, qualifies business leads, and guides users to scheduling.

- **📅 Seamless Cal.com Scheduling**:
  - Direct 1-click booking integration for a **45-minute operational automation audit** (`mush4rr4f-gjfryw/15min`).

- **🧭 Plain English Delivery Roadmap**:
  - 4-step transparent onboarding timeline from Day 0 discovery to full production handoff in 2–4 weeks.

- **💎 Sleek Dark Aurora Aesthetic**:
  - Deep dark canvas with electric cyan, sapphire blue, and warm amber accents.
  - Fully responsive across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5.7](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism System
- **Icons**: [Lucide React](https://lucide.dev/)
- **Embeds**: [@calcom/embed-react](https://cal.com/)

---

## 📥 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/MohammedMusharraf11/barakahai.git
cd barakahai
```

### 2. Install Dependencies

Using `npm`:
```bash
npm install
```

Or using `pnpm`:
```bash
pnpm install
```

### 3. Environment Variables Setup

Copy the example environment configuration file:

```bash
cp .env.example .env.local
```

Inside `.env.local`, you can customize your Cal.com scheduling handle:
```env
NEXT_PUBLIC_CAL_LINK="mush4rr4f-gjfryw/15min"
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

---

## 📜 Available NPM Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Builds the optimized static and server-rendered production bundle |
| `npm run start` | Runs the production build locally |
| `npm run test:visual` | Runs visual regression and smoke tests using Playwright |

---

## 📁 Project Directory Structure

```text
barakahai/
├── app/
│   ├── api/
│   │   └── arfa/          # Arfa AI assistant backend API endpoint
│   ├── globals.css        # Global CSS design tokens & animations
│   ├── layout.tsx         # Root layout with SEO metadata & fonts
│   └── page.tsx           # Home landing page
├── components/
│   ├── chat-widget.tsx    # Arfa floating chat widget with blinking & motion
│   ├── contact-section.tsx# Contact form with direct Cal.com banner
│   ├── process-roadmap.tsx# 4-Step delivery timeline
│   ├── services-grid.tsx  # 8 AI use cases grid
│   ├── logo.tsx           # BarakahAI 3D emblem & wordmark component
│   └── ...                # Testimonials, marquee, and feature components
├── content/
│   ├── process.ts         # Plain-English roadmap steps copy
│   └── demo-scenarios.ts  # Automation showcase data
├── public/
│   ├── arfa.jpg           # Arfa AI chatbot avatar
│   ├── logo_v1.png        # BarakahAI official 3D emblem
│   ├── favicon.png        # Site favicon
│   └── ...                # Public media assets
├── scripts/
│   └── check-placeholders.mjs # Pre-build validation script
├── .env.example           # Environment template
├── package.json           # Dependencies and build scripts
└── tsconfig.json          # TypeScript compiler configuration
```

---

## 🚢 Deployment

### Deploying to Vercel (Recommended)

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Deploy: production release"
   git push origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Set any desired environment variables (`NEXT_PUBLIC_CAL_LINK`).
4. Click **Deploy**.

---

## 🏢 Contact & Company Information

- **Company**: BarakahAI
- **Office**: 54/1, 3rd Cross, Popular Colony, Bommanahalli, Bangalore 560068, Karnataka, India
- **Phone**: [+91 90366 00668](tel:+919036600668) / [+91 80-40906478](tel:+918040906478)
- **Email**: [info@barakahai.com](mailto:info@barakahai.com)
- **Website**: [www.barakahai.com](https://www.barakahai.com)
- **GitHub**: [github.com/MohammedMusharraf11/barakahai](https://github.com/MohammedMusharraf11/barakahai)

---

<div align="center">
  <small>© 2026 BarakahAI. All rights reserved.</small>
</div>
