import { Metadata } from 'next'
import WorkOverview from '@/components/WorkOverview'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Work - Heed Digital | Portfolio & Case Studies',
  description: 'Proof over promises. Explore 3D, Social, Design, and Marketing case studies.',
  openGraph: {
    title: 'Our Work - Heed Digital',
    description: 'Proof over promises. Explore 3D, Social, Design, and Marketing case studies.',
  },
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Cool TOP PICKS Title */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            TOP <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">PICKS</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our best work that speaks for itself. No fluff, just results.
          </p>
        </div>
      </section>
      
      {/* WorkOverview Component with dark background */}
      <WorkOverview />
    </main>
  )
}
