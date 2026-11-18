# CV y portfolio de Gerard Fortea

Web personal: CV, servicios de programador para pymes y una página por proyecto. https://www.gerardfortea.com (Vercel). En catalán (raíz), castellano (`/es/…`) e inglés (`/en/…`); ver «Idiomas».

## Flujo de trabajo
- Analiza la necesidad y diseña el plan tú mismo.
- Para leer o explorar ficheros, delega en el subagente Explore.
- Para escribir código, delega en el subagente implementer, pasándole el plan completo.

## Comandos

```sh
npm run dev       # astro dev
npm run build     # tsc --noEmit (solo los .ts de src/: p. ej. una clave que falta en un idioma) + astro build → dist/. No hay tests ni lint
npm run preview   # sirve dist/, útil para capturas con Chrome headless
```

- El formulario de contacto (`/api/contacte`) es una función de Vercel fuera de Astro: con `astro dev` da 404. Para probarlo, `vercel dev`.
- El README es el de la plantilla de Vite y no describe el proyecto.

## Stack

Astro 4 + Vue 3 (islas) + Tailwind 4 (`@tailwindcss/vite`, sin `tailwind.config`: el tema está en `src/styles/global.css` con `@theme`). Fuentes autoalojadas con `@fontsource`, importadas en cada página (solo las familias que usa).

## Estructura

