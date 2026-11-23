// Renders every page to HTML at build time, so search engines and link
// previews see the content without running JavaScript, and so a refresh or a
// deep link on Netlify loads a real file instead of a 404. Each route gets
// dist/<path>.html with its own head tags and a generated share image,
// plus dist/404.html and dist/sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderShareImage } from './share-image.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = `${root}dist`;
const serverDir = `${root}dist-ssr`;

const { render, allPages, absoluteUrl, notFoundMeta, escapeMarkup, renderPageHead } = await import(
  pathToFileURL(`${serverDir}/entry-server.mjs`).href
);
const template = await readFile(`${dist}/index.html`, 'utf8');

// The loading screen sits between these markers in index.html.
const placeholder = /<div id="root">\s*<!--app-->[\s\S]*<!--\/app-->\s*<\/div>/;
if (!placeholder.test(template)) {
  throw new Error('prerender: could not find the <!--app--> markers in dist/index.html');
}

const headPlaceholder = /<!--page-head-->[\s\S]*?<!--\/page-head-->/;
if (!headPlaceholder.test(template)) {
  throw new Error('prerender: missing page-head markers in dist/index.html');
}

async function writePage(file, url, meta) {
  const html = render(url);
  const marker = meta.noindex ? 'data-static-404' : 'data-prerendered';
  const page = template
    .replace(headPlaceholder, () => renderPageHead(meta))
    .replace(placeholder, () => `<div id="root" ${marker}>${html}</div>`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page);
}

const pages = allPages();
for (const meta of pages) {
  // Flat HTML files resolve at extensionless URLs in both Vite preview and
  // Netlify. Directory indexes fall back to the home page in Vite when the
  // requested URL has no trailing slash, causing React hydration failures.
  const file = meta.path === '/' ? `${dist}/index.html` : `${dist}${meta.path}.html`;
  await writePage(file, meta.path, meta);
  if (meta.card) {
    const imageFile = `${dist}${meta.image}`;
    await mkdir(dirname(imageFile), { recursive: true });
    await writeFile(imageFile, await renderShareImage(meta.card));
  }
}

// Hosts serve this document with a 404 status for missing paths. The
// browser mounts it using the actual URL instead of hydrating the /404 tree.
await writePage(`${dist}/404.html`, '/404', notFoundMeta('/404'));

const locations = pages.map(({ path }) =>
  `  <url><loc>${escapeMarkup(absoluteUrl(path))}</loc></url>`,
);

await writeFile(`${dist}/sitemap.xml`, [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...locations,
  '</urlset>',
  '',
].join('\n'));

await writeFile(`${dist}/robots.txt`, [
  'User-agent: *', 'Allow: /', '', `Sitemap: ${absoluteUrl('/sitemap.xml')}`, '',
].join('\n'));

await rm(serverDir, { recursive: true, force: true });
console.log(`prerender: wrote ${pages.length} pages, 404.html and sitemap.xml`);
