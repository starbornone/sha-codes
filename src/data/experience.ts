export type ExperienceData = {
  role: string;
  name: string;
  duration: string;
  description: string;
  list: string[];
  // Internal write-ups, shown as titles only because the pages aren't public.
  writing?: { heading: string; titles: string[] }[];
};

export const EXPERIENCE: ExperienceData[] = [
  {
    role: "Senior Software Engineer",
    name: "Campaign Monitor",
    duration: "March 2022 - Present",
    description:
      "I'm an AI Enablement Engineer on Team Lovelace, which builds the AI platform Campaign Monitor's engineers use, including a code knowledge graph and an automated pull request reviewer. My job is making that platform land: what the agents know, how engineers adopt them, and how feedback gets back into the tooling. Before that, I worked on the front end with React, Next.js and TypeScript, leading design system and accessibility efforts and becoming lead front-end owner of AI Campaign Agent on Team Zuse.",
    list: [
      "Look after what the AI agents know: skills, domain context and evaluation sets. I'm adding a CI check that every skill ships with evals.",

      "Lead adoption across engineering through crews, onboarding and office hours, and run skill audits with the JVM, C#, DevOps and Messaging crews.",

      "Setting up a feedback loop for the AI pull request reviewer, so engineers' reports become eval cases that improve it.",

      "Use AI tooling to migrate legacy WebForms and Razor pages off .NET Framework, and improve the performance of code knowledge graph tool calls.",

      "Was lead front-end owner of AI Campaign Agent, an AI assistant for building email campaigns.",

      "Built and maintained design system tooling in React, TypeScript and Styled Components that several product teams used to ship consistent UI faster.",

      "Wrote UI pattern libraries and component documentation, built on Headless UI and Markdown, that became a shared reference for product, design and engineering.",

      "Led accessibility work across the front end: applying WCAG guidelines, reviewing components and teaching other engineers accessible patterns.",

      "Set front-end engineering standards for accessibility and component reuse, and documented them for the wider team.",

      "Built Next.js and TypeScript tools that made design feedback faster to give and act on, and extended Node.js tooling for component library workflows.",

      "Captain the HTML/CSS and JavaScript crews, organise the AI Guild, and help run the company's internal talk series.",
    ],
    writing: [
      {
        heading: "AI and LLMs",
        titles: [
          "How LLMs Lose Track of Their Instructions",
          "Vibe Coding: Where It Helps and Where It Falls Short",
          "Claude Code: A Practical Guide for Campaign Monitor Engineers",
          "Claude Code, Codex and Cursor: A Comparison",
          "When Is AI the Right Tool?",
          "AI Glossary",
          "What the AI Guild Told Us: March 2026 Feedback Analysis",
          "What Changed After the AI Guild's March Feedback",
          "Lovelace Listening Tour",
          "AI Code Review Decision Log and Guidelines",
        ],
      },
      {
        heading: "Projects",
        titles: [
          "AI Guide: Short, Hands-On Claude Code Activities",
          "Retrovich: Real-Time Retros for Software Teams",
        ],
      },
      {
        heading: "Engineering practice",
        titles: [
          "The Purpose and Sizing of PRs",
          "Why We Extend Our Design System and Write Native CSS",
          "Design System Strategy Decision",
          "Preline and Design System Coexistence Notes",
        ],
      },
      {
        heading: "Crews",
        titles: [
          "Overview of Crews",
          "HTML/CSS Crew: Review Guidelines",
          "Review Comments",
          "HTML/CSS Tooling",
          "JS Crew: Review Guidelines",
          "JS Tooling",
          "How the Front End Is Built and Shipped",
        ],
      },
      {
        heading: "Product",
        titles: [
          "Third-Party Services Worth Watching: Customer Data & Marketing",
        ],
      },
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
