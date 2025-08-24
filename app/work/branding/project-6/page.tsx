export default function Project6() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900">
            PROJECT 6
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Business Identity & Corporate Branding
          </p>
        </div>
      </section>
      
      {/* Project Content - Scrollable Images/Videos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          
          {/* Image 1 - 16:9 Format */}
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1561070791-2526d41294ab?w=1200&h=675&fit=crop" 
              alt="Project 6 - Image 1" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Image 2 - 16:9 Format */}
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=675&fit=crop" 
              alt="Project 6 - Image 2" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Video 1 - 9:16 Format (Centered) */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <video 
                className="w-full h-auto rounded-lg shadow-lg" 
                controls
                poster="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=600&fit=crop"
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Image 3 - 16:9 Format */}
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=675&fit=crop" 
              alt="Project 6 - Image 3" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>

          {/* Video 2 - 9:16 Format (Centered) */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <video 
                className="w-full h-auto rounded-lg shadow-lg" 
                controls
                poster="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=600&fit=crop"
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
