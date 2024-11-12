export type ProjectData = {
  id: string;
  name: string;
  url?: string;
  description: string;
  images?: string[];
  roles: string[];
  tech: string[];
};

export const PROJECTS: ProjectData[] = [
  {
    id: "marketopia",
    name: "Marketopia Adventures",
    url: "https://marketopia.sha.codes/",
    description:
      "An interactive visual-novel style web app designed to introduce and explore fundamental concepts in game theory. Developed to accompany an introductory talk, it allows viewers to experience game theory principles firsthand through a series of dynamic scenarios and decision-making pathways. The app combines narrative elements with educational gameplay, providing an engaging learning environment that demystifies complex topics.",
    roles: ["UI Design", "Development"],
    tech: ["React", "Next.js", "SASS", "Framer Motion"],
    images: [
      "https://res.cloudinary.com/starborn/image/upload/v1731435710/sha-codes/projects/marketopia-02_t3f8tc.png",
      "https://res.cloudinary.com/starborn/image/upload/v1731435710/sha-codes/projects/marketopia-04_zsfzsy.png",
      "https://res.cloudinary.com/starborn/image/upload/v1731435710/sha-codes/projects/marketopia-03_ih8uyj.png",
    ],
  },
  {
    id: "aid",
    name: "AI Dreams",
    url: "https://aidreams.world/",
    description:
      "A blog platform built with React and Next.js, featuring dynamic content loading and a clean, minimalist design. Leverages Hygraph's CMS capabilities for efficient content management, with responsive layouts and optimised performance. Implements modern SEO practices and server-side rendering for optimal search engine visibility.",
    roles: ["UI Design", "Development"],
    tech: ["React", "Next.js", "GraphQL", "TailwindCSS", "Hygraph"],
    images: [
      "https://res.cloudinary.com/starborn/image/upload/v1731431776/sha-codes/projects/ai-dreams-01_gpyudo.png",
      "https://res.cloudinary.com/starborn/image/upload/v1731431776/sha-codes/projects/ai-dreams-02_i9nch0.png",
      "https://res.cloudinary.com/starborn/image/upload/v1731431774/sha-codes/projects/ai-dreams-03_odpqdh.jpg",
    ],
  },
  {
    id: "dnd-point-buy-calc",
    name: "D&D Point Buy Calculator",
    url: "https://dnd-point-buy-calc.vercel.app/",
    description:
      "An intuitive D&D 5e character creation tool featuring a sophisticated point-buy system with real-time calculations and validation. Supports all official races and subraces, including custom content, with automatic modifier calculations and stat maximums. Includes detailed tooltips, mobile responsiveness, and shareable character builds via URL parameters.",
    roles: ["Full-Stack Developer", "UI/UX Designer"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    images: [
      "https://res.cloudinary.com/starborn/image/upload/v1731431439/sha-codes/projects/dnd-point-buy-calc-01_irqiwm.png",
      "https://res.cloudinary.com/starborn/image/upload/v1731431622/sha-codes/projects/dnd-point-buy-calc-02_ineke8.png",
    ],
  },
  {
    id: "og",
    name: "Outrun Games",
    url: "https://outrun.games/",
    description:
      "A feature-rich gaming analytics platform offering detailed game statistics, user reviews, and performance metrics. Implements complex data visualisation for gaming trends, includes a recommendation engine, and features smooth animations for an engaging user experience. MongoDB integration enables efficient handling of large datasets and real-time updates.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "MongoDB", "TailwindCSS", "Framer Motion"],
    images: [
      "https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/outrun-games-02_pboj8p.jpg",
      "https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/outrun-games-01_ad5txk.jpg",
      "https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/outrun-games-03_cqnvun.jpg",
    ],
  },
  {
    id: "mm",
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
    images: [
      "https://res.cloudinary.com/shianra/image/upload/v1639498096/sha/projects/lucid-01-min_ghnbie.jpg",
    ],
  },
  {
    id: "vcfoa",
    name: "VCFO Accountants",
    url: "https://vcfoaccountants.com.au/",
    description:
      "A modern accounting firm website featuring a clean, professional design with optimised performance metrics. Implements dynamic blog content management through Hygraph, includes interactive service calculators, and features automated appointment scheduling. Optimised for local SEO with structured data markup.",
    roles: ["UI Design", "Development"],
    tech: ["React", "Next.js", "GraphQL", "Hygraph"],
    images: [
      "https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/vcfo-accountants-02_kwubxb.jpg",
      "https://res.cloudinary.com/starborn/image/upload/v1666194702/sha-codes/projects/vcfo-accountants-01_ch4udq.jpg",
      "https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/vcfo-accountants-03_zmp1fw.jpg",
    ],
  },
  {
    id: "gr",
    name: "Genshin Recipes",
    url: "https://genshin.recipes/",
    description:
      "An interactive recipe database for Genshin Impact. Implements smooth animations and transitions for an engaging user experience, with full mobile responsiveness.",
    roles: ["UI Design", "Database Design", "Development"],
    tech: ["React", "MongoDB", "Chakra UI", "Framer Motion"],
    images: [
      "https://res.cloudinary.com/starborn/image/upload/v1666195078/sha-codes/projects/genshin-recipes-01_h6mqhb.jpg",
      "https://res.cloudinary.com/starborn/image/upload/v1666195078/sha-codes/projects/genshin-recipes-02_zt4fz4.jpg",
      "https://res.cloudinary.com/starborn/image/upload/v1666195078/sha-codes/projects/genshin-recipes-03_qpsvx8.jpg",
    ],
  },
  {
    id: "dop",
    name: "Dr Olga Palma",
    url: "https://drolgap.com.au/",
    description:
      "A modern dental practice website featuring an intuitive appointment booking system, service information, and patient resources. Implements responsive design principles for optimal viewing across devices, includes interactive service galleries, and features automated contact forms with validation. Optimised for local SEO with structured data markup.",
    roles: ["UI Design", "Development"],
    tech: ["React", "TailwindCSS", "React Router"],
    images: [
      "https://res.cloudinary.com/shianra/image/upload/v1639498096/sha/projects/dr-olga-01-min_yew5uu.jpg",
    ],
  },
];
