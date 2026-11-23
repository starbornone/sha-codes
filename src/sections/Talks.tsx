import React from "react";
import { Link } from "react-router";
import { TALKS } from "@/data/talks";
import { talkPath } from "@/meta";

function Talks() {
  return (
    <section className="section bg-grey-900" id="talks">
      <div className="max-w-3xl px-4 mx-auto">
        <header>
          <h1>
            <span className="highlight">my</span>.talks
          </h1>
          <p>
            Talks I&apos;ve given, with links to the transcripts so you can
            read them at your own pace.
          </p>
        </header>
        <ul className="mt-12 space-y-12">
          {TALKS.map((talk) => (
            <li key={talk.id}>
              <div className="font-mono text-sm text-greyish-300">
                {talk.venue} • {talk.year}
              </div>
              <h2 className="mt-2 text-3xl">
                <Link className="text-oasis-500 hover:text-oasis-400" to={talkPath(talk)}>
                  {talk.title}
                </Link>
              </h2>
              <p>{talk.summary}</p>
              <div className="flex flex-wrap gap-6 font-mono text-sm">
                <Link to={talkPath(talk)}>
                  About the talk<span className="sr-only">: {talk.title}</span>
                </Link>
                <a href={talk.transcriptUrl} rel="noreferrer" target="_blank">
                  Transcript<span className="sr-only"> of {talk.title}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Talks;
