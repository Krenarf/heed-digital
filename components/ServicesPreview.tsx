import { motion } from 'framer-motion'
import { Box, Video, Palette, PenTool, TrendingUp, Code } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'

const services = [
  {
    icon: Box,
    title: '3D Animation & Modeling',
    description: 'Signature 3D that stops the scroll.',
    bullets: ['Character/product 3D', 'Styleframes', '10–30s loops', 'Promos', 'Exports for social'],
    slug: '3d-animation'
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Hooks, pacing, and polish.',
    bullets: ['Shorts', 'Kinetic type', 'Captions/SRT', '3–5 variants', 'Thumbnail'],
    slug: 'video-editing'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Clean designs that convert.',
    bullets: ['Landing pages', 'Onboarding', 'Design tokens', 'Component library'],
    slug: 'ui-ux'
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Words that carry the video.',
    bullets: ['Hooks', 'Scripts', 'Captions', 'Case blurbs', 'Voice & tone'],
    slug: 'content-writing'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description: 'Clarity on what to make and why.',
    bullets: ['Positioning', 'Content calendar', 'KPI dashboard', 'Creator collabs'],
    slug: 'marketing-strategy'
  },
  {
    icon: Code,
    title: 'Code (Web Dev)',
    description: 'Fast sites, real analytics, A/B tests.',
    bullets: ['Next.js builds', 'CMS wiring', 'Analytics', 'Experiments'],
    slug: 'code'
  }
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-fg">
            What we <span className="gradient-text">do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end support for content and product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-bg rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-700/20 p-8 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-fg mb-4 group-hover:text-brandA transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-brandA rounded-full mr-3" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-brandA hover:text-brandB transition-colors duration-300 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
