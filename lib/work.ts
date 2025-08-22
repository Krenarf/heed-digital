import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// This file should only be imported in server components

export interface WorkProject {
  slug: string
  title: string
  summary: string
  tags: string[]
  thumbnail: string
  heroVideo?: string
  date: string
  role: string
  results: string[]
  content: string
}

const workDirectory = path.join(process.cwd(), 'content/work')

export async function getWorkProjects(): Promise<WorkProject[]> {
  if (!fs.existsSync(workDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(workDirectory)
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(workDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        summary: data.summary,
        tags: data.tags || [],
        thumbnail: data.thumbnail,
        heroVideo: data.heroVideo,
        date: data.date,
        role: data.role,
        results: data.results || [],
        content,
      }
    })

  // Sort by date (newest first)
  return allProjectsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getWorkProject(slug: string): Promise<WorkProject | null> {
  try {
    const fullPath = path.join(workDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      summary: data.summary,
      tags: data.tags || [],
      thumbnail: data.thumbnail,
      heroVideo: data.heroVideo,
      date: data.date,
      role: data.role,
      results: data.results || [],
      content,
    }
  } catch (error) {
    return null
  }
}

export async function getRelatedProjects(currentSlug: string, tags: string[], limit: number = 3): Promise<WorkProject[]> {
  const allProjects = await getWorkProjects()
  const relatedProjects = allProjects
    .filter((project) => project.slug !== currentSlug)
    .filter((project) => project.tags.some((tag) => tags.includes(tag)))
    .slice(0, limit)

  return relatedProjects
}
