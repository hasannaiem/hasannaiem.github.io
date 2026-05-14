# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Naiemul Hasan Naiem (`hasannaiem`), live at https://iamnaiem.me. Single-page React SPA with a secondary `/case-studies` route. Deployed to GitHub Pages.

## Commands

```bash
npm install         # one-time / on dep changes
npm run dev         # http://localhost:5173 with HMR
npm run build       # tsc -b && vite build → dist/    (runs in CI on every push to main)
npm run preview     # serve built dist locally
npm run lint        # eslint .
```

There is no test suite — verification happens via `npm run build` (TS errors) and manual browser check.

## Architecture

**Content-first separation.** All site copy lives in `src/data/*.ts` (`profile`, `skills`, `experience`, `projects`). Sections under `src/sections/` import from `data/` and render. **Edit `data/` to change content; never edit JSX for copy changes.** Adding a project = append to `projects` array, `ProjectsPreview` + `/case-studies` auto-render it.

**Three-layer rendering:**

- `routes/` — top-level pages (`Home`, `CaseStudies`, `CaseStudyDetail`). `App.tsx` wires React Router.
- `sections/` — composable page sections (Hero, About, Skills, Experience, Stats, ProjectsPreview, Contact, Footer). Used primarily by `Home`.
- `components/` — reusable primitives (`GlassCard`, `GradientMesh`, `Nav`, `SectionTitle`, `TechBadge`, `TypingLine`, `ScrollReveal`, `SocialIcons`).

`GradientMesh` + `Nav` are mounted once in `App.tsx` (outside `<Routes>`), so they persist across route changes.

**Visual system — Glass Cosmic.** Defined as Tailwind v4 `@theme` tokens in `src/styles/globals.css`. Dark base `#0a0a14`, drifting violet/blue/pink radial blobs, frosted-glass cards. **Use existing tokens** (`bg-bg-base`, `text-ink-primary`, `glass`, `text-gradient`, `border-glass-border`, `text-accent-violet`) — don't introduce raw hex values. Motion presets live in `src/lib/motion.ts`; all scroll-reveal animations gate on `useReducedMotion`/CSS `prefers-reduced-motion`.

**Routing.** `BrowserRouter` with three routes (`/`, `/case-studies`, `/case-studies/:id`) and a catch-all redirect. GitHub Pages 404s on direct deep-link requests because it can't see React routes — the CI workflow copies `dist/index.html` to `dist/404.html` so Pages serves the SPA shell on any 404, and React Router takes over client-side.

## Deployment workflow

Push to `main` → `.github/workflows/deploy.yml` runs:

1. `npm ci && npm run build`
2. `cp dist/index.html dist/404.html` (SPA fallback)
3. `peaceiris/actions-gh-pages@v4` pushes `dist/` to `gh-pages` branch with `cname: iamnaiem.me`

GitHub Pages source is set to `gh-pages` branch. Custom domain `iamnaiem.me` resolves via apex A records pointing at GH Pages IPs (`185.199.108-111.153`). HTTPS auto-provisioned by Let's Encrypt.

**Never edit `gh-pages` branch directly.** It's regenerated on every deploy.

## Gotchas

- **Brand icons.** `lucide-react` v1 removed `Github`, `Linkedin`, etc. Use `src/components/SocialIcons.tsx` (hand-rolled inline SVGs) for those. `Mail`, `MessageSquare`, etc. work fine from lucide.
- **Git commit email.** Use `106167725+hasannaiem@users.noreply.github.com` so commits attribute to the `hasannaiem` GitHub account. The yahoo email is not verified on GitHub and produces `author_login: null` commits which break attribution and contribution counts.
- **Animations on full-page screenshot.** Sections use Framer Motion's `whileInView` and stay at opacity 0 until scrolled into view. A `fullPage: true` browser screenshot will look mostly blank below the hero — that is correct behavior, not a bug. Verify by scrolling.
- **CDN propagation after deploy.** GitHub Pages edge cache can hold stale content for 1–10 min after `gh-pages` is updated. Force a refresh with `gh api -X POST repos/hasannaiem/hasannaiem.github.io/pages/builds` if needed.
- **First-time Pages source.** When `peaceiris/actions-gh-pages` first runs in a fresh repo, GitHub Pages auto-enables itself pointing at `main` (which has source code, not the build). The Pages source must be switched to `gh-pages` once — already done for this repo, but watch for it if cloning to a new account.
- **Vite dev server scripts.** `index.html` in source references `/src/main.tsx`; the build replaces this with hashed `/assets/index-*.js`. If a deployed page is still serving `/src/main.tsx`, Pages is serving the wrong branch — check `gh api repos/.../pages` source.

## Spec

Full design spec at `docs/superpowers/specs/2026-05-14-portfolio-design.md`.
