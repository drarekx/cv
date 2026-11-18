import type { Lang } from '../i18n';

export type ProjectSlug = 'canconers' | 'sepa-generator' | 'xml-viewer' | 'clientitos' | 'chordy' | 'ledly' | 'wallpy' | 'atajoly' | 'terminaly' | 'casino-tortella' | 'combat-glosa';

export interface Project {
  slug: ProjectSlug;
  name: string;
  kind: 'mac' | 'web' | 'tool' | 'utility';
  /** One line per language, used on the home page lists (summary[lang]) and in /llms.txt (summary.ca). */
  summary: Record<Lang, string>;
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
    summary: {
      ca: "App per al Mac per dissenyar cançoners amb lletra, acords i diagrames, i imprimir-los com un llibret A5 a punt per plegar i cosir.",
      es: "App para Mac para diseñar cancioneros con letra, acordes y diagramas, e imprimirlos como un librillo A5 listo para doblar y coser.",
      en: "A Mac app to design songbooks with lyrics, chords and diagrams, and print them as an A5 booklet ready to fold and sew.",
    },
    name: 'Cançoners',
    kind: 'mac',
    version: 'v1.5.10',
    repo: 'https://github.com/drarekx/songery',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/songery/main/install.sh | bash',
  },
  {
    slug: 'sepa-generator',
    summary: {
      ca: "IBAN de 24 països SEPA i NIF, NIE i CIF de prova, vàlids de format, per provar programari.",
      es: "IBAN de 24 países SEPA y NIF, NIE y CIF de prueba, con formato válido, para probar software.",
      en: "Test IBANs from 24 SEPA countries and Spanish NIF, NIE and CIF numbers, all validly formatted, for testing software.",
    },
    name: 'sepa-gen',
    kind: 'utility',
    url: 'https://sepa-generator.mrdrarek.es/',
  },
  {
    slug: 'xml-viewer',
    summary: {
      ca: "Visor d'XML i JSON i editor de CSV al navegador, ràpid amb fitxers de desenes de MB.",
      es: "Visor de XML y JSON y editor de CSV en el navegador, rápido con archivos de decenas de MB.",
      en: "XML and JSON viewer and CSV editor in the browser, fast with files of tens of MB.",
    },
    name: 'XML Viewer',
    kind: 'utility',
    url: 'https://xml-viewer.mrdrarek.es/',
  },
  {
    slug: 'clientitos',
    summary: {
      ca: "Clients simulats amb personalitat i pressupost que proven una web, i un equip d'experts que la revisa.",
      es: "Clientes simulados con personalidad y presupuesto que prueban una web, y un equipo de expertos que la revisa.",
      en: "Simulated customers with a personality and a budget who test a website, and a team of experts who review it.",
    },
    name: 'Clientitos',
    kind: 'tool',
  },
  {
    slug: 'chordy',
    summary: {
      ca: "Toca progressions d'acords amb el Mac o un teclat MIDI, amb l'iPad i l'iPhone de comandament.",
      es: "Toca progresiones de acordes con el Mac o un teclado MIDI, con el iPad y el iPhone como mando.",
      en: "Play chord progressions on your Mac or a MIDI keyboard, with your iPad and iPhone as remote controls.",
    },
    name: 'Chordy',
    kind: 'mac',
    version: 'v1.2.1',
    repo: 'https://github.com/drarekx/Chordy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Chordy/main/install.sh | bash',
  },
  {
    slug: 'ledly',
    summary: {
      ca: "Ambilight per al Mac i Windows: una tira de LEDs que segueix els colors de la pantalla.",
      es: "Ambilight para Mac y Windows: una tira de LED que sigue los colores de la pantalla.",
      en: "Ambilight for Mac and Windows: an LED strip that follows the colors on your screen.",
    },
    name: 'Ledly',
    kind: 'mac',
    version: 'v1.0.0',
    repo: 'https://github.com/drarekx/ledly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/ledly/main/install.sh | bash',
  },
  {
    slug: 'wallpy',
    summary: {
      ca: "Fons de pantalla amb vídeo per al Mac, que es posa en pausa quan no el veus.",
      es: "Fondos de pantalla con vídeo para Mac, que se pausan cuando no los ves.",
      en: "Video wallpapers for the Mac that pause when you can't see them.",
    },
    name: 'Wallpy',
    kind: 'mac',
    version: 'v1.10.0',
    repo: 'https://github.com/drarekx/Wallpy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Wallpy/main/install.sh | bash',
  },
  {
    slug: 'atajoly',
    summary: {
      ca: "Canvia d'app amb el polze: ⌘ dret i la inicial de l'app.",
      es: "Cambia de app con el pulgar: ⌘ derecho y la inicial de la app.",
      en: "Switch apps with your thumb: right ⌘ and the app's first letter.",
    },
    name: 'Atajoly',
    kind: 'mac',
    version: 'v1.2.0',
    repo: 'https://github.com/drarekx/atajoly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/atajoly/main/install.sh | bash',
  },
  {
    slug: 'terminaly',
    summary: {
      ca: "Tots els teus agents de terminal en una finestra, i un que dirigeix els altres en swarm.",
      es: "Todos tus agentes de terminal en una ventana, y uno que dirige a los demás en swarm.",
      en: "All your terminal agents in one window, and one that leads the others as a swarm.",
    },
    name: 'Terminaly',
    kind: 'mac',
    version: 'v0.6.4',
    repo: 'https://github.com/drarekx/terminaly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/terminaly/main/install.sh | bash',
  },
  {
    slug: 'casino-tortella',
    summary: {
      ca: "La nova web de l'entitat: agenda d'actes, espais, activitats setmanals i fer-se'n soci.",
      es: "La nueva web de la entidad: agenda de actos, espacios, actividades semanales y hacerse socio.",
      en: "The club's new website: events calendar, venues, weekly activities and becoming a member.",
    },
    name: 'Casino de Tortellà',
    kind: 'web',
    url: 'https://casino.mrdrarek.es/',
  },
  {
    slug: 'combat-glosa',
    summary: {
      ca: "La web del combat de glosa i corrandes: programa, reserves del dinar, inscripció de glosadors i un panell per canviar-ho tot.",
      es: "La web del combate de glosa y corrandes: programa, reservas para la comida, inscripción de glosadores y un panel para cambiarlo todo.",
      en: "The website of the glosa and corrandes contest (Catalan improvised verse): program, lunch bookings, sign-up for performers and a panel to change everything.",
    },
    name: 'Combat de Glosa',
    kind: 'web',
    url: 'https://combatglosa.casinotortella.cat/',
  },
];

export const project = (slug: ProjectSlug) => projects.find((p) => p.slug === slug)!;
