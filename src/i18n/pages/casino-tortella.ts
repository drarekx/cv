/**
 * /casino-tortella texts (src/views/CasinoTortella.astro and src/components/casino/CasinoAgenda.vue), in page order.
 * The real website is in Catalan; names of events and rooms in the sample agenda are proper names and stay in Catalan.
 */
import type { Lang } from '../index';

const ca = {
  // <head>
  meta: {
    title: "Casino de Tortellà — nova web de l'entitat · Gerard Fortea",
    description:
      "Web del Casino de Tortellà (Garrotxa, des de 1869): agenda d'actes, espais i formularis per associar-s'hi. October CMS sobre Laravel.",
    ldName: 'Web del Casino de Tortellà',
    ldDescription: "Web de la Societat Cultural i Recreativa Casino de Tortellà: agenda d'actes, espais i formularis.",
  },

  // Header
  header: {
    backHome: '← Gerard Fortea',
    visit: 'Visita la web',
  },

  // Hero
  hero: {
    kicker: 'Societat Cultural i Recreativa · Tortellà, la Garrotxa · des de 1869',
    title: 'Una cartellera per a un casino de poble de 1869.',
    intro:
      "La nova web del Casino de Tortellà: agenda d'actes, els espais de l'edifici, les activitats de cada setmana i els formularis de contacte i per fer-se'n soci. Pensada perquè qui hi entra sàpiga de seguida què passa al Casino.",
    ctaVisit: 'Visita la nova web',
    ctaAgenda: 'Prova la cartellera',
    featured: {
      label: 'Proper acte destacat',
      day: '21',
      month: 'nov',
      title: '5è Combat de Glosa de Tortellà',
      place: 'La sala gran · 16:30',
    },
  },

  // Agenda demo
  agendaSection: {
    title: 'La cartellera, tal com és',
    text: "Els actes reals del web, de novembre de 2026. Filtra per categoria o per espai, com a la pàgina d'agenda.",
  },
  agenda: {
    categoryLabel: 'Categoria',
    spaceLabel: 'Espai',
    categories: { all: 'Totes', cinema: 'Cinema', popular: 'Cultura popular' },
    spaces: { all: 'Tots', galliner: 'El Galliner', sala: 'La sala gran' },
    months: { aug: 'ago', sep: 'set', oct: 'oct', nov: 'nov' },
    free: 'Gratuït',
    countOne: 'acte',
    countMany: 'actes',
    upcoming: 'Ara i els propers mesos',
    past: 'Ja ho hem fet',
    empty: 'Cap acte amb aquests filtres.',
    titles: {
      cinema: 'Mostra de Cinema Espiritual de Catalunya',
      glosa: '5è Combat de Glosa de Tortellà',
      castanyada: 'Festa de la Castanyada',
      cursa: '1a Cursa Antiracista de la Garrotxa',
      urban: 'Tortellà Urban Fest 2026',
      sardinada: 'Sardinada 2026',
    },
  },

  // Design rules
  rules: {
    title: 'Les regles del disseny',
    text: "La identitat surt del logotip i del web anterior: el turquesa del triangle, el carbó, Roboto Slab per als títols. No s'inventen colors. El que va canviar és com es fan servir.",
    items: [
      { title: 'El programa mana', text: "La portada s'obre amb el proper acte sobre un bloc turquesa ple i, just a sota, la cartellera. La identitat de l'entitat va després." },
      { title: 'Fila, no targeta', text: "Un llistat d'actes és una llista amb filets i la data en gran. Les targetes només per als actes relacionats." },
      { title: 'Cantonades vives', text: "Botons, distintius, targetes i camps són rectangles. Només els botons d'icona rodons es queden rodons." },
      { title: 'Contrast calculat', text: "Tot el text arriba a AA. Sobre fotografia, un vel opac calculat contra la zona més clara de la imatge, no a ull." },
      { title: 'Mòbil primer, de debò', text: "La majoria hi entra amb el telèfon, des d'un enllaç compartit al poble. Sense prefix és el mòbil; l'escriptori hi afegeix coses." },
      { title: 'Lleuger i privat', text: "Tipografies autoallotjades, res de Google Fonts. Les fotos es serveixen en WebP: un 32% menys de pes que el JPEG d'abans." },
    ],
  },

  // How it is made
  how: {
    title: 'Com està fet',
    /** Text before and after `<code>Casino.Web</code>`. */
    p1Before: 'Tot el codi propi viu en un plugin,',
    p1After:
      ": models, backend, components i migracions. El tema només té plantilles. Al backend hi ha agents d'IA per ajudar a qui hi escriu, i un plugin de còpies per migrar de servidor sense patir.",
    p2: "El projecte és en català de cap a peus: textos, backend, documentació i commits. Si algun dia es tradueix, les claus de traducció també seran en català.",
    stackTitle: 'Tecnologia',
  },

  // Closing banner
  cta: {
    title: 'Mira què passa al Casino.',
  },
};

