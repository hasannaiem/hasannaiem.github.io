# Portfolio Site — `iamnaiem.me` — Design Spec

**Date**: 2026-05-14
**Owner**: Naiemul Hasan Naiem (`hasannaiem`)
**Status**: Approved, in implementation

## Goal

Polished, eye-catchy portfolio site at `https://iamnaiem.me` to showcase Naiem as a senior-minded QA Engineer. Reference baseline: `zahed-portfolio.netlify.app` — must exceed in visual polish.

## Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Routing**: react-router-dom v6 (BrowserRouter + 404.html SPA fallback)
- **Icons**: lucide-react
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (mono) — self-hosted via `@fontsource`

## Visual System — Glass Cosmic

- Dark base `#0a0a14`, animated radial gradient mesh (violet/blue/pink blobs)
- Frosted-glass cards: `backdrop-blur-xl`, `rgba(255,255,255,0.06)` bg, `0.12` border, violet hover glow
- Accent: violet `#a78bfa`, blue `#60a5fa`, pink `#f472b6`
- Motion: standard density — typing tagline, scroll reveal, hover lifts, drifting gradient — respects `prefers-reduced-motion`

## Structure

Hybrid routing:
- `/` — Home (Hero, About, Skills, Experience, Stats, ProjectsPreview, Contact, Footer)
- `/case-studies` — list of deep-dives
- `/case-studies/:id` — individual case study
- 404 → redirect to `/` via SPA fallback

## File Layout

```
iamnaiem-portfolio/
├── public/CNAME (= "iamnaiem.me"), headshot.webp, favicon.svg
├── src/
│   ├── main.tsx, App.tsx
│   ├── routes/Home.tsx, CaseStudies.tsx
│   ├── sections/Hero, About, Skills, Experience, Stats, ProjectsPreview, Contact, Footer
│   ├── components/GlassCard, GradientMesh, Nav, SectionTitle, TechBadge, TypingLine, ScrollReveal
│   ├── data/profile.ts, skills.ts, experience.ts, projects.ts
│   ├── lib/motion.ts
│   └── styles/globals.css
├── .github/workflows/deploy.yml
└── vite.config.ts (base: '/')
```

## Content Sources

- Profile/socials/tagline → CLAUDE.md
- Skills → CLAUDE.md tech stack section
- Experience → Tulip Tech role, placeholder dates (user edits)
- Projects (NDA-safe) →
  - "Workforce Management Platform" (UAT) — derived from EWMS
  - "Wellness Booking App" (Pre-Launch) — derived from WA
  - No client names exposed

## Deployment

- Repo: `hasannaiem/hasannaiem.github.io` (public, user-pages)
- Build: GH Actions on push to `main` — `npm ci && npm run build && cp dist/index.html dist/404.html`
- Publish: `peaceiris/actions-gh-pages@v4` → `gh-pages` branch
- Custom domain: `iamnaiem.me` (DNS already pointing at GH Pages IPs `185.199.108-111.153`)
- HTTPS: auto-provisioned by GH Pages Let's Encrypt cert
- SPA fallback: `404.html = index.html` so deep-links work

## Out of Scope (Future)

- Blog / MDX articles
- Headless CMS integration
- Contact form (currently mailto only)
- ISTQB Certification section (re-add when passed Aug 2026)
- Analytics (add Plausible/Umami in v2 if needed)
