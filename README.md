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

## Maintenance Workflow

All content edits happen in `src/data/*.ts`. Push to `main`, CI deploys to `iamnaiem.me` in ~60s.

### Edit content

| What | File | Notes |
|---|---|---|
| Name · role · tagline · socials · bio · email · CV link | `src/data/profile.ts` | `taglineRotation` is the array the hero types through. |
| Skill categories + items | `src/data/skills.ts` | Each group needs an `icon` from `lucide-react`. Six groups currently render in a 3-col grid. |
| Work history | `src/data/experience.ts` | Append objects; timeline auto-alternates sides. Use the format `"2024 — Present"`. |
| Case studies | `src/data/projects.ts` | `id` becomes the route slug (`/case-studies/<id>`). `problem` / `approach` / `wins` are the deep-dive sections. |
| Stats tiles in hero | `src/sections/Stats.tsx` | Hard-coded for now — edit the `stats` array at the top of the file. |

### Common tasks

**Add a new project**
1. Append an object to `projects` in `src/data/projects.ts` with a unique `id`.
2. `git add . && git commit -m "feat: add <project-name> case study"`
3. `git push` → live in ~60s.

**Update headshot**
1. Drop the new image at `public/headshot.webp` (or PNG/JPG and update the `<img src>` in `src/sections/Hero.tsx`).
2. Keep size around 25–40KB for fast hero load. `magick input.png -resize 800x800 -quality 85 public/headshot.webp` works.
3. Commit + push.

**Add a CV download**
1. Drop `cv-naiemul-hasan-naiem.pdf` into `public/`.
2. The Hire-me CTA already links to `profile.cvUrl` — adjust that path in `src/data/profile.ts` if you renamed the file.

**Change visual tokens (colors, fonts)**
1. Edit `@theme` block in `src/styles/globals.css`.
2. `npm run dev` to preview locally before pushing.

### Verify before push

```bash
npm run build    # catches TypeScript errors
npm run preview  # serve the built dist locally at :4173 to sanity-check
```

### Check deploy status

```bash
gh run list --repo hasannaiem/hasannaiem.github.io --limit 3
gh run watch <run-id> --repo hasannaiem/hasannaiem.github.io
```

### If iamnaiem.me looks stale after a deploy

GitHub Pages CDN can hold an old version for 1–10 min. Force a Pages rebuild:

```bash
gh api -X POST repos/hasannaiem/hasannaiem.github.io/pages/builds
```

Then `curl -sL "https://iamnaiem.me/?cb=$(date +%s)" | grep -oE '/assets/index-[A-Za-z0-9]+\.js'` to confirm a fresh bundle is being served.

### Git commit author

Use the GitHub noreply email so commits attribute to the `hasannaiem` account and show up in the contribution graph:

```bash
git config user.name "hasannaiem"
git config user.email "106167725+hasannaiem@users.noreply.github.com"
```

The personal yahoo email is not verified on GitHub and produces orphan commits with `author_login: null`.

## Spec

Full design spec at `docs/superpowers/specs/2026-05-14-portfolio-design.md`.

## Agent context

`CLAUDE.md` at the repo root briefs future Claude Code sessions on architecture, conventions, and gotchas.
