
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'

// Utility function to try different image formats
const getImageSrc = (basePath: string) => {
  // Remove any existing extension
  const pathWithoutExt = basePath.replace(/\.(png|jpg|jpeg|webp)$/i, '')
  
  // Try different formats in order of preference
  const formats = ['.png', '.jpg', '.jpeg', '.webp']
  
  for (const format of formats) {
    const fullPath = pathWithoutExt + format
    // In a real implementation, you might want to check if the file exists
    // For now, we'll just return the first format and let Next.js handle errors
    return fullPath
  }
  
  return basePath
}

const projects = [
  {
    slug: 'synermuscle-3d-identity',
    title: 'SynerMuscle 3D Identity',
    summary: 'Character-led 3D identity and 12-video launch kit.',
    tags: ['3D', 'Editing', 'Strategy'],
    image: '/work/work-1.png'
  },
  {
    slug: 'mr-brainboost-animated-series',
    title: 'Mr. Brainboost, Realistic 3D Character Series',
    summary: 'Realistic, humanized 3D character with cinematic shading and lighting, used for short-form educational storytelling across social platforms.',
    tags: ['3D', 'Character Design', 'Animation'],
    image: '/work/work-2.png'
  },
  {
    slug: 'fitonomy-app',
    title: 'Fitonomy App Design + Content',
    summary: 'App UI/UX refresh, campaign visuals, and viral content that drove billions of views and supported millions of installs.',
    tags: ['UI/UX', 'Design', 'Strategy'],
    image: '/work/work-3.png'
  },
  {
    slug: 'forcafit-app',
    title: 'ForcaFit, Full App + Content System',
    summary: 'End-to-end app design, character development, and content pipeline. 500M+ views in 8–9 months and 100k+ downloads.',
    tags: ['UI/UX', 'App Design', 'Content'],
    image: '/work/work-4.png'
  },
  {
    slug: 'chaton-ai-assistant',
    title: 'ChatOn, AI Assistant UI/UX + Motion',
    summary: 'Sleek assistant UI for web and mobile, with motion design to humanize interactions and onboarding.',
    tags: ['UI/UX', 'Motion', 'Design System'],
    image: '/work/work-5.png'
  },
  {
    slug: 'sekuence-music-vfx',
    title: 'Sekuence, Music Video 3D + VFX',
    summary: '3D inserts and VFX for music videos, elevating production with cinematic FX and seamless compositing.',
    tags: ['3D', 'VFX', 'Music Video'],
    image: '/work/work-6.png'
  }
]

export default function SelectedWork() {
  return (
    <section className="section-padding bg-bg">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-fg">
            Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From napkin to shipped — a few highlights.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-700/20">
                  {/* Image */}
                  <div className="aspect-video bg-gray-700 relative overflow-hidden">
                    <Image
                      src={getImageSrc(project.image)}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-lg mb-1">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {project.summary}
                            </p>
                          </div>
                          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-5 h-5 bg-black rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300 border border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-xl font-bold text-fg mb-2 group-hover:text-brandA transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-8 text-fg">
            How we <span className="gradient-text">work</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Discover</h4>
              <p className="text-sm text-gray-400">Goals, audience, success metrics</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Design</h4>
              <p className="text-sm text-gray-400">Concepts, styleframes, wireframes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Build</h4>
              <p className="text-sm text-gray-400">3D, edits, UI, code</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">4</span>
              </div>
              <h4 className="font-semibold text-fg mb-2">Scale</h4>
              <p className="text-sm text-gray-400">Versions, analytics, A/B tests</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-2xl p-12 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-3xl font-bold mb-4 text-fg">
              Ready to See <span className="gradient-text">More</span>?
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Explore our full portfolio and discover how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work" className="btn-primary">
                View Full Portfolio
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
