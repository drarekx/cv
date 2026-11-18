import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { alternates } from '../i18n';

/**
 * Hand-written sitemap: the site is a handful of static pages, no integration needed.
 * Every page in its three languages, each <url> with hreflang links to the others (x-default = Catalan).
 * The legal pages are noindex and stay out.
 *
 * A page is listed in Spanish or English only if its route file exists (src/pages/es/<slug>.astro…, see
 * `hasRoute`), so pages that are still Catalan-only never point to a missing URL.
 */
const paths = ['/', '/serveis', ...projects.map((p) => `/${p.slug}`)];

export const GET: APIRoute = () => {
  const urls = paths
    .flatMap((path) => {
      const priority = path === '/' ? '1.0' : path === '/serveis' ? '0.9' : '0.7';
      const versions = alternates(path);
      // hreflang only when there is more than one language (versions[0] is always the Catalan one).
      const links =
        versions.length > 1
          ? [...versions, { lang: 'x-default', href: versions[0].href }]
              .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>\n`)
              .join('')
          : '';
      return versions.map(({ href }) => `  <url>\n    <loc>${href}</loc>\n${links}    <priority>${priority}</priority>\n  </url>`);
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
