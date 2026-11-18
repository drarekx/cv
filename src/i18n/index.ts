/**
 * Languages of the site and helpers to build URLs.
 *
 * Catalan lives at the root with the original URLs; Spanish under /es and English under /en, with the same
 * slugs in every language (/serveis, /es/serveis, /en/serveis). Build every internal link with `localePath`.
 */

export type Lang = 'ca' | 'es' | 'en';

export const langs: Lang[] = ['ca', 'es', 'en'];
export const defaultLang: Lang = 'ca';

/** Name of each language in that language (for the switcher's screen-reader text). */
export const langNames: Record<Lang, string> = { ca: 'Català', es: 'Español', en: 'English' };
/** Short visible labels of the switcher. */
export const langLabels: Record<Lang, string> = { ca: 'CA', es: 'ES', en: 'EN' };
/** Open Graph locale of each language. */
export const ogLocale: Record<Lang, string> = { ca: 'ca_ES', es: 'es_ES', en: 'en_US' };

export const site = 'https://www.gerardfortea.com';

const isLang = (v: string): v is Lang => (langs as string[]).includes(v);

/**
 * Route files of the Spanish and English pages (src/pages/es/*.astro, src/pages/en/*.astro). A page exists in a
 * language when its route file does; Catalan pages always exist. Nothing to register by hand.
 */
// `?url` + lazy: only the file names are used. A plain glob would make Astro treat the pages as dependencies
// of every page that imports this module and pull their CSS and scripts in.
const routeFiles = Object.keys(import.meta.glob(['../pages/es/*.astro', '../pages/en/*.astro'], { query: '?url' }));

/** Whether the page at Catalan path `path` ('/', '/serveis', '/chordy#demo') exists in `lang`. */
export function hasRoute(lang: Lang, path: string): boolean {
  if (lang === defaultLang) return true;
  const base = path.split('#')[0].replace(/\/$/, '');
  return routeFiles.includes(`../pages/${lang}/${base === '' ? 'index' : base.slice(1)}.astro`);
}

/** Languages the page at Catalan path `path` exists in, in the order of `langs`. */
export const routeLangs = (path: string): Lang[] => langs.filter((l) => hasRoute(l, path));

/**
 * Root-relative path of `path` (a Catalan path such as '/serveis', '/' or '/#contacte') in `lang`.
 * '/serveis' → '/es/serveis'; '/' → '/es/'; '/#contacte' → '/es/#contacte'. Catalan paths come back unchanged.
 * Plain hashes ('#contacte') stay as they are: they point inside the current page.
 * If the page has no route in `lang` yet (a project page still in Catalan only), the Catalan path is returned,
 * so a link never points to a missing page.
 */
export function localePath(lang: Lang, path: string): string {
  if (path.startsWith('#') || lang === defaultLang) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return hasRoute(lang, p) ? `/${lang}${p}` : p;
}

/** The pathname without its /es or /en prefix: '/es/serveis' → '/serveis', '/en' → '/'. */
export function stripLang(pathname: string): string {
  const m = pathname.match(/^\/(es|en)(\/.*)?$/);
  if (!m) return pathname || '/';
  return m[2] || '/';
}

/** Language of a URL, from its first path segment. */
export function langFromUrl(url: URL): Lang {
  const first = url.pathname.split('/')[1] ?? '';
  return isLang(first) ? first : defaultLang;
}

/** Path in the canonical form used by the canonical link, hreflang and the sitemap: no trailing slash ('/es', '/es/serveis', '/'). */
export const canonicalPath = (path: string) => path.replace(/(.)\/$/, '$1');

/**
 * The same page in each language it exists in (or in `available`), as absolute canonical URLs (no trailing slash).
 * Used for hreflang and the sitemap.
 */
export function alternates(pathname: string, available?: Lang[]): { lang: Lang; href: string }[] {
  const base = stripLang(canonicalPath(pathname));
  return (available ?? routeLangs(base)).map((lang) => ({ lang, href: new URL(canonicalPath(localePath(lang, base)), site).href }));
}

/**
 * For texts that carry markup (`<strong>`, `<a href="/serveis">`): rewrites root-relative hrefs with `localePath`,
 * so the strings in src/i18n/pages/*.ts can always use the Catalan paths. Render with `set:html`.
 * Only for our own strings, never for user input.
 */
export const localizeLinks = (lang: Lang, html: string) =>
  html.replace(/href="(\/[^"]*)"/g, (_, path: string) => `href="${localePath(lang, path)}"`);
