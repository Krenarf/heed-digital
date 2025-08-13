'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Target,
  Cpu,
  Users
} from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: Sparkles,
    title: 'Creative Excellence',
    description: 'We push creative boundaries to deliver work that\'s not just beautiful, but strategically brilliant and memorable.',
    color: 'from-brand-green to-brand-blue',
    delay: 0.1
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every project is designed with clear business objectives and measurable outcomes that drive real growth.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.2
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Tech',
    description: 'We stay ahead of industry trends, using the latest tools and technologies to deliver exceptional results.',
    color: 'from-brand-green to-brand-blue',
    delay: 0.3
  },
  {
    icon: Users,
    title: 'Full-Service Team',
    description: 'From concept to completion, our multidisciplinary team handles every aspect of your project seamlessly.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.4
  }
]

export default function WhyWorkWithUs() {
  return (
    <section className="section-padding bg-background">
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
            Why Work <span className="gradient-text">With Us</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            We don't just create—we innovate, strategize, and deliver results that exceed expectations.
            Here's what sets us apart in the creative industry.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reason.delay }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-surface rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-surface-hover h-full">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <reason.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-brand-green transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the <span className="gradient-text">Difference</span>?
            </h3>
            <p className="text-lg text-text-muted mb-8">
              Let's discuss your project and show you how our approach can transform your vision into reality.
            </p>
            <Link href="/contact" className="btn-primary tap-target">
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
