import { motion } from "framer-motion";
import React from "react";
import { transition } from "@/animations";
import { ProjectData } from "@/data/projects";
import { cloudinaryImage } from "@/utils/cloudinary";

const IMAGE_WIDTH = 1200;

const OpenBrace = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
  >
    <path d="M64 112c0-44.2 35.8-80 80-80l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-26.5 0-48 21.5-48 48l0 53.5c0 21.2-8.4 41.6-23.4 56.6L38.6 256l33.9 33.9c15 15 23.4 35.4 23.4 56.6L96 400c0 26.5 21.5 48 48 48l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-44.2 0-80-35.8-80-80l0-53.5c0-12.7-5.1-24.9-14.1-33.9L4.7 267.3c-3-3-4.7-7.1-4.7-11.3s1.7-8.3 4.7-11.3l45.3-45.3c9-9 14.1-21.2 14.1-33.9L64 112z" />
  </svg>
);

const CloseBrace = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 512"
  >
    <path d="M192 112c0-44.2-35.8-80-80-80L48 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c26.5 0 48 21.5 48 48l0 53.5c0 21.2 8.4 41.6 23.4 56.6L217.4 256l-33.9 33.9c-15 15-23.4 35.4-23.4 56.6l0 53.5c0 26.5-21.5 48-48 48l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c44.2 0 80-35.8 80-80l0-53.5c0-12.7 5.1-24.9 14.1-33.9l45.3-45.3c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-45.3-45.3c-9-9-14.1-21.2-14.1-33.9l0-53.5z" />
  </svg>
);

interface ProjectCardProps {
  project: ProjectData;
  // Alternates the layout: images on the left and the card sliding in from the right.
  reversed: boolean;
}

function ProjectCard({ project, reversed }: ProjectCardProps) {
  const [mainImage, secondImage, thirdImage] = project.images ?? [];

  return (
    <motion.div
      initial={{ x: reversed ? "50%" : "-50%", opacity: 0 }}
      whileInView={{ x: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={transition}
    >
      <div className="card">
        <div>
          <div className={`content ${reversed ? "lg:col-start-2" : ""}`}>
            <div>
              <div className="meta">
                {project.roles.map((role, index) => (
                  <div key={role}>
                    {role}
                    {index < project.roles.length - 1 && (
                      <div className="separator decorator" aria-hidden="true">
                        •
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <div className="heading">
                  <h3>{project.name}</h3>
                  <div>
                    {project.url && (
                      <a
                        href={project.url}
                        rel="noreferrer"
                        target="_blank"
                        aria-label={`Visit ${project.name}`}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M512 32c17.7 0 32 14.3 32 32l0 32L256 96l0-64 256 0zM160 32l64 0 0 64-96 0 0-32c0-17.7 14.3-32 32-32zM128 352l0-224 112 0 304 0 0 224c0 17.7-14.3 32-32 32l-352 0c-17.7 0-32-14.3-32-32zM160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L160 0zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 384c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-272z" />
                        </svg>
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        rel="noreferrer"
                        target="_blank"
                        aria-label={`${project.name} source code`}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80-48c0 38.7-27.5 71-64 78.4l0 115.2c20.3-20.7 48.7-33.6 80-33.6l96 0c44.2 0 80-35.8 80-80l0-1.6c-36.5-7.4-64-39.7-64-78.4c0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4l0 1.6c0 61.9-50.1 112-112 112l-96 0c-44.2 0-80 35.8-80 80l0 1.6c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4l0-1.6 0-193.6C27.5 151 0 118.7 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM80 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
              <div className="my-6 meta">
                {project.tech.map((tech) => (
                  <div className="flex gap-2" key={tech}>
                    <span className="decorator">
                      <OpenBrace />
                    </span>
                    {tech}
                    <span className="decorator">
                      <CloseBrace />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={reversed ? "lg:col-start-1" : ""}>
            {mainImage && (
              <div
                className={`img_section flex items-center ${
                  reversed
                    ? "-ml-72 pr-4 sm:pr-6 md:-ml-10 xl:-ml-36"
                    : "-mr-72 pl-4 sm:pl-6 md:-mr-10 xl:-mr-36"
                }`}
              >
                {/* Extra screenshots sit behind the main one and add nothing
                    for screen readers, so they get empty alt text. */}
                {thirdImage && (
                  <img
                    className={reversed ? "lg:right-120" : "lg:left-120"}
                    src={cloudinaryImage(thirdImage, IMAGE_WIDTH)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {secondImage && (
                  <img
                    className={reversed ? "lg:right-60" : "lg:left-60"}
                    src={cloudinaryImage(secondImage, IMAGE_WIDTH)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <img
                  className={reversed ? "lg:right-0" : "lg:left-0"}
                  src={cloudinaryImage(mainImage, IMAGE_WIDTH)}
                  alt={`Screenshot of ${project.name}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
