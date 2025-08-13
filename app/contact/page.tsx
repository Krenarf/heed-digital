import { Metadata } from 'next'
import ContactPage from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us - Heed Digital | Start Your Project Today',
  description: 'Ready to make your ideas hit harder? Contact Heed Digital for a free consultation on 3D animation, design, and development projects.',
  openGraph: {
    title: 'Contact Us - Heed Digital',
    description: 'Ready to make your ideas hit harder? Contact Heed Digital for a free consultation on 3D animation, design, and development projects.',
  },
}

export default function ContactPageRoute() {
  return <ContactPage />
}
