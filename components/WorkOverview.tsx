'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'SynerMuscle 3D Identity',
    summary: 'Character-led 3D identity and 12-video launch kit.',
    category: '3D Animation',
    image: '/work/work-1.jpg',
    type: 'image',
    slug: 'synermuscle-3d-identity',
    tags: ['3D', 'Editing', 'Strategy']
  },
  {
    id: 2,
    title: 'Fitness App UI Redesign',
    summary: 'Complete mobile app redesign with improved user experience.',
    category: 'UI/UX Design',
    image: '/work/work-2.jpg',
    type: 'image',
    slug: 'fitness-app-ui-redesign',
    tags: ['UI/UX', 'Mobile', 'Design']
  },
  {
    id: 3,
    title: 'Viral Marketing Video Series',
    summary: '12-part video series that generated 3.1M+ views.',
    category: 'Video Production',
    image: '/work/work-3.jpg',
    type: 'video',
    slug: 'viral-marketing-video-series',
    tags: ['Video', 'Marketing', 'Strategy']
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    summary: 'Custom e-commerce solution with advanced features.',
    category: 'Web Development',
    image: '/work/work-4.jpg',
    type: 'image',
    slug: 'ecommerce-platform',
    tags: ['Web', 'E-commerce', 'Development']
  },
  {
    id: 5,
    title: 'Architectural Render',
    summary: 'High-quality 3D architectural visualization.',
    category: '3D Modeling',
    image: '/work/work-5.jpg',
    type: 'image',
    slug: 'architectural-render',
    tags: ['3D', 'Architecture', 'Modeling']
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    summary: 'Multi-platform social media marketing campaign.',
    category: 'Marketing',
    image: '/work/work-6.jpg',
    type: 'image',
    slug: 'social-media-campaign',
    tags: ['Marketing', 'Social Media', 'Strategy']
  }
]

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
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Project Image/Video Placeholder */}
                    <div className="aspect-[4/3] bg-brand-gradient-subtle flex items-center justify-center relative overflow-hidden">
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
                    </div>

                    {/* Project Info */}
                    <div className="p-6 bg-surface">
                      <h3 className="text-xl font-bold text-text mb-2 group-hover:text-brand-green transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-text-muted mb-4 leading-relaxed">
                        {project.summary}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
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
