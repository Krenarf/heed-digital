export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  hero: string;            // public path
  role: string[];
  timeline: string;
  stack: string[];
  gallery: string[];       // public paths
  results?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "synermuscle-3d-identity",
    title: "SynerMuscle 3D Identity",
    category: "3D Animation",
    summary:
      "High-energy 3D brand ident used across web, ads and socials. Modeled, lit and rendered in Blender; edited for multiple aspect ratios.",
    hero: "https://picsum.photos/1600/900?random=1",
    role: ["3D modeling", "Texturing", "Lighting", "Shading", "Animation", "Edit & grade"],
    timeline: "2 weeks",
    stack: ["Blender", "Cycles", "After Effects", "Premiere Pro"],
    gallery: [
      "https://picsum.photos/1200/800?random=2",
      "https://picsum.photos/1200/800?random=3",
      "https://picsum.photos/1200/800?random=4",
      "https://picsum.photos/1200/800?random=5"
    ],
    results: [
      { label: "CTR lift", value: "+8%" },
      { label: "Deliverables", value: "1 master + 4 cutdowns" }
    ]
  },
  {
    slug: "fitness-app-ui-redesign",
    title: "FitFlow App UI Redesign",
    category: "UI/UX Design",
    summary:
      "Complete mobile app redesign for fitness tracking platform. Modernized interface with improved user flow and accessibility features.",
    hero: "https://picsum.photos/1600/900?random=6",
    role: ["User Research", "Wireframing", "UI Design", "Prototyping", "User Testing"],
    timeline: "6 weeks",
    stack: ["Figma", "Adobe XD", "Principle", "Maze"],
    gallery: [
      "https://picsum.photos/1200/800?random=7",
      "https://picsum.photos/1200/800?random=8",
      "https://picsum.photos/1200/800?random=9",
      "https://picsum.photos/1200/800?random=10"
    ],
    results: [
      { label: "User engagement", value: "+23%" },
      { label: "App store rating", value: "4.8/5.0" }
    ]
  },
  {
    slug: "viral-video-series",
    title: "Viral Video Series Campaign",
    category: "Video Production",
    summary:
      "Multi-platform video campaign that generated over 2M views across social media. Shot on location with professional editing and motion graphics.",
    hero: "https://picsum.photos/1600/900?random=11",
    role: ["Creative Direction", "Cinematography", "Editing", "Motion Graphics", "Color Grading"],
    timeline: "4 weeks",
    stack: ["Sony FX6", "DaVinci Resolve", "After Effects", "Premiere Pro"],
    gallery: [
      "https://picsum.photos/1200/800?random=12",
      "https://picsum.photos/1200/800?random=13",
      "https://picsum.photos/1200/800?random=14",
      "https://picsum.photos/1200/800?random=15"
    ],
    results: [
      { label: "Total views", value: "2.1M" },
      { label: "Engagement rate", value: "+15%" }
    ]
  },
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform Development",
    category: "Web Development",
    summary:
      "Full-stack e-commerce solution with custom admin panel, payment integration, and mobile-responsive design. Built with modern web technologies.",
    hero: "https://picsum.photos/1600/900?random=16",
    role: ["Frontend Development", "Backend Development", "Database Design", "API Integration"],
    timeline: "12 weeks",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    gallery: [
      "https://picsum.photos/1200/800?random=17",
      "https://picsum.photos/1200/800?random=18",
      "https://picsum.photos/1200/800?random=19",
      "https://picsum.photos/1200/800?random=20"
    ],
    results: [
      { label: "Conversion rate", value: "+12%" },
      { label: "Page load speed", value: "1.2s" }
    ]
  },
  {
    slug: "brand-identity-system",
    title: "Complete Brand Identity System",
    category: "Branding",
    summary:
      "Comprehensive brand identity including logo design, color palette, typography, and brand guidelines for a tech startup.",
    hero: "https://picsum.photos/1600/900?random=21",
    role: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"],
    timeline: "8 weeks",
    stack: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
    gallery: [
      "https://picsum.photos/1200/800?random=22",
      "https://picsum.photos/1200/800?random=23",
      "https://picsum.photos/1200/800?random=24",
      "https://picsum.photos/1200/800?random=25"
    ],
    results: [
      { label: "Brand recognition", value: "+45%" },
      { label: "Deliverables", value: "15+ assets" }
    ]
  },
  {
    slug: "social-media-campaign",
    title: "Social Media Marketing Campaign",
    category: "Digital Marketing",
    summary:
      "Multi-platform social media campaign that increased followers by 300% and generated 500+ qualified leads for B2B software company.",
    hero: "https://picsum.photos/1600/900?random=26",
    role: ["Strategy", "Content Creation", "Community Management", "Analytics"],
    timeline: "10 weeks",
    stack: ["Hootsuite", "Canva", "Google Analytics", "LinkedIn Ads"],
    gallery: [
      "https://picsum.photos/1200/800?random=27",
      "https://picsum.photos/1200/800?random=28",
      "https://picsum.photos/1200/800?random=29",
      "https://picsum.photos/1200/800?random=30"
    ],
    results: [
      { label: "Follower growth", value: "+300%" },
      { label: "Qualified leads", value: "500+" }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find(p => p.slug === slug);
}
