export type ProjectSlug = 'canconers' | 'sepa-generator' | 'xml-viewer' | 'clientitos' | 'chordy' | 'ledly' | 'wallpy' | 'atajoly' | 'terminaly' | 'casino-tortella' | 'combat-glosa';

export interface Project {
  slug: ProjectSlug;
  name: string;
  kind: 'mac' | 'web' | 'tool' | 'utility';
  /** One line in Catalan, used on the home page lists and in /llms.txt. */
  summary: string;
  /** Mac apps: release version. */
  version?: string;
  /** Public repo (Mac apps). The web projects' repos are private. */
  repo?: string;
  install?: string;
  /** Live site (web projects). */
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'canconers',
    summary: "App per al Mac per dissenyar cançoners amb lletra, acords i diagrames, i imprimir-los com un llibret A5 a punt per plegar i cosir.",
    name: 'Cançoners',
    kind: 'mac',
    version: 'v1.5.10',
    repo: 'https://github.com/drarekx/songery',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/songery/main/install.sh | bash',
  },
  {
    slug: 'sepa-generator',
    summary: "IBAN de 24 països SEPA i NIF, NIE i CIF de prova, vàlids de format, per provar programari.",
    name: 'sepa-gen',
    kind: 'utility',
    url: 'https://sepa-generator.mrdrarek.es/',
  },
  {
    slug: 'xml-viewer',
    summary: "Visor d'XML i JSON i editor de CSV al navegador, ràpid amb fitxers de desenes de MB.",
    name: 'XML Viewer',
    kind: 'utility',
    url: 'https://xml-viewer.mrdrarek.es/',
  },
  {
    slug: 'clientitos',
    summary: "Clients simulats amb personalitat i pressupost que proven una web, i un equip d'experts que la revisa.",
    name: 'Clientitos',
    kind: 'tool',
  },
  {
    slug: 'chordy',
    summary: "Toca progressions d'acords amb el Mac o un teclat MIDI, amb l'iPad i l'iPhone de comandament.",
    name: 'Chordy',
    kind: 'mac',
    version: 'v1.2.1',
    repo: 'https://github.com/drarekx/Chordy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Chordy/main/install.sh | bash',
  },
  {
    slug: 'ledly',
    summary: "Ambilight per al Mac i Windows: una tira de LEDs que segueix els colors de la pantalla.",
    name: 'Ledly',
    kind: 'mac',
    version: 'v1.0.0',
    repo: 'https://github.com/drarekx/ledly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/ledly/main/install.sh | bash',
  },
  {
    slug: 'wallpy',
    summary: "Fons de pantalla amb vídeo per al Mac, que es posa en pausa quan no el veus.",
    name: 'Wallpy',
    kind: 'mac',
    version: 'v1.10.0',
    repo: 'https://github.com/drarekx/Wallpy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Wallpy/main/install.sh | bash',
  },
  {
    slug: 'atajoly',
    summary: "Canvia d'app amb el polze: ⌘ dret i la inicial de l'app.",
    name: 'Atajoly',
    kind: 'mac',
    version: 'v1.2.0',
    repo: 'https://github.com/drarekx/atajoly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/atajoly/main/install.sh | bash',
  },
  {
    slug: 'terminaly',
    summary: "Tots els teus agents de terminal en una finestra, i un que dirigeix els altres en swarm.",
    name: 'Terminaly',
    kind: 'mac',
    version: 'v0.6.4',
    repo: 'https://github.com/drarekx/terminaly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/terminaly/main/install.sh | bash',
  },
  {
    slug: 'casino-tortella',
    summary: "La nova web de l'entitat: agenda d'actes, espais, activitats setmanals i fer-se'n soci.",
    name: 'Casino de Tortellà',
    kind: 'web',
    url: 'https://casino.mrdrarek.es/',
  },
  {
    slug: 'combat-glosa',
    summary: "La web del combat de glosa i corrandes: programa, reserves del dinar, inscripció de glosadors i un panell per canviar-ho tot.",
    name: 'Combat de Glosa',
    kind: 'web',
    url: 'https://combatglosa.casinotortella.cat/',
  },
];

export const project = (slug: ProjectSlug) => projects.find((p) => p.slug === slug)!;
