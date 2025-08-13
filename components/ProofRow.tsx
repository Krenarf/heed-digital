'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Globe, Users } from 'lucide-react'
import Container from './Container'

const metrics = [
  {
    icon: TrendingUp,
    value: '+400M',
    label: 'Organic Views',
    description: 'Across all platforms'
  },
  {
    icon: Clock,
    value: '<48h',
    label: 'Avg. Edit-to-Live',
    description: 'Fast turnaround time'
  },
  {
    icon: Globe,
    value: 'US/EU',
    label: 'Coverage',
    description: 'Global team presence'
  },
  {
    icon: Users,
    value: '150+',
    label: 'Happy Clients',
    description: 'Satisfaction rate 98%'
  }
]

export default function ProofRow() {
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            The <span className="gradient-text">Numbers</span> Don't Lie
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="p-8 bg-bg rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-700/20">
                <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="w-8 h-8 text-black" />
                </div>
                
                <div className="text-4xl font-bold text-fg mb-2 group-hover:text-brandA transition-colors duration-300">
                  {metric.value}
                </div>
                
                <div className="text-lg font-semibold text-fg mb-2">
                  {metric.label}
                </div>
                
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
