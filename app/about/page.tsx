import { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About Us - Heed Digital | Creative Agency Story & Values',
  description: 'Learn about Heed Digital, our mission to make ideas hit harder, and the team behind our creative and digital services.',
  openGraph: {
    title: 'About Us - Heed Digital',
    description: 'Learn about Heed Digital, our mission to make ideas hit harder, and the team behind our creative and digital services.',
  },
}

export default function AboutPageRoute() {
  return <AboutPage />
}
