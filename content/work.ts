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
    hero: "/work/synermuscle/hero.jpg",
    role: ["3D modeling", "Texturing", "Lighting", "Shading", "Animation", "Edit & grade"],
    timeline: "2 weeks",
    stack: ["Blender", "Cycles", "After Effects", "Premiere Pro"],
    gallery: [
      "/work/synermuscle/shot-01.jpg",
      "/work/synermuscle/shot-02.jpg",
      "/work/synermuscle/shot-03.jpg",
      "/work/synermuscle/shot-04.jpg"
    ],
    results: [
      { label: "CTR lift", value: "+8%" },
      { label: "Deliverables", value: "1 master + 4 cutdowns" }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find(p => p.slug === slug);
}
