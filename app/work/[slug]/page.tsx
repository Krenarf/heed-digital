import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProject } from '@/content/work'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface WorkDetailPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const project = getProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found · Work · Heed Digital',
      description: 'The requested project could not be found.'
    }
  }

  return {
    title: `${project.title} · Work · Heed Digital`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.hero],
    },
  }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = getProject(params.slug)
  
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <section className="pt-8 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <Link 
            href="/work" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full border border-blue-200 mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Hero Image/Video */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            {project.heroVideo ? (
              <video
                src={project.heroVideo}
                poster={project.hero}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={project.hero}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Role */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Role</h3>
              <ul className="space-y-2">
                {project.role.map((item, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Timeline</h3>
              <p className="text-gray-600">{project.timeline}</p>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{result.value}</div>
                  <div className="text-gray-600">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {project.gallery.map((item, index) => (
              <div key={index} className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    playsInline
                    poster={project.hero}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt || `${project.title} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
              Ready to Start <span className="text-blue-600">Your Project</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-5 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
