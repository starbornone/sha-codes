export type ExperienceData = {
  role: string;
  name: string;
  duration: string;
  description: string;
  list: string[];
};

export const EXPERIENCE: ExperienceData[] = [
  {
    role: "Senior Software Engineer",
    name: "Marigold (Campaign Monitor)",
    duration: "March 2022 - Present",
    description:
      "I'm an AI Enablement Engineer on Team Lovelace, which builds the AI platform Marigold's engineers use, including a code knowledge graph and an automated pull request reviewer. My job is making that platform land: what the agents know, how engineers adopt them, and how feedback gets back into the tooling. Before Lovelace, I was lead front-end owner of AI Campaign Agent on Team Zuse.",
    list: [
      "Look after what the AI agents know: skills, domain context and evaluation sets, and I'm adding a CI check that every skill ships with evals.",

      "Lead adoption across engineering through crews, onboarding and office hours, and run skill audits with the JVM, C#, DevOps and Messaging crews.",

      "Setting up a feedback loop for the AI pull request reviewer, so engineers' reports become eval cases that improve it.",

      "Use AI tooling to migrate legacy WebForms and Razor pages off .NET Framework, and improve the performance of code knowledge graph tool calls.",

      "Was lead front-end owner of AI Campaign Agent, an AI assistant for building email campaigns.",

      "Architected and maintained design system tools using React.js, TypeScript and Styled Components, and led accessible UI work to WCAG guidelines.",

      "Captain the HTML/CSS and JavaScript crews, organise the AI Guild, and help run the company's internal talk series.",
    ],
  },
  {
    role: "Software Engineer",
    name: "Livn",
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
