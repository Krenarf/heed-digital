'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/content/work'

export default function WorkOverview() {
  return (
    <main className="min-h-dvh bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Explore our portfolio of creative projects that demonstrate our expertise across 
              3D animation, video production, UI/UX design, and web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16 safe-area-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Project Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.hero}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-white font-semibold text-lg mb-1">
                                {project.title}
                              </h3>
                              <p className="text-white/80 text-sm">
                                {project.category}
                              </p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <ExternalLink className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <span className="text-emerald-400 text-sm font-medium">
                              View Project →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 bg-gray-900">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.summary}
                      </p>
                      
                      {/* Category */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                          {project.category}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Create Something <span className="gradient-text">Amazing</span>?
              </h3>
              <p className="text-lg text-text-muted mb-8">
                Let's discuss your project and show you how we can bring your vision to life.
              </p>
              <Link href="/contact" className="btn-primary tap-target">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
