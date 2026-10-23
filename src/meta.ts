import { PROJECTS, ProjectData } from '@/data/projects';
import { TALKS, TalkData } from '@/data/talks';

// Per-page head tags. The build-time prerender writes them into each page's
// HTML (scripts/prerender.mjs), and usePageMeta keeps them in step when the
// browser navigates between pages without a reload.

export const SITE_URL = 'https://sha.codes';

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  // What the generated share image shows. Pages without one use the site's.
  card?: { eyebrow: string; title: string; tags: string[] };
};

const HOME_DESCRIPTION =
  "Hi, I'm Sha, a senior software engineer in Sydney working on AI enablement at Campaign Monitor, with over a decade of full-stack web development behind me.";

export const projectPath = (project: ProjectData) => `/projects/${project.id}`;
export const talkPath = (talk: TalkData) => `/talks/${talk.id}`;

// Search results show about 160 characters, so use the first sentence and
// cut it at a word boundary if it runs long.
export function summarise(text: string, max = 160): string {
  const sentence = text.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? text;
  if (sentence.length <= max) return sentence;
  return `${sentence.slice(0, max - 1).replace(/[\s,;:]+\S*$/, '')}…`;
}

export const homeMeta = (): PageMeta => ({
  path: '/',
  title: 'Sha Kong-Brooks, Senior Software Engineer | sha.codes',
  description: HOME_DESCRIPTION,
  image: '/og-image.png',
  imageAlt: 'sha.codes: full-stack web developer',
});

export const projectMeta = (project: ProjectData): PageMeta => ({
  path: projectPath(project),
  title: `${project.name} | sha.codes`,
  description: summarise(project.description),
  image: `/og${projectPath(project)}.png`,
  imageAlt: `${project.name}, a project by Sha Kong-Brooks`,
  card: { eyebrow: 'my.projects', title: project.name, tags: project.tech.slice(0, 4) },
});

export const talkMeta = (talk: TalkData): PageMeta => ({
  path: talkPath(talk),
  title: `${talk.title} | sha.codes`,
  description: summarise(talk.description),
  image: `/og${talkPath(talk)}.png`,
  imageAlt: `${talk.title}, a talk by Sha Kong-Brooks`,
  card: { eyebrow: `my.talks · ${talk.year}`, title: talk.title, tags: [talk.venue] },
});

export const notFoundMeta = (path: string): PageMeta => ({
  path,
  title: 'Page not found | sha.codes',
  description: "This page doesn't exist. Head back to sha.codes for Sha Kong-Brooks' projects, talks and experience.",
  image: '/og-image.png',
  imageAlt: 'sha.codes: full-stack web developer',
});

// Every page the prerender writes out, which is also the sitemap.
export function allPages(): PageMeta[] {
  return [homeMeta(), ...PROJECTS.map(projectMeta), ...TALKS.map(talkMeta)];
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;
