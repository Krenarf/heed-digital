import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from './Container'

const projects = [
  {
    slug: 'synermuscle-3d-identity',
    title: 'SynerMuscle 3D Identity',
    summary: 'Character-led 3D identity and 12-video launch kit.',
    tags: ['3D', 'Editing', 'Strategy'],
    image: '/work/work-1.jpg'
  },
  {
    slug: 'fitness-app-ui-redesign',
    title: 'Fitness App UI Redesign',
    summary: 'Complete mobile app redesign improving user engagement by 45%.',
    tags: ['UI/UX', 'Design', 'Strategy'],
    image: '/work/work-2.jpg'
  },
  {
    slug: 'viral-marketing-video-series',
    title: 'Viral Marketing Video Series',
    summary: '12-part video campaign generating 2.8M organic views and 45K leads.',
    tags: ['Video', 'Editing', 'Strategy'],
    image: '/work/work-3.jpg'
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    summary: 'Custom e-commerce solution with advanced analytics and optimization.',
    tags: ['Code', 'UI/UX'],
    image: '/work/work-4.jpg'
  },
  {
    slug: 'architectural-render',
    title: 'Architectural Render',
    summary: 'High-end architectural visualization for luxury real estate project.',
    tags: ['3D', 'Modeling'],
    image: '/work/work-5.jpg'
  },
  {
    slug: 'social-media-campaign',
    title: 'Social Media Campaign',
    summary: 'Multi-platform campaign driving 300% increase in brand engagement.',
    tags: ['Strategy', 'Marketing'],
    image: '/work/work-6.jpg'
  }
]

export default function SelectedWork() {
  return (
    <section className="section-padding bg-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-fg">
            Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From napkin to shipped — a few highlights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-700/20">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gray-700 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-gray-400 z-10">
                      <div className="w-16 h-16 bg-brand/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="w-8 h-8 bg-brand rounded-full" />
                      </div>
                      <p className="text-sm font-medium">{project.title}</p>
                      <p className="text-xs opacity-60">Replace with {project.image}</p>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-lg mb-1">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {project.summary}
                            </p>
                          </div>
                          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-5 h-5 bg-black rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300 border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-xl font-bold text-fg mb-2 group-hover:text-brandA transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-fg">
            How we <span className="gradient-text">work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Discover</h4>
              <p className="text-sm text-gray-400">Goals, audience, success metrics</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Design</h4>
              <p className="text-sm text-gray-400">Concepts, styleframes, wireframes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Build</h4>
              <p className="text-sm text-gray-400">3D, edits, UI, code</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">4</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Scale</h4>
              <p className="text-sm text-gray-400">Versions, analytics, A/B tests</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800 rounded-2xl p-12 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-3xl font-bold mb-4 text-fg">
              Ready to See <span className="gradient-text">More</span>?
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Explore our full portfolio and discover how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work" className="btn-primary">
                View Full Portfolio
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start Your Project
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
