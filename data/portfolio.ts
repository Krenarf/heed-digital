export type WorkCategoryKey = "branding" | "motion" | "3d" | "uiux";

export interface WorkCard {
  category: WorkCategoryKey;
  title: string;
  blurb: string;
  href?: string;            // link to full case study, if exists
  cover?: string;           // /public/... placeholder ok
  tags?: string[];
}

export const CATEGORY_META: Record<WorkCategoryKey, { title: string; subtitle: string; path: string }> = {
  branding: { title: "Branding", subtitle: "Logos, visual identity, brand packs", path: "/work/branding" },
  motion:   { title: "Motion Graphics", subtitle: "Explainers, reels, VFX, promos", path: "/work/motion" },
  "3d":     { title: "3D", subtitle: "Characters, product vids, modeling, arch renders", path: "/work/3d" },
  uiux:     { title: "UI/UX", subtitle: "App flows, chat UIs, dashboards, fitness apps", path: "/work/ui-ux" },
};

// MASTER LIST (edit freely)
export const WORK_ITEMS: WorkCard[] = [
  // --- Top picks also live here (flag by href + strong blurb) ---
  { category: "3d",   title: "Synermuscle — 3D Identity", blurb: "150M views / 700K followers (organic). Full 3D identity + growth ops.", href: "/work/social/synermuscle", cover: "/work/synermuscle-3d-identity/hero.jpg", tags: ["3D","Growth"] },
  { category: "uiux", title: "Fitonomy — App UI/UX + Content", blurb: "Redesigned key flows, campaigns, and install creatives.", href: "/work/social/fitonomy", cover: "/work/fitonomy/hero.jpeg", tags: ["UI/UX","Content"] },
  { category: "motion", title: "ForcaFit — Promo w/ 3D + VFX", blurb: "Hybrid live + 3D overlays; social cut‑downs for launch.", href: "/work/3d/forcafit", cover: "/work/forcafit/hero.jpeg", tags: ["Promo","VFX"] },
  { category: "3d",   title: "Mr. Brainboost — 3D Explainers", blurb: "Loopable science shorts with 3D characters/props.", href: "/work/3d/mr-brainboost", cover: "/work/mr-brainboost/hero.mp4", tags: ["3D","Explainer"] },
  { category: "motion", title: "3D Works, Designs & VFX", blurb: "Mixed 3D/VFX reel across music & ads.", href: "/work/3d/vfx", cover: "/work/synermuscle-3d-identity/shot-01.jpg", tags: ["3D","VFX"] },
  { category: "uiux", title: "ChatOn — AI Assistant UI/UX", blurb: "Chat flows, motion, onboarding visuals.", href: "/work/design/chaton", cover: "/work/chaton/hero.jpeg", tags: ["UI/UX","AI"] },

  // --- Extra thumbnails for category pages (no case study links yet) ---
  { category: "branding", title: "Logo Set — Fitness/AI", blurb: "Marks, wordmarks, social kits.", cover: "/work-1.png", tags: ["Brand"] },
  { category: "branding", title: "Identity System — Health", blurb: "Color/type system + usage.", cover: "/work-2.png", tags: ["Brand"] },
  { category: "motion", title: "Explainer Snippets", blurb: "15–30s reels for social campaigns.", cover: "/work-3.png", tags: ["Explainer"] },
  { category: "3d", title: "Character Studies", blurb: "Stylized anatomy + rig tests.", cover: "/work-4.png", tags: ["Character"] },
  { category: "3d", title: "Product Modeling", blurb: "Shaded turntables & hero renders.", cover: "/work-5.png", tags: ["Product"] },
  { category: "uiux", title: "AI Chat UI", blurb: "States, transitions, empty screens.", cover: "/work-6.png", tags: ["Chat"] },
  { category: "uiux", title: "Fitness App Flow", blurb: "Onboarding → workout → progress.", cover: "/work-6.png", tags: ["Fitness"] },
];

// Choose 3–4 strongest for the /work "Top Picks" section:
export const TOP_PICKS_HREFS = [
  "/work/social/synermuscle",
  "/work/social/fitonomy",
  "/work/3d/forcafit",
  "/work/design/chaton",
];
