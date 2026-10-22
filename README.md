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
npm run build      # type-check, build to dist/, then prerender the page
npm run preview    # serve the production build locally
```

## Prerendering

`npm run build` renders the page to HTML at build time (`src/entry-server.tsx` and `scripts/prerender.mjs`), so search engines and link previews see the content without running JavaScript. The browser then attaches to that HTML (`hydrateRoot` in `src/index.tsx`). Anything that renders differently on the server and in the browser, such as random or time-based values, must start from a fixed value and change in an effect, as the footer quote does. The dev server skips prerendering and shows the loading screen instead.

## Checks

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check and tests on pull requests and pushes to `main`, skipping docs-only changes. Netlify does the production build. Keep it lean: the account has 2,000 Actions minutes a month.

## Deployment

Netlify builds every push and pull request using `netlify.toml` (`npm run build`, publishing `dist/`). That file overrides the build settings in the Netlify UI.

## Docs

- [docs/modernization-plan.md](docs/modernization-plan.md): toolchain upgrade plan
- [docs/contact-form.md](docs/contact-form.md): steps to bring back the (currently hidden) contact form
