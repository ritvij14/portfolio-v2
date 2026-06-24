# portfolio-v2 — Ritvij Kumar Sharma

Personal portfolio site. Single-page homepage with anchored sections + a blog scaffold.

## Stack
- Astro 5 (static output) + Tailwind CSS 4 via `@tailwindcss/vite`
- Sharp for image optimization (used through `astro:assets`)
- Package manager: **pnpm**

## Commands
```sh
pnpm dev       # local dev
pnpm build     # production build -> dist/
pnpm preview   # preview built site
```

## Structure
- `src/pages/index.astro` — homepage (sections: `#hero`, `#about`, `#work`, `#projects`, `#contact`)
- `src/pages/blogs/index.astro` — blog listing
- `src/pages/blogs/[slug].astro` — blog post template
- `src/content/config.ts` — `blogs` content collection schema (title, description, publishedDate, author?, tags?, draft?, coverImage?)
- `src/content/blogs/` — blog posts (currently empty)
- `src/assets/` — images processed by `astro:assets` (use `<Image>` for these)
- `public/` — static assets served as-is (favicon, robots.txt, noise.svg, video)
- `src/styles/global.css` — global styles / Tailwind entry

## Conventions
- `<html lang="en" class="dark ...">` — dark mode is the default; theme toggle swaps the `dark` class client-side.
- Use the `astro:assets` `<Image>` component for raster images in `src/assets/` (optimization + dimensions). Don't use raw `<img>` for those.
- External links use `target="_blank" rel="noopener noreferrer"`.
- Icons: Iconify via `iconify-icon` web component (`is:inline` script in head).
- Fonts: Rethink Sans + IBM Plex Mono (Google Fonts) and Geist (jsdelivr CDN) — loaded via `<link>` in head.

## Production
- Domain: **https://ritvij.dev** (set as `site` in `astro.config.mjs` when wiring canonical/sitemap).
- Subdomains exist for projects: `numis.ritvij.dev`, `ascii-cam.ritvij.dev`.

## SEO (in progress)
Audit completed; critical fixes being applied in order. See `/seo` audit notes.
Pending: `site` config, canonical tags, OG/Twitter tags, `@astrojs/sitemap`, `Person` JSON-LD.
