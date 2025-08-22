// Gallery Video Support:
// To add videos to your project galleries, you can:
// 1. Add .mp4 files to your project folders
// 2. Update the gallery array to include video items
// 3. Use the utility functions from lib/gallery.ts for easy management
//
// Example:
// import { combineGalleryItems } from '@/lib/gallery'
// 
// const synermuscleGallery = combineGalleryItems(
//   [
//     "/work/synermuscle-3d-identity/shot-01.jpeg",
//     "/work/synermuscle-3d-identity/shot-02.jpeg",
//     "/work/synermuscle-3d-identity/shot-03.jpeg",
//     "/work/synermuscle-3d-identity/shot-04.jpeg"
//   ],
//   [
//     "/work/synermuscle-3d-identity/hero.mp4",
//     "/work/synermuscle-3d-identity/behind-scenes.mp4",
//     "/work/synermuscle-3d-identity/process.mp4"
//   ],
//   "SynerMuscle 3D Animation"
// )

export type Project = {
  slug: string;
  title: string;
  category: "3D Animation" | "Video" | "UI/UX" | "Branding" | "Product" | "VFX";
  summary: string;
  hero: string;             // /public path (jpg/png for image projects, mp4 poster for video projects)
  heroVideo?: string;       // /public path to video file (mp4) - if provided, this will be used as hero
  role: string[];
  timeline: string;         // e.g., "2 weeks"
  stack: string[];
  results?: { label: string; value: string }[];
  gallery: Array<{
    src: string;            // /public path to file
    type: 'image' | 'video'; // media type
    alt?: string;           // optional alt text
  }>;
};

