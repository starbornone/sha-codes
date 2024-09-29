import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { transition } from "@/animations";

const animationVariants = {
  exit: {
    x: "50%",
    opacity: 0,
    transition,
  },
  enter: {
    x: "0%",
    opacity: 1,
    transition,
  },
};

export default function Intro(): JSX.Element {
  return (
    <div className="py-24 bg-grey-900 overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={animationVariants}
        >
          <div className="max-w-2xl mx-auto px-4 py-12 lg:py-24">
            <header className="mb-8">
              <h2 className="text-4xl font-bold">
                <span className="highlight">sha</span>.codes
              </h2>
            </header>
            <article className="space-y-6 text-lg leading-relaxed">
              <p>
                I'm a full-stack web developer with over a decade of experience
                crafting web applications. With a passion for both clean code
                and creative solutions, I build engaging, user-centric
                experiences across a range of platforms. My diverse technical
                background, coupled with a keen interest in game development and
                system design, allows me to bring a unique perspective to every
                project I work on.
              </p>
            </article>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
