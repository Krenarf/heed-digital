import { Metadata } from 'next'
import ServicesOverview from '@/components/ServicesOverview'

export const metadata: Metadata = {
  title: 'Our Services - Heed Digital | 3D Animation, Design & Development',
  description: 'Comprehensive creative and digital services including 3D animation, video editing, UI/UX design, content writing, marketing strategy, and web development.',
  openGraph: {
    title: 'Our Services - Heed Digital',
    description: 'Comprehensive creative and digital services including 3D animation, video editing, UI/UX design, content writing, marketing strategy, and web development.',
  },
}

export default function ServicesPage() {
  return <ServicesOverview />
}
