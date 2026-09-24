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
  title: 'BarakahAI — AI Automation Agency',
  description: 'BarakahAI is an AI automation agency that designs, builds, and deploys intelligent systems to automate workflows, boost productivity, and scale your business.',
  generator: 'BarakahAI',
  metadataBase: new URL('https://barakahai.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'BarakahAI — AI Automation Agency',
    description: 'AI agents, workflow automation, conversational AI, and intelligent document processing for modern businesses.',
    url: 'https://barakahai.com',
    siteName: 'BarakahAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarakahAI — AI Automation Agency',
    description: 'AI automation that actually delivers results.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050a0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
