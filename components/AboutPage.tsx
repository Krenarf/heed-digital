'use client'

import { motion } from 'framer-motion'
import { Users, Award, Zap, Target, Sparkles, Cpu } from 'lucide-react'
import Link from 'next/link'

const teamRoles = [
  { title: 'Creative Directors', count: '2', description: 'Lead vision and strategy' },
  { title: '3D Artists', count: '3', description: 'Animation and modeling experts' },
  { title: 'Video Editors', count: '2', description: 'Post-production specialists' },
  { title: 'UI/UX Designers', count: '2', description: 'Digital experience creators' },
  { title: 'Developers', count: '2', description: 'Full-stack web experts' },
  { title: 'Strategists', count: '2', description: 'Marketing and growth focused' }
]

const values = [
  {
    icon: Sparkles,
    title: 'Creative Excellence',
    description: 'We push creative boundaries to deliver work that\'s not just beautiful, but strategically brilliant and memorable.'
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every project is designed with clear business objectives and measurable outcomes that drive real growth.'
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Tech',
    description: 'We stay ahead of industry trends, using the latest tools and technologies to deliver exceptional results.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe the best work comes from diverse perspectives working together toward a common goal.'
  }
]

export default function AboutPage() {
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
              About <span className="gradient-text">Heed Digital</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              We're a multidisciplinary creative agency that makes ideas hit harder through 
              strategic thinking, creative excellence, and technical innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 safe-area-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Our <span className="gradient-text">Story</span>
              </h2>

              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                Founded in 2019, Heed Digital emerged from a simple belief: that creative work 
                should do more than look good—it should drive real business results.
              </p>

              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                What started as a small team of passionate creators has grown into a full-service 
                agency that handles every aspect of creative production, from initial concept to 
                final delivery.
              </p>

              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Today, we're proud to work with brands across industries, helping them stand out 
                in an increasingly competitive digital landscape.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] bg-brand-gradient-subtle rounded-2xl border border-white/10 flex items-center justify-center">
                  <div className="text-center text-text-muted">
                    <div className="w-16 h-16 bg-brand-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-brand-green" />
                    </div>
                    <p className="text-sm">Team Photo</p>
                    <p className="text-xs opacity-60">Replace with /public/about.jpg</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-16 safe-area-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              A diverse group of creative professionals working together to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background rounded-2xl border border-white/10"
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{role.count}</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-2">{role.title}</h3>
                <p className="text-text-muted">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-surface rounded-2xl border border-white/10"
              >
                <div className="w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 safe-area-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-text">8+</div>
              <div className="text-sm text-text-muted">Team Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-text">150+</div>
              <div className="text-sm text-text-muted">Projects Delivered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Zap className="w-8 h-8 text-brand-green mx-auto mb-3" />
              <div className="text-2xl font-bold text-text">5+</div>
              <div className="text-sm text-text-muted">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Work <span className="gradient-text">Together</span>?
              </h3>
              <p className="text-lg text-text-muted mb-8">
                Let's discuss your project and show you how our team can bring your vision to life.
              </p>
              <Link href="/contact" className="btn-primary tap-target">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
