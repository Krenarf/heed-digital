import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServices, getService } from '@/lib/services'
import { getWorkProjects } from '@/lib/work'
import ServiceDetail from '@/components/ServiceDetail'

interface ServicePageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  // For now, return empty array to avoid build issues
  return []
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found - Heed Digital',
    }
  }

  return {
    title: `${service.title} - Heed Digital | ${service.category}`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Heed Digital`,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  // For now, return a simple page to avoid build issues
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text mb-4">Service: {params.slug}</h1>
        <p className="text-text-muted">Service details coming soon...</p>
      </div>
    </div>
  )
}
