import React from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

function Projects() {
  const websites = PROJECTS.filter(
    (website) => website.images && website.description
  );

  return (
    <div className="section bg-grey-600" id="projects">
      <div>
        <div className="container">
          <div>
            <h2>
              <span className="highlight">my</span>.projects
            </h2>
            <p>
              Whether I'm coding to bring someone’s vision to life, tackling an
              intriguing challenge, or turning my own ideas into reality, here
              are a few projects I'm excited to share. I also have some of my
              repos public on{" "}
              <a
                href="https://github.com/starbornone"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 xl:mx-auto">
        {websites.map((website, index) => (
          <ProjectCard
            card={{
              details: {
                ...website,
                highlights: {
                  list: website.roles,
                  separator: "&bull;",
                },
                inclusions: {
                  list: website.tech,
                  prefix: (
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path d="M64 112c0-44.2 35.8-80 80-80l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-26.5 0-48 21.5-48 48l0 53.5c0 21.2-8.4 41.6-23.4 56.6L38.6 256l33.9 33.9c15 15 23.4 35.4 23.4 56.6L96 400c0 26.5 21.5 48 48 48l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-44.2 0-80-35.8-80-80l0-53.5c0-12.7-5.1-24.9-14.1-33.9L4.7 267.3c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3l45.3-45.3c9-9 14.1-21.2 14.1-33.9L64 112z" />
                    </svg>
                  ),
                  suffix: (
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path d="M192 112c0-44.2-35.8-80-80-80L48 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c26.5 0 48 21.5 48 48l0 53.5c0 21.2 8.4 41.6 23.4 56.6L217.4 256l-33.9 33.9c-15 15-23.4 35.4-23.4 56.6l0 53.5c0 26.5-21.5 48-48 48l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c44.2 0 80-35.8 80-80l0-53.5c0-12.7 5.1-24.9 14.1-33.9l45.3-45.3c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-45.3-45.3c-9-9-14.1-21.2-14.1-33.9l0-53.5z" />
                    </svg>
                  ),
                },
              },
              index,
            }}
            key={website.id}
          />
        ))}
        <div className="my-16">
          <div className="font-mono text-center">And more... </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
