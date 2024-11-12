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
    <div className="py-24 overflow-hidden bg-grey-900">
      <AnimatePresence>
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={animationVariants}
        >
          <div className="max-w-2xl px-4 py-12 mx-auto lg:py-24">
            <header className="mb-8">
              <h2 className="text-4xl font-bold">
                <span className="highlight">sha</span>.codes
              </h2>
            </header>
            <article className="space-y-6 text-lg leading-relaxed">
              <p>
                I&apos;m a full-stack web developer with over a decade of
                experience turning ideas into captivating web applications. My
                secret sauce? A love for clean code paired with a flair for
                creative problem-solving! I focus on crafting engaging,
                user-centric experiences across various platforms. With a
                diverse technical background and a passion for game development
                and system design, I bring a unique perspective to each project,
                ensuring that every line of code contributes to something truly
                exceptional.
              </p>
            </article>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
