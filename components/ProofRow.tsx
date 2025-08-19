'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, Globe, Users, Zap, Target, Sparkles, Award } from 'lucide-react'
import Container from './Container'

const metrics = [
  {
    icon: TrendingUp,
    value: '+400M',
    label: 'Organic Views',
    description: 'Across all platforms',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    value: '<48h',
    label: 'Avg. Edit-to-Live',
    description: 'Fast turnaround time',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    value: 'US/EU',
    label: 'Coverage',
    description: 'Global team presence',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    value: '150+',
    label: 'Happy Clients',
    description: 'Satisfaction rate 98%',
    color: 'from-orange-500 to-red-500'
  }
]

const achievements = [
  {
    icon: Zap,
    title: '430k+ Followers',
    description: 'Built organically in 3 months for SynerMuscle',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: '45% Engagement',
    description: 'Average increase in user engagement',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Sparkles,
    title: '2.8M Views',
    description: 'Viral marketing campaign success',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function ProofRow() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white">
            The <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Numbers</span> Don't Lie
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            +400M organic views · Edit → live &lt; 48h · US/EU coverage · 98% client satisfaction
          </p>
        </motion.div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                <div className={`w-20 h-20 bg-gradient-to-r ${metric.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <metric.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-5xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {metric.value}
                </div>
                
                <div className="text-xl font-bold text-white mb-3">
                  {metric.label}
                </div>
                
                <div className="text-gray-300 leading-relaxed">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
            Recent <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:scale-105 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-16 max-w-5xl mx-auto border border-white/10">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Trusted by <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">500+ Brands</span> Worldwide
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              From startups to Fortune 500 companies, we've helped businesses across industries achieve their creative and marketing goals.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Fitness & Health</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Technology</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">E-commerce</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Entertainment</span>
              <span className="px-4 py-2 bg-white/10 rounded-full border border-white/20">Education</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
