import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

/** Hand-written sitemap: the site is a handful of static pages, no integration needed. */
const paths = ['/', '/serveis', ...projects.map((p) => `/${p.slug}`)];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://www.gerardfortea.com');
  const urls = paths
    .map((path) => {
      const priority = path === '/' ? '1.0' : path === '/serveis' ? '0.9' : '0.7';
      return `  <url><loc>${new URL(path, base).href}</loc><priority>${priority}</priority></url>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
