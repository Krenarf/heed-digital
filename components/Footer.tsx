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
import Container from './Container'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg border-t border-gray-700">
      <Container className="py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Heed Digital</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              New York–based. Working worldwide.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brandA hover:bg-brandA/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brandA hover:bg-brandA/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brandA hover:bg-brandA/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/heeddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brandA hover:bg-brandA/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                <a href="mailto:info@heeddigital.co" className="hover:text-brandA transition-colors">
                  info@heeddigital.co
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-fg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#3d-animation"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  3D Animation & Modeling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#video-editing"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  Video Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ui-ux"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#coding"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-fg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-gray-400 hover:text-brandA transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Heed Digital. All rights reserved.
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-brandA hover:bg-brandA/10 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
