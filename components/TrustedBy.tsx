'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import { useState } from 'react'

const clients = [
  { 
    name: 'Fitonomy', 
    logos: [
      '/logos/fitonomy-logo.jpg',
      '/logos/fitonomy-logo.png',
      '/logos/fitonomy-logo.jpeg'
    ],
    fallback: 'F'
  },
  { 
    name: 'ForcaFit', 
    logos: [
      '/logos/forcafit-logo.jpg',
      '/logos/forcafit-logo.png',
      '/logos/forcafit-logo.jpeg'
    ],
    fallback: 'FF'
  },
  { 
    name: 'Synermuscle', 
    logos: [
      '/logos/synermuscle-logo.jpg',
      '/logos/synermuscle-logo.png',
      '/logos/synermuscle-logo.jpeg'
    ],
    fallback: 'S'
  },
  { 
    name: 'ChatOn', 
    logos: [
      '/logos/chaton-logo.jpg',
      '/logos/chaton-logo.png',
      '/logos/chaton-logo.jpeg'
    ],
    fallback: 'C'
  },
  { 
    name: 'Mr. Brainboost', 
    logos: [
      '/logos/mr-brainboost-logo.jpg',
      '/logos/mr-brainboost-logo.png',
      '/logos/mr-brainboost-logo.jpeg'
    ],
    fallback: 'MB'
  }
]

export default function TrustedBy() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  const handleImageError = (clientName: string, logoIndex: number) => {
    console.log(`Image failed to load for ${clientName} at index ${logoIndex}`)
    
    if (logoIndex < clients.find(c => c.name === clientName)!.logos.length - 1) {
      // Try next format
      setImageErrors(prev => ({ ...prev, [`${clientName}-${logoIndex}`]: true }))
    } else {
      // All formats failed
      setImageErrors(prev => ({ ...prev, [clientName]: true }))
    }
  }

  const getCurrentLogo = (client: typeof clients[0]) => {
    const errorKey = Object.keys(imageErrors).find(key => key.startsWith(client.name))
    if (errorKey) {
      const logoIndex = parseInt(errorKey.split('-')[1]) || 0
      return client.logos[logoIndex + 1] || client.logos[0]
    }
    return client.logos[0]
  }

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Trusted by innovative brands
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We've helped these companies scale their creative and digital presence.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {clients.map((client, index) => {
            const showFallback = imageErrors[client.name]
            const currentLogo = getCurrentLogo(client)
            
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-200">
                    {!showFallback ? (
                      <Image
                        src={currentLogo}
                        alt={`${client.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain"
                        onError={() => handleImageError(client.name, 0)}
                        priority={index < 2} // Prioritize first 2 images
                      />
                    ) : (
                      <span className="text-2xl font-bold text-slate-700">
                        {client.fallback}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-slate-600">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
