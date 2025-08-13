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

const services = [
  {
    icon: Box,
    title: '3D Animation & Modeling',
    description: 'Bring your ideas to life with stunning 3D animations, product visualizations, and architectural renders.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.1
  },
  {
    icon: Video,
    title: 'Video Content Creation',
    description: 'Professional video production, editing, and post-production for commercials, social media, and more.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging digital experiences across all platforms.',
    color: 'from-green-500 to-emerald-500',
    delay: 0.3
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Compelling copy that connects with your audience and drives action across all marketing channels.',
    color: 'from-orange-500 to-red-500',
    delay: 0.4
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description: 'Data-driven marketing strategies that grow your brand and deliver measurable business results.',
    color: 'from-indigo-500 to-blue-500',
    delay: 0.5
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    color: 'from-yellow-500 to-orange-500',
    delay: 0.6
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a complete range of creative and digital services to help your business stand out 
            and succeed in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-dark-gray rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-dark-gray/80 h-full">
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
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Learn more button */}
                  <div className="flex items-center text-accent group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Need a <span className="gradient-text">Custom Solution</span>?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can create something unique for your business.
            </p>
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-cursor="hover"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
