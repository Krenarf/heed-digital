import Hero from '@/components/Hero'
import Services from '@/components/Services'
import SelectedWork from '@/components/SelectedWork'
import ProofRow from '@/components/ProofRow'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <SelectedWork />
      <ProofRow />
      <Footer />
    </main>
  )
}
