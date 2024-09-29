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
    role: 'Front-End Engineer',
    name: 'Marigold/Campaign Monitor',
    link: 'https://meetmarigold.com/',
    duration: 'March 2022 - Present',
    description:
      'At Marigold/Campaign Monitor, I focus on enhancing the efficiency and collaboration between product, design, and engineering teams by developing robust front-end solutions. My key responsibilities include:',
    list: [
      'Design System Development: Contribute to and build design system tools that streamline UI creation, enabling teams to develop interfaces quickly and consistently.',
      'Optimising Feedback Loops: Work on improving communication and feedback processes between product, design, and engineering teams, ensuring seamless collaboration across departments.',
      'UI/UX Collaboration: Partner with designers at every stage of the design and development process to create, refine, and improve user interfaces and user experiences.',
      'Engineering Collaboration & Mentorship: Collaborate closely with fellow engineers to develop innovative solutions while mentoring peers on front-end best practices.',
      'Driving Accessibility: Champion accessibility initiatives, ensuring that UIs are built with inclusivity in mind, while shaping accessibility standards with the design and engineering teams.',
      'Documentation & Knowledge Sharing: Create and maintain comprehensive documentation for UI patterns and components, providing a centralised, up-to-date resource for the entire product, design, and engineering teams.',
      'Improving Front-End Infrastructure: Lead efforts to refine front-end engineering best practices and extend core infrastructure and libraries to support long-term scalability.'
    ],
  },
  {
    role: 'Full Stack Developer',
    name: 'Livn',
    link: 'https://livn.world/',
    duration: 'January 2017 - February 2022',
    description:
      'At Livn, I played a key role in designing, developing, and maintaining multiple web applications as part of a small JavaScript team. This position offered significant creative freedom and responsibility, allowing me to lead projects from inception to deployment. Along the way, I honed my skills in project management and developer collaboration. Some of the key projects I delivered include:',
    list: [
      'Store Management & Sales Platform: Developed a platform to streamline client operations and sales management.',
      'API Implementation & Documentation: Created a fully documented example implementation of Livn\'s API to facilitate client integrations.',
      "Backend Dashboard: Built a comprehensive dashboard for managing all of Livn's data, clients, and administrative tasks.",
      "Mock API Web App: Designed a mock implementation of Livn's API, enabling backend developers to efficiently test and validate their work.",
    ],
  },
];
