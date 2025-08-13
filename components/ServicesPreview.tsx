import { motion } from 'framer-motion'
import { Box, Video, Palette, PenTool, TrendingUp, Code } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'

const services = [
  {
    icon: Box,
    title: '3D Animation & Modeling',
    description: 'Bring your ideas to life with stunning 3D animations and visualizations.',
    bullets: ['Character animation', 'Product renders', 'Motion graphics', 'Architectural viz'],
    slug: '3d-animation'
  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video production and post-production for all platforms.',
    bullets: ['Short-form content', 'Kinetic typography', 'Color grading', 'Motion graphics'],
    slug: 'video-editing'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging digital experiences.',
    bullets: ['User research', 'Wireframes', 'Prototypes', 'Design systems'],
    slug: 'ui-ux'
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Compelling copy that connects with your audience and drives action.',
    bullets: ['Website copy', 'Social media', 'Email campaigns', 'SEO content'],
    slug: 'content-writing'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description: 'Data-driven strategies that grow your brand and deliver results.',
    bullets: ['Market research', 'Campaign planning', 'Performance tracking', 'ROI optimization'],
    slug: 'marketing'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and applications built with modern technologies.',
    bullets: ['Next.js apps', 'E-commerce', 'API integration', 'Performance optimization'],
    slug: 'coding'
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a complete range of creative and digital services to help your business stand out and succeed.
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
