export type Service = {
  slug: "3d-animation" | "video-editing" | "ui-ux" | "content-writing" | "marketing" | "coding";
  title: string;
  tagline: string;
  priceFrom?: string; // e.g., "$X"
  whatYouGet: string[];
  deliverables: string[];
  timelineLabel: string; // e.g., "1–3 weeks"
  related: string[];     // project slugs
};

export const services: Service[] = [
  {
    slug: "3d-animation",
    title: "3D Animation & Modeling",
    tagline: "Bring your ideas to life with stunning 3D animations, product visualizations, and architectural renders.",
    priceFrom: "$X",
    whatYouGet: ["Character Animation", "Product Visualization", "Architectural Renders", "Motion Graphics"],
    deliverables: ["3D models", "Animation files", "Rendered sequences", "Project files"],
    timelineLabel: "2–4 weeks",
    related: ["synermuscle-3d-identity", "mr-brainboost-animated-series"]
  },
  {
    slug: "video-editing",
    title: "Video Content Creation",
    tagline: "Professional video production, editing, and post-production for commercials, social media, and more.",
    priceFrom: "$X",
    whatYouGet: ["Commercial Production", "Social Media Content", "Post-Production", "Motion Graphics"],
    deliverables: ["Final videos", "Source files", "Multiple formats", "Color grading"],
    timelineLabel: "1–3 weeks",
    related: ["sekuence-music-vfx", "synermuscle-3d-identity"]
  },
  {
    slug: "ui-ux",
    title: "UI/UX Design",
    tagline: "Interfaces that feel obvious and look premium.",
    priceFrom: "$X",
    whatYouGet: ["Research & flows", "Wireframes", "Design system", "Clickable prototype"],
    deliverables: ["Figma files", "Component library", "Handoff notes", "Prototype links"],
    timelineLabel: "2–6 weeks",
    related: ["fitonomy-app", "forcafit-app", "chaton-ai-assistant"]
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    tagline: "Words that move people, and algorithms.",
    priceFrom: "$X",
    whatYouGet: ["Brand voice", "Outlines", "Drafts & edits", "SEO polish"],
    deliverables: ["Website copy", "Landing pages", "Microcopy", "SEO briefs", "Metadata"],
    timelineLabel: "3–10 days",
    related: ["synermuscle-3d-identity", "mr-brainboost-animated-series"]
  },
  {
    slug: "marketing",
    title: "Marketing Strategy",
    tagline: "A plan that compounds, not campaigns that fade.",
    priceFrom: "$X",
    whatYouGet: ["ICP & positioning", "Channel plan", "Offer matrix", "Analytics"],
    deliverables: ["Positioning doc", "Messaging", "90-day calendar", "KPI dashboard"],
    timelineLabel: "2–4 weeks",
    related: ["synermuscle-3d-identity", "forcafit-app"]
  },
  {
    slug: "coding",
    title: "Code & Implementation",
    tagline: "From idea to shipped, clean, fast, maintainable.",
    priceFrom: "$X",
    whatYouGet: ["Modern stack", "Component systems", "Performance passes", "CI/CD setup"],
    deliverables: ["Next.js app", "Design system", "API integration", "Deployment playbook"],
    timelineLabel: "1–4 weeks",
    related: ["chaton-ai-assistant", "forcafit-app"]
  }
];

// utility
export const getService = (slug: string) => services.find(s => s.slug === slug);
