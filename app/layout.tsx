import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heed Digital - Creative Agency | 3D Animation, Design & Development',
  description: 'We make ideas hit harder. 3D, editing, UI/UX, strategy, and code — one studio.',
  keywords: '3D animation, video editing, UI/UX design, content writing, marketing strategy, web development, creative agency',
  authors: [{ name: 'Heed Digital' }],
  creator: 'Heed Digital',
  publisher: 'Heed Digital',
  robots: 'index, follow',
  metadataBase: new URL('https://heeddigital.com'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heeddigital.com',
    title: 'Heed Digital - Creative Agency',
    description: 'We make ideas hit harder. 3D, editing, UI/UX, strategy, and code — one studio.',
    siteName: 'Heed Digital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heed Digital - Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heed Digital - Creative Agency',
    description: 'We make ideas hit harder. 3D, editing, UI/UX, strategy, and code — one studio.',
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Heed Digital",
              "description": "We make ideas hit harder. 3D, editing, UI/UX, strategy, and code — one studio.",
              "url": "https://heeddigital.com",
              "logo": "https://heeddigital.com/logo.png",
              "sameAs": [
                "https://twitter.com/heeddigital",
                "https://linkedin.com/company/heeddigital",
                "https://instagram.com/heeddigital"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "email": "info@heeddigital.co"
              },
              "serviceType": [
                "3D Animation & Modeling",
                "Video Content Creation & Editing",
                "UI/UX Design",
                "Content Writing",
                "Marketing Strategy",
                "Web Development"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
