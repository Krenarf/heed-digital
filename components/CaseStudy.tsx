'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'

interface CaseStudyProps {
  title: string
  subtitle: string
  challenge: string
  strategy: string[]
  results: string[]
  visuals: {
    hero: string
    shots: string[]
  }
  category: '3d' | 'social' | 'design' | 'marketing'
}

export default function CaseStudy({
  title,
  subtitle,
  challenge,
  strategy,
  results,
  visuals,
  category
}: CaseStudyProps) {
  const categoryColors = {
    '3d': 'from-blue-500 to-purple-500',
    'social': 'from-purple-500 to-pink-500',
    'design': 'from-green-500 to-blue-500',
    'marketing': 'from-orange-500 to-red-500'
  }

  const categoryLabels = {
    '3d': '3D',
    'social': 'Social Media',
    'design': 'Design (UI/UX)',
    'marketing': 'Marketing'
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full text-sm text-slate-700 mb-6">
              <span className={`w-2 h-2 bg-gradient-to-r ${categoryColors[category]} rounded-full`}></span>
              {categoryLabels[category]}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
              {title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden mb-16"
          >
            <Image
              src={visuals.hero}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </Container>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-900">
                The Challenge
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {challenge}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Strategy Section */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-900">
                Our Strategy
              </h2>
              <ul className="space-y-4">
                {strategy.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${categoryColors[category]} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-lg text-slate-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-900">
                Results
              </h2>
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-lg text-slate-600">{result}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Visual Gallery */}
      <section className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Project Visuals
            </h2>
            <p className="text-lg text-slate-600">
              A selection of key moments from the project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visuals.shots.map((shot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden"
              >
                <Image
                  src={shot}
                  alt={`${title} - Shot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to start your project?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with the same level of creativity and strategic thinking.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
