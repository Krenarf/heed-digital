'use client'

import { motion } from 'framer-motion'
import {
  Box,
  Video,
  Palette,
  PenTool,
  TrendingUp,
  Code,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Box,
    title: '3D Animation & Modeling',
    description: 'Bring your ideas to life with stunning 3D animations, product visualizations, and architectural renders.',
    color: 'from-brand-green to-brand-blue',
    delay: 0.1,
    slug: '3d-animation',
    features: ['Character Animation', 'Product Visualization', 'Architectural Renders', 'Motion Graphics']
  },
  {
    icon: Video,
    title: 'Video Content Creation',
    description: 'Professional video production, editing, and post-production for commercials, social media, and more.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.2,
    slug: 'video-editing',
    features: ['Commercial Production', 'Social Media Content', 'Post-Production', 'Motion Graphics']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging digital experiences across all platforms.',
    color: 'from-brand-green to-brand-blue',
    delay: 0.3,
    slug: 'ui-ux',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Compelling copy that connects with your audience and drives action across all marketing channels.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.4,
    slug: 'content-writing',
    features: ['Brand Messaging', 'Website Copy', 'Marketing Materials', 'SEO Content']
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description: 'Data-driven marketing strategies that grow your brand and deliver measurable business results.',
    color: 'from-brand-green to-brand-blue',
    delay: 0.5,
    slug: 'marketing',
    features: ['Brand Strategy', 'Digital Marketing', 'Content Strategy', 'Analytics']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.6,
    slug: 'coding',
    features: ['Custom Websites', 'Web Applications', 'E-commerce', 'API Development']
  }
]

export default function ServicesOverview() {
  return (
    <main className="min-h-dvh bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We offer a complete range of creative and digital services to help your business stand out
              and succeed in today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 safe-area-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative p-8 bg-surface rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-surface-hover h-full">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-text mb-4 group-hover:text-brand-green transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-text mb-3">What you get:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-text-muted">
                              <div className="w-2 h-2 bg-brand-green rounded-full mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learn more button */}
                      <div className="flex items-center text-brand-green group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Need a <span className="gradient-text">Custom Solution</span>?
              </h3>
              <p className="text-lg text-text-muted mb-8">
                Let's discuss how we can create something unique for your business.
              </p>
              <Link href="/contact" className="btn-primary tap-target">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
