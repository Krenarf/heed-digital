import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getWorkProjects, getWorkProject, getRelatedProjects } from '@/lib/work'
import WorkProject from '@/components/WorkProject'

interface WorkProjectPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  // For now, return empty array to avoid build issues
  return []
}

export async function generateMetadata({ params }: WorkProjectPageProps): Promise<Metadata> {
  const project = await getWorkProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Heed Digital',
    }
  }

  return {
    title: `${project.title} - Heed Digital | Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Heed Digital`,
      description: project.summary,
      images: [project.thumbnail],
    },
  }
}

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  // For now, return a simple page to avoid build issues
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text mb-4">Project: {params.slug}</h1>
        <p className="text-text-muted">Project details coming soon...</p>
      </div>
    </div>
  )
}
