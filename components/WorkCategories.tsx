'use client'

import { motion } from 'framer-motion'
import { Box, Share2, Palette, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'

const categories = [
  {
    icon: Box,
    title: '3D',
    description: 'Explainers, product videos, modeling, architectural renders',
    color: 'from-blue-500 to-purple-500',
    delay: 0.1,
    href: '/work#3d'
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Growth systems: content, strategy, analytics',
    color: 'from-purple-500 to-pink-500',
    delay: 0.2,
    href: '/work#social'
  },
  {
    icon: Palette,
    title: 'Design (UI/UX)',
    description: 'AI apps, chat interfaces, fitness experiences',
    color: 'from-green-500 to-blue-500',
    delay: 0.3,
    href: '/work#design'
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Strategy, organic playbooks, paid performance',
    color: 'from-orange-500 to-red-500',
    delay: 0.4,
    href: '/work#marketing'
  }
]

export default function WorkCategories() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-slate-900">
            What we <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">build</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Four core disciplines, one unified approach to creative problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: category.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={category.href} className="block">
                <div className="relative p-8 bg-white rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:bg-white/80 hover:scale-105 h-full shadow-lg hover:shadow-2xl">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="relative z-10 mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-8 text-base">
                      {category.description}
                    </p>

                    {/* Learn more button */}
                    <div className="flex items-center text-blue-600 group-hover:text-purple-600 transition-colors duration-300 font-semibold">
                      <span className="text-sm">Explore Category</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Enhanced hover effect border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
