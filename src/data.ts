export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#works" },
  { label: "About me", href: "#about" },
  { label: "Contact us", href: "#contact" },
] as const;

const experienceLogo = (file: string) =>
  `/Pic esperienze lavorative/${file}`;

export const experience = [
  {
    role: "Product designer and Art director",
    company: "Webble Studio",
    dates: "2025 - Present",
    logo: experienceLogo("webblestudio.webp"),
    href: "https://webblestudio.com/it",
  },
  {
    role: "Graphic and web designer",
    company: "Bquadro",
    dates: "2023 - Present",
    logo: experienceLogo("bquadro.webp"),
  },
  {
    role: "Graphic and web designer",
    company: "Associazione Bios",
    dates: "2023 - Present",
    logo: experienceLogo("bios.webp"),
  },
  {
    role: "Product and Brand designer",
    company: "Freelance",
    dates: "2019 - Present",
    logo: experienceLogo("freelance.webp"),
  },
  {
    role: "Lead designer, Art director and marketing specialist",
    company: "GustaGo",
    dates: "2025 - 2026",
    logo: experienceLogo("Gustago.webp"),
  },
  {
    role: "Lead Product designer, Art director and Project Manager",
    company: "Leagacy of game",
    dates: "2023 - 2025",
    logo: experienceLogo("Legacyofgame.webp"),
  },
  {
    role: "Lead designer and art director",
    company: "The trader forge",
    dates: "2024",
    logo: experienceLogo("thetraderforge.webp"),
  },
  {
    role: "Lead web designer",
    company: "Prop Tradezone",
    dates: "2024",
    logo: experienceLogo("PropTradezone.webp"),
  },
  {
    role: "Web designer",
    company: "Tiaos",
    dates: "2022",
    logo: experienceLogo("tiaos.webp"),
  },
  {
    role: "Graphic designer",
    company: "Gruppo L.E.M.",
    dates: "2022",
    logo: experienceLogo("Gruppo lem.webp"),
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
    image: "/works/Webble.webp",
    photos: [
      { src: "/works/Webble/1 largo.webp", wide: true },
      { src: "/works/Webble/2 quadrato.webp", wide: false },
      { src: "/works/Webble/3 quadrato.webp", wide: false },
      { src: "/works/Webble/4 largo.webp", wide: true },
      { src: "/works/Webble/5 largo.webp", wide: true },
      { src: "/works/Webble/6 quadrato.webp", wide: false },
      { src: "/works/Webble/7 quadrato.webp", wide: false },
      { src: "/works/Webble/8 largo.webp", wide: true },
    ],
  },
  {
    slug: "holdup-agency",
    name: "Holdup Agency",
    tags: ["Web design", "Art direction"],
    blurb: "Art direction and web design for the agency presence.",
    tint: "#f7e8e2",
    image: "/works/Holdup.webp",
    photos: [
      { src: "/works/Holdup/1 larga.webp", wide: true },
      { src: "/works/Holdup/2 formato 5 6.webp", wide: false },
      { src: "/works/Holdup/3 formato 5 6.webp", wide: false },
      { src: "/works/Holdup/4 showreel.mp4", wide: true },
      { src: "/works/Holdup/5 formato 5 6.webp", wide: false },
      { src: "/works/Holdup/6 formato 5 6.webp", wide: false },
      { src: "/works/Holdup/7 larga.webp", wide: true },
    ],
  },
  {
    slug: "mbp-productions",
    name: "MBP Productions",
    tags: ["Web design", "Art direction"],
    blurb: "Visual direction and website for a production studio.",
    tint: "#eceff3",
    image: "/works/Mbp.webp",
    photos: [
      { src: "/works/mbp productions/1 largo.webp", wide: true },
      { src: "/works/mbp productions/2 quadrato.webp", wide: false },
      { src: "/works/mbp productions/3 quadrato.webp", wide: false },
      { src: "/works/mbp productions/4 largo.webp", wide: true },
      { src: "/works/mbp productions/5 largo.webp", wide: true },
    ],
  },
  {
    slug: "legacy-of-game",
    name: "Legacy of Game",
    tags: ["Creative lead", "Project management"],
    blurb: "Creative lead and project management across product and brand.",
    tint: "#f3efe8",
    image: "/works/Legacy of game.webp",
    photos: [
      { src: "/works/Legacy of game/1 larga.webp", wide: true },
      { src: "/works/Legacy of game/2 quadrata.webp", wide: false },
      { src: "/works/Legacy of game/3 quadrata.webp", wide: false },
      { src: "/works/Legacy of game/4 larga.webp", wide: true },
      { src: "/works/Legacy of game/5 quadrata.webp", wide: false },
      { src: "/works/Legacy of game/6 quadrata.webp", wide: false },
      { src: "/works/Legacy of game/7 larga.webp", wide: true },
    ],
  },
  {
    slug: "mavimatt",
    name: "Mavimatt",
    tags: ["Branding"],
    blurb: "Brand identity and visual system.",
    tint: "#f7e8e2",
    image: "/works/Mavimatt.webp",
    photos: [
      { src: "/works/Mavimatt/1 larga.webp", wide: true },
      { src: "/works/Mavimatt/2 quadrata.webp", wide: false },
      { src: "/works/Mavimatt/3 quadrata.webp", wide: false },
      { src: "/works/Mavimatt/4 larga.webp", wide: true },
      { src: "/works/Mavimatt/5 quadrata.webp", wide: false },
      { src: "/works/Mavimatt/6 quadrata.webp", wide: false },
      { src: "/works/Mavimatt/7 larga.webp", wide: true },
      { src: "/works/Mavimatt/8 larga.webp", wide: true },
    ],
  },
  {
    slug: "gustago",
    name: "GustaGo",
    tags: ["App design", "Branding"],
    blurb: "App design and branding for a product launch.",
    tint: "#eceff3",
    image: "/works/GustaGo.webp",
    photos: [
      { src: "/works/GustaGo/1 larga.webp", wide: true },
      { src: "/works/GustaGo/2 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/GustaGo/3 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/GustaGo/4 larga.webp", wide: true },
      { src: "/works/GustaGo/5 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/GustaGo/6 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/GustaGo/7 larga.webp", wide: true },
      { src: "/works/GustaGo/8 larga.webp", wide: true },
      { src: "/works/GustaGo/9 larga.webp", wide: true },
    ],
  },
  {
    slug: "vista360",
    name: "Vista360",
    tags: ["Web design"],
    blurb: "Website design from structure to UI.",
    tint: "#f3efe8",
    image: "/works/Vista360.webp",
    photos: [
      { src: "/works/vista360/1 larga.webp", wide: true },
      { src: "/works/vista360/2 quadrata.webp", wide: false },
      { src: "/works/vista360/3 quadrata.webp", wide: false },
      { src: "/works/vista360/4 larga.webp", wide: true },
      { src: "/works/vista360/5 quadrata.webp", wide: false },
      { src: "/works/vista360/6 quadrata.webp", wide: false },
      { src: "/works/vista360/7 larga.webp", wide: true },
      { src: "/works/vista360/8 quadrata.webp", wide: false },
      { src: "/works/vista360/9 quadrata.webp", wide: false },
      { src: "/works/vista360/10 larga.webp", wide: true },
    ],
  },
  {
    slug: "forex-aikido",
    name: "Forex Aikido",
    tags: ["Branding", "Social media design"],
    blurb: "Brand and social media design for the channel.",
    tint: "#f7e8e2",
    image: "/works/Forex Aikido.webp",
    photos: [
      { src: "/works/forex aikido/1 larga.webp", wide: true },
      { src: "/works/forex aikido/2 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/forex aikido/3 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/forex aikido/4 larga.webp", wide: true },
      { src: "/works/forex aikido/5 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/forex aikido/6 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/forex aikido/7 larga.webp", wide: true },
      { src: "/works/forex aikido/8 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/forex aikido/9 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/forex aikido/10 larga.webp", wide: true },
      { src: "/works/forex aikido/11 larga.webp", wide: true },
    ],
  },
  {
    slug: "the-trader-forge",
    name: "The Trader Forge",
    tags: ["Art direction", "Social media design"],
    blurb: "Art direction and social media design for the trading brand.",
    tint: "#eceff3",
    image: "/works/the trader forge.webp",
    photos: [
      { src: "/works/The trader forge/1 larga.webp", wide: true },
      { src: "/works/The trader forge/2 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/The trader forge/3 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/The trader forge/4 larga 3 1.webp", wide: true, aspect: "3/1" },
      { src: "/works/The trader forge/5 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/The trader forge/6 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/The trader forge/7 larga 3 1.webp", wide: true, aspect: "3/1" },
      { src: "/works/The trader forge/8 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/The trader forge/9 4 5.webp", wide: false, aspect: "4/5" },
      { src: "/works/The trader forge/10 larga 3 1.webp", wide: true, aspect: "3/1" },
    ],
  },
] as const;

export type Work = (typeof works)[number];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export type WorkPhoto = { src: string; wide: boolean; aspect?: "4/5" | "3/1" };

export function workPhotos(work: Work): WorkPhoto[] {
  if ("photos" in work && work.photos) {
    return work.photos.map((photo) => ({ ...photo }));
  }
  return [{ src: work.image, wide: true }];
}
