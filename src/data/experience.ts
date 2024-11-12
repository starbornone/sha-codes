export type ExperienceData = {
  role: string;
  name: string;
  link: string;
  duration: string;
  description: string;
  list: string[];
};

export const EXPERIENCE: ExperienceData[] = [
  {
    role: "Senior Software Engineer",
    name: "Campaign Monitor",
    link: "https://meetmarigold.com/",
    duration: "March 2022 - Present",
    description:
      "At Campaign Monitor, I specialise in front-end development using React.js, Next.js, TypeScript, and modern styling solutions including SASS and Styled Components. Working closely with design teams through Figma, I focus on creating robust, accessible UI components and design systems.",
    list: [
      "Architected and maintained design system tools using React.js, TypeScript, and Styled Components, enabling rapid UI development across multiple product teams.",

      "Implemented HeadlessUI components and established documentation systems using Markdown, creating a centralised knowledge base for product, design, and engineering teams.",

      "Developed feedback optimisation tools using Next.js and TypeScript to streamline collaboration between product, design, and engineering departments.",

      "Established and documented front-end engineering best practices, focusing on accessibility standards and component reusability.",

      "Created comprehensive UI pattern libraries and component documentation, improving team efficiency and maintaining consistency across products.",

      "Led initiatives in accessible UI development, implementing WCAG guidelines and educating team members on accessibility best practices.",

      "Built and extended front-end infrastructure using Node.js, improving development workflows and component library management.",
    ],
  },
  {
    role: "Software Engineer",
    name: "Livn",
    link: "https://livn.world/",
    duration: "January 2017 - February 2022",
    description:
      "Led development initiatives using a diverse tech stack including React.js, Node.js, PostgreSQL, TypeScript, and multiple UI frameworks (Material UI, ChakraUI, HeadlessUI). Managed both modern front-end applications and legacy systems built with Symfony, WordPress, and jQuery.",
    list: [
      "Led development team in building and maintaining full-stack applications using React.js, Node.js, and PostgreSQL, while managing MongoDB databases for specific use cases.",

      "Implemented new design processes using Material UI and ChakraUI, ensuring consistent user experience across multiple platforms.",

      "Developed and maintained both legacy systems (Symfony, WordPress) and modern applications (React.js, TypeScript) within the same ecosystem.",

      "Created and maintained comprehensive documentation for both internal teams and external users, improving project visibility and resource utilisation.",

      "Established coding standards and design guidelines across multiple frameworks (Material UI, ChakraUI, HeadlessUI), ensuring consistency in development practices.",

      "Managed deployment processes and infrastructure maintenance, ensuring smooth transitions from development to production.",

      "Interfaced with stakeholders across product management, engineering, and marketing teams to align development goals with business objectives.",
    ],
  },
];
