# sha.codes

Personal portfolio site: a single-page React app built with Vite, TypeScript and Tailwind CSS.

## Development

Requires Node 18 or newer.

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run lint       # ESLint
npm run typecheck  # TypeScript only
npm test           # Vitest
npm run build      # type-check, build to dist/, then prerender every page
npm run preview    # serve the production build locally
```

## Prerendering

`npm run build` renders every page to HTML at build time (`src/entry-server.tsx` and `scripts/prerender.mjs`), so search engines and link previews see the content without running JavaScript. The browser then attaches to that HTML (`hydrateRoot` in `src/index.tsx`). Anything that renders differently on the server and in the browser, such as random or time-based values, must start from a fixed value and change in an effect, as the footer quote does. The dev server skips prerendering and shows the loading screen instead.

## Pages

The home page sits at `/`, each project at `/projects/<id>` and each talk at `/talks/<id>`, using the `id` in `src/data/projects.ts` and `src/data/talks.ts`. Routing is React Router (`src/App.tsx`). The prerender writes each route to `dist/<path>/index.html`, so refreshing or deep-linking any page on Netlify loads a real file rather than a 404, and adding a project or talk to the data adds its page with no other changes. It also writes:

- each page's title, description, canonical URL and share tags, from `src/meta.ts`
- a share image per project and talk at `dist/og/...png` (`scripts/share-image.mjs`; the home page uses `public/og-image.png`)
- `dist/sitemap.xml`, listing every page
- `dist/404.html`, which Netlify serves with a 404 status for any other path

## Checks

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check and tests on pull requests and pushes to `main`, skipping docs-only changes. Netlify does the production build. Keep it lean: the account has 2,000 Actions minutes a month.

## Deployment

Netlify builds every push and pull request using `netlify.toml` (`npm run build`, publishing `dist/`). That file overrides the build settings in the Netlify UI.

## Docs

- [docs/modernization-plan.md](docs/modernization-plan.md): toolchain upgrade plan
- [docs/contact-form.md](docs/contact-form.md): steps to bring back the (currently hidden) contact form
