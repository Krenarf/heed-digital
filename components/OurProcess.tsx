'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Hammer, TrendingUp } from 'lucide-react'
import Container from './Container'

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Goals, audience, success metrics',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Concepts, styleframes, wireframes',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Hammer,
    title: 'Build',
    description: '3D, edits, UI, code',
    color: 'from-green-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Versions, analytics, A/B tests',
    color: 'from-orange-500 to-red-500'
  }
]

export default function OurProcess() {
  return (
    <section className="section-padding bg-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-fg">
            How we <span className="gradient-text">work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven process that delivers results without the chaos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-fg mb-3 text-lg">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
