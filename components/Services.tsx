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
    color: 'from-blue-500 to-purple-500',
    delay: 0.1,
    slug: '3d-animation'
  },
  {
    icon: Video,
    title: 'Video Content Creation',
    description: 'Professional video production, editing, and post-production for commercials, social media, and more.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
    slug: 'video-editing'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging digital experiences across all platforms.',
    color: 'from-green-500 to-blue-500',
    delay: 0.3,
    slug: 'ui-ux'
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Compelling copy that connects with your audience and drives action across all marketing channels.',
    color: 'from-orange-500 to-red-500',
    delay: 0.4,
    slug: 'content-writing'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description: 'Data-driven marketing strategies that grow your brand and deliver measurable business results.',
    color: 'from-cyan-500 to-blue-500',
    delay: 0.5,
    slug: 'marketing'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    color: 'from-indigo-500 to-purple-500',
    delay: 0.6,
    slug: 'coding'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-slate-900">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We offer a complete range of creative and digital services to help your business stand out
            and succeed in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:bg-white/80 hover:scale-105 h-full shadow-lg hover:shadow-2xl">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="relative z-10 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>

                    {/* Learn more button */}
                    <div className="flex items-center text-blue-600 group-hover:text-purple-600 transition-colors duration-300 font-semibold">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Enhanced hover effect border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 max-w-5xl mx-auto text-white shadow-2xl">
            <h3 className="text-4xl font-black mb-6">
              Need a <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Custom Solution</span>?
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can create something unique for your business. Our hybrid approach combines 3D, UI/UX, and marketing strategy to give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/work" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
