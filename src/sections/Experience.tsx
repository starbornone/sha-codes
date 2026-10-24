import React from "react";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section className="section bg-grey-900" id="experience">
      <div className="max-w-2xl px-4 mx-auto">
        <header>
          <h2>
            <span className="highlight">my</span>.experience
          </h2>
          <p>
            I hold a Diploma in System Analysis and Design, along with a
            Bachelor&apos;s degree in International Studies, specialising in
            International Business. To further enhance my expertise, I pursued
            an MBA, diving deep into business strategy and leadership.
          </p>
          <p>
            Beyond my formal education, I&apos;m committed to continuous
            learning and have completed a variety of courses on JavaScript,
            React, Node.js, and Unity. I'm also an avid reader, immersing myself
            in design principles and best practices to craft intuitive and
            engaging user experiences.
          </p>
        </header>

        <div className="mt-8">
          {EXPERIENCE.map((experience) => (
            <ExperienceCard experience={experience} key={experience.name} />
          ))}
        </div>

        <footer className="mt-12 lg:mt-16">
          <p>
            More of my history is available on{" "}
            <a
              href="https://www.linkedin.com/in/sha-kong-brooks/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  );
}
