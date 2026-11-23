# sha.codes

Personal portfolio site built as a prerendered React app with Vite, TypeScript and Tailwind CSS.

## Development

Use Node 22, matching CI and the Netlify build.

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run lint       # ESLint
npm run typecheck  # TypeScript only
npm test           # Vitest
npm run test:prerender # build and check every public URL against the preview server
npm run build      # type-check, build to dist/, then prerender every page
npm run preview    # serve the production build locally
```

## Prerendering

`npm run build` renders every page to HTML at build time (`src/entry-server.tsx` and `scripts/prerender.mjs`), so search engines and link previews see the content without running JavaScript. The browser then attaches to that HTML (`hydrateRoot` in `src/index.tsx`). Anything that renders differently on the server and in the browser, such as random or time-based values, must start from a fixed value and change in an effect, as the footer quote does. The dev server skips prerendering and shows the loading screen instead.

## Pages

The home page sits at `/`, each project at `/projects/<id>` and each talk at `/talks/<id>`, using the `id` in `src/data/projects.ts` and `src/data/talks.ts`. Routing is React Router (`src/App.tsx`). The prerender writes each non-home route to `dist/<path>.html`. Vercel, Netlify and Vite preview serve these at the extensionless URLs used by the app, so refreshing or deep-linking a project loads its own HTML before React hydrates it. Adding a project or talk to the data adds its page with no other changes. It also writes:

- each page's title, description, canonical URL, share tags and applicable JSON-LD, using `src/pageHead.ts`
- a share image per project and talk at `dist/og/...png` (`scripts/share-image.mjs`; the home page uses `public/og-image.png`)
- `dist/sitemap.xml` and `dist/robots.txt`, using the canonical origin in `src/meta.ts`
- `dist/404.html`, the custom error page for missing paths

After adding or replacing project screenshots, run `node scripts/prepare-project-images.mjs` and include the updated WebP files and image manifest with the source JPEGs.

## Checks

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check and tests on pull requests and pushes to `main`, skipping docs-only changes. The Production SEO workflow checks the live canonical URLs, crawler files, redirects and 404s after a successful GitHub production deployment status. It can also be run manually.

## Deployment

Vercel builds with `npm run build`, serves `dist/`, and enables extensionless URLs in `vercel.json`. Keep `www.sha.codes` as the primary domain and the apex redirect in Vercel Domains. `netlify.toml` keeps the static build usable on Netlify.

After a production rollout, run `node scripts/verify-production-seo.mjs` and submit the sitemap at `https://www.sha.codes/sitemap.xml` in Search Console. For slug changes, add a permanent redirect from the old path to its replacement in `vercel.json`.

## Docs

- [docs/modernization-plan.md](docs/modernization-plan.md): toolchain upgrade plan
- [docs/contact-form.md](docs/contact-form.md): steps to bring back the (currently hidden) contact form
