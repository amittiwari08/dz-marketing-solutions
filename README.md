# DZ MARKETING SOLUTIONS — Corporate Website

A premium, restrained corporate technology website built with Next.js 14 (App
Router), TypeScript and Tailwind CSS.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS with a centralized design-token config
- **Animation:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** lucide-react
- **Images:** `sharp` (fast, native image optimization for `next/image` — strongly
  recommended by Next.js for any production/self-hosted deployment; without
  it, image processing falls back to a much slower WASM decoder)
- **Contact form:** Resend (serverless API route, no exposed keys)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Rebranding

Everything identity-related lives in one file:

```
src/data/siteConfig.ts
```

Change `companyName`, `tagline`, `email`, `phone`, `address`, social links and
the placeholder statistics there — no component hardcodes brand strings.

Content data is similarly centralized and easy to edit:

```
src/data/services.ts        11 service categories
src/data/industries.ts      industry boxes (home page only)
src/data/countries.ts       global-presence map markers
src/data/technologies.ts    capability groups
src/data/images.ts          curated photos, incl. heroRotation (Hero background loop)
src/data/pageParagraphs.ts  per-page rotating paragraph sets
```

The Hero's background auto-rotates through `heroRotation` in `src/data/images.ts`
every 6 seconds (crossfade, loops, respects `prefers-reduced-motion`). Add,
remove or reorder entries there to change the rotation — each entry can set
`objectPosition` to control framing for portrait-oriented source images.

## Contact form

The form posts to `src/app/api/contact/route.ts`, which sends email via
[Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in:

```
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_EMAIL=
```

`CONTACT_FROM_EMAIL` must be an address on a domain you've verified with
Resend. All three variables are required — if any are missing, the route
returns a **503** and the form shows a failure state (it never reports a
fake success). This is deliberate: local development without a Resend
account will correctly show "couldn't send" rather than silently pretending
the enquiry went through. The route also trims/limits input length, checks
a hidden honeypot field to filter bots, and applies a best-effort per-IP
rate limit. Swap in Formspree/Web3Forms instead by editing that one file if
preferred.

## Pages

- `/` — Home (hero, stats, about preview, services, industries, global map,
  why-choose-us, process, technologies, final CTA)
- `/about` — Who we are, mission/vision, values, global perspective
- `/services` — Full catalogue of all 11 services
- `/contact` — Contact form + company details

## Notes

- Statistics, country list and any performance claims are **placeholders**
  for the first prototype — replace with verified figures before launch.
- The Global Presence map (`public/images/global-network-map.jpg`) and the
  Hero/Industry-Showcase visual (`public/images/industry-showcase.jpg`) are
  locally hosted image assets. Marker positions in `src/data/countries.ts`
  are `x`/`y` percentages calibrated specifically to that map image — if you
  replace the image, recalibrate the positions to match.
- A couple of service/about visuals still reference curated, freely-licensed
  Unsplash photos (see `src/data/images.ts`). `public/images/featured-ai.jpg`
  is currently unused by any component — remove it or wire it into a
  section if you don't need it.
- The current hero/service imagery (humanoid robots, AR visors, circuit
  patterns) leans sci-fi/AI-startup rather than "established corporate
  marketing agency." Recommend replacing with real team/office/client-facing
  photography before launch to match the brand direction in `siteConfig.ts`.
- Build with `npm run build` and deploy to Vercel (or any Node host).
