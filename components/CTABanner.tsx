'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'
import Button from './Button'

export default function CTABanner() {
  return (
    <section className="section-padding bg-brand-subtle relative overflow-hidden">
      {/* Background gradient strip */}
      <div className="absolute inset-0 bg-brand opacity-10"></div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-fg">
            Your growth engine,{' '}
            <span className="gradient-text">in one team.</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Ready to make your ideas hit harder? Let's discuss how we can transform your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href="/contact"
              variant="primary"
              className="flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              href="/work"
              variant="secondary"
            >
              View Our Work
            </Button>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p className="text-sm">
              No commitment required • Free consultation • Response within 24h
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
