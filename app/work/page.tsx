import { Metadata } from 'next'
import WorkOverview from '@/components/WorkOverview'

export const metadata: Metadata = {
  title: 'Our Work - Heed Digital | Portfolio & Case Studies',
  description: 'Explore our portfolio of successful projects in 3D animation, video editing, UI/UX design, and web development.',
  openGraph: {
    title: 'Our Work - Heed Digital',
    description: 'Explore our portfolio of successful projects in 3D animation, video editing, UI/UX design, and web development.',
  },
}

export default function WorkPage() {
  return <WorkOverview />
}
