import { motion } from 'framer-motion'
import { ArrowLeft, Check, Clock, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Service } from '@/lib/services'
import type { WorkProject } from '@/lib/work'

interface ServiceDetailProps {
  service: Service
  relatedWork: WorkProject[]
}

export default function ServiceDetail({ service, relatedWork }: ServiceDetailProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-text transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-text transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-text">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back button */}
            <Link 
              href="/services" 
              className="inline-flex items-center text-text-muted hover:text-text transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            {/* Service header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text">
                {service.title}
              </h1>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            {/* Pricing card */}
            <div className="bg-surface rounded-2xl p-8 border border-white/10 text-center mb-12">
              <div className="text-6xl font-bold text-brand-green mb-4">
                {service.pricing}
              </div>
              <p className="text-text-muted mb-6">
                Starting price for this service
              </p>
              <Link href="/contact" className="btn-primary tap-target">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-text">
                What You <span className="gradient-text">Get</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.whatYouGet.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Check className="w-6 h-6 text-brand-green mt-1 flex-shrink-0" />
                  <span className="text-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-text">
                  <span className="gradient-text">Deliverables</span>
                </h3>
                <div className="space-y-4">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-text-muted">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-text">
                  <span className="gradient-text">Timeline</span>
                </h3>
                <div className="bg-surface rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-brand-green" />
                    <span className="text-lg font-semibold text-text">Project Duration</span>
                  </div>
                  <p className="text-2xl font-bold text-text mb-2">
                    {service.timeline}
                  </p>
                  <p className="text-text-muted text-sm">
                    From project kickoff to final delivery
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work Section */}
      {relatedWork.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-text">
                Related <span className="gradient-text">Work</span>
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                See examples of our {service.title.toLowerCase()} work in action
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedWork.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className="bg-background rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="relative aspect-video">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-brand-green transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-muted mb-4 line-clamp-2">
                          {project.summary}
                        </p>
                        <div className="flex items-center text-brand-green group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">View Project</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-brand-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-text">
                Ready to Get <span className="gradient-text">Started</span>?
              </h2>
              <p className="text-xl text-text-muted mb-8">
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary tap-target">
                  Start Your Project
                </Link>
                <Link href="/work" className="btn-secondary tap-target">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
