import assert from 'node:assert/strict';

const origin = 'https://www.sha.codes';

function get(url) {
  return fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15_000) });
}

async function responseBody(url, status = 200) {
  const response = await get(url);
  assert.equal(response.status, status, `${url} should return ${status}`);
  return response.text();
}

async function assertRedirect(from, to) {
  const response = await get(from);
  assert.ok([301, 308].includes(response.status), `${from} should redirect permanently`);
  const location = response.headers.get('location');
  assert.ok(location, `${from} should send a Location header`);
  assert.equal(new URL(location, from).href, to);
}

const sitemapUrl = `${origin}/sitemap.xml`;
const sitemap = await responseBody(sitemapUrl);
const canonicals = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), ([, url]) => url);
assert.equal(new Set(canonicals).size, canonicals.length, 'Duplicate sitemap URLs');
for (const url of canonicals) {
  assert.equal(new URL(url).origin, origin, `Noncanonical sitemap origin in ${url}`);
}
for (const path of ['/', '/experience', '/projects', '/talks']) {
  assert.ok(canonicals.includes(`${origin}${path}`), `Missing sitemap entry for ${path}`);
}

const robots = await responseBody(`${origin}/robots.txt`);
assert.ok(robots.split(/\r?\n/).includes(`Sitemap: ${sitemapUrl}`));
assert.doesNotMatch(robots, /^Disallow:\s*\/\s*$/m);

for (const url of canonicals) {
  const html = await responseBody(url);
  const canonicalTags = Array.from(html.matchAll(/<link rel="canonical" href="([^"]+)"/g));
  assert.deepEqual(canonicalTags.map(([, href]) => href), [url], `Canonical for ${url}`);
  assert.match(html, /<div id="root" data-prerendered>/, `Prerendered content for ${url}`);
  assert.match(html, /<h1[\s>]/, `Heading for ${url}`);
  assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/i, `Unexpected noindex on ${url}`);
}

await assertRedirect('https://sha.codes/projects', `${origin}/projects`);
await assertRedirect(`${origin}/projects.html`, `${origin}/projects`);
await assertRedirect(`${origin}/projects/`, `${origin}/projects`);

for (const section of ['projects', 'talks']) {
  const missing = await responseBody(`${origin}/${section}/seo-verification-missing`, 404);
  assert.match(missing, /<meta name="robots" content="noindex"/);
  assert.doesNotMatch(missing, /rel="canonical"/);
}

console.log(`Verified ${canonicals.length} canonical pages, crawler files, redirects and HTTP 404s.`);
