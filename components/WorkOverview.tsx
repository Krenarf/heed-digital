import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/content/work'

export default function WorkOverview() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Our <span className="text-blue-400">Work</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Explore our portfolio of 23+ successful projects that demonstrate our expertise across 
              3D animation, video production, UI/UX design, and web development.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
                          <div
              key={project.slug}
              className="group"
            >
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
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
                    <div className="p-4 sm:p-6 bg-gray-900">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                        {project.summary}
                      </p>
                      
                      {/* Category */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full w-fit">
                          {project.category}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Ready to Create Something <span className="text-blue-400">Amazing</span>?
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Let's discuss your project and show you how we can bring your vision to life.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
