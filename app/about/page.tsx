export default function AboutPageRoute() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce hidden md:block" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse hidden md:block" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce hidden md:block" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-pink-400/25 rounded-full animate-pulse hidden md:block" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 right-20 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-bounce hidden md:block" style={{animationDelay: '1.5s'}}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse hidden lg:block" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Built in New York. <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Optimized for outcomes</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Heed Digital is a small, senior-led studio blending 3D, social content systems, UI/UX, and performance marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We move fast without chaos: strategy first, then production that compounds.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Over 10 projects shipped across apps, content, and product.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A diverse group of creative professionals working together to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Creative Directors', count: '2', description: 'Lead vision and strategy' },
              { title: '3D Artists', count: '3', description: 'Animation and modeling experts' },
              { title: 'Video Editors', count: '2', description: 'Post-production specialists' },
              { title: 'UI/UX Designers', count: '2', description: 'Digital experience creators' },
              { title: 'Developers', count: '2', description: 'Full-stack web experts' },
              { title: 'Strategists', count: '2', description: 'Marketing and growth focused' }
            ].map((role, index) => (
              <div
                key={role.title}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-white">{role.count}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{role.title}</h3>
                  <p className="text-slate-300">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Senior-level craft</h3>
              <p className="text-slate-300">We ship crisp visuals and tight UX that converts.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Speed without chaos</h3>
              <p className="text-slate-300">Clear scopes, weekly drops, no mystery or delays.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategy before pixels</h3>
              <p className="text-slate-300">We build what moves your metrics and grows your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and show you how our team can bring your vision to life.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Line */}
      <section className="py-16 relative z-10 bg-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-xl text-slate-300">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                New York–based. Working worldwide.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
