import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import WhyWorkWithUs from '@/components/WhyWorkWithUs'
import ProofRow from '@/components/ProofRow'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyWorkWithUs />
      <ProofRow />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  )
}
