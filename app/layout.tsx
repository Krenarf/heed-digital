import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Heed Digital - Creative Agency | 3D Animation, Design & Development',
  description: 'A multidisciplinary creative agency delivering standout 3D, design, and digital experiences. Specializing in 3D animation, video content, UI/UX design, and web development.',
  keywords: '3D animation, video editing, UI/UX design, content writing, marketing strategy, web development, creative agency',
  authors: [{ name: 'Heed Digital' }],
  creator: 'Heed Digital',
  publisher: 'Heed Digital',
  robots: 'index, follow',
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
    description: 'A multidisciplinary creative agency delivering standout 3D, design, and digital experiences.',
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
    description: 'A multidisciplinary creative agency delivering standout 3D, design, and digital experiences.',
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6B35',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        {children}
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Heed Digital",
              "description": "A multidisciplinary creative agency delivering standout 3D, design, and digital experiences.",
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
                "email": "hello@heeddigital.com"
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
