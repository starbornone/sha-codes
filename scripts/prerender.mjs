// Renders every page to HTML at build time, so search engines and link
// previews see the content without running JavaScript, and so a refresh or a
// deep link on Netlify loads a real file instead of a 404. Each route gets
// dist/<path>/index.html with its own head tags and a generated share image,
// plus dist/404.html and dist/sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderShareImage } from './share-image.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = `${root}dist`;
const serverDir = `${root}dist-ssr`;

const { render, allPages, absoluteUrl, notFoundMeta } = await import(
  pathToFileURL(`${serverDir}/entry-server.mjs`).href
);
const template = await readFile(`${dist}/index.html`, 'utf8');

// The loading screen sits between these markers in index.html.
const placeholder = /<div id="root">\s*<!--app-->[\s\S]*<!--\/app-->\s*<\/div>/;
if (!placeholder.test(template)) {
  throw new Error('prerender: could not find the <!--app--> markers in dist/index.html');
}

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Swaps one head tag's value, and fails the build if index.html stops
// carrying it, rather than shipping pages that all share the home page's tags.
function setTag(html, pattern, value) {
  if (!pattern.test(html)) throw new Error(`prerender: no match for ${pattern} in index.html`);
  return html.replace(pattern, (_, before, after) => `${before}${escape(value)}${after}`);
}

function withHead(html, meta, { noindex = false } = {}) {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl(meta.image);
  const tags = [
    [/(<title>)[^<]*(<\/title>)/, meta.title],
    [/(<meta\s+name="description"\s+content=")[^"]*(")/, meta.description],
    [/(<link rel="canonical" href=")[^"]*(")/, url],
    [/(<meta property="og:url" content=")[^"]*(")/, url],
    [/(<meta property="og:title" content=")[^"]*(")/, meta.title],
    [/(<meta property="og:description" content=")[^"]*(")/, meta.description],
    [/(<meta property="og:image" content=")[^"]*(")/, image],
    [/(<meta property="og:image:alt" content=")[^"]*(")/, meta.imageAlt],
    [/(<meta name="twitter:title" content=")[^"]*(")/, meta.title],
    [/(<meta name="twitter:description" content=")[^"]*(")/, meta.description],
    [/(<meta name="twitter:image" content=")[^"]*(")/, image],
  ];
  let result = tags.reduce((page, [pattern, value]) => setTag(page, pattern, value), html);
  if (noindex) {
    result = result
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
      .replace('</title>', '</title>\n    <meta name="robots" content="noindex" />');
  }
  return result;
}

async function writePage(file, url, meta, options) {
  const html = render(url);
  const page = withHead(template, meta, options).replace(
    placeholder,
    () => `<div id="root" data-prerendered>${html}</div>`,
  );
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page);
}

const pages = allPages();
for (const meta of pages) {
  const file = meta.path === '/' ? `${dist}/index.html` : `${dist}${meta.path}/index.html`;
  await writePage(file, meta.path, meta);
  if (meta.card) {
    const imageFile = `${dist}${meta.image}`;
    await mkdir(dirname(imageFile), { recursive: true });
    await writeFile(imageFile, await renderShareImage(meta.card));
  }
}

// Netlify serves this with a 404 status for any path without a file. The
// client renders the not-found page for the same paths, so hydration matches.
await writePage(`${dist}/404.html`, '/404', notFoundMeta('/404'), { noindex: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((meta) => `  <url>\n    <loc>${absoluteUrl(meta.path)}</loc>\n  </url>`).join('\n')}
</urlset>
`;
await writeFile(`${dist}/sitemap.xml`, sitemap);

await rm(serverDir, { recursive: true, force: true });
console.log(`prerender: wrote ${pages.length} pages, 404.html and sitemap.xml`);
