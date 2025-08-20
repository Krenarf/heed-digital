import { ChevronDown, Play, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import Link from 'next/link'
import Container from './Container'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        
                 {/* Floating geometric shapes */}
         <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
         <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 text-center max-w-7xl mx-auto">
                     {/* Badge */}
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Growing creative studio since 2022</span>
                     </div>

           {/* Main Headline */}
           <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 leading-[0.9] tracking-tight">
              <span className="block text-white">We make ideas</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                hit harder.
              </span>
            </h1>
                     </div>

           {/* Subtitle */}
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-4">
             3D, editing, UI/UX, strategy, and code — one studio that transforms your vision into reality.
           </p>

                     {/* Enhanced Value Props */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto px-4">
                         <div 
               className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
             >
                                   <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                       <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                     </div>
                                   <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Senior-level craft</h3>
                     <p className="text-sm sm:text-base text-gray-400 leading-relaxed">We ship crisp visuals and tight UX that converts.</p>
                         </div>
             
             <div 
               className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
             >
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                 <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Speed without chaos</h3>
               <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Clear scopes, weekly drops, no mystery or delays.</p>
             </div>
             
             <div 
               className="group text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
             >
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                 <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
               </div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Strategy before pixels</h3>
               <p className="text-sm sm:text-base text-gray-400 leading-relaxed">We build what moves your metrics and grows your business.</p>
             </div>
           </div>

                     {/* CTA Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
            <Button href="/contact" variant="primary" className="group">
              <span className="flex items-center gap-3">
                Start Your Project
                                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button href="/work" variant="secondary" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Our Work
            </Button>
          </div>
        </div>
      </Container>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-white/60 hover:text-white transition-colors cursor-pointer group">
          <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 right-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50" />
      <div className="absolute bottom-1/4 left-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full shadow-lg shadow-purple-400/50" />
    </section>
  )
}
