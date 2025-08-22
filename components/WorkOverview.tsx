import { projects } from '@/content/work'
import Link from 'next/link'
import Image from 'next/image'

export default function WorkOverview() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore our portfolio of creative projects that demonstrate our expertise across 3D animation, video editing, UI/UX design, and strategic marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div key={project.slug} className="group">
                <Link href={`/work/${project.slug}`} className="block">
                  <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 bg-white shadow-sm hover:shadow-lg">
                    {/* Project Image/Video */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {project.heroVideo ? (
                        <video
                          src={project.heroVideo}
                          poster={project.hero}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={project.hero}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-700 text-sm rounded-full border border-gray-200 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4 sm:p-6 bg-white">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                        {project.summary}
                      </p>
                      
                      {/* View Project Button */}
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        <span className="text-sm font-medium">View Project</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto border border-blue-200">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Ready to Start <span className="text-blue-600">Your Project</span>?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Let's discuss how we can bring your vision to life and achieve your business goals.
              </p>
              <Link href="/contact" className="inline-flex items-center px-5 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
