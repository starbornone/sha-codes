import React from "react";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

function Projects() {
  const websites = PROJECTS.filter((website) => website.description);

  return (
    <div className="section bg-grey-600" id="projects">
      <div>
        <div className="container">
          <div>
            <h2>
              <span className="highlight">my</span>.projects
            </h2>
            <p>
              These are my own projects, built outside work. I build each one
              solo, from the idea and UI design through the database, code and
              deployment, which is why they cover everything from compliance
              tools to games.
            </p>
            <p>
              If you&apos;re after more code, check out my public repos on{" "}
              <a
                href="https://github.com/starbornone"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>{" "}
              or explore my experiments on{" "}
              <a
                href="https://codepen.io/starborn"
                rel="noreferrer"
                target="_blank"
              >
                CodePen
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 lg:mt-0 xl:mx-auto">
        {websites.map((website, index) => (
          <ProjectCard key={website.id} project={website} reversed={index % 2 === 0} />
        ))}
        <div className="my-16">
          <div className="font-mono text-center">And more... </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
