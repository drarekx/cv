# CV y portfolio de Gerard Fortea

Web personal: CV, servicios de programador para pymes y una página por proyecto. https://www.gerardfortea.com (Vercel). Todo el texto está en catalán; no hay i18n.

## Flujo de trabajo
- Analiza la necesidad y diseña el plan tú mismo.
- Para leer o explorar ficheros, delega en el subagente Explore.
- Para escribir código, delega en el subagente implementer, pasándole el plan completo.

## Comandos

```sh
npm run dev       # astro dev
npm run build     # astro build → dist/ (la única comprobación que hay: no hay tests, lint ni typecheck en scripts)
npm run preview   # sirve dist/, útil para capturas con Chrome headless
```

- El formulario de contacto (`/api/contacte`) es una función de Vercel fuera de Astro: con `astro dev` da 404. Para probarlo, `vercel dev`.
- El README es el de la plantilla de Vite y no describe el proyecto.

## Stack

Astro 4 + Vue 3 (islas) + Tailwind 4 (`@tailwindcss/vite`, sin `tailwind.config`: el tema está en `src/styles/global.css` con `@theme`). Fuentes autoalojadas con `@fontsource`, importadas en cada página (solo las familias que usa).

## Estructura

| Ruta | Qué es |
|---|---|
| `src/pages/index.astro` | Portada: `#inici`, `#gestio`, `#projectes`, `#canconers` (destacado), `#webs`, `#apps`, `#experiencia`, contacto. Arrays de datos arriba del todo (`experience`, `skills`, `openSource`…) |
| `src/pages/serveis.astro` | Servicios para pymes, con el formulario (`ContactFooter`, `voice="vos"`) en `#contacte` |
| `src/pages/<slug>.astro` | Una página por proyecto, cada una con su propia paleta y fuentes |
| `src/pages/sitemap.xml.ts` | Sitemap a mano: `/`, `/serveis` y un `/<slug>` por proyecto de `projects.ts` |
| `src/pages/llms.txt.ts` | `/llms.txt` para LLMs y agentes: quién soy, servicios, contacto y proyectos, generado desde `projects.ts` |
| `src/data/projects.ts` | Lista de proyectos (`slug`, `name`, `kind`: `mac` / `web` / `tool` / `utility`, `summary`, `version`, `repo`, `install`, `url`). Alimenta `ProjectFooter`, el sitemap y `project('slug')` |
| `src/layouts/BaseLayout.astro` | `title`, `description`, `bodyClass`, `canonical`, `ogImage`, `noindex`; slot `head` para el JSON-LD. Canonical sin barra final, `lang="ca"`, enlace «Salta al contingut» a `#main` |
| `src/components/site/` | `SiteHeader`, `ContactFooter` (tu/vos), `LegalPage`, `BrandSymbol` |
| `src/components/ProjectFooter.astro` | Pie de cada página de proyecto: enlaces a los demás proyectos y a `/serveis` |
| `src/components/CopyCommand.vue` | Comando de instalación con botón de copiar |
| `src/components/<proyecto>/` | Islas Vue de las demos de algunas páginas |
| `api/contacte.ts` | Función de Vercel: envía el formulario por Gmail SMTP. Variables: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO` (opcional). Comprueba el origen, un campo trampa (`web`) y un tiempo mínimo |
| `vercel.json` | Cabeceras: CSP, HSTS, caché de `/img/*` (30 días) |

## Añadir un proyecto

1. Entrada en `src/data/projects.ts` (añadir el slug al tipo `ProjectSlug`). Con eso ya sale en el pie de las demás páginas y en el sitemap. Rellenar `summary` (una línea en catalán): sale en las listas de la portada y en `/llms.txt`. Las herramientas web gratuitas son `kind: 'utility'`.
2. `src/pages/<slug>.astro`: misma estructura que las demás (cabecera con «← Gerard Fortea», hero, demo, funciones, instalación o enlace, `ProjectFooter`), JSON-LD `SoftwareApplication` o `WebApplication` con `author: { '@id': 'https://www.gerardfortea.com/#gerard' }`.
3. Línea en `index.astro`, arriba del todo si es la más nueva: en `utilities` (bloque «Utilitats») si es una herramienta web gratuita, o en `openSource` (bloque «Apps i eines») si no. Las dos listas son manuales e independientes de `projects.ts` y se pintan con `src/components/site/ProjectList.astro`.
4. Imágenes en `public/img/<slug>-<nombre>-<ancho>.webp` (`cwebp`), con `srcset`.
5. `npm run build` y mirar la página con `npm run preview` y Chrome headless (`--screenshot`, `--window-size`). La captura headless no baja de ~500 px de ancho: no sirve para comprobar el móvil.

Las versiones de las apps de Mac (`version` en `projects.ts`) se actualizan a mano cuando sale un release.

## Convenciones

- Textos en catalán, claros y concretos: qué hace, no adjetivos. Las demos de cada página usan la lógica real del proyecto, simplificada.
- Cada página de proyecto tiene su propia identidad visual (la de la app), con colores arbitrarios de Tailwind (`bg-[#…]`). Las páginas del sitio usan los tokens de `global.css` (`ink`, `paper`, `graphite`, `line`, `fageda`, `font-display`…).
- Accesibilidad: botones con `aria-pressed` para los conmutadores, zonas táctiles de 44 px (`min-h-11`), `sr-only` para títulos de las demos, respetar `prefers-reduced-motion`. Los atajos de teclado de una demo solo actúan mientras la demo está en pantalla (IntersectionObserver) y nunca dentro de un campo.
- Proyectos privados o de clientes: no nombrar al cliente ni enlazar el repo; describir solo lo que hace.

## Cosas que ya costaron (no repetir)

- **CSP** (`vercel.json`): `default-src 'self'`. No se pueden cargar fuentes de Google, imágenes, vídeos, scripts ni `fetch` de otros dominios, ni iframes. Todo va autoalojado en `public/` o en el bundle. Los enlaces `<a>` externos sí.
- **`/img/*` se cachea 30 días**: para cambiar una imagen, nombre nuevo.
- **Clases de Tailwind dinámicas**: Tailwind solo ve las clases escritas enteras en el código. `` `border-[${color}]` `` no funciona; escribir la clase literal.
- **Fechas fijas en la portada**: la cuenta atrás del Combat de Glosa (21-11-2026 16:30) y «Més de 50 projectes». Revisar cuando caduquen.
- **Search Console «Página con redirección»**: es lo esperado. `gerardfortea.com` y `http://` redirigen (308) a `https://www.gerardfortea.com`; las URL del sitemap responden 200.
- **CLS por la fuente de titulares**: Space Grotesk llega tarde y el texto del hero se recolocaba (CLS 0,21 en escritorio). `global.css` define `Space Grotesk Fallback` (Arial con `size-adjust` y `*-override` medidos) y la portada y `/serveis` precargan el woff2. Si cambia la fuente de titulares, recalcular. Para medir CLS: `PerformanceObserver` con `{ type: 'layout-shift', buffered: true }` (`getEntriesByType` no devuelve nada).
- **Bots de IA** (`public/robots.txt`): se dejan entrar los buscadores y los asistentes que buscan para responder (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User) y se bloquean los que recogen datos para entrenar (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot…). Decisión del usuario; no cambiarla sin preguntar.

## Commits

Con el skill `commit:commit`, en inglés y Conventional Commits, un commit por grupo lógico (p. ej. la página del proyecto y, aparte, la línea de la portada).
