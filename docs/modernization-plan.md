# sha.codes — Modernization Plan (LLM-executable)

> **Audience:** Coding agents and humans executing this plan.
> **App:** Personal portfolio SPA for `sha.codes` (React, CRA).
> **Goal:** Replace unmaintained toolchain, fix known debt, preserve visual identity and features.
> **Constraint:** Prefer small, reviewable phases. Do not redesign the site unless a later task explicitly asks.

---

## 0. How to use this document

1. Execute phases **in order** unless a phase is marked optional.
2. After each phase: `npm run build` must succeed; smoke-check the checklist in §8.
3. Do **not** expand scope into content redesign, blog, CMS, or dark-mode toggle unless requested.
4. Keep diffs focused: one phase ≈ one PR when possible.
5. Prefer editing existing files over adding new abstractions.

---

## 1. Current state (facts)

### 1.1 Purpose

Single-page portfolio: Intro → About → Experience → Projects → Contact.
No client-side router. Section IDs + smooth scroll.

### 1.2 Stack (as of plan authoring)

| Layer | Current | Notes |
|--------|---------|--------|
| Boot | CRA `react-scripts@5.0.1` + `react-app-rewired` | Unmaintained |
| UI | React 18.3 | Keep unless upgrading deliberately |
| Language | TypeScript ~4.9 (CRA-capped) | Target TS 5.x |
| Style | Tailwind 3.4 + `src/styles/index.css` | Sass package present but **unused** |
| Motion | Framer Motion 11 | Keep |
| Scroll | `react-scroll` | Keep or replace with native/`IntersectionObserver` |
| UI kit | Headless UI 2 | Contact dialog + Nav popover |
| Contact | `emailjs-com@3` | **Deprecated**; keys hardcoded |
| Fonts | `@fontsource/rubik`, `@fontsource/overpass-mono` | Keep |

### 1.3 Source map

```
src/
  index.tsx, App.tsx, animations.ts
  styles/index.css          # Tailwind + component classes + glitch loader
  layout/                   # Layout, Nav, Footer
  sections/                 # Intro, About, Experience, Projects, Contact
  components/               # ExperienceCard, ProjectCard
  forms/ContactForm.tsx     # EmailJS
  data/                     # experience.ts, projects.ts, quotes.ts
config-overrides.js         # webpack `@` → `src`
tailwind.config.js
public/index.html           # meta, favicons via %PUBLIC_URL%
```

### 1.4 Known issues agents must not ignore

1. **CRA is a dead end** — blocks modern TS, slow builds, security/maintenance risk.
2. **`emailjs-com` deprecated** → migrate to `@emailjs/browser`.
3. **EmailJS credentials hardcoded** in `src/forms/ContactForm.tsx` (service/template/public key). Move to env; rotate if repo is/was public.
4. **Tailwind `theme.colors` replaces defaults** — classes like `bg-gray-*` / `text-gray-*` and arbitrary `z-100` may be broken. Prefer palette tokens (`grey`, `greyish`, `buttercream`, `kobi`, `oasis`) or move palette under `theme.extend.colors`.
5. **`sass` dependency unused** — remove; do not introduce Sass.
6. **Unused ESLint flat-config packages** (`@eslint/js`, `typescript-eslint`, `globals`) not wired up.
7. **Favicon assets** referenced under `public/favicons/` may be missing from the tree — restore or regenerate before ship.
8. **No tests / CI / deploy config** in repo.
9. **`tsconfig`**: `target: es5`, `jsx: "react"`, `paths` without `baseUrl`.
10. **Headless UI**: ContactForm mixes older `Transition` patterns with v2 APIs — verify during upgrade.

---

## 2. Target state

### 2.1 Recommended stack

