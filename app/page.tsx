import Hero from '@/components/Hero'
import ImpactRow from '@/components/ImpactRow'
import TrustedBy from '@/components/TrustedBy'
import WorkCategories from '@/components/WorkCategories'
import SelectedWork from '@/components/SelectedWork'
import OurProcess from '@/components/OurProcess'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactRow />
      <TrustedBy />
      <WorkCategories />
      <SelectedWork />
      <OurProcess />
      <FinalCTA />
      <Footer />
    </main>
  )
}
