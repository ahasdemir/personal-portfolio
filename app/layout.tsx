import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { ErrorBoundary } from './components/error-boundary'
import { baseUrl } from './sitemap'
import { clsx } from 'clsx'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ahmet Hasdemir',
    template: '%s | Ahmet Hasdemir',
  },
  description: 'Ahmet Hasdemir\'s personal website.',
  icons: {
    icon: '/favicon.webp',
  },
  openGraph: {
    title: 'Ahmet Hasdemir',
    description: 'Ahmet Hasdemir\'s personal website.',
    url: baseUrl,
    siteName: 'Ahmet Hasdemir',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/foto.webp',
        width: 1200,
        height: 630,
        alt: 'Ahmet Hasdemir',
      },
    ],
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto text-black bg-white dark:text-white dark:bg-black">
        <ErrorBoundary>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ErrorBoundary>
      </body>
    </html>
  )
}
