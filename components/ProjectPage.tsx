'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Project } from '@/content/work'

interface ProjectPageProps {
  project: Project
}

export default function ProjectPage({ project }: ProjectPageProps) {
  // Auto-play videos when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            // Play video when it comes into view
            video.play().catch(() => {
              // Fallback if autoplay fails
              console.log('Autoplay prevented by browser')
            })
          } else {
            // Pause video when it goes out of view
            video.pause()
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of video is visible
        rootMargin: '0px 0px -100px 0px' // Start playing slightly before video is fully in view
      }
    )

    // Observe all video elements
    const videos = document.querySelectorAll('video')
    videos.forEach((video) => {
      observer.observe(video)
    })

    return () => {
      videos.forEach((video) => {
        observer.unobserve(video)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce hidden md:block" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse hidden md:block" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce hidden md:block" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-pink-400/25 rounded-full animate-pulse hidden md:block" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-bounce hidden md:block" style={{animationDelay: '1.5s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse hidden lg:block" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Back Navigation */}
      <section className="pt-8 pb-4 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            href="/work" 
            className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-colors duration-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 hover:border-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30 backdrop-blur-sm mb-6">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Hero Image/Video */}
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 shadow-2xl group">
            {project.heroVideo ? (
              <video
                src={project.heroVideo}
                poster={project.hero}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                muted
                loop
                playsInline
                autoPlay
              />
            ) : (
              <Image
                src={project.hero}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Auto-play indicator */}
            {project.heroVideo && (
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
                Auto-play
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
              <p className="text-slate-300 leading-relaxed">
                {project.category === "3D Animation" && "Create compelling 3D content that stands out in crowded social media feeds and drives organic growth."}
                {project.category === "UI/UX" && "Design intuitive user experiences that convert visitors into engaged users while maintaining brand consistency."}
                {project.category === "Product" && "Build user-friendly interfaces that make complex AI interactions feel natural and engaging."}
                {project.category === "VFX" && "Enhance music videos with seamless 3D integration and cinematic visual effects that elevate the final product."}
                {project.category === "Branding" && "Develop distinctive visual identities that communicate brand values and resonate with target audiences."}
                {project.category === "Video" && "Produce high-quality video content that captures attention and drives engagement across multiple platforms."}
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
              <p className="text-slate-300 leading-relaxed">
                {project.category === "3D Animation" && "Developed unique character designs, established consistent visual language, and created scalable content systems for rapid growth."}
                {project.category === "UI/UX" && "Conducted user research, designed intuitive flows, and created comprehensive design systems that scale across platforms."}
                {project.category === "Product" && "Focused on human-centered design principles, created smooth motion systems, and built intuitive onboarding experiences."}
                {project.category === "VFX" && "Integrated 3D elements seamlessly with live footage, enhanced visual storytelling, and optimized for multiple viewing platforms."}
                {project.category === "Branding" && "Researched target audience, developed unique visual concepts, and created comprehensive brand guidelines for consistent application."}
                {project.category === "Video" && "Planned strategic content calendars, optimized for platform-specific requirements, and created engaging narratives that drive action."}
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
              <p className="text-slate-300 leading-relaxed">
                {project.results && project.results.length > 0 
                  ? project.results.map(result => `${result.value} ${result.label}`).join(', ')
                  : "Delivered exceptional results that exceeded client expectations and drove measurable business impact."
                }
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Approach</span></h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  Creative Strategy
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Deep market research and audience analysis
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Unique visual concept development
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Scalable content system design
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Performance optimization strategies
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                  Technical Execution
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Industry-leading software and tools
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Quality assurance and testing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Efficient production workflows
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Continuous improvement processes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Details</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Technical specifications and project scope
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Role */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Role</h3>
              <ul className="space-y-3">
                {project.role.map((item, index) => (
                  <li key={index} className="text-slate-300 flex items-center group-hover:text-slate-100 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Timeline</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{project.timeline}</div>
                <p className="text-slate-300 text-sm">Project Duration</p>
              </div>
            </div>

            {/* Stack */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Stack</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {project.stack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group-hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Visual showcase of our work
            </p>
          </div>
          
          <div className="space-y-12">
            {project.gallery.map((item, index) => (
              <div key={index} className="w-full">
                {item.type === 'video' ? (
                  <div className="relative group">
                    <video
                      src={item.src}
                      className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                      autoPlay
                      poster={project.hero}
                    />
                    {/* Auto-play indicator */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20">
                      Auto-play
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || `${project.title} - ${index + 1}`}
                    className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Start <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Project</span>?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can bring your vision to life and achieve your business goals.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project →
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
