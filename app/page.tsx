import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import SelectedWork from '@/components/SelectedWork'
import ProofRow from '@/components/ProofRow'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <SelectedWork />
      <ProofRow />
      <CTABanner />
      <Footer />
    </main>
  )
}
