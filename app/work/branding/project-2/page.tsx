export default function Project2() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            Heirei
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Brand identity and visual system design
          </p>
        </div>
      </section>
      
      {/* Project Content - Heirei Images */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Image 1 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-1.webp" 
              alt="Heirei Project Image 1" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 2 - WebP */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-2.webp" 
              alt="Heirei Project Image 2" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 3 - JPG */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-3.jpg" 
              alt="Heirei Project Image 3" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 4 - JPG */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-4.jpg" 
              alt="Heirei Project Image 4" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 5 - JPG */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-5.jpg" 
              alt="Heirei Project Image 5" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 6 - JPG */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-6.jpg" 
              alt="Heirei Project Image 6" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 7 - JPG */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-7.jpg" 
              alt="Heirei Project Image 7" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 8 - JPG */}
          <div className="w-full">
            <img 
              src="/work/Heirei/p-8.jpg" 
              alt="Heirei Project Image 8" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

        </div>
      </section>
    </main>
  );
}
