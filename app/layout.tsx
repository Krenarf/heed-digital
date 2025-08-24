import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
})

export const metadata: Metadata = {
  title: 'Heed Digital - NYC Creative Studio | 3D, Social, Design & Marketing',
  description: 'New York–based. Working worldwide. We make ideas hit harder.',
  keywords: '3D animation, social media, UI/UX design, marketing strategy, NYC creative studio',
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
    title: 'Heed Digital - NYC Creative Studio',
    description: 'New York–based. Working worldwide. We make ideas hit harder.',
    siteName: 'Heed Digital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heed Digital - NYC Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heed Digital - NYC Creative Studio',
    description: 'New York–based. Working worldwide. We make ideas hit harder.',
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
      <body className={`${inter.className} ${plusJakarta.variable}`}>
        <Header />
        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Heed Digital",
              "description": "New York–based. Working worldwide. We make ideas hit harder.",
              "url": "https://heeddigital.com",
              "logo": "https://heeddigital.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/heeddigital",
                "https://linkedin.com/company/heeddigital",
                "https://instagram.com/heeddigital"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@heeddigital.co"
              },
              "serviceType": [
                "3D Animation & Modeling",
                "Social Media Content & Strategy",
                "UI/UX Design",
                "Marketing Strategy"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
