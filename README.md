# Fox Valley Rug Works

Premium area rug cleaning website built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. Designed for deployment on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

Push to GitHub and connect the repository to [Vercel](https://vercel.com). The project is pre-configured for zero-config deployment.

## Project Structure

```
app/                    # Next.js App Router pages
  about/                # Our Process page
  services/             # Services overview
  rug-types/            # Rug types we clean
  pricing/              # Pricing table
  faq/                  # FAQ with accordion
  contact/              # Contact form + plant info
  rug-cleaning/[city]/  # Dynamic SEO city pages (70+ cities)
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Robots.txt config
components/             # Reusable React components
lib/
  cities.ts             # City data for all service area pages
  metadata.ts           # Shared metadata helpers
```

## City Pages System

The site includes 70+ SEO landing pages targeting "[City] rug cleaning" keywords. City data is defined in `lib/cities.ts`.

Each city page is statically generated at build time via `generateStaticParams()`. To add a new city:

1. Add a city object to the `cities` array in `lib/cities.ts`
2. Include `slug`, `name`, `county`, `description`, `nearby` city slugs, and `meta` data
3. Rebuild -- the new page will be generated automatically

## Adding Real Photos

All photo positions use the `PhotoPlaceholder` component. To replace with real images:

1. Add photos to the `public/` directory (e.g., `public/images/`)
2. Replace `<PhotoPlaceholder>` instances with Next.js `<Image>` components
3. Use `next/image` for automatic optimization

## Fonts

- **Playfair Display** -- headings and display text
- **Source Sans 3** -- body text
- **Libre Franklin** -- buttons, nav, labels

All loaded via `next/font/google` for performance.

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

## Analytics

Google Analytics and Search Console placeholders are in `app/layout.tsx`. Uncomment and add your measurement IDs when ready.

## Contact Form

The contact form currently uses `mailto:` to send form data via the user's email client. To add a backend form handler, update `components/ContactForm.tsx`.