| Layer | Target | Why |
|--------|--------|-----|
| Build | **Vite** + `@vitejs/plugin-react` | SPA-friendly; minimal migration from CRA; fast DX |
| Language | TypeScript 5.x, `jsx: "react-jsx"` | Modern defaults |
| Package manager | npm (keep lockfile) | Already in use |
| Style | Tailwind 3.x (stay) **or** Tailwind 4 as a later optional phase | Avoid bundling CSS migration with Vite cutover |
| Contact | `@emailjs/browser` + `import.meta.env.VITE_*` | Supported API + secrets out of source |
| Deploy | Unchanged host if already live; document build output `dist/` | Vite default |

**Do not use Next.js** for this migration unless a future requirement needs SSR/SSG/routing. This app is a static SPA; Vite matches that shape with less ceremony.

### 2.2 Preserve (non-negotiable)

- [ ] Visual identity: palette, Rubik + Overpass Mono, oasis highlights, dark grey background
- [ ] Section order and IDs: intro content, `#about`, `#experience`, `#projects`, `#contact`
- [ ] Sticky nav + smooth scroll (+ mobile menu)
- [ ] Experience carousel behavior
- [ ] Project cards + Framer Motion in-view animations
- [ ] Suspense glitch “LOADING…” fallback (or equivalent polish)
- [ ] Contact form fields (`from_name`, `from_email`, message) + success/error dialog
- [ ] EmailJS delivery working with new package + env vars
- [ ] Footer social links + random quote
- [ ] Data in `src/data/*` (content can stay; structure may tighten)
- [ ] SEO description / theme-color / manifest intent from `public/index.html`
- [ ] Path alias `@/` → `src/`

### 2.3 Explicit non-goals (this plan)

- Visual redesign / new brand system
- CMS, MDX blog, i18n
- Auth, backend, database
- Dark/light theme toggle (config has `darkMode: 'class'` but unused)
- Rewriting content copy
- Adding a full test suite beyond a thin smoke/unit baseline (optional phase)

---

## 3. Decisions (locked for agents)

| Decision | Choice |
|----------|--------|
| Bundler | Vite |
| Router | None (keep scroll SPA) |
| CSS approach | Keep Tailwind + single CSS entry; delete unused `sass` |
| Email | `@emailjs/browser` + Vite env |
| React major | Stay on React 18 unless a dep forces 19 |
| Tailwind major | Stay on v3 for Vite migration; optional later v4 phase |
| Output dir | `dist` (update any deploy scripts/docs) |
| Env prefix | `VITE_` |

### Env vars (create `.env.example`, gitignore `.env`)

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Map from current hardcoded values in `ContactForm.tsx` during migration, then rotate the public key if exposure is a concern.

---

## 4. Phased work plan

### Phase A — Inventory & safety net (short)

**Intent:** Know what “done” looks like before moving files.

- [ ] Note current `npm start` / `npm run build` behavior locally
- [ ] List smoke paths: nav scroll targets, experience pager, project cards, contact success/error dialogs, mobile nav
- [ ] Confirm Cloudinary image URLs still load (`src/data/projects.ts`, About/Contact images)
- [ ] Confirm whether `public/favicons/` assets exist; if missing, queue restore before production deploy
- [ ] Add `.env` to `.gitignore` if not already covered for all env files (today only `.env*.local` are ignored)

**Exit:** Written smoke list (can live in this doc §8); no product code required.

---

### Phase B — Vite toolchain migration

**Intent:** Replace CRA/`react-scripts`/`react-app-rewired` with Vite. Visual parity.

**Steps (agent checklist):**

1. [ ] Add Vite deps: `vite`, `@vitejs/plugin-react`, `vite-tsconfig-paths` (or configure alias in `vite.config.ts`)
2. [ ] Create `vite.config.ts` with:
   - React plugin
   - `resolve.alias['@']` → `src`
   - Keep SPA defaults
3. [ ] Create `index.html` at **repo root** (Vite convention): move shell from `public/index.html`, replace `%PUBLIC_URL%` with `/`, point script to `/src/index.tsx`
4. [ ] Keep static assets in `public/` (manifest, robots, favicons)
5. [ ] Update `tsconfig.json`:
   - `"jsx": "react-jsx"`
   - modern `target` / `module` / `moduleResolution` suitable for Vite
   - `"baseUrl": "."` + `"paths": { "@/*": ["src/*"] }`
   - optional `tsconfig.node.json` for Vite config
