'use client'

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
    title: 'Senior-level craft',
    description: 'We ship crisp visuals and tight UX that converts.'
  },
  {
    icon: Target,
    title: 'Speed without chaos',
    description: 'Clear scopes, weekly drops, no mystery or delays.'
  },
  {
    icon: Cpu,
    title: 'Strategy before pixels',
    description: 'We build what moves your metrics and grows your business.'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Built in New York. <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Optimized for outcomes</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Heed Digital is a small, senior-led studio blending 3D, social content systems, UI/UX, and performance marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We move fast without chaos: strategy first, then production that compounds.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Over 10 projects shipped across apps, content, and product.
            </p>
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A diverse group of creative professionals working together to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamRoles.map((role, index) => (
              <div
                key={role.title}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{role.title}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{role.count}</div>
                  <p className="text-slate-300">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-16 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xl text-slate-300">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                New York–based. Working worldwide.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
