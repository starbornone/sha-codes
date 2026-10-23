import { motion } from "framer-motion";
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
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={animationVariants}
      >
        <div className="max-w-2xl px-4 py-12 mx-auto lg:py-24">
          <header className="mb-8">
            <h1 className="font-bold text-greyish-200">
              <span className="highlight">Sha</span> Kong-Brooks
            </h1>
            <p className="mt-2 font-mono text-oasis-500">
              Senior Software Engineer
            </p>
          </header>
          <article className="space-y-6 text-lg leading-relaxed">
            <p>
              I&apos;m a senior software engineer at Marigold, the company
              behind Campaign Monitor, based in Sydney. I work in AI
              enablement: I help engineers adopt the AI platform we build, from
              agent skills and evals to onboarding and feedback.
            </p>
            <p>
              I&apos;ve been in the industry for over a decade, from
              self-taught web development through enterprise full-stack work
              with React, Node and PostgreSQL to AI and LLM tooling. Outside
              work I design games and build tools for tabletop and strategy
              players.
            </p>
          </article>
          <a
            href="mailto:hello@sha.codes"
            className="inline-block px-5 py-2.5 mt-8 font-medium rounded-md bg-oasis-500 text-grey-900 hover:bg-oasis-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-grey-900 focus-visible:ring-buttercream-500"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </div>
  );
}
