'use client';

import Link from 'next/link';

export default function Motion() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            Motion Graphics
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Animations, explainers, VFX, promos
          </p>
        </div>
      </section>
      
      {/* Behance-Style Grid Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Layout - 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <Link href="/work/motion/project-1" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" 
                  alt="Project 1" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  PROJECT 1
                </h3>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/work/motion/project-2" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop" 
                  alt="Project 2" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  PROJECT 2
                </h3>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/work/motion/project-3" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" 
                  alt="Project 3" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  PROJECT 3
                </h3>
              </div>
            </Link>

            {/* Project 4 */}
            <Link href="/work/motion/project-4" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=700&fit=crop" 
                  alt="Project 4" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  PROJECT 4
                </h3>
              </div>
            </Link>

            {/* Project 5 */}
            <Link href="/work/motion/project-5" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" 
                  alt="Project 5" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  PROJECT 5
                </h3>
              </div>
            </Link>

            {/* Project 6 */}
            <Link href="/work/motion/project-6" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop" 
                  alt="Project 6" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  PROJECT 6
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
