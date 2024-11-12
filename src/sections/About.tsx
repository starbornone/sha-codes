import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInVariants } from "@/animations";

const backgroundImage =
  "url(https://res.cloudinary.com/shianra/image/upload/v1639497866/sha/9900K-min_a2uusi.jpg)";

export default function About(): JSX.Element {
  return (
    <AnimatePresence>
      <motion.section
        animate="visible"
        initial="hidden"
        variants={fadeInVariants}
        className="bg-center bg-cover section bg-grey-600"
        id="about"
        style={{ backgroundImage }}
      >
        <div className="max-w-2xl px-4 py-12 mx-auto lg:py-24">
          <header className="mb-8">
            <h2 className="text-4xl font-bold">
              <span className="highlight">about</span>.me
            </h2>
          </header>
          <article className="space-y-6 text-lg leading-relaxed">
            <p>
              Ever since I was a kid, computers captured my
              imagination—especially when I stumbled upon the internet. That
              spark ignited a full-blown love affair with web development! I
              kicked things off by whipping up websites about my favorite
              hobbies using HTML, CSS, PHP, and MySQL. From there, I
              couldn&apos;t resist diving into Java, C++, and .NET, creating
              applications with MSSQL and dabbling in front-end magic with
              Angular.
            </p>
            <p>
              For the past eight years, I&apos;ve been all about modern web
              technologies. You&apos;ll usually find me working my magic with
              React (a dash of Vue never hurts!) and Next.js with TypeScript. My
              trusty backend companions are Node.js and Express, often teaming
              up with PostgreSQL to keep my data in check. This tech combo
              allows me to build dynamic web applications that serve up seamless
              experiences for users.
            </p>
            <p>
              But wait—there&apos;s more! I&apos;m also a game design
              enthusiast, bringing my wild ideas to life using C#. I love
              crafting strategy and role-playing games that challenge players to
              think critically and make impactful decisions.
            </p>
            <p>
              When I&apos;m not glued to my screen coding away, you can catch me
              enjoying some gaming on my latest PC build or hanging out at the
              tabletop—where my cat has claimed her favorite nap spot. I&apos;m
              a curious soul who enjoys reading about a wide range of topics,
              because let&apos;s be real: sometimes the best ideas come from the
              most unexpected places!
            </p>
          </article>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
