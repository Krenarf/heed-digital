export interface Service {
  slug: string
  title: string
  description: string
  category: string
  icon: string
  whatYouGet: string[]
  deliverables: string[]
  timeline: string
  pricing: string
  tags: string[]
}

export const services: Service[] = [
  {
    slug: '3d-animation',
    title: '3D Animation & Modeling',
    description: 'Bring your ideas to life with stunning 3D animations, product visualizations, and architectural renders.',
    category: '3D & Animation',
    icon: 'Box',
    whatYouGet: [
      'Custom 3D models and animations',
      'Product visualization and renders',
      'Character animation and rigging',
      'Motion graphics and effects',
      'Architectural and interior renders',
      'Final delivery in multiple formats'
    ],
    deliverables: [
      'High-resolution renders (4K+)',
      'Animation sequences (MP4, MOV)',
      '3D model files (FBX, OBJ)',
      'Project documentation',
      'Source files for future edits'
    ],
    timeline: '2-6 weeks depending on complexity',
    pricing: 'From $2,500',
    tags: ['3D', 'Animation', 'Modeling', 'Rendering']
  },
  {
    slug: 'video-editing',
    title: 'Video Content Creation & Editing',
    description: 'Professional video production, editing, and post-production for commercials, social media, and more.',
    category: 'Video Production',
    icon: 'Video',
    whatYouGet: [
      'Professional video editing',
      'Color grading and correction',
      'Motion graphics and effects',
      'Sound design and mixing',
      'Multiple format exports',
      'Social media optimization'
    ],
    deliverables: [
      'Final video in multiple formats',
      'Social media versions (9:16, 1:1)',
      'Color-corrected sequences',
      'Project files for future edits',
      'Usage rights documentation'
    ],
    timeline: '1-4 weeks depending on length',
    pricing: 'From $1,200',
    tags: ['Video', 'Editing', 'Post-Production', 'Motion Graphics']
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create intuitive, engaging digital experiences across all platforms.',
    category: 'Design',
    icon: 'Palette',
    whatYouGet: [
      'User research and personas',
      'Wireframes and prototypes',
      'Visual design and branding',
      'Interactive prototypes',
      'User testing and feedback',
      'Design system creation'
    ],
    deliverables: [
      'High-fidelity mockups',
      'Interactive prototypes',
      'Design specifications',
      'Component library',
      'User testing reports',
      'Design handoff files'
    ],
    timeline: '3-8 weeks depending on scope',
    pricing: 'From $3,500',
    tags: ['UI/UX', 'Design', 'Prototyping', 'User Research']
  },
  {
    slug: 'content-writing',
    title: 'Content Writing',
    description: 'Compelling copy that connects with your audience and drives action across all marketing channels.',
    category: 'Content',
    icon: 'PenTool',
    whatYouGet: [
      'Brand voice development',
      'Website copy and landing pages',
      'Blog posts and articles',
      'Social media content',
      'Email marketing campaigns',
      'SEO optimization'
    ],
    deliverables: [
      'Final copy in multiple formats',
      'SEO recommendations',
      'Content calendar',
      'Brand voice guidelines',
      'Performance metrics report'
    ],
    timeline: '1-3 weeks depending on volume',
    pricing: 'From $800',
    tags: ['Content', 'Copywriting', 'SEO', 'Marketing']
  },
  {
    slug: 'marketing',
    title: 'Marketing Strategy',
    description: 'Data-driven marketing strategies that grow your brand and deliver measurable business results.',
    category: 'Strategy',
    icon: 'TrendingUp',
    whatYouGet: [
      'Market research and analysis',
      'Competitive positioning',
      'Marketing strategy development',
      'Campaign planning and execution',
      'Performance tracking and optimization',
      'ROI measurement and reporting'
    ],
    deliverables: [
      'Comprehensive strategy document',
      'Campaign execution plan',
      'Performance dashboards',
      'Optimization recommendations',
      'Monthly performance reports'
    ],
    timeline: '4-12 weeks for full strategy',
    pricing: 'From $4,500',
    tags: ['Strategy', 'Marketing', 'Analytics', 'Campaigns']
  },
  {
    slug: 'coding',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    category: 'Development',
    icon: 'Code',
    whatYouGet: [
      'Custom website development',
      'E-commerce solutions',
      'Web application development',
      'API integration and development',
      'Performance optimization',
      'Ongoing maintenance and support'
    ],
    deliverables: [
      'Fully functional website/app',
      'Source code and documentation',
      'Deployment and hosting setup',
      'Performance optimization report',
      'Maintenance documentation',
      'Training and handover'
    ],
    timeline: '6-16 weeks depending on complexity',
    pricing: 'From $8,500',
    tags: ['Development', 'Web', 'Frontend', 'Backend']
  }
]

export async function getServices(): Promise<Service[]> {
  return services
}

export async function getService(slug: string): Promise<Service | null> {
  return services.find(service => service.slug === slug) || null
}

export async function getServicesByCategory(category: string): Promise<Service[]> {
  return services.filter(service => service.category === category)
}