export const projects: Project[] = [
  {
    slug: "synermuscle-3d-identity",
    title: "SynerMuscle 3D Identity",
    category: "3D Animation",
    summary:
      "We built the SynerMuscle brand engine, from 0 to 700k+ followers and 200M+ views in 3 months with character-led 3D and a repeatable content system.",
    hero: "/work/work-1.png",
    heroVideo: "/work/synermuscle-3d-identity/hero.mp4",
    role: ["3D modeling", "Texturing", "Lighting", "Animation", "Edit & grade", "Content system"],
    timeline: "3 months",
    stack: ["Blender", "Cycles", "After Effects", "Premiere Pro"],
    results: [
      { label: "Followers", value: "700k+ in 3 months" },
      { label: "Views", value: "200M+ organic" }
    ],
    gallery: [
      { src: "/work/synermuscle-3d-identity/shot-01.jpg", type: "image" as const },
      { src: "/work/synermuscle-3d-identity/shot-2.mp4", type: "video" as const, alt: "SynerMuscle Shot 2" },
      { src: "/work/synermuscle-3d-identity/shot-3.jpg", type: "image" as const },
      { src: "/work/synermuscle-3d-identity/shot-4.mov", type: "video" as const, alt: "SynerMuscle Shot 4" }
    ]
  },
  {
    slug: "mr-brainboost-animated-series",
    title: "Mr. Brainboost, Realistic 3D Character Series",
    category: "3D Animation",
    summary:
      "Realistic, humanized 3D character with cinematic shading and lighting, used for short-form educational storytelling across social platforms.",
    hero: "/work/work-2.png",
    heroVideo: "/work/mr-brainboost/hero.mp4",
    role: ["Character design", "Look dev", "Animation", "Storyboarding", "Social packaging"],
    timeline: "4–6 weeks",
    stack: ["Blender", "Substance", "After Effects"],
    results: [{ label: "Engagement", value: "High retention in education niche" }],
    gallery: [
      { src: "/work/mr-brainboost/shot-01.png", type: "image" as const },
      { src: "/work/mr-brainboost/shot-02.png", type: "image" as const },
      { src: "/work/mr-brainboost/shot-03.mp4", type: "video" as const, alt: "Mr. Brainboost Shot 3" },
      { src: "/work/mr-brainboost/shot-04.png", type: "image" as const }
    ]
  },
  {
    slug: "fitonomy-app",
    title: "Fitonomy App Design + Content",
    category: "UI/UX",
    summary:
      "App UI/UX refresh, campaign visuals, and viral content that drove billions of views and supported millions of installs.",
    hero: "/work/work-3.png",
    heroVideo: "/work/fitonomy/hero.mp4",
    role: ["Product UX", "UI screens", "Campaign design", "Content system"],
    timeline: "6–8 weeks",
    stack: ["Figma", "After Effects", "Premiere Pro"],
    results: [
      { label: "Reach", value: "Billions of views" },
      { label: "Installs", value: "Millions+ lifetime" }
    ],
    gallery: [
      { src: "/work/fitonomy/shot-01.jpeg", type: "image" as const },
      { src: "/work/fitonomy/shot-02.jpeg", type: "image" as const },
      { src: "/work/fitonomy/shot-03.jpeg", type: "image" as const },
      { src: "/work/fitonomy/shot-04.jpeg", type: "image" as const }
    ]
  },
  {
    slug: "forcafit-app",
    title: "ForcaFit, Full App + Content System",
    category: "UI/UX",
    summary:
      "End-to-end app design, character development, and content pipeline. 500M+ views in 8–9 months and 100k+ downloads.",
    hero: "/work/work-4.png",
    role: ["IA & flows", "UI kit", "Character design", "Promo content"],
    timeline: "8–9 months",
    stack: ["Figma", "Blender", "After Effects"],
    results: [
      { label: "Views", value: "500M+ in 9 months" },
      { label: "Downloads", value: "100k+ lifetime" }
    ],
    gallery: [
      { src: "/work/forcafit/shot-01.jpeg", type: "image" as const },
      { src: "/work/forcafit/shot-02.jpeg", type: "image" as const },
      { src: "/work/forcafit/shot-03.jpeg", type: "image" as const },
      { src: "/work/forcafit/shot-04.jpeg", type: "image" as const }
    ]
  },
  {
    slug: "chaton-ai-assistant",
    title: "ChatOn, AI Assistant UI/UX + Motion",
    category: "Product",
    summary:
      "Sleek assistant UI for web and mobile, with motion design to humanize interactions and onboarding.",
    hero: "/work/work-5.png",
    role: ["Design system", "Prototype", "Motion design"],
    timeline: "3–5 weeks",
    stack: ["Figma", "Framer", "After Effects"],
    results: [{ label: "Outcome", value: "Production-ready design package" }],
    gallery: [
      { src: "/work/chaton/shot-01.jpeg", type: "image" as const },
      { src: "/work/chaton/shot-02.jpeg", type: "image" as const },
      { src: "/work/chaton/shot-03.jpeg", type: "image" as const },
      { src: "/work/chaton/shot-04.jpeg", type: "image" as const }
    ]
  },
  {
    slug: "sekuence-music-vfx",
    title: "Sekuence, Music Video 3D + VFX",
    category: "VFX",
    summary:
      "3D inserts and VFX for music videos, elevating production with cinematic FX and seamless compositing.",
    hero: "/work/work-6.png",
    role: ["VFX supervision", "3D inserts", "Edit polish"],
    timeline: "1–3 weeks",
    stack: ["After Effects", "Blender", "DaVinci"],
    results: [{ label: "Impact", value: "Higher watch time and share rate" }],
    gallery: [
      { src: "/work/sekuence/shot-01.jpeg", type: "image" as const },
      { src: "/work/sekuence/shot-02.jpeg", type: "image" as const },
      { src: "/work/sekuence/shot-03.jpeg", type: "image" as const },
      { src: "/work/sekuence/shot-04.jpeg", type: "image" as const }
    ]
  }
];

// utility
export const getProject = (slug: string) => projects.find(p => p.slug === slug);
