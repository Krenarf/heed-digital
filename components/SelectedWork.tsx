import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from './Container'
import { ArrowRight, Play, Zap, Target, Sparkles } from 'lucide-react'

const projects = [
  {
    slug: 'synermuscle-3d-identity',
    title: 'SynerMuscle – Fitness Brand & 3D Identity',
    summary: 'Comprehensive work across UI/UX, social media, marketing strategies, influencer collaborations, ad campaigns, and brand identity. Built a following of 430k+ in 3 months organically.',
    tags: ['3D', 'UI/UX', 'Strategy', 'Marketing'],
    image: '/work/synermuscle.jpg',
    stats: '430k+ followers in 3 months',
    icon: Zap
  },
  {
    slug: 'fitonomy-fitness-app',
    title: 'Fitonomy – Fitness App',
    summary: 'Led UI/UX design, content creation, ad strategy, and character design. Delivered complete in-app experiences plus external marketing campaigns.',
    tags: ['UI/UX', 'Design', 'Strategy', 'Content'],
    image: '/work/fitonomy.jpg',
    stats: 'Complete app experience',
    icon: Target
  },
  {
    slug: 'forcafit-workout-app',
    title: 'ForcaFit – Comprehensive Workout App',
    summary: 'Created UI/UX flow and promotional animations, including real video content with VFX integration for ads.',
    tags: ['UI/UX', '3D', 'VFX', 'Video'],
    image: '/work/forcafit.jpg',
    stats: 'VFX-integrated content',
    icon: Play
  },
  {
    slug: 'mr-brainboost-3d-series',
    title: 'Mr. Brainboost – 3D Animated Science Series',
    summary: 'Produced 3D educational content, creating animated explainers for science facts and storytelling, optimized for social media engagement.',
    tags: ['3D', 'Animation', 'Education', 'Social'],
    image: '/work/brainboost.jpg',
    stats: 'Educational 3D content',
    icon: Sparkles
  },
  {
    slug: 'sekuence-music-videos',
    title: 'Sekuence – Music Videos',
    summary: 'Provided VFX, 3D elements, and advanced editing for multiple music videos, enhancing visuals with cinematic effects.',
    tags: ['VFX', '3D', 'Editing', 'Music'],
    image: '/work/sekuence.jpg',
    stats: 'Cinematic VFX integration',
    icon: Play
  },
  {
    slug: 'chaton-ai-assistant',
    title: 'ChatOn – AI-Powered Assistant App',
    summary: 'Handled UI/UX and animated design, crafting a modern identity and product animations.',
    tags: ['UI/UX', 'AI', 'Animation', 'Design'],
    image: '/work/chaton.jpg',
    stats: 'Modern AI interface',
    icon: Zap
  }
]

export default function SelectedWork() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white">
            Recent <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From napkin sketches to shipped masterpieces — here's how we make ideas hit harder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
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
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                  {/* Image placeholder with enhanced design */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-gray-300 z-10 p-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-lg font-bold text-white mb-2">{project.title}</p>
                      <p className="text-sm opacity-80">Replace with {project.image}</p>
                    </div>
                    
                    {/* Enhanced hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-8 w-full">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-white font-bold text-xl mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                              {project.summary}
                            </p>
                            <div className="text-blue-400 font-semibold text-sm">
                              {project.stats}
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.summary}
                    </p>
                    
                    {/* Stats */}
                    <div className="text-blue-400 font-semibold text-sm">
                      {project.stats}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl font-black mb-12 text-white">
            How we <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Discover', desc: 'Goals, audience, success metrics', icon: '🎯' },
              { step: '2', title: 'Design', desc: 'Concepts, styleframes, wireframes', icon: '✏️' },
              { step: '3', title: 'Build', desc: '3D, edits, UI, code', icon: '🚀' },
              { step: '4', title: 'Scale', desc: 'Versions, analytics, A/B tests', icon: '📈' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-16 max-w-5xl mx-auto border border-white/10">
            <h3 className="text-4xl font-black mb-6 text-white">
              Ready to See <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">More</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore our full portfolio and discover how we can bring your vision to life with our hybrid approach to 3D, UI/UX, and marketing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/work" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                View Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
