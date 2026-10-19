# sha.codes

Personal portfolio site: a single-page React app built with Vite, TypeScript and Tailwind CSS.

## Development

Requires Node 18 or newer.

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run typecheck  # TypeScript only
npm run build      # type-check, then build to dist/
npm run preview    # serve the production build locally
```

## Deployment

Netlify builds every push and pull request using `netlify.toml` (`npm run build`, publishing `dist/`). That file overrides the build settings in the Netlify UI.

## Docs

- [docs/modernization-plan.md](docs/modernization-plan.md): toolchain upgrade plan
- [docs/contact-form.md](docs/contact-form.md): steps to bring back the (currently hidden) contact form
