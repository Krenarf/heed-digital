'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react'

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

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    needs: [] as string[],
    brief: '',
    links: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree integration would go here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      budget: '', 
      timeline: '', 
      needs: [], 
      brief: '', 
      links: '' 
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNeedsChange = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }))
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Great</span> Together
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss how we can help
            your business stand out with creative excellence.
          </p>
        </motion.div>

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
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-muted mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-text-muted mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text focus:border-brand-green focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-text-muted mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text focus:border-brand-green focus:outline-none transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months+">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Services Needed *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['3D Animation', 'Video Editing', 'UI/UX Design', 'Content Writing', 'Marketing Strategy', 'Web Development'].map((need) => (
                    <label key={need} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.needs.includes(need)}
                        onChange={() => handleNeedsChange(need)}
                        className="rounded border-white/20 text-brand-green focus:ring-brand-green focus:ring-offset-background"
                      />
                      <span className="text-sm text-text">{need}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="brief" className="block text-sm font-medium text-text-muted mb-2">
                  Project Brief *
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  value={formData.brief}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and requirements..."
                />
              </div>

              <div>
                <label htmlFor="links" className="block text-sm font-medium text-text-muted mb-2">
                  Reference Links (Optional)
                </label>
                <input
                  type="url"
                  id="links"
                  name="links"
                  value={formData.links}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-text placeholder-text-muted focus:border-brand-green focus:outline-none transition-colors"
                  placeholder="https://example.com"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full group tap-target"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
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
                <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-text mb-1">Phone</h4>
                  <p className="text-text-muted">+1 (555) 123-4567</p>
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h3>
            <p className="text-text-muted max-w-2xl mx-auto">
              Got questions? We've got answers. Here are some common inquiries about working with Heed Digital.
            </p>
          </div>

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
        </motion.div>
      </div>
    </section>
  )
}
