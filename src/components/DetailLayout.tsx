import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { Link } from "react-router";
import { fadeInVariants } from "@/animations";

type PagerLink = { to: string; label: string };

interface DetailLayoutProps {
  // Where "back" goes on the home page, such as /#projects.
  back: PagerLink;
  eyebrow: ReactNode;
  title: string;
  children: ReactNode;
  previous?: PagerLink;
  next?: PagerLink;
}

// The shared frame for project and talk pages: a way back to the home page
// section, the page heading, its content, and links to its neighbours.
export default function DetailLayout({
  back,
  eyebrow,
  title,
  children,
  previous,
  next,
}: DetailLayoutProps) {
  return (
    <div className="min-h-screen py-16 bg-grey-900 lg:py-24">
      <motion.article
        animate="visible"
        initial="hidden"
        variants={fadeInVariants}
        className="max-w-3xl px-4 mx-auto detail"
      >
        <Link className="font-mono text-sm" to={back.to}>
          <span aria-hidden="true">← </span>
          {back.label}
        </Link>
        <header className="mt-10 mb-8">
          <div className="font-mono text-sm text-greyish-300">{eyebrow}</div>
          <h1 className="mt-3 font-bold text-oasis-500">{title}</h1>
        </header>
        {children}
        {(previous || next) && (
          <nav
            aria-label="More pages"
            className="flex flex-wrap justify-between gap-6 pt-8 mt-16 border-t border-greyish-800"
          >
            {previous ? (
              <Link to={previous.to} className="max-w-xs">
                <span className="block font-mono text-xs text-greyish-400">Previous</span>
                {previous.label}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={next.to} className="max-w-xs text-right">
                <span className="block font-mono text-xs text-greyish-400">Next</span>
                {next.label}
              </Link>
            )}
          </nav>
        )}
      </motion.article>
    </div>
  );
}
