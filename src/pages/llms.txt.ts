import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

/** /llms.txt (llmstxt.org): a Markdown summary of the site for LLMs and agents, built from projects.ts so it never goes stale. */
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://www.gerardfortea.com')).href.replace(/\/$/, '');
  const link = (p: (typeof projects)[number]) => `[${p.name}](${base}/${p.slug}): ${p.summary}`;

  const apps = projects
    .filter((p) => p.kind === 'mac' || p.kind === 'tool')
    .map((p) => {
      let line = `- ${link(p)}`;
      if (p.kind === 'mac') {
        if (p.version) line += ` Versió ${p.version}.`;
        if (p.repo) line += ` Codi: ${p.repo}.`;
        if (p.install) line += ` Instal·lació: \`${p.install}\``;
      } else {
        line += ' Codi privat.';
      }
      return line;
    });
  const utilities = projects
    .filter((p) => p.kind === 'utility')
    .map((p) => `- ${link(p)} Gratuïta, al navegador: ${p.url}`);
  const web = projects
    .filter((p) => p.kind === 'web')
    .map((p) => `- ${link(p)} Web: ${p.url}`);
  web.push(
    "- [Cia Nom Provisional](https://www.cianomprovisional.com/): la web d'una companyia de circ: l'espectacle, la companyia, l'agenda de funcions i el contacte, en quatre idiomes.",
  );

  const text = `# Gerard Fortea

> Programador sènior fullstack a la Garrotxa (Olot, Girona) amb més de 15 anys d'experiència. Fa aplicacions de gestió a mida per a empreses, escoles i entitats, assessora pimes en tecnologia i publica apps i eines pròpies.

La web és en català. Treballa amb Vue, TypeScript, PHP i Laravel, i parla català, castellà i anglès.

## Serveis per a pimes

- [Serveis](${base}/serveis): programador web freelance i consultor tecnològic per a pimes de la Garrotxa, Olot i comarques veïnes.
- Desenvolupament web a mida: aplicacions web adaptades al negoci, des de panells de gestió interna fins a plataformes per als clients.
- Assessorament tecnològic: anàlisi de les necessitats digitals i tria de tecnologies, eines, arquitectura i proveïdors cloud.
- Manteniment i evolució: correcció d'errors, funcionalitats noves i modernització de tecnologies obsoletes en webs i aplicacions existents.
- Digitalització de processos: automatització de fluxos de treball manuals amb solucions a mida.

## Contacte

- Correu: fortea.gerard@mail.com
- Telèfon: +34 616 27 10 11
- [Formulari de contacte](${base}/serveis#contacte)
- [GitHub](https://github.com/drarekx)
- [LinkedIn](https://www.linkedin.com/in/gerard-fortea-a3863741/)

## Apps

${apps.join('\n')}

## Utilitats

${utilities.join('\n')}

## Projectes web

${web.join('\n')}

## Optional

- [Experiència i formació](${base}/#experiencia): el CV complet, del 2008 a avui.
- [Mapa del web](${base}/sitemap.xml)
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
