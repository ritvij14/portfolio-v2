// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ritvij.dev',
  integrations: [
    sitemap({
      // Blog has no published posts yet; exclude its routes until content exists.
      filter: (page) => !page.includes('/blogs')
    })
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});