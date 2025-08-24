export default function Project4() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            WideLabs
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Brand identity and visual system design
          </p>
        </div>
      </section>
      
      {/* Project Content - WideLabs Images */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Hero Image - PNG */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/hero.png" 
              alt="WideLabs Hero" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 1 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/p-1.webp" 
              alt="WideLabs Project Image 1" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 2 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/p-2.webp" 
              alt="WideLabs Project Image 2" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 3 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/p-3.webp" 
              alt="WideLabs Project Image 3" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 4 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/p-4.webp" 
              alt="WideLabs Project Image 4" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 5 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/p-5.webp" 
              alt="WideLabs Project Image 5" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 6 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Widelabs/p-6.webp" 
              alt="WideLabs Project Image 6" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

        </div>
      </section>
    </main>
  );
}
