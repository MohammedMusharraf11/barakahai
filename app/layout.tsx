import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BarakahAI — AI automation with intention',
  description: 'BarakahAI helps modern businesses automate workflows, improve customer experiences, and increase productivity with practical AI.',
  generator: 'BarakahAI',
  metadataBase: new URL('https://barakahai.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'BarakahAI — AI automation with intention',
    description: 'Practical AI agents, automation, chatbots, and intelligent document workflows for modern businesses.',
    url: 'https://barakahai.com',
    siteName: 'BarakahAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarakahAI — AI automation with intention',
    description: 'Practical AI automation for modern businesses.',
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
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
