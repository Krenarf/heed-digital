import { notFound } from 'next/navigation'
import { getProject } from '@/content/work'
import ProjectPage from '@/components/ProjectPage'

interface WorkDetailPageProps {
  params: { slug: string }
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = getProject(params.slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectPage project={project} />
}