6. [ ] Replace scripts in `package.json`:
   - `"dev": "vite"`
   - `"build": "tsc -b && vite build"` (or `tsc --noEmit && vite build`)
   - `"preview": "vite preview"`
   - Drop `eject`; drop `react-app-rewired` / `react-scripts`
7. [ ] Remove CRA-only files: `config-overrides.js`, `src/react-app-env.d.ts` (replace with `vite-env.d.ts` referencing `ImportMeta.env`)
8. [ ] Fix imports / env: no `process.env.REACT_APP_*` (none today); use `import.meta.env` going forward
9. [ ] Ensure Tailwind PostCSS pipeline works (`postcss.config.js` with `tailwindcss` + `autoprefixer` if missing)
10. [ ] Remove unused deps: `sass`, CRA testing stack if unused, dead ESLint packages **or** wire them in Phase E
11. [ ] Update `.gitignore`: `dist`, `.env`
12. [ ] Delete or rewrite CRA boilerplate comments in `src/index.tsx` / `reportWebVitals` as needed; `web-vitals` optional keep/upgrade

**Exit criteria:**

- [ ] `npm run dev` serves the site
- [ ] `npm run build` + `npm run preview` succeed
- [ ] `@/` imports resolve
- [ ] Styles, fonts, animations match pre-migration

---

### Phase C — Contact / EmailJS hardening

**Intent:** Supported SDK + no secrets in source.

- [ ] `npm uninstall emailjs-com` && `npm install @emailjs/browser`
- [ ] Update `src/forms/ContactForm.tsx` imports and `sendForm` / `init` API per current `@emailjs/browser` docs
- [ ] Read service ID, template ID, public key from `import.meta.env`
- [ ] Add `.env.example` with empty keys; document in README briefly
- [ ] Fix Headless UI dialog/transition usage to valid v2 patterns while touching this file
- [ ] Fix any invalid Tailwind classes in the dialog (`gray` vs `grey`, `z-100`, etc.)

**Exit criteria:**

- [ ] Form submits successfully against EmailJS in a local env with real keys
- [ ] Error path still shows fallback email copy
- [ ] No EmailJS secrets committed

---

### Phase D — Dependency & code hygiene

**Intent:** Remove dead weight; small correctness fixes. No redesign.

- [ ] Remove unused `sass`
- [ ] Declare `clsx` as a direct dependency if still used (`ProjectCard`), or inline class joining
- [ ] Audit Headless UI + Framer Motion for API deprecations after Vite move
- [ ] Consider replacing `react-scroll` with native `scroll-behavior` + hash links **only if** spy/active states are easy to preserve; otherwise keep
- [ ] `react-intersection-observer`: keep if used; Framer’s `useInView` already covers some cases — dedupe only when safe
- [ ] Fix Tailwind palette strategy: either restore default colors via `extend.colors` or migrate stray `gray-*` classes to `grey*` / `greyish*`
- [ ] Clean unused fields (e.g. `experience.link` if still unused) only if confirmed dead
- [ ] Ensure favicon set is present and linked correctly under Vite `public/`

**Exit criteria:**

- [ ] `npm ls` has no deprecated EmailJS package
- [ ] Build clean; no unused major deps left without rationale

---

### Phase E — Tooling quality (optional but recommended)

- [ ] ESLint flat config wired for TS/React (use or remove unused eslint packages)
- [ ] Prettier (optional) — only if adding format consistency matters
- [ ] Minimal CI: install → lint → `npm run build` on PR (GitHub Actions)
- [ ] README: how to run, env vars, build, deploy output dir
- [ ] Optional: one smoke test (e.g. Vitest + Testing Library render of `App` or ContactForm validation)

---

### Phase F — Tailwind 4 / React 19 (optional, later)

Do **not** combine with Phase B.

