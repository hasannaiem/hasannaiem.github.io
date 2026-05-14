# iamnaiem.me — Personal Portfolio

Source for [iamnaiem.me](https://iamnaiem.me) — portfolio site of Naiemul Hasan Naiem, QA Engineer @ Tulip Tech.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin, `@theme` directive)
- **Framer Motion** — scroll reveal, hover lifts, animated gradient mesh
- **react-router-dom v7** — `/`, `/case-studies`, `/case-studies/:id`
- **lucide-react** + hand-rolled SVGs for brand icons
- **@fontsource** — Space Grotesk (display), Inter (body), JetBrains Mono (mono)

## Visual

Glass Cosmic — dark base `#0a0a14`, drifting violet/blue/pink radial blobs, frosted-glass cards. Respects `prefers-reduced-motion`.

## Layout

```
src/
├── routes/      Home, CaseStudies, CaseStudyDetail
├── sections/    Hero, About, Skills, Experience, Stats, ProjectsPreview, Contact, Footer
├── components/  GlassCard, GradientMesh, Nav, SectionTitle, TechBadge, TypingLine, ScrollReveal, SocialIcons
├── data/        profile, skills, experience, projects (single source of truth)
├── lib/         motion presets
└── styles/      globals.css (Tailwind + theme tokens)
```

Edit `src/data/*.ts` to update content. Sections re-render automatically.

## Dev

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → dist/
npm run preview  # serve built dist locally
```

## Deploy

GitHub Pages from `gh-pages` branch. Workflow at `.github/workflows/deploy.yml`:

- Triggered on push to `main` or manual dispatch
- Builds Vite → copies `index.html` to `404.html` (SPA fallback) → publishes via `peaceiris/actions-gh-pages@v4`
- Custom domain: `iamnaiem.me` (CNAME committed in `public/`)
- HTTPS auto-provisioned by GitHub Pages

## Spec

Full design spec at `docs/superpowers/specs/2026-05-14-portfolio-design.md`.
