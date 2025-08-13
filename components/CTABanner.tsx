'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="section-padding bg-brand-gradient-subtle relative overflow-hidden">
      {/* Background gradient strip */}
      <div className="absolute inset-0 bg-brand-gradient opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-text">
            Your growth engine,{' '}
            <span className="gradient-text">in one team.</span>
          </h2>
          
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-8">
            Ready to make your ideas hit harder? Let's discuss how we can transform your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="btn-primary tap-target flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/work"
              className="btn-secondary tap-target"
            >
              View Our Work
            </Link>
          </div>
          
          <div className="mt-8 text-text-muted">
            <p className="text-sm">
              No commitment required • Free consultation • Response within 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
