import {
  Box,
  Video,
  Palette,
  PenTool,
  TrendingUp,
  Code,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Box,
    title: '3D Animation & Modeling',
    description: 'Bring your ideas to life with stunning 3D animations, product visualizations, and architectural renders.',
    color: 'from-blue-500 to-green-500',
    delay: 0.1,
    slug: '3d-animation',
    features: ['Character Animation', 'Product Visualization', 'Architectural Renders', 'Motion Graphics']
  },
  {
    icon: Video,
    title: 'Video Content Creation',
    description: 'Professional video production, editing, and post-production for commercials, social media, and more.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.2,
    slug: 'video-editing',
    features: ['Commercial Production', 'Social Media Content', 'Post-Production', 'Motion Graphics']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging digital experiences across all platforms.',
    color: 'from-blue-500 to-green-500',
    delay: 0.3,
    slug: 'ui-ux',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Compelling copy that connects with your audience and drives action across all marketing channels.',
    color: 'from-brand-blue to-brand-green',
    delay: 0.4,
    slug: 'content-writing',
    features: ['Brand Messaging', 'Website Copy', 'Marketing Materials', 'SEO Content']
  },
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description: 'Data-driven marketing strategies that grow your brand and deliver measurable business results.',
    color: 'from-brand-green to-brand-blue',
    delay: 0.5,
    slug: 'marketing',
    features: ['Brand Strategy', 'Digital Marketing', 'Content Strategy', 'Analytics']
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    color: 'from-green-500 to-blue-500',
    delay: 0.6,
    slug: 'coding',
    features: ['Custom Websites', 'Web Applications', 'E-commerce', 'API Development']
  }
]

export default function ServicesOverview() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We offer a complete range of creative and digital services to help your business stand out
              and succeed in today's competitive landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative p-4 sm:p-6 lg:p-8 bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:bg-gray-700 h-full">
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                    {/* Icon */}
                    <div className="relative z-10 mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">What you get:</h4>
                        <ul className="space-y-1 sm:space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center text-xs sm:text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learn more button */}
                      <div className="flex items-center text-blue-400 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
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
                Need a <span className="text-blue-400">Custom Solution</span>?
              </h3>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                Let's discuss how we can create something unique for your business.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
