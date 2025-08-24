'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Download, BarChart3 } from 'lucide-react'
import Container from './Container'

const stats = [
  {
    icon: TrendingUp,
    value: '150M+',
    label: 'views in 3 months (organic)',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Users,
    value: '700K+',
    label: 'followers grown',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Download,
    value: 'App installs',
    label: 'driven',
    color: 'from-green-500 to-blue-500'
  },
  {
    icon: BarChart3,
    value: 'High-retention',
    label: 'content systems',
    color: 'from-orange-500 to-red-500'
  }
]

export default function ImpactRow() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            Impact that <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">scales</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real projects. Here's what we've delivered for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
