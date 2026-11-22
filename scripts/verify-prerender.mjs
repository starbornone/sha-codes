import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { preview } from 'vite';

// Exercise the actual public URLs against the built site: reading generated
// files directly misses servers falling back to the home page on deep links.
test('each public URL serves its own prerendered HTML', async (t) => {
  const server = await preview({
    preview: { host: '127.0.0.1', port: 0, strictPort: true },
  });
  try {
    const { port } = server.httpServer.address();
    const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
    for (const [, canonical] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const path = new URL(canonical).pathname;
      await t.test(path, async () => {
        const response = await fetch(`http://127.0.0.1:${port}${path}`);
        assert.equal(response.status, 200);
        const html = await response.text();
        assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1], canonical);
        assert.match(html, /<div id="root" data-prerendered>/);
        assert.match(html, /<h1[\s>]/);
      });
    }
  } finally {
    server.httpServer.closeAllConnections();
    await new Promise((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
  }
});
