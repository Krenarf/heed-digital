import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getService } from '@/content/services'
import { getProject } from '@/content/work'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'UI/UX Design · Services · Heed Digital',
  description: 'Interfaces that feel obvious and look premium. User-centered design solutions that create intuitive, engaging digital experiences.',
  openGraph: {
    title: 'UI/UX Design · Services · Heed Digital',
    description: 'Interfaces that feel obvious and look premium. User-centered design solutions that create intuitive, engaging digital experiences.',
  },
}

export default function UIUXServicePage() {
  const service = getService('ui-ux')
  
  if (!service) {
    return null
  }

  const relatedProjects = service.related.map(slug => getProject(slug)).filter(Boolean)

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Back Navigation */}
      <section className="pt-6 pb-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link 
            href="/services" 
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {service.tagline}
            </p>
            {service.priceFrom && (
              <div className="mt-4 sm:mt-6">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">From {service.priceFrom}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {service.whatYouGet.map((item, index) => (
              <div key={index} className="text-center p-3 sm:p-4 md:p-6 bg-gray-700 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg">{index + 1}</span>
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Timeline */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Deliverables</h2>
              <ul className="space-y-2 sm:space-y-3">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Timeline</h2>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-2">{service.timelineLabel}</div>
              <p className="text-gray-300 text-sm sm:text-base">From project kickoff to final delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work */}
      {relatedProjects.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 md:mb-12 text-center">Related Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {relatedProjects.map((project) => (
                <Link key={project!.slug} href={`/work/${project!.slug}`} className="group">
                  <div className="bg-gray-700 rounded-xl border border-gray-600 overflow-hidden hover:border-gray-500 transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-600 to-gray-700">
                      <Image
                        src={project!.hero}
                        alt={project!.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-semibold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                        {project!.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">{project!.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
              Ready to Start <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Your Project</span>?
            </h2>
            <p className="text-sm sm:text-base text-lg text-gray-300 mb-6 sm:mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 sm:px-5 py-2.5 sm:py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 text-sm sm:text-base"
            >
              Start Your Project
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
