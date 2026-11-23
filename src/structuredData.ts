import { PROJECTS } from '@/data/projects';
import { TALKS } from '@/data/talks';
import { absoluteUrl, projectPath, talkPath, type PageMeta } from './meta';

const context = 'https://schema.org';
const person = {
  '@type': 'Person',
  '@id': absoluteUrl('/#sha'),
  name: 'Sha Kong-Brooks',
  url: absoluteUrl('/'),
  jobTitle: 'Senior Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Campaign Monitor' },
  sameAs: [
    'https://www.linkedin.com/in/sha-kong-brooks/',
    'https://github.com/starbornone',
    'https://codepen.io/starborn',
  ],
};

function breadcrumbs(section: { name: string; path: string }, current: { name: string; path: string }) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, section, current].map(({ name, path }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export function structuredData(meta: PageMeta) {
  if (meta.noindex) return;
  const url = absoluteUrl(meta.path);

  if (meta.path === '/') {
    return { '@context': context, '@type': 'ProfilePage', url, mainEntity: person };
  }

  const project = PROJECTS.find((entry) => projectPath(entry) === meta.path);
  if (project) {
    return {
      '@context': context,
      '@graph': [
        breadcrumbs({ name: 'Projects', path: '/projects' }, { name: project.name, path: meta.path }),
        {
          '@type': 'CreativeWork',
          url,
          name: project.name,
          description: project.description,
          creator: person,
          ...(project.images?.[0] ? { image: absoluteUrl(project.images[0]) } : {}),
        },
      ],
    };
  }

  const talk = TALKS.find((entry) => talkPath(entry) === meta.path);
  if (talk) {
    return {
      '@context': context,
      '@graph': [
        breadcrumbs({ name: 'Talks', path: '/talks' }, { name: talk.title, path: meta.path }),
        {
          '@type': 'Article',
          url,
          mainEntityOfPage: url,
          headline: talk.title,
          description: talk.description,
          author: person,
          image: absoluteUrl(meta.image),
          isBasedOn: talk.transcriptUrl,
        },
      ],
    };
  }
}
