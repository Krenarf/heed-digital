'use client'

import { useState } from 'react'

export default function ContactPageRoute() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    
    try {
             // Formspree endpoint for Heed Digital contact form
       const response = await fetch('https://formspree.io/f/xdklnkov', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Let's grow your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">brand</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              New York–based. Working worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">Start Your Project</h2>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-300">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-300">
                  ❌ Something went wrong. Please try again or email us directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                                         <input
                       type="text"
                       id="name"
                       name="name"
                       required
                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                       placeholder="Your name"
                     />
                  </div>
                                   <div>
                   <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                     Email *
                   </label>
                                          <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="your@email.com"
                      />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                     Phone Number
                   </label>
                   <input
                     type="tel"
                     id="phone"
                     name="phone"
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
                     placeholder="+1 (555) 123-4567"
                   />
                 </div>
                 
                 <div>
                   <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                     Project Type *
                   </label>
                                     <select
                     id="projectType"
                     name="projectType"
                     required
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors"
                   >
                    <option value="">Select project type</option>
                    <option value="3d">3D Animation</option>
                    <option value="social">Social Media Content</option>
                    <option value="design">UI/UX Design</option>
                    <option value="marketing">Marketing Strategy</option>
                    <option value="video">Video Production</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                                     <textarea
                     id="message"
                     name="message"
                     rows={6}
                     required
                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                     placeholder="Tell us about your project..."
                   ></textarea>
                </div>
                
                                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className={`w-full px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 ${
                     isSubmitting 
                       ? 'bg-slate-600 cursor-not-allowed' 
                       : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105 shadow-lg'
                   }`}
                 >
                   {isSubmitting ? 'Sending...' : 'Start Project →'}
                 </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p>info@heeddigital.co</p>
                    </div>
                  </div>
                  
                                     <div className="flex items-center text-slate-300">
                     <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                       <div className="w-4 h-4 bg-white rounded-full"></div>
                     </div>
                     <div>
                       <p className="font-medium text-white">Location</p>
                       <p>New York, NY</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center text-slate-300">
                     <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                     </div>
                     <div>
                       <p className="font-medium text-white">Phone</p>
                       <p>+1 (348) 874-4301</p>
                     </div>
                   </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">Senior-level expertise across all disciplines</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">Fast turnaround without compromising quality</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">Strategy-first approach for measurable results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
