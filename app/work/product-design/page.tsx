'use client';

import Link from 'next/link';

export default function ProductDesign() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            Product Design
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            App interfaces, user experiences, prototypes
          </p>
        </div>
      </section>
      
      {/* Behance-Style Grid Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Layout - 3 columns on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <Link href="/work/product-design/project-1" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop" 
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
            <Link href="/work/product-design/project-2" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
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
            <Link href="/work/product-design/project-3" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" 
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
            <Link href="/work/product-design/project-4" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d41294ab?w=800&h=600&fit=crop" 
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
            <Link href="/work/product-design/project-5" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop" 
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
            <Link href="/work/product-design/project-6" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop" 
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