export type CasinoText = typeof ca;

const es: CasinoText = {
  meta: {
    title: 'Casino de Tortellà — nueva web de la entidad · Gerard Fortea',
    description:
      'Web del Casino de Tortellà (la Garrotxa, desde 1869): agenda de actos, espacios y formularios para hacerse socio. October CMS sobre Laravel. La web está en catalán.',
    ldName: 'Web del Casino de Tortellà',
    ldDescription: 'Web de la Societat Cultural i Recreativa Casino de Tortellà: agenda de actos, espacios y formularios.',
  },

  header: {
    backHome: '← Gerard Fortea',
    visit: 'Visitar la web',
  },

  hero: {
    kicker: 'Societat Cultural i Recreativa · Tortellà, la Garrotxa · desde 1869',
    title: 'Una cartelera para un casino de pueblo de 1869.',
    intro:
      'La nueva web del Casino de Tortellà: agenda de actos, los espacios del edificio, las actividades de cada semana y los formularios de contacto y para hacerse socio. Pensada para que quien entra sepa enseguida qué pasa en el Casino. La web está en catalán.',
    ctaVisit: 'Visitar la nueva web',
    ctaAgenda: 'Probar la cartelera',
    featured: {
      label: 'Próximo acto destacado',
      day: '21',
      month: 'nov',
      title: '5.º Combat de Glosa de Tortellà',
      place: 'La sala gran · 16:30',
    },
  },

  agendaSection: {
    title: 'La cartelera, tal como es',
    text: 'Los actos reales de la web, de noviembre de 2026. Filtra por categoría o por espacio, como en la página de agenda.',
  },
  agenda: {
    categoryLabel: 'Categoría',
    spaceLabel: 'Espacio',
    categories: { all: 'Todas', cinema: 'Cine', popular: 'Cultura popular' },
    spaces: { all: 'Todos', galliner: 'El Galliner', sala: 'La sala gran' },
    months: { aug: 'ago', sep: 'sep', oct: 'oct', nov: 'nov' },
    free: 'Gratis',
    countOne: 'acto',
    countMany: 'actos',
    upcoming: 'Ahora y los próximos meses',
    past: 'Ya lo hemos hecho',
    empty: 'Ningún acto con estos filtros.',
    titles: {
      cinema: 'Mostra de Cinema Espiritual de Catalunya',
      glosa: '5.º Combat de Glosa de Tortellà',
      castanyada: 'Festa de la Castanyada',
      cursa: '1a Cursa Antiracista de la Garrotxa',
      urban: 'Tortellà Urban Fest 2026',
      sardinada: 'Sardinada 2026',
    },
  },

  rules: {
    title: 'Las reglas del diseño',
    text: 'La identidad sale del logotipo y de la web anterior: el turquesa del triángulo, el carbón, Roboto Slab para los títulos. No se inventan colores. Lo que cambió es cómo se usan.',
    items: [
      { title: 'El programa manda', text: 'La portada se abre con el próximo acto sobre un bloque turquesa liso y, justo debajo, la cartelera. La identidad de la entidad va después.' },
      { title: 'Fila, no tarjeta', text: 'Un listado de actos es una lista con filetes y la fecha en grande. Las tarjetas, solo para los actos relacionados.' },
      { title: 'Esquinas vivas', text: 'Botones, distintivos, tarjetas y campos son rectángulos. Solo los botones de icono redondos se quedan redondos.' },
      { title: 'Contraste calculado', text: 'Todo el texto llega a AA. Sobre fotografía, un velo opaco calculado contra la zona más clara de la imagen, no a ojo.' },
      { title: 'Móvil primero, de verdad', text: 'La mayoría entra con el teléfono, desde un enlace compartido en el pueblo. Sin prefijo es el móvil; el escritorio añade cosas.' },
      { title: 'Ligero y privado', text: 'Tipografías autoalojadas, nada de Google Fonts. Las fotos se sirven en WebP: un 32 % menos de peso que el JPEG de antes.' },
    ],
  },

  how: {
    title: 'Cómo está hecho',
    p1Before: 'Todo el código propio vive en un plugin,',
    p1After:
      ': modelos, backend, componentes y migraciones. El tema solo tiene plantillas. En el backend hay agentes de IA para ayudar a quien escribe, y un plugin de copias para cambiar de servidor sin sufrir.',
    p2: 'El proyecto está en catalán de arriba abajo: textos, backend, documentación y commits. Si algún día se traduce, las claves de traducción también serán en catalán.',
    stackTitle: 'Tecnología',
  },

  cta: {
    title: 'Mira qué pasa en el Casino.',
  },
};

