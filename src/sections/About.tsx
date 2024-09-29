import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInVariants } from '@/animations';

const backgroundImage = 'url(https://res.cloudinary.com/shianra/image/upload/v1639497866/sha/9900K-min_a2uusi.jpg)';

export default function About(): JSX.Element {
  return (
    <AnimatePresence>
      <motion.section
        animate="visible"
        initial="hidden"
        variants={fadeInVariants}
        className="section bg-grey-600 bg-cover bg-center"
        id="about"
        style={{ backgroundImage }}
      >
        <div className="max-w-2xl mx-auto px-4 py-12 lg:py-24">
          <header className="mb-8">
            <h2 className="text-4xl font-bold">
              <span className="highlight">about</span>.me
            </h2>
          </header>
          <article className="space-y-6 text-lg leading-relaxed">
            <p>
            I’ve been passionate about computers since childhood, and my discovery of the internet quickly turned that passion into a love for web development. I began by creating websites about my interests using HTML, CSS, PHP, and MySQL. From there, I expanded my skills into Java, C++, and .NET, building applications with MSSQL and exploring front-end frameworks like Angular.
            </p>
            <p>
            For the past eight years, my focus has been primarily on modern web technologies. I’ve been working extensively with React (and some Vue), as well as Next.js with TypeScript. My stack includes Node.js and Express on the backend, often paired with PostgreSQL for data management. This combination has allowed me to develop dynamic and efficient web applications that deliver seamless user experiences.
            </p>
            <p>My interests also extend to game design and development, where I use C# to bring my ideas to life. I aim to create strategy and role-playing games that challenge players and encourage them to think deeply about the decisions they make.</p>
            <p>
            When I’m not immersed in code, you’ll likely find me gaming on the latest PC I’ve built or at the tabletop my cat has claimed as a nap spot. I’m also an avid reader and enjoy diving into a wide range of topics. I’ve found that insights from one field often inspire creativity and problem-solving in another.
            </p>
          </article>
          </div>
      </motion.section>
    </AnimatePresence>
  );
}
