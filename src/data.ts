export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#works" },
  { label: "About me", href: "#about" },
  { label: "Contact us", href: "#contact" },
] as const;

export const experience = [
  {
    role: "Product designer and Art director",
    company: "Webble Studio",
    dates: "2025 - Present",
    color: "#171719",
    mark: "Ws",
  },
  {
    role: "Graphic and web designer",
    company: "Bquadro",
    dates: "2023 - Present",
    color: "#2c2c2c",
    mark: "Bq",
  },
  {
    role: "Graphic e web designer",
    company: "Associazione Bios",
    dates: "2023 - Present",
    color: "#3d5a3d",
    mark: "Ab",
  },
  {
    role: "Product e Brand designer",
    company: "Freelance",
    dates: "2019 - Present",
    color: "#5c5346",
    mark: "Fr",
  },
  {
    role: "Lead designer, Art director and marketing specialist",
    company: "GustaGo",
    dates: "2025 - 2026",
    color: "#c45c26",
    mark: "Gg",
  },
  {
    role: "Lead Product designer, Art director e Project Manager",
    company: "Leagacy of game",
    dates: "2023 - 2025",
    color: "#1f3a5f",
    mark: "Lg",
  },
  {
    role: "Lead designer and art director",
    company: "The trader forge",
    dates: "2024",
    color: "#0f766e",
    mark: "Tf",
  },
  {
    role: "Lead web designer",
    company: "Prop Tradezone",
    dates: "2024",
    color: "#4338ca",
    mark: "Pt",
  },
  {
    role: "Web designer",
    company: "Tiaos",
    dates: "2022",
    color: "#7c3aed",
    mark: "Ti",
  },
  {
    role: "Graphic designer",
    company: "Gruppo L.E.M.",
    dates: "2022",
    color: "#44403c",
    mark: "Lm",
  },
] as const;

export const services = [
  {
    title: "Product design",
    body: "Digital products from research to UI: flows, systems, and interfaces that feel clear to use.",
    icon: "layers" as const,
  },
  {
    title: "Art direction",
    body: "Visual language, art direction, and creative lead across product, campaign, and brand work.",
    icon: "palette" as const,
  },
  {
    title: "Project Management",
    body: "Scope, timeline, and delivery: keep teams aligned from brief to launch.",
    icon: "kanban" as const,
  },
  {
    title: "Branding",
    body: "Identity, tone, and brand systems that stay consistent across product and communication.",
    icon: "gem" as const,
  },
  {
    title: "Visual and social media design",
    body: "Visual assets and social content: posts, covers, and motion-ready layouts for channels.",
    icon: "images" as const,
  },
  {
    title: "Marketing",
    body: "Campaign thinking and assets that support launch, growth, and brand presence.",
    icon: "megaphone" as const,
  },
] as const;

export const works = [
  {
    slug: "webble-studio",
    name: "Webble Studio",
    tags: ["Web design", "Branding", "Marketing"],
    blurb: "Website, brand system, and marketing assets for the studio.",
    tint: "#f3efe8",
    image: "/works/webble-studio.jpg",
  },
  {
    slug: "holdup-agency",
    name: "Holdup Agency",
    tags: ["Web design", "Art direction"],
    blurb: "Art direction and web design for the agency presence.",
    tint: "#f7e8e2",
    image: "/works/holdup-agency.jpg",
  },
  {
    slug: "mbp-productions",
    name: "MBP Productions",
    tags: ["Web design", "Art direction"],
    blurb: "Visual direction and website for a production studio.",
    tint: "#eceff3",
    image: "/works/mbp-productions.jpg",
  },
  {
    slug: "legacy-of-game",
    name: "Legacy of Game",
    tags: ["Creative lead", "Project management"],
    blurb: "Creative lead and project management across product and brand.",
    tint: "#f3efe8",
    image: "/works/legacy-of-game.jpg",
  },
  {
    slug: "mavimatt",
    name: "Mavimatt",
    tags: ["Branding"],
    blurb: "Brand identity and visual system.",
    tint: "#f7e8e2",
    image: "/works/mavimatt.jpg",
  },
  {
    slug: "gustago",
    name: "GustaGo",
    tags: ["App design", "Branding"],
    blurb: "App design and branding for a product launch.",
    tint: "#eceff3",
    image: "/works/gustago.jpg",
  },
  {
    slug: "vista360",
    name: "Vista360",
    tags: ["Web design"],
    blurb: "Website design from structure to UI.",
    tint: "#f3efe8",
    image: "/works/vista360.jpg",
  },
  {
    slug: "forex-aikido",
    name: "Forex Aikido",
    tags: ["Branding", "Social media design"],
    blurb: "Brand and social media design for the channel.",
    tint: "#f7e8e2",
    image: "/works/forex-aikido.jpg",
  },
] as const;

export type Work = (typeof works)[number];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

const covers = works.map((work) => work.image);

export function workPhotos(work: Work) {
  const start = works.findIndex((item) => item.slug === work.slug);
  return Array.from({ length: 6 }, (_, i) => covers[(start + i) % covers.length]);
}