| Ruta | Qué es |
|---|---|
| `src/views/Home.astro` | Portada: `#inici`, `#gestio`, `#projectes`, `#canconers` (destacado), `#webs`, `#apps`, `#experiencia`, contacto. Las listas `utilities` y `openSource` están arriba; los textos, en `src/i18n/pages/home.ts` |
| `src/views/Serveis.astro` | Servicios para pymes, con el formulario (`ContactFooter`, `voice="vos"`) en `#contacte`. Textos en `src/i18n/pages/serveis.ts` |
| `src/views/AvisLegal.astro`, `Privacitat.astro` | Páginas legales (noindex), con `LegalPage`. Textos en `src/i18n/pages/avis-legal.ts` y `privacitat.ts` |
| `src/pages/index.astro`, `serveis.astro`, `avis-legal.astro`, `privacitat.astro` y sus copias en `src/pages/es/` y `src/pages/en/` | Rutas finas: solo `<Vista lang="ca" />` (o `es`, `en`) |
| `src/pages/<slug>.astro` | Una página por proyecto, cada una con su propia paleta y fuentes. De momento solo en catalán |
| `src/i18n/index.ts` | `Lang`, `langs`, `localePath`, `hasRoute`, `alternates`, `localizeLinks`… |
| `src/i18n/ui.ts` | Textos compartidos (layout, cabecera, formulario, páginas legales, pie de proyecto, `CopyCommand`, selector de idioma) |
| `src/i18n/pages/<página>.ts` | Textos de cada página: `{ ca, es, en }` con la misma forma (el tipo sale del catalán) |
| `src/pages/sitemap.xml.ts` | Sitemap a mano: `/`, `/serveis` y un `/<slug>` por proyecto de `projects.ts`, en cada idioma que exista, con `xhtml:link` hreflang |
| `src/pages/llms.txt.ts` | `/llms.txt` para LLMs y agentes: quién soy, servicios, contacto y proyectos, generado desde `projects.ts` |
| `src/data/projects.ts` | Lista de proyectos (`slug`, `name`, `kind`: `mac` / `web` / `tool` / `utility`, `summary` por idioma, `version`, `repo`, `install`, `url`). Alimenta `ProjectFooter`, el sitemap y `project('slug')` |
| `src/layouts/BaseLayout.astro` | `lang` (obligatorio), `title`, `description`, `bodyClass`, `canonical`, `ogImage`, `noindex`, `alternateLangs`; slot `head` para el JSON-LD. Canonical sin barra final, hreflang y `og:locale:alternate` de los idiomas en que existe la página, enlace de salto a `#main` |
| `src/components/site/` | `SiteHeader`, `ContactFooter` (tu/vos), `LegalPage`, `LangSwitch` (CA · ES · EN), `BrandSymbol` |
| `src/components/ProjectFooter.astro` | Pie de cada página de proyecto: enlaces a los demás proyectos y a `/serveis` |
| `src/components/CopyCommand.vue` | Comando de instalación con botón de copiar |
| `src/components/<proyecto>/` | Islas Vue de las demos de algunas páginas |
| `api/contacte.ts` | Función de Vercel: envía el formulario por Gmail SMTP. Variables: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO` (opcional). Comprueba el origen, un campo trampa (`web`) y un tiempo mínimo |
| `vercel.json` | Cabeceras: CSP, HSTS, caché de `/img/*` (30 días) |

## Añadir un proyecto

1. Entrada en `src/data/projects.ts` (añadir el slug al tipo `ProjectSlug`). Con eso ya sale en el pie de las demás páginas y en el sitemap. Rellenar `summary` en los tres idiomas (`{ ca, es, en }`, una línea cada uno): sale en las listas de la portada (en el idioma de la página) y en `/llms.txt` (el catalán). Las herramientas web gratuitas son `kind: 'utility'`.
2. La página, con el patrón de «Idiomas»: vista `src/views/<Nombre>.astro`, textos en `src/i18n/pages/<slug>.ts` y las tres rutas. Misma estructura que las demás (cabecera con «← Gerard Fortea» y `LangSwitch`, hero, demo, funciones, instalación o enlace, `ProjectFooter lang={lang}`), JSON-LD `SoftwareApplication` o `WebApplication` con `author: { '@id': 'https://www.gerardfortea.com/#gerard' }` e `inLanguage: lang`.
3. Línea en `src/views/Home.astro`, arriba del todo si es la más nueva: en `utilities` (bloque «Utilitats») si es una herramienta web gratuita, o en `openSource` (bloque «Apps i eines») si no, con `text: project('<slug>').summary[lang]`. Las dos listas son manuales e independientes de `projects.ts` y se pintan con `src/components/site/ProjectList.astro`.
4. Imágenes en `public/img/<slug>-<nombre>-<ancho>.webp` (`cwebp`), con `srcset`. Son las mismas en los tres idiomas.
5. `npm run build` y mirar la página con `npm run preview` y Chrome headless (`--screenshot`, `--window-size`). La captura headless no baja de ~500 px de ancho: no sirve para comprobar el móvil.

Las versiones de las apps de Mac (`version` en `projects.ts`) se actualizan a mano cuando sale un release.

## Idiomas

- URLs: catalán en la raíz con las URLs de siempre (`/serveis`), castellano en `/es/…` e inglés en `/en/…`, con el mismo slug (`/es/serveis`, `/en/chordy`). Sin redirección por idioma del navegador. Configurado con `i18n` en `astro.config.mjs`.
- Cada página es una vista `src/views/<Nombre>.astro` con la prop `lang: Lang` y tres rutas finas: `src/pages/x.astro` (`<X lang="ca" />`), `src/pages/es/x.astro` y `src/pages/en/x.astro`. Una página existe en un idioma cuando existe su ruta (`hasRoute`); con eso salen solos el hreflang, el selector de idioma y el sitemap. Las páginas que aún no tienen rutas `es`/`en` no muestran selector ni hreflang, y los enlaces hacia ellas desde otro idioma van a la versión catalana.
- Textos: los compartidos en `src/i18n/ui.ts` (`useUi(lang)`); los de cada página en `src/i18n/pages/<página>.ts`, agrupados por sección y en el orden de la página. El objeto catalán es la referencia del tipo: si falta una clave en `es` o `en`, el build falla. Los textos con `<strong>` o `<a href="/ruta">` se pintan con `set:html={localizeLinks(lang, t.x)}` (el enlace se escribe con la ruta catalana).
- Enlaces internos siempre con `localePath(lang, '/ruta')` (también `'/#projectes'`); los `#ancla` de la misma página se quedan tal cual.
- Scripts de cliente: no pueden importar los diccionarios. Pasarles los textos con un `<script type="application/json" data-…>` (ver `ContactFooter`) o atributos `data-*`. Islas Vue: por props (p. ej. `CopyCommand` con `copyLabel`, `copiedLabel`, `srCopied` de `ui[lang].copy`).
- Tratamiento: la portada y `/privacitat` tratan de tú (castellano «tú»); `/serveis`, de vós (castellano «vosotros»). En inglés, «you».
- Cualquier cambio de texto se hace en los tres idiomas a la vez. Nombres propios, de productos, de lugares y de eventos no se traducen (Casino de Tortellà, Combat de Glosa, la Garrotxa). `/llms.txt` está en catalán y enlaza las tres portadas.
- `api/contacte.ts` responde en el idioma del campo oculto `lang` del formulario (lista blanca `ca`/`es`/`en`); tiene su propio diccionario porque no puede importar módulos de Astro. El correo al propietario sigue en catalán con una línea `Idioma:`.

## Convenciones

- Textos en catalán, castellano e inglés, claros y concretos: qué hace, no adjetivos. Las demos de cada página usan la lógica real del proyecto, simplificada.
- Cada página de proyecto tiene su propia identidad visual (la de la app), con colores arbitrarios de Tailwind (`bg-[#…]`). Las páginas del sitio usan los tokens de `global.css` (`ink`, `paper`, `graphite`, `line`, `fageda`, `font-display`…).
- Accesibilidad: botones con `aria-pressed` para los conmutadores, zonas táctiles de 44 px (`min-h-11`), `sr-only` para títulos de las demos, respetar `prefers-reduced-motion`. Los atajos de teclado de una demo solo actúan mientras la demo está en pantalla (IntersectionObserver) y nunca dentro de un campo.
- Proyectos privados o de clientes: no nombrar al cliente ni enlazar el repo; describir solo lo que hace.

## Cosas que ya costaron (no repetir)

- **`import.meta.glob` de páginas**: `hasRoute` (en `src/i18n/index.ts`) lista las rutas de `src/pages/es|en` con `query: '?url'`. Sin eso, Astro trata las páginas como dependencias de todo lo que importa `src/i18n` y mete su CSS y scripts en todas las páginas.
- **CSP** (`vercel.json`): `default-src 'self'`. No se pueden cargar fuentes de Google, imágenes, vídeos, scripts ni `fetch` de otros dominios, ni iframes. Todo va autoalojado en `public/` o en el bundle. Los enlaces `<a>` externos sí.
- **`/img/*` se cachea 30 días**: para cambiar una imagen, nombre nuevo.
- **Clases de Tailwind dinámicas**: Tailwind solo ve las clases escritas enteras en el código. `` `border-[${color}]` `` no funciona; escribir la clase literal.
- **Fechas fijas en la portada**: la cuenta atrás del Combat de Glosa (21-11-2026 16:30, script de `Home.astro`; la fecha visible está en `src/i18n/pages/home.ts`) y «Més de 50 projectes». Revisar cuando caduquen, en los tres idiomas.
- **Search Console «Página con redirección»**: es lo esperado. `gerardfortea.com` y `http://` redirigen (308) a `https://www.gerardfortea.com`; las URL del sitemap responden 200.
- **CLS por la fuente de titulares**: Space Grotesk llega tarde y el texto del hero se recolocaba (CLS 0,21 en escritorio). `global.css` define `Space Grotesk Fallback` (Arial con `size-adjust` y `*-override` medidos) y la portada y `/serveis` precargan el woff2. Si cambia la fuente de titulares, recalcular. Para medir CLS: `PerformanceObserver` con `{ type: 'layout-shift', buffered: true }` (`getEntriesByType` no devuelve nada).
- **Bots de IA** (`public/robots.txt`): se dejan entrar los buscadores y los asistentes que buscan para responder (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User) y se bloquean los que recogen datos para entrenar (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot…). Decisión del usuario; no cambiarla sin preguntar.

## Commits

Con el skill `commit:commit`, en inglés y Conventional Commits, un commit por grupo lógico (p. ej. la página del proyecto y, aparte, la línea de la portada).
