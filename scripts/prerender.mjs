// Renders the page to HTML at build time and puts it in dist/index.html, so
// search engines and link previews see the content without running JavaScript.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const serverDir = `${root}dist-ssr`;

const { render } = await import(pathToFileURL(`${serverDir}/entry-server.mjs`).href);
const template = await readFile(indexPath, 'utf8');

// The loading screen sits between these markers in index.html.
const placeholder = /<div id="root">\s*<!--app-->[\s\S]*<!--\/app-->\s*<\/div>/;
if (!placeholder.test(template)) {
  throw new Error('prerender: could not find the <!--app--> markers in dist/index.html');
}

const html = render();
await writeFile(
  indexPath,
  template.replace(placeholder, () => `<div id="root" data-prerendered>${html}</div>`),
);
await rm(serverDir, { recursive: true, force: true });
console.log(`prerender: wrote ${(html.length / 1024).toFixed(1)} kB of HTML into dist/index.html`);
