'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg" />
        
        {/* Brand gradient background */}
        <div className="absolute inset-0 bg-brand-subtle" />
        
        {/* Simple animated background elements (no heavy 3D on mobile) */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-brandA/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-brandB/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">We make ideas</span>
              <span className="block gradient-text">hit harder.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            3D, editing, UI/UX, strategy, and code — one studio.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-fg mb-2">Senior-level craft</h3>
              <p className="text-sm text-gray-400">We ship crisp visuals and tight UX.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-fg mb-2">Speed without chaos</h3>
              <p className="text-sm text-gray-400">Clear scopes, weekly drops, no mystery.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-fg mb-2">Strategy before pixels</h3>
              <p className="text-sm text-gray-400">We build what moves your metrics.</p>
            </div>
          </motion.div>

                      <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
            <Button href="/contact" variant="primary">
              Start Your Project
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </Button>

            <Button href="/work" variant="secondary">
              <Play className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-400 hover:text-fg transition-colors cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-2 h-2 bg-brandA rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-3 h-3 bg-brandB rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  )
}
