'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from './Button'
import Container from './Container'

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) { 
      document.body.style.overflow = 'hidden'; 
    } else { 
      document.body.style.overflow = ''; 
    }
    return () => { 
      document.body.style.overflow = ''; 
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/80 border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white">
              HEED DIGITAL
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="primary" href="/contact">
                Start a Project
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu - Rendered outside header */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" className="text-2xl font-bold text-white">
                HEED DIGITAL
              </Link>
              <button
                type="button"
                className="p-2 text-white hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-6 py-12 space-y-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-3xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="p-6 border-t border-white/10">
              <Button variant="primary" href="/contact" className="w-full text-lg py-4">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
