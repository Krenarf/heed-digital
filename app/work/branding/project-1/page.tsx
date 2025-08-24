export default function Project1() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            ForcaFit
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Brand identity and visual system design
          </p>
        </div>
      </section>
      
      {/* Project Content - ForcaFit Images */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
                          {/* Hero Image */}
                <div className="w-full">
                  <img
                    src="/work/forcafit/hero.PNG"
                    alt="ForcaFit Hero"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Image 1 */}
                <div className="w-full">
                  <img
                    src="/work/forcafit/p-1.jpg"
                    alt="ForcaFit Project Image 1"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Image 2 */}
                <div className="w-full">
                  <img
                    src="/work/forcafit/p-2.PNG"
                    alt="ForcaFit Project Image 2"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Image 3 */}
                <div className="w-full">
                  <img
                    src="/work/forcafit/p-3.png"
                    alt="ForcaFit Project Image 3"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Image 4 */}
                <div className="w-full">
                  <img
                    src="/work/forcafit/p-4.png"
                    alt="ForcaFit Project Image 4"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>

        </div>
      </section>
    </main>
  );
}
