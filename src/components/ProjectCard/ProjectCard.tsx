import clsx from "clsx";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { transition } from "@/animations";

interface ProjectCardProps {
  card: {
    details: {
      name: string;
      url?: string;
      repo?: string;
      description: string;
      highlights: {
        list: string[];
        separator: string;
      };
      inclusions: {
        list: string[];
        prefix: React.ReactNode;
        suffix: React.ReactNode;
      };
      images?: string[];
    };
    index: number;
  };
}

function ProjectCard({ card: { details, index } }: ProjectCardProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        animate={controls}
        initial="hidden"
        ref={ref}
        variants={{
          hidden: {
            x: index % 2 === 0 ? "50%" : "-50%",
            opacity: 0,
            transition,
          },
          visible: {
            x: "0%",
            opacity: 1,
            transition,
          },
        }}
      >
        <div className="card">
          <div>
            <div
              className={`content ${index % 2 === 0 ? "lg:col-start-2" : ""}`}
            >
              <div>
                <div className="meta">
                  {details.highlights.list.map((highlight, index) => (
                    <div key={index}>
                      {highlight}
                      {index < details.highlights.list.length - 1 && (
                        <div
                          className="separator decorator"
                          dangerouslySetInnerHTML={{
                            __html: details.highlights.separator,
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="heading">
                    <h2>{details.name}</h2>
                    <div>
                      {details.url && (
                        <a href={details.url} rel="noreferrer" target="_blank">
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
                      {details.repo && (
                        <a href={details.repo} rel="noreferrer" target="_blank">
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
                  <p>{details.description}</p>
                </div>
                <div className="my-6 meta">
                  {details.inclusions.list.map((inclusion, index) => (
                    <div className="flex gap-2" key={index}>
                      <span className="decorator">
                        {details.inclusions.prefix}
                      </span>
                      {inclusion}
                      <span className="decorator">
                        {details.inclusions.suffix}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={clsx(index % 2 === 0 ? "lg:col-start-1" : "")}>
              {details.images && (
                <div
                  className={clsx(
                    `${
                      index % 2 === 0
                        ? "-ml-72 pr-4 sm:pr-6 md:-ml-10 xl:-ml-36"
                        : "-mr-72 pl-4 sm:pl-6 md:-mr-10 xl:-mr-36"
                    }`,
                    "img_section flex items-center"
                  )}
                >
                  {details.images[2] && (
                    <img
                      className={clsx(
                        index % 2 === 0 ? "lg:right-120" : "lg:left-120"
                      )}
                      src={details.images[2]}
                      alt={details.name}
                    />
                  )}
                  {details.images[1] && (
                    <img
                      className={clsx(
                        index % 2 === 0 ? "lg:right-60" : "lg:left-60"
                      )}
                      src={details.images[1]}
                      alt={details.name}
                    />
                  )}
                  <img
                    className={clsx(
                      index % 2 === 0 ? "lg:right-0" : "lg:left-0",
                      "z-100"
                    )}
                    src={details.images[0]}
                    alt={details.name}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectCard;
