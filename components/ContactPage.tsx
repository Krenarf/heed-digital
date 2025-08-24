'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Send, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical 3D animation project takes 2-4 weeks, while comprehensive website development can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Absolutely! We work with clients worldwide and have experience managing projects across different time zones. We use efficient communication tools to ensure smooth collaboration regardless of location."
  },
  {
    question: "What's included in your project pricing?",
    answer: "Our pricing includes project planning, creative development, revisions (up to 3 rounds), final deliverables, and post-launch support. We provide transparent pricing with no hidden fees."
  },
  {
    question: "Can you handle multiple services for one project?",
    answer: "Yes! That's one of our biggest strengths. We can handle 3D animation, video production, design, and development all under one roof, ensuring consistency and seamless project management."
  }
]

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree integration would go here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      projectType: '', 
      message: '' 
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <main className="min-h-dvh bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 safe-area-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let's grow your <span className="gradient-text">brand</span>
            </h1>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              New York–based. Working worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 safe-area-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-text-muted mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-white/20 rounded-lg text-text focus:border-brand-green focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="3d">3D</option>
                    <option value="social">Social Media</option>
                    <option value="design">Design (UI/UX)</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-surface border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full group tap-target"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start Project
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Have a project in mind? Let's discuss how we can help bring your vision to life.
                  We're here to answer any questions and explore creative possibilities together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Email</h4>
                    <p className="text-text-muted">info@heeddigital.co</p>
                  </div>
                </div>



                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Location</h4>
                    <p className="text-text-muted">Global Team • Remote First</p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="glass-effect rounded-xl p-6">
                <h4 className="font-semibold text-text mb-2">Response Time</h4>
                <p className="text-text-muted text-sm">
                  We typically respond within 24 hours during business days.
                  For urgent inquiries, please mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 safe-area-padding bg-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h3>
            <p className="text-text-muted max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some common inquiries about working with Heed Digital.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors tap-target"
                >
                  <span className="font-medium text-text">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? 'auto' : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-text-muted leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
