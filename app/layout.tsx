import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BarakahAI — Practical AI Automation & Intelligent Workflows',
    template: '%s | BarakahAI',
  },
  description:
    'BarakahAI designs, builds, and deploys practical AI automation systems, 24/7 customer chatbots, WhatsApp workflows, and intelligent document processing for growing businesses.',
  applicationName: 'BarakahAI',
  generator: 'BarakahAI',
  metadataBase: new URL('https://barakahai.com'),
  alternates: { canonical: '/' },
  keywords: [
    'AI automation agency',
    'business process automation',
    'WhatsApp AI automation',
    'AI customer service chatbot',
    'automated invoice processing',
    'AI workflow automation',
    'conversational AI agents',
    'BarakahAI',
    'AI business systems',
    'workflow automation consulting',
    'lead generation automation',
  ],
  authors: [{ name: 'BarakahAI Team', url: 'https://barakahai.com' }],
  creator: 'BarakahAI',
  publisher: 'BarakahAI',
  category: 'Technology / Artificial Intelligence',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'BarakahAI — Your Business, Running on Autopilot',
    description:
      'Practical AI systems and automated workflows that eliminate manual busywork, answer customers 24/7, and free your team to focus on growth.',
    url: 'https://barakahai.com',
    siteName: 'BarakahAI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/barakahai-hero.png',
        width: 1200,
        height: 630,
        alt: 'BarakahAI — Practical AI Automation Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarakahAI — Practical AI Automation for Modern Businesses',
    description:
      'Eliminate manual busywork and answer customers 24/7 with custom AI automation workflows.',
    images: ['/barakahai-hero.png'],
    creator: '@barakahai',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#06090c',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://barakahai.com/#organization',
      name: 'BarakahAI',
      url: 'https://barakahai.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://barakahai.com/logo_v1.png',
        width: 512,
        height: 512,
      },
      description:
        'BarakahAI is an AI automation agency that designs, builds, and deploys custom intelligent workflows and autonomous agents for modern businesses.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-90366-00668',
        contactType: 'customer support',
        email: 'info@barakahai.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
      sameAs: [
        'https://twitter.com/barakahai',
        'https://linkedin.com/company/barakahai',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://barakahai.com/#website',
      url: 'https://barakahai.com',
      name: 'BarakahAI',
      description: 'Your business, running on autopilot with practical AI automation.',
      publisher: {
        '@id': 'https://barakahai.com/#organization',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://barakahai.com/#service',
      name: 'BarakahAI Automation Services',
      url: 'https://barakahai.com',
      image: 'https://barakahai.com/barakahai-hero.png',
      priceRange: '$$',
      telephone: '+91-90366-00668',
      serviceType: [
        'AI Customer Chatbots',
        'WhatsApp Automation',
        'Automated Invoice Processing',
        'AI Phone Agents',
        'Workflow Automation',
      ],
      areaServed: 'Worldwide',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