const en: CasinoText = {
  meta: {
    title: 'Casino de Tortellà — new website for the association · Gerard Fortea',
    description:
      'Website of the Casino de Tortellà (la Garrotxa, since 1869): event agenda, rooms and membership forms. October CMS on Laravel. The site is in Catalan.',
    ldName: 'Website of the Casino de Tortellà',
    ldDescription: 'Website of the Societat Cultural i Recreativa Casino de Tortellà: event agenda, rooms and forms.',
  },

  header: {
    backHome: '← Gerard Fortea',
    visit: 'Visit the site',
  },

  hero: {
    kicker: 'Societat Cultural i Recreativa · Tortellà, la Garrotxa · since 1869',
    title: "What's on at a village casino from 1869.",
    intro:
      "The new Casino de Tortellà website: event agenda, the rooms of the building, each week's activities and the contact and membership forms. Built so that anyone who lands on it knows right away what's on at the Casino. The site is in Catalan.",
    ctaVisit: 'Visit the new site',
    ctaAgenda: 'Try the listings',
    featured: {
      label: 'Next featured event',
      day: '21',
      month: 'Nov',
      title: '5th Combat de Glosa de Tortellà',
      place: 'La sala gran · 16:30',
    },
  },

  agendaSection: {
    title: 'The listings, as they are',
    text: 'The real events from the site, November 2026. Filter by category or room, as on the agenda page.',
  },
  agenda: {
    categoryLabel: 'Category',
    spaceLabel: 'Room',
    categories: { all: 'All', cinema: 'Cinema', popular: 'Popular culture' },
    spaces: { all: 'All', galliner: 'El Galliner', sala: 'La sala gran' },
    months: { aug: 'Aug', sep: 'Sep', oct: 'Oct', nov: 'Nov' },
    free: 'Free',
    countOne: 'event',
    countMany: 'events',
    upcoming: 'Now and the coming months',
    past: 'Already done',
    empty: 'No events with these filters.',
    titles: {
      cinema: 'Mostra de Cinema Espiritual de Catalunya',
      glosa: '5th Combat de Glosa de Tortellà',
      castanyada: 'Festa de la Castanyada',
      cursa: '1a Cursa Antiracista de la Garrotxa',
      urban: 'Tortellà Urban Fest 2026',
      sardinada: 'Sardinada 2026',
    },
  },

  rules: {
    title: 'The design rules',
    text: "The identity comes from the logo and the previous site: the turquoise of the triangle, charcoal, Roboto Slab for headings. No colors are invented. What changed is how they're used.",
    items: [
      { title: 'The program comes first', text: 'The home page opens with the next event on a solid turquoise block and, right below it, the listings. The identity of the association comes after.' },
      { title: 'Rows, not cards', text: 'A list of events is a list with rules and the date in large type. Cards only for related events.' },
      { title: 'Sharp corners', text: 'Buttons, badges, cards and fields are rectangles. Only round icon buttons stay round.' },
      { title: 'Calculated contrast', text: 'All text reaches AA. Over a photo, an opaque overlay calculated against the lightest area of the image, not by eye.' },
      { title: 'Mobile first, for real', text: 'Most people arrive on a phone, from a link shared in the village. With no prefix it is the phone; the desktop adds things.' },
      { title: 'Light and private', text: 'Self-hosted fonts, no Google Fonts. Photos are served as WebP: 32% smaller than the old JPEG.' },
    ],
  },

  how: {
    title: 'How it is built',
    p1Before: 'All the custom code lives in one plugin,',
    p1After:
      ': models, backend, components and migrations. The theme only has templates. The backend has AI agents to help whoever writes in it, and a backup plugin to move servers without worry.',
    p2: 'The project is in Catalan from top to bottom: texts, backend, documentation and commits. If it is ever translated, the translation keys will be in Catalan too.',
    stackTitle: 'Technology',
  },

  cta: {
    title: "See what's on at the Casino.",
  },
};

export const casino: Record<Lang, CasinoText> = { ca, es, en };
