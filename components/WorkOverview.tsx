import { projects } from '@/content/work'
import Link from 'next/link'
import Image from 'next/image'

export default function WorkOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">


      {/* Projects Grid */}
      <section className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <div key={project.slug} className="group">
                <Link href={`/work/${project.slug}`} className="block">
                                     <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 group-hover:bg-white/15">
                     {/* Project Image/Video */}
                     <div className="aspect-[4/3] relative overflow-hidden">
                       {project.heroVideo ? (
                         <video
                           src={project.heroVideo}
                           poster={project.hero}
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                           muted
                           loop
                           playsInline
                         />
                       ) : (
                         <Image
                           src={project.hero}
                           alt={project.title}
                           fill
                           className="object-cover group-hover:scale-110 transition-transform duration-700"
                         />
                       )}
                       
                       {/* Enhanced Hover Overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       
                       {/* Enhanced Category Badge */}
                       <div className="absolute top-4 left-4">
                         <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-800 text-sm rounded-full border border-white/30 font-semibold shadow-lg group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                           {project.category}
                         </span>
                       </div>
                       
                       {/* Floating Elements on Hover */}
                       <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-transparent to-white/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500" />
                       <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-transparent to-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100" />
                     </div>

                     {/* Project Info */}
                     <div className="p-6 lg:p-7 bg-white/5 backdrop-blur-sm">
                       <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                         {project.title}
                       </h3>
                       <p className="text-base text-slate-200 mb-5 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                         {project.summary}
                       </p>
                       
                       {/* Enhanced View Project Button */}
                       <div className="flex items-center text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                         <span className="text-sm font-semibold">View Project</span>
                         <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto border border-white/20 shadow-2xl">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Let's build something that <span className="text-yellow-400">scales</span>
              </h3>
              <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your vision into reality? Our hybrid approach combines 3D, UI/UX, and marketing strategy to give you a competitive edge that compounds over time.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
