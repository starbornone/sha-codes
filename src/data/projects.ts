export type ProjectData = {
  // Also the URL slug: the project's page lives at /projects/<id>.
  id: string;
  name: string;
  url?: string;
  repo?: string;
  description: string;
  images?: string[];
  roles: string[];
  tech: string[];
};

export const PROJECTS: ProjectData[] = [
  {
    id: "ovi",
    name: "OVI — Ophis Virtual Intelligence",
    url: "https://www.ophis.com.au/",
    description:
      "A compliance readiness platform for NDIS providers that maps practice standards to the controls and evidence that meet them, keeps registers for incidents, complaints and actions current, and works out a readiness score from all of it. Auditors get a time-limited, read-only viewer with full access history. Built as a multi-tenant app with role-based memberships, invitations, and a staff area that doubles as a CRM, with data kept on Australian infrastructure.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "TypeScript", "TanStack Router", "TailwindCSS", "Supabase"],
    images: ["/images/projects/ovi-01.jpg"],
  },
  {
    id: "ready-check",
    name: "Ready Check",
    url: "https://readycheck.work/",
    description:
      "A calm to-do app designed for people with ADHD and AuDHD, free of shame language and judgement. Combines Todoist-level task management with natural-language quick add, a calendar showing when tasks were due alongside when they were actually completed, focus tools, and a sales pipeline tracked against monthly targets. An installable, offline-capable PWA that keeps data on the device with optional account sync.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "TypeScript", "Zustand", "Dexie", "TailwindCSS", "Supabase"],
    images: ["/images/projects/ready-check-01.jpg"],
  },
  {
    id: "kritik-systems",
    name: "Kritik Systems",
    url: "https://www.kritik.systems/",
    description:
      "A browser-based toolkit for quantitative Marxian political economy, covering surplus value, the rate of profit, organic composition of capital, the tendency of the rate of profit to fall, and reproduction schemas. Every calculator shows its step-by-step derivation with cited notes. Local-first with no account required, with saved scenarios, comparison charts, and data exports unlocked through a one-time purchase.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Dexie", "Supabase", "Stripe"],
    images: ["/images/projects/kritik-systems-01.jpg"],
  },
  {
    id: "midnight-archive",
    name: "Midnight Archive",
    url: "https://www.midnightarchive.online/",
    description:
      "The web home of Obscurity Shroud, a trilogy of urban fantasy novels set in the hidden corners of Sydney. Pairs a chapter reader built around careful typography with a shared lore browser, illustrations, and optional atmosphere, alongside reader accounts, chapter discussion and reactions. Includes an author dashboard for editing, publishing, and moderation.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "Supabase"],
    images: ["/images/projects/midnight-archive-01.jpg"],
  },
  {
    id: "arcana-tools",
    name: "Arcana Tools",
    url: "https://www.arcana.tools/",
    description:
      "A personal organisation dashboard for people with AuDHD that brings tasks, projects, calendars, shopping lists, mood logging and budgeting into one place. Includes quick capture with inbox triage, recurring life-admin obligations that turn into tasks before they're due, and a calendar with reminders, sunrise and moon data, and read-only Google Calendar sync. Mood check-ins come with insights and exports, and budgeting in AUD covers accounts, bills and alerts.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "shadcn/ui", "Supabase"],
    images: ["/images/projects/arcana-tools-01.jpg"],
  },
  {
    id: "talesmith",
    name: "Talesmith",
    url: "https://www.talesmith.com.au/",
    description:
      "A platform for educators, trainers and facilitators to create and share interactive, branching-path stories and lessons without any technical skills. Features a visual branching path builder, ready-made story templates, and images, audio and video embedded directly in story nodes. Suited to classrooms, university courses, workplace training and language learning, with lessons published and shared through a link.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "TypeScript", "React Router", "TailwindCSS", "Supabase"],
    images: ["/images/projects/talesmith-01.jpg"],
  },
  {
    id: "break-the-loop",
    name: "Break the Loop",
    url: "https://www.breaktheloop.games/",
    description:
      "A materialist idle strategy game about the end of infinite growth, free to play in the browser. Players guide a society through its own contradictions, from primitive extraction through imperialism and crisis to a world without scarcity, with each mode of production rewriting which meters and actions matter. NPC nations react to every move, and conflict emerges from economic and diplomatic pressure rather than a menu click.",
    roles: ["Game Design", "Development"],
    tech: ["React", "TypeScript", "Node.js", "Socket.IO", "Prisma"],
    images: ["/images/projects/break-the-loop-01.jpg"],
  },
  {
    id: "praxis-primer",
    name: "Praxis Primer",
    url: "https://www.praxisprimer.info/",
    description:
      "A reading and study companion for socialist and communist theory, with structured reading plans, original section summaries, and discussion prompts for study circles. Readers keep private notes in the browser and review key terms with spaced repetition, while the source texts stay on their original sites. A sibling project to Kritik Systems, with content validated at build time.",
    roles: ["UI Design", "Development"],
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Dexie", "Zod"],
    images: ["/images/projects/praxis-primer-01.jpg"],
  },
  {
    id: "marketopia",
    name: "Marketopia Adventures",
    url: "https://marketopia.sha.codes/",
    description:
      "An interactive visual-novel style web app designed to introduce and explore fundamental concepts in game theory. Developed to accompany an introductory talk, it allows viewers to experience game theory principles firsthand through a series of dynamic scenarios and decision-making pathways. The app combines narrative elements with educational gameplay, providing an engaging learning environment that demystifies complex topics.",
    roles: ["UI Design", "Development"],
    tech: ["React", "Next.js", "SASS", "Framer Motion"],
    images: [
      "/images/projects/marketopia-01.jpg",
      "/images/projects/marketopia-02.jpg",
      "/images/projects/marketopia-03.jpg",
    ],
  },
  {
    id: "harptos-calendar-tracker",
    name: "Harptos Calendar Tracker",
    url: "https://harptos.starmist.studio/",
    repo: "https://github.com/starbornone/harptos-calendar-tracker",
    description:
      "A Dungeon Master tool for Faerûn campaigns that models the Harptos calendar end to end—festivals, Shieldmeet, and year titles included. Set or advance campaign time across Neverwinter, Phandalin, Baldur’s Gate, and Waterdeep, with location-aware daylight phases and seeded hourly weather that stays consistent across skips and reloads. Shareable campaign links support read-only previews and optional adoption, with English and Simplified Chinese localisation and a one-line summary built for session notes.",
    roles: ["UI Design", "Development"],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    images: ["/images/projects/harptos-calendar-tracker-01.jpg"],
  },
  {
    id: "vcfo-accountants",
    name: "VCFO Accountants",
    url: "https://vcfoaccountants.com.au/",
    description:
      "A modern accounting firm website featuring a clean, professional design with optimised performance metrics. Implements dynamic blog content management through Hygraph, includes interactive service calculators, and features automated appointment scheduling. Optimised for local SEO with structured data markup.",
    roles: ["UI Design", "Development"],
    tech: ["React", "Next.js", "GraphQL", "Hygraph"],
    images: [
      "/images/projects/vcfo-accountants-01.jpg",
      "/images/projects/vcfo-accountants-02.jpg",
      "/images/projects/vcfo-accountants-03.jpg",
    ],
  },
  {
    id: "outrun-games",
    name: "Outrun Games",
    url: "https://outrun.games/",
    description:
      "A feature-rich gaming analytics platform offering detailed game statistics, user reviews, and performance metrics. Implements complex data visualisation for gaming trends, includes a recommendation engine, and features smooth animations for an engaging user experience. MongoDB integration enables efficient handling of large datasets and real-time updates.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "MongoDB", "TailwindCSS", "Framer Motion"],
    images: [
      "/images/projects/outrun-games-01.jpg",
      "/images/projects/outrun-games-02.jpg",
      "/images/projects/outrun-games-03.jpg",
    ],
  },
  {
    id: "no-place-to-rest",
    name: "No Place to Rest",
    url: "https://www.noplaceto.rest/",
    description:
      "A hand-drawn point-and-click game in which a child crosses a ruined city guided by a cat that glows brighter near contamination. Clean routes are gated by hostile architecture while contaminated ones lie open, so every choice trades exposure, energy, and the cat's trust as the evening closes in. Spans 47 illustrated scenes and 127 routes across three acts, with multiple endings and replays that open new paths.",
    roles: ["Game Design", "Development"],
    tech: ["React", "TypeScript", "Vite"],
    images: ["/images/projects/no-place-to-rest-01.jpg"],
  },
  {
    id: "ai-dreams",
    name: "AI Dreams",
    url: "https://aidreams.world/",
    description:
      "A blog platform built with React and Next.js, featuring dynamic content loading and a clean, minimalist design. Leverages Hygraph's CMS capabilities for efficient content management, with responsive layouts and optimised performance. Implements modern SEO practices and server-side rendering for optimal search engine visibility.",
    roles: ["UI Design", "Development"],
    tech: ["React", "Next.js", "GraphQL", "TailwindCSS", "Hygraph"],
    images: [
      "/images/projects/ai-dreams-01.jpg",
      "/images/projects/ai-dreams-02.jpg",
      "/images/projects/ai-dreams-03.jpg",
    ],
  },
  {
    id: "dr-olga-palma",
    name: "Dr Olga Palma",
    url: "https://drolgap.com.au/",
    description:
      "A modern dental practice website featuring an intuitive appointment booking system, service information, and patient resources. Implements responsive design principles for optimal viewing across devices, includes interactive service galleries, and features automated contact forms with validation. Optimised for local SEO with structured data markup.",
    roles: ["UI Design", "Development"],
    tech: ["React", "TailwindCSS", "React Router"],
    images: ["/images/projects/dr-olga-palma-01.jpg"],
  },
  {
    id: "dnd-point-buy-calc",
    name: "D&D Point Buy Calculator",
    url: "https://dnd.starmist.studio/",
    description:
      "An intuitive D&D 5e character creation tool featuring a sophisticated point-buy system with real-time calculations and validation. Supports all official races and subraces, including custom content, with automatic modifier calculations and stat maximums. Includes detailed tooltips, mobile responsiveness, and shareable character builds via URL parameters.",
    roles: ["Full-Stack Developer", "UI/UX Designer"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    images: [
      "/images/projects/dnd-point-buy-calc-01.jpg",
      "/images/projects/dnd-point-buy-calc-02.jpg",
    ],
  },
  {
    id: "my-money",
    name: "my.money",
    description:
      "A streamlined mobile finance tracking application built with React Native, focusing on manual entry for greater user control and privacy. Features offline capability, custom categories, and detailed spending analytics. Implements secure authentication and real-time data synchronisation with the backend server.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: [
      "React Native",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Native Base",
    ],
    images: ["/images/projects/my-money-01.jpg"],
  },
  {
    id: "genshin-recipes",
    name: "Genshin Recipes",
    url: "https://genshin.recipes/",
    description:
      "An interactive recipe database for Genshin Impact. Implements smooth animations and transitions for an engaging user experience, with full mobile responsiveness.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "MongoDB", "Chakra UI", "Framer Motion"],
    images: [
      "/images/projects/genshin-recipes-01.jpg",
      "/images/projects/genshin-recipes-02.jpg",
      "/images/projects/genshin-recipes-03.jpg",
    ],
  },
];
