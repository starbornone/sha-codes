import { absoluteUrl, type PageMeta } from './meta';
import { structuredData } from './structuredData';

const entities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

export const escapeMarkup = (value: string) =>
  value.replace(/[&<>"']/g, (character) => entities[character]);

const tag = (key: 'name' | 'property', name: string, value: string) =>
  `<meta ${key}="${name}" content="${escapeMarkup(value)}" data-page-head />`;

export function renderPageHead(meta: PageMeta): string {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image);
  const schema = structuredData(meta);

  return [
    `<title data-page-head>${escapeMarkup(meta.title)}</title>`,
    tag('name', 'description', meta.description),
    ...(meta.noindex
      ? [tag('name', 'robots', 'noindex')]
      : [
          `<link rel="canonical" href="${escapeMarkup(url)}" data-page-head />`,
          tag('property', 'og:url', url),
        ]),
    tag('property', 'og:type', 'website'),
    tag('property', 'og:site_name', 'sha.codes'),
    tag('property', 'og:title', meta.title),
    tag('property', 'og:description', meta.description),
    tag('property', 'og:image', image),
    tag('property', 'og:image:width', '1200'),
    tag('property', 'og:image:height', '630'),
    tag('property', 'og:image:alt', meta.imageAlt),
    tag('name', 'twitter:card', 'summary_large_image'),
    tag('name', 'twitter:title', meta.title),
    tag('name', 'twitter:description', meta.description),
    tag('name', 'twitter:image', image),
    tag('name', 'twitter:image:alt', meta.imageAlt),
    ...(schema
      ? [`<script type="application/ld+json" data-page-head>${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`]
      : []),
  ].join('\n');
}
