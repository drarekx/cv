import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.gerardfortea.com',
  // Catalan at the root with today's URLs; Spanish under /es, English under /en. No browser-language redirect.
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Never inline fonts as data: URIs: the CSP has `font-src 'self'` and would block them.
      assetsInlineLimit: (file) => (/\.(woff2?|ttf|otf|eot)$/.test(file) ? false : undefined),
    },
  },
});
