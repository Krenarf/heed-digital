'use client';

import Link from 'next/link';

export default function Branding() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            Branding
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Logos, visual identity, brand packs
          </p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* ForcaFit Project */}
            <Link href="/work/branding/project-1" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="/work/forcafit/hero.png" 
                  alt="ForcaFit" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  ForcaFit
                </h3>
              </div>
            </Link>

                                    {/* Fitonomy Project */}
                        <Link href="/work/branding/project-2" className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                            <img
                              src="/work/Heirei/hero.webp"
                              alt="Fitonomy"
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                              Fitonomy
                            </h3>
                          </div>
                        </Link>

            {/* Setience Project */}
            <Link href="/work/branding/project-3" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="/work/Setience/hero.png" 
                  alt="Setience" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Setience
                </h3>
              </div>
            </Link>

            {/* WideLabs Project */}
            <Link href="/work/branding/project-4" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <img 
                  src="/work/Widelabs/hero.png" 
                  alt="WideLabs" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  WideLabs
                </h3>
              </div>
            </Link>

            {/* bett3r Project */}
            <Link href="/work/branding/project-5" className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-slate-100 mb-4">
                <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                  <span className="text-slate-500 text-lg font-medium">bett3r</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  bett3r
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
