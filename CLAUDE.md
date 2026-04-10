# Fox Valley Rug Works — Website

## What This Is
Premium area rug cleaning marketing website for Fox Valley Rug Works, built as a Next.js 16 App Router site with ~70 statically-generated SEO city landing pages under `/rug-cleaning/[city]/`.

## Deploys To
- **Platform:** Vercel (zero-config — no `vercel.json` in repo)
- **Production URL:** UNKNOWN — needs Tim to confirm
- **Auto-deploy branch:** UNKNOWN — assumed `main` (Vercel default), needs Tim to confirm
- **Repo:** `tdodar01-art/fox-valley-rug-works`

## Build Pipeline
```
git push origin main
       │
       ▼
GitHub (tdodar01-art/fox-valley-rug-works)
       │
       ▼
Vercel (zero-config)
  - npm install
  - next build          (static generation — ~70 city pages via generateStaticParams)
  - serves to production URL
```

This is a regular Next.js App Router build — **not** a static export. `next.config.ts` only disables image optimization (`images.unoptimized: true`); there is no `output: 'export'`. City pages at `app/rug-cleaning/[city]/` are statically generated at build time from `lib/cities.ts`.

## Run Locally
```bash
cd ~/code/fox-valley-rug-works
npm install
npm run dev          # http://localhost:3000
```

Other scripts:
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Required Env Vars
**None currently wired up.** The contact form uses `mailto:` with no backend; the site reads no env vars at runtime.

The README mentions Google Analytics and Google Search Console placeholder comments in `app/layout.tsx` that are meant to be replaced with measurement IDs directly in source (not via env vars) when ready.

- No `.env.example` exists in the repo
- If GA4/GSC move to env-var driven (recommended), the naming is UNKNOWN — needs Tim to decide

## Related Repos
Sibling marketing/brand repos (shared patterns, no code dependencies):
- `aokquickdry-next` — AOK Quick Dry (carpet/upholstery cleaning)
- `handyman` — pre-launch handyman brand
- `fast-plumber-near-me` — plumber directory
- `easyexit-seo-engine` — Easy Exit Home Buyers monorepo

Per the `handyman/CLAUDE.md` separation rule, each brand is its own legal entity and its own repo. Architectural patterns may be reused across brands; infrastructure and assets must not be shared.

## Known Issues / Gotchas
- **README is stale** — says "Next.js 14", `package.json` shows `next: 16.2.1`. Fix next time you touch the README.
- **Contact form uses `mailto:`** — `components/ContactForm.tsx` opens the user's email client instead of submitting to a backend. Before launch this needs to be replaced with a real form handler (Resend, Formspree, or a Next.js API route).
- **All photos are `<PhotoPlaceholder>` components.** No real photography has been added. README has the instructions for swapping in `next/image` once photos are ready.
- **No favicon/PWA icons** — pre-launch gap.
- **GA4 / GSC measurement IDs not set** — placeholder comments in `app/layout.tsx`.
- **Image optimization disabled** — `unoptimized: true` is deliberate but blocks `next/image` optimization features if you later want them.
- **AGENTS.md warning:** `AGENTS.md` flags that this Next.js version has breaking changes vs. older training data — check `node_modules/next/dist/docs/` before writing new code.

## Tech Stack
- **Framework:** Next.js 16.2.1 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Fonts:** Playfair Display (headings), Source Sans 3 (body), Libre Franklin (UI) — via `next/font/google`
- **Image optimization:** disabled (`unoptimized: true` in `next.config.ts`)
- **Linting:** ESLint 9 with `eslint-config-next`

## Project Structure
```
app/
  about/                  # Our Process page
  services/               # Services overview
  rug-types/              # Rug types we clean
  pricing/                # Pricing table
  faq/                    # FAQ with accordion
  contact/                # Contact form + plant info
  rug-cleaning/[city]/    # ~70 dynamic SEO city pages (generateStaticParams)
  sitemap.ts              # Auto-generated sitemap
  robots.ts               # Robots.txt config
components/               # Reusable React components (incl. PhotoPlaceholder)
lib/
  cities.ts               # City data — source of truth for /rug-cleaning/[city] pages
  metadata.ts             # Shared metadata helpers
public/                   # Static assets
```

Adding a new city page: add a city object to `lib/cities.ts` with `slug`, `name`, `county`, `description`, `nearby` slugs, and `meta` fields — the route regenerates automatically at build time.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-cream` | `#F5F0E8` | Background |
| `--color-charcoal` | `#2C2C2C` | Primary text |
| `--color-slate` | `#4A5568` | Secondary text |
| `--color-rust` | `#B7472A` | Primary accent |
| `--color-gold` | `#C4993B` | Secondary accent |
| `--color-sage` | `#7C8C6E` | Tertiary accent |
| `--color-wash-blue` | `#3B6B8C` | Sparingly |
