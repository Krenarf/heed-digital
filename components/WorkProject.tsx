import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Tag, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { WorkProject } from '@/lib/work'

interface WorkProjectProps {
  project: WorkProject
  relatedProjects: WorkProject[]
}

export default function WorkProject({ project, relatedProjects }: WorkProjectProps) {
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
            <Link href="/work" className="hover:text-text transition-colors">
              Work
            </Link>
            <span>/</span>
            <span className="text-text">{project.title}</span>
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
              href="/work" 
              className="inline-flex items-center text-text-muted hover:text-text transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>

            {/* Project header */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-text">
                {project.title}
              </h1>
              <p className="text-xl text-text-muted mb-6">
                {project.summary}
              </p>
              
              {/* Project meta */}
              <div className="flex flex-wrap gap-6 text-sm text-text-muted">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {project.role}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface rounded-full text-sm text-text-muted border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project content */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="whitespace-pre-wrap">{project.content}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {project.results.length > 0 && (
        <section className="section-padding bg-background">
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
                  <span className="gradient-text">Results</span> That Matter
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-surface rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-brand-green mr-3" />
                      <span className="text-lg font-semibold text-text">{result}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
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
                Related <span className="gradient-text">Projects</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/work/${relatedProject.slug}`} className="block">
                    <div className="bg-background rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="relative aspect-video">
                        <Image
                          src={relatedProject.thumbnail}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-brand-green transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-text-muted mb-4 line-clamp-2">
                          {relatedProject.summary}
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
                Want This <span className="gradient-text">Outcome</span>?
              </h2>
              <p className="text-xl text-text-muted mb-8">
                Let's discuss how we can create something amazing for your business.
              </p>
              <Link href="/contact" className="btn-primary tap-target">
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
