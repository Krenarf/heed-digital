'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'SynerMuscle 3D Identity',
    category: '3D Animation',
    image: '/work/work-1.jpg',
    type: 'image',
    slug: 'synermuscle-3d-identity'
  },
  {
    id: 2,
    title: 'Fitness App UI Redesign',
    category: 'UI/UX Design',
    image: '/work/work-2.jpg',
    type: 'image',
    slug: 'fitness-app-ui-redesign'
  },
  {
    id: 3,
    title: 'Viral Marketing Video Series',
    category: 'Video Production',
    image: '/work/work-3.jpg',
    type: 'video',
    slug: 'viral-marketing-video-series'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/work/work-4.jpg',
    type: 'image',
    slug: 'ecommerce-platform'
  },
  {
    id: 5,
    title: 'Architectural Render',
    category: '3D Modeling',
    image: '/work/work-5.jpg',
    type: 'image',
    slug: 'architectural-render'
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Marketing',
    image: '/work/work-6.jpg',
    type: 'image',
    slug: 'social-media-campaign'
  }
]

export default function Portfolio() {
  return (
    <section className="section-padding bg-surface">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore our latest work across 3D animation, video production, design, and development.
            Each project represents our commitment to creative excellence and technical innovation.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <Link href={`/work/${project.slug}`} className="block">
                {/* Project Image/Video Placeholder */}
                <div className="aspect-square bg-brand-gradient-subtle rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder content */}
                  <div className="text-center text-text-muted z-10">
                    {project.type === 'video' ? (
                      <div className="w-16 h-16 bg-brand-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Play className="w-8 h-8 text-brand-green" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-brand-blue/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-brand-blue" />
                      </div>
                    )}
                    <p className="text-sm font-medium">{project.title}</p>
                    <p className="text-xs opacity-60">{project.category}</p>
                    <p className="text-xs opacity-40 mt-2">Replace with {project.image}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {project.title}
                          </h3>
                          <p className="text-text-muted text-sm">
                            {project.category}
                          </p>
                        </div>
                        <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {project.type === 'video' ? (
                            <Play className="w-5 h-5 text-white ml-1" />
                          ) : (
                            <ExternalLink className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-brand-green text-sm font-medium">
                          View Project →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-brand-gradient" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to See <span className="gradient-text">More</span>?
            </h3>
            <p className="text-lg text-text-muted mb-8">
              Explore our full portfolio and discover how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work" className="btn-primary tap-target">
                View Full Portfolio
              </Link>
              <Link href="/contact" className="btn-secondary tap-target">
                Start Your Project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
