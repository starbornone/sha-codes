export type ProjectData = {
  id: string;
  name: string;
  url?: string;
  description: string;
  images: string[];
  roles: string[];
  tech: string[];
};

export const PROJECTS: ProjectData[] = [
  {
    id: 'aid',
    name: 'AI Dreams',
    url: 'https://aidreams.world/',
    description:
      'A minimalist blog built with React and Next.js, featuring TailwindCSS for styling and Hygraph for content management.',
    images: [
      'https://res.cloudinary.com/starborn/image/upload/v1666166845/sha-codes/projects/ai-dreams-01_xirymy.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666166846/sha-codes/projects/ai-dreams-02_ftyi7u.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666166847/sha-codes/projects/ai-dreams-03_gyr1wt.jpg',
    ],
    roles: ['UI Design', 'Development'],
    tech: ['React', 'Next.js', 'GraphQL'],
  },
  {
    id: 'og',
    name: 'Outrun Games',
    url: 'https://outrun.games/',
    description:
      'A comprehensive gaming analysis website developed using React, with MongoDB as the primary data source. TailwindCSS was utilised for styling, while react-router and framer-motion handle smooth navigation and transitions.',
    images: [
      'https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/outrun-games-02_pboj8p.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/outrun-games-01_ad5txk.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/outrun-games-03_cqnvun.jpg',
    ],
    roles: ['UI Design', 'Database Design', 'Development'],
    tech: ['React', 'MongoDB', 'TailwindCSS', 'Framer Motion'],
  },
  {
    id: 'mm',
    name: 'my.money',
    description:
      'An easy-to-use app for tracking income and expenses, designed to be simple without automation or third-party integrations. Built with React Native, it connects to a Node.js + Express server with MongoDB for data storage. Styling is handled by Native Base.',
    images: ['https://res.cloudinary.com/shianra/image/upload/v1639498096/sha/projects/lucid-01-min_ghnbie.jpg'],
    roles: ['UI Design', 'Database Design', 'Development'],
    tech: ['React Native', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Native Base'],
  },
  {
    id: 'vcfoa',
    name: 'VCFO Accountants',
    url: 'https://vcfoaccountants.com.au/',
    description: 'A professional accounting website built using React and Next.js, with Hygraph managing the blog content.',
    images: [
      'https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/vcfo-accountants-02_kwubxb.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666194702/sha-codes/projects/vcfo-accountants-01_ch4udq.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666194703/sha-codes/projects/vcfo-accountants-03_zmp1fw.jpg',
    ],
    roles: ['UI Design', 'Development'],
    tech: ['React', 'Next.js', 'GraphQL'],
  },
  {
    id: 'gr',
    name: 'Genshin Recipes',
    url: 'https://genshin.recipes/',
    description:
      'A creative website that brings in-game recipes to life, built with React and powered by MongoDB. Chakra UI provides sleek styling, while react-router and framer-motion manage navigation and transitions.',
    images: [
      'https://res.cloudinary.com/starborn/image/upload/v1666195078/sha-codes/projects/genshin-recipes-01_h6mqhb.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666195078/sha-codes/projects/genshin-recipes-02_zt4fz4.jpg',
      'https://res.cloudinary.com/starborn/image/upload/v1666195078/sha-codes/projects/genshin-recipes-03_qpsvx8.jpg',
    ],
    roles: ['UI Design', 'Database Design', 'Development'],
    tech: ['React', 'MongoDB', 'Chakra UI', 'Framer Motion'],
  },
  {
    id: 'dop',
    name: 'Dr Olga Palma',
    url: 'https://drolgap.com.au/',
    description:
      'A sleek and modern website for a dental practice, created using React. TailwindCSS was used for styling, and react-router was employed for intuitive navigation.',
    images: ['https://res.cloudinary.com/shianra/image/upload/v1639498096/sha/projects/dr-olga-01-min_yew5uu.jpg'],
    roles: ['UI Design', 'Development'],
    tech: ['React', 'TailwindCSS', 'React Router'],
  },
];
