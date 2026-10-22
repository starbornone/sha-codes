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
npm run build      # type-check, then build to dist/
npm run preview    # serve the production build locally
```

## Checks

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check and tests on pull requests and pushes to `main`, skipping docs-only changes. Netlify does the production build. Keep it lean: the account has 2,000 Actions minutes a month.

## Deployment

Netlify builds every push and pull request using `netlify.toml` (`npm run build`, publishing `dist/`). That file overrides the build settings in the Netlify UI.

## Docs

- [docs/modernization-plan.md](docs/modernization-plan.md): toolchain upgrade plan
- [docs/contact-form.md](docs/contact-form.md): steps to bring back the (currently hidden) contact form
