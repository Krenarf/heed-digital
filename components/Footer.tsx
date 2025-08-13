'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MousePointer,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const [cursorEnabled, setCursorEnabled] = useState(true)

  const toggleCursor = () => {
    setCursorEnabled(!cursorEnabled)
    // This would control the custom cursor visibility
    const cursorElement = document.querySelector('.custom-cursor')
    if (cursorElement) {
      cursorElement.style.display = cursorEnabled ? 'none' : 'block'
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Heed Digital</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A multidisciplinary creative agency delivering standout 3D, design, and digital experiences 
              that help businesses stand out and succeed.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/heeddigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                data-cursor="hover"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/heeddigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                data-cursor="hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/heeddigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                data-cursor="hover"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/heeddigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                data-cursor="hover"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  3D Animation & Modeling
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  Video Content Creation
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  Web Development
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/careers" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  data-cursor="hover"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Heed Digital. All rights reserved.
          </div>

          {/* Cursor Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCursor}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                cursorEnabled 
                  ? 'bg-accent text-white' 
                  : 'bg-dark-gray text-gray-400 hover:text-white'
              }`}
              data-cursor="hover"
            >
              <MousePointer className="w-4 h-4" />
              <span className="text-sm">
                {cursorEnabled ? 'Cursor ON' : 'Cursor OFF'}
              </span>
            </button>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-dark-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-all duration-300"
              data-cursor="hover"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
