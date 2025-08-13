'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUp
} from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Heed Digital</span>
            </h3>
            <p className="text-text-muted mb-6 max-w-md leading-relaxed">
              We make ideas hit harder. 3D, editing, UI/UX, strategy, and code — one studio.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-muted hover:text-brand-green hover:bg-brand-green/10 transition-all duration-300 tap-target"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-muted hover:text-brand-green hover:bg-brand-green/10 transition-all duration-300 tap-target"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-muted hover:text-brand-green hover:bg-brand-green/10 transition-all duration-300 tap-target"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-muted hover:text-brand-green hover:bg-brand-green/10 transition-all duration-300 tap-target"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#3d-animation"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  3D Animation & Modeling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#video-editing"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  Video Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ui-ux"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#coding"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-text-muted hover:text-brand-green transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-text-muted text-sm">
            © 2024 Heed Digital. All rights reserved.
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center text-text-muted hover:text-brand-green hover:bg-brand-green/10 transition-all duration-300 tap-target"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
