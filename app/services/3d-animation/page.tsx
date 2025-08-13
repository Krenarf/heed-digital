import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Container from '@/components/Container'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: '3D Animation & Modeling - Heed Digital',
  description: 'Character, product, and brand 3D that looks expensive and feels alive.',
  openGraph: {
    title: '3D Animation & Modeling - Heed Digital',
    description: 'Character, product, and brand 3D that looks expensive and feels alive.',
  },
}

const whatYouGet = [
  'Styleframes',
  'Modeling & texturing',
  'Animation',
  '10–30s loops',
  'Promo cuts',
  'Social exports'
]

const deliverables = [
  'MP4/ProRes renders',
  'PNG/JPG stills',
  'Source files (add-on)'
]

const relatedWork = [
  {
    title: 'SynerMuscle 3D Identity',
    summary: 'Character-led 3D identity and 12-video launch kit.',
    image: '/work/work-1.jpg',
    slug: 'synermuscle-3d-identity'
  },
  {
    title: 'Architectural Render',
    summary: 'High-end architectural visualization for luxury real estate.',
    image: '/work/work-5.jpg',
    slug: 'architectural-render'
  },
  {
    title: 'Product 3D Showcase',
    summary: 'Interactive 3D product presentations for e-commerce.',
    image: '/work/work-6.jpg',
    slug: 'product-3d-showcase'
  }
]

export default function ThreeDAnimationPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Breadcrumbs */}
      <nav className="section-padding bg-gray-800">
        <Container>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-fg transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-fg transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-fg">3D Animation & Modeling</span>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-bg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back button */}
            <Link 
              href="/services" 
              className="inline-flex items-center text-gray-400 hover:text-fg transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* Service header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-fg">
                3D Animation & <span className="gradient-text">Modeling</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Character, product, and brand 3D that looks expensive and feels alive.
              </p>
            </div>

            {/* Pricing card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-center mb-12">
              <div className="text-6xl font-bold text-brandA mb-4">
                From $X
              </div>
              <p className="text-gray-400 mb-6">
                Starting price for this service
              </p>
              <Button href="/contact" variant="primary">
                Get Started
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* What You Get Section */}
      <section className="section-padding bg-gray-800">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-fg">
                What You <span className="gradient-text">Get</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Check className="w-6 h-6 text-brandA mt-1 flex-shrink-0" />
                  <span className="text-fg">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Deliverables & Timeline Section */}
      <section className="section-padding bg-bg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-fg">
                  <span className="gradient-text">Deliverables</span>
                </h3>
                <div className="space-y-4">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brandA rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-400">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-fg">
                  <span className="gradient-text">Timeline</span>
                </h3>
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-brandA" />
                    <span className="text-lg font-semibold text-fg">Project Duration</span>
                  </div>
                  <p className="text-2xl font-bold text-fg mb-2">
                    1–3 weeks
                  </p>
                  <p className="text-gray-400 text-sm">
                    From project kickoff to final delivery
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Work Section */}
      <section className="section-padding bg-gray-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-fg">
              Related <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See examples of our 3D work in action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedWork.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="bg-bg rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-700/20">
                    <div className="relative aspect-video">
                      <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="w-16 h-16 bg-brand/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-brand rounded-full" />
                          </div>
                          <p className="text-sm font-medium">{project.title}</p>
                          <p className="text-xs opacity-60">Replace with {project.image}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-fg mb-2 group-hover:text-brandA transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {project.summary}
                      </p>
                      <div className="flex items-center text-brandA group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium">View Project</span>
                        <div className="w-4 h-4 ml-2 bg-brandA rounded-full" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-fg">
                Ready when you <span className="gradient-text">are</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <Button href="/contact" variant="primary">
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}