- [ ] Tailwind v4 migration (`@tailwindcss/vite` or PostCSS path) with visual regression check
- [ ] React 19 only after ecosystem check (Headless UI, Framer Motion)

---

## 5. File-level migration map

| Action | Path |
|--------|------|
| Create | `vite.config.ts`, root `index.html`, `src/vite-env.d.ts`, `postcss.config.js` (if missing), `.env.example` |
| Update | `package.json` scripts/deps, `tsconfig.json`, `.gitignore`, `README.md`, `src/forms/ContactForm.tsx`, `src/index.tsx`, `tailwind.config.js` (content paths) |
| Move/adapt | `public/index.html` → root `index.html`; static files stay in `public/` |
| Delete | `config-overrides.js`, `react-scripts` / `react-app-rewired`, unused `sass`, CRA `src/react-app-env.d.ts` |
| Keep mostly as-is | `src/sections/*`, `src/layout/*`, `src/components/*`, `src/data/*`, `src/animations.ts`, `src/styles/index.css` |

Tailwind `content` globs after Vite:

```js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
```

---

## 6. Risk register

| Risk | Mitigation |
|------|------------|
| Style breakage from Tailwind content/path changes | Compare before/after on all sections; check production build CSS |
| EmailJS breaks after package swap | Test send in preview; keep error dialog + mailto fallback text |
| Missing favicons | Restore assets before deploy |
| Scroll spy / offset drift | Retest sticky nav offset (`-80` today) after layout changes |
| Cloudinary hotlink failure | Manual image check; optionally self-host later |
| Accidental redesign | Agents: change structure only when required by Vite/EmailJS |

---

## 7. Suggested PR sequence

1. **PR1 — Vite migration** (Phase B): green build, visual parity, no EmailJS change required to merge if env not ready
2. **PR2 — EmailJS + env** (Phase C)
3. **PR3 — Hygiene** (Phase D)
4. **PR4 — CI/README/lint** (Phase E, optional)

---

## 8. Smoke checklist (run after every phase)

- [ ] Home loads; glitch loader appears briefly then content
- [ ] Brand/`sha.codes` hero readable; fonts correct
- [ ] Nav: About / Experience / Projects smooth-scroll and highlight
- [ ] Mobile nav opens/closes
- [ ] Experience prev/next works
- [ ] Projects: images, links, in-view motion
- [ ] Contact: validation required fields; success dialog; error dialog (force by bad key if needed)
- [ ] Footer quote + social links
- [ ] `npm run build` succeeds with no TS errors

---

## 9. Definition of done (modernization complete)

Modernization is **done** when Phases **B + C + D** are complete and:

1. CRA/`react-scripts`/`react-app-rewired` are gone
2. Vite dev/build/preview work
3. Contact uses `@emailjs/browser` + env vars (no secrets in git)
4. Unused Sass and other dead deps removed
5. Smoke checklist passes
6. README documents run/build/env

Phases E–F improve maintainability but are not required for “modernized SPA” status.

---

## 10. Agent anti-patterns

- Do not eject CRA or invest in new `react-app-rewired` plugins
- Do not introduce Sass/SCSS
- Do not migrate to Next/Remix “for modernity” without a product reason
- Do not commit `.env` with real keys
- Do not rewrite section copy or restyle the palette during toolchain work
- Do not add card-heavy redesigns or purple gradient themes
- Do not claim Sass was the styling system — it is Tailwind + CSS

---

## 11. Quick command reference (post-migration)

```bash
npm install
cp .env.example .env   # fill EmailJS values
npm run dev
npm run build
npm run preview
```

---

## 12. Open questions (resolve with owner if blocking)

1. Where is production hosted today (Vercel / Netlify / other), and does the deploy config need `dist` vs `build`?
2. Should the EmailJS public key be rotated after removing it from git history?
3. Are missing favicon files available elsewhere, or should they be regenerated?
4. Is Contact intentional omitted from the nav, or should it be added later (out of scope unless asked)?
