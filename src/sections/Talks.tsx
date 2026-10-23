import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { transition } from "@/animations";
import { TALKS } from "@/data/talks";
import { talkPath } from "@/meta";

function Talks() {
  return (
    <div className="section bg-grey-900" id="talks">
      <div className="container">
        <div>
          <h2>
            <span className="highlight">my</span>.talks
          </h2>
          <p>
            Talks I&apos;ve given, with links to the transcripts so you can
            read them at your own pace.
          </p>
        </div>
      </div>
      <ul className="max-w-3xl px-4 mx-auto mt-12 space-y-12 lg:mt-0">
        {TALKS.map((talk) => (
          <motion.li
            key={talk.id}
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <div className="font-mono text-sm text-greyish-300">
              {talk.venue} • {talk.year}
            </div>
            <h3 className="mt-2 text-3xl">
              <Link className="text-oasis-500 hover:text-oasis-400" to={talkPath(talk)}>
                {talk.title}
              </Link>
            </h3>
            <p>{talk.summary}</p>
            <div className="flex flex-wrap gap-6 font-mono text-sm">
              <Link to={talkPath(talk)}>
                About the talk<span className="sr-only">: {talk.title}</span>
              </Link>
              <a href={talk.transcriptUrl} rel="noreferrer" target="_blank">
                Transcript<span className="sr-only"> of {talk.title}</span>
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Talks;
