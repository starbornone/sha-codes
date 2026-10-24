import React from "react";
import { useParams } from "react-router";
import DetailLayout from "@/components/DetailLayout";
import TechList from "@/components/TechList";
import { PROJECT_DETAILS } from "@/data/projectDetails";
import { PROJECTS, ProjectData } from "@/data/projects";
import { projectMeta, projectPath } from "@/meta";
import { cloudinaryImage } from "@/utils/cloudinary";
import { usePageMeta } from "@/utils/usePageMeta";
import NotFound from "./NotFound";

const IMAGE_WIDTH = 1600;

function ProjectDetail({ index }: { index: number }) {
  const project = PROJECTS[index];
  const details = PROJECT_DETAILS[project.id];
  usePageMeta(projectMeta(project));

  const link = (neighbour?: ProjectData) =>
    neighbour && { to: projectPath(neighbour), label: neighbour.name };

  return (
    <DetailLayout
      back={{ to: "/#projects", label: "All projects" }}
      eyebrow={project.roles.join(" • ")}
      title={project.name}
      previous={link(PROJECTS[index - 1])}
      next={link(PROJECTS[index + 1])}
    >
      <p className="text-lg leading-relaxed">{project.description}</p>
      <TechList className="flex flex-wrap my-8 font-mono text-sm meta" tech={project.tech} />
      {(project.url || project.repo) && (
        <div className="flex flex-wrap gap-4">
          {project.url && (
            <a className="detail-button" href={project.url} rel="noreferrer" target="_blank">
              Visit {project.name}
            </a>
          )}
          {project.repo && (
            <a className="detail-button" href={project.repo} rel="noreferrer" target="_blank">
              Source code
            </a>
          )}
        </div>
      )}
      {details && (
        <>
          <section>
            <h2>Why it exists</h2>
            <p>{details.why}</p>
          </section>
          <section>
            <h2>What it does</h2>
            <ul>
              {details.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>How it&apos;s built</h2>
            <ul>
              {details.engineering.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        </>
      )}
      {project.images && project.images.length > 0 && (
        <div className="mt-12 space-y-8">
          {project.images.map((image, imageIndex) => (
            <img
              key={image}
              className="w-full h-auto rounded-xl ring-8 ring-grey-600"
              src={cloudinaryImage(image, IMAGE_WIDTH)}
              alt={`Screenshot ${imageIndex + 1} of ${project.name}`}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ))}
        </div>
      )}
    </DetailLayout>
  );
}

export default function ProjectPage(): JSX.Element {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((project) => project.id === slug);
  return index === -1 ? <NotFound /> : <ProjectDetail index={index} />;
}
