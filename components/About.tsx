'use client'

import { motion } from 'framer-motion'
import { Users, Award, Zap } from 'lucide-react'
import assets from '@/content/assets.json'

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-gray">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              We're a <span className="gradient-text">Full Creative Team</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At Heed Digital, we're not just individual freelancers—we're a collaborative creative 
              powerhouse. Our multidisciplinary team combines expertise in 3D animation, video production, 
              design, and development to deliver projects that exceed expectations.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              With years of combined experience across industries, we understand what it takes to create 
              content that not only looks stunning but drives real business results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
            </div>
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
              {/* Placeholder image - replace with actual image later */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-900/20 to-accent/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-sm">Team Photo</p>
                  <p className="text-xs opacity-60">Replace with /public/about.jpg</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
