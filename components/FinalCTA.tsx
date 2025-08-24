'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 max-w-5xl mx-auto text-white shadow-2xl border border-white/20">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Let's build something that <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">scales</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Our hybrid approach combines 3D, UI/UX, and marketing strategy to give you a competitive edge that compounds over time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="/work" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 group"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
