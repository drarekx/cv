/**
 * /combat-glosa texts (src/views/CombatGlosa.astro, GlosaHero.vue, DinarDemo.vue), in page order.
 * The sample glosa verses are Catalan content and are not translated; the web itself is in Catalan.
 */
import type { Lang } from '../index';

const ca = {
  // <head>
  meta: {
    title: 'Combat de Glosa i Corrandes de Tortellà · Gerard Fortea',
    description:
      'Web del Combat de Glosa i Corrandes de Tortellà: programa, reserves del dinar, inscripció de glosadors i un panell per gestionar-ho tot.',
    ldName: 'Web del Combat de Glosa i Corrandes de Tortellà',
    ldDescription: 'Landing i panell de gestió del Combat de Glosa de Tortellà.',
  },

  // Hero (GlosaHero.vue)
  hero: {
    backHome: '← Gerard Fortea',
    eventName: '5è Combat de Glosa de Tortellà',
    visit: 'Visita la web',
    kicker: 'Landing i panell de gestió',
    title: 'Combat de Glosa i Corrandes de Tortellà',
    when: '21 de novembre · 16:30h · Casino de Tortellà',
    countdownLabel: 'Compte enrere fins al Combat',
    units: { days: 'dies', hours: 'h', minutes: 'min', seconds: 'seg' },
    done: "Ja s'ha fet. Fins a l'any que ve!",
    intro:
      "La web de l'acte: programa, dinar popular amb reserves, inscripció de glosadors, vídeos de les edicions anteriors i un panell perquè l'organització ho canviï tot sense tocar codi.",
    tryPanel: 'Prova el panell.',
    tryPanelRest: 'Cada edició fa servir els colors del seu cartell: es trien al',
    tryPanelEnd: 'i la web es repinta sola.',
    paletteLabel: 'Paleta',
    backgroundLabel: 'Fons',
    palettes: { '2026': 'Cartell 2026', blue: 'Exemple: blau i taronja', yellow: 'Exemple: groc i negre' },
    patterns: { 'stripes-v': 'Ratlles verticals', 'stripes-h': 'Ratlles horitzontals', flat: 'Color pla' },
  },

  // Glosa and corrandes + programme
  about: {
    title: 'Glosa i corrandes',
    text: "La glosa —o corrandes— és cant improvisat amb rima. Els participants s'enfronten en vers i es responen sobre la marxa, davant del públic i sense guió. La web ha de fer el mateix que l'acte: anar per feina i deixar lloc a la festa.",
    program: [
      { hora: '12h', titol: 'Debat', text: 'Els combats de glosa a Catalunya. Jurat i regles del joc.' },
      { hora: '14h', titol: 'Dinar popular', text: 'Arròs de muntanya, 15€.' },
      { hora: '16:30h', titol: '5è Combat de Glosa', text: 'I després… glosada popular?' },
    ],
  },

  // Lunch demo (DinarDemo.vue)
  dinar: {
    title: 'Dinar popular',
    menu: 'Arròs amb verdures i bolets · hamburguesa vegetal o botifarra',
    adults: { label: 'adults', howMany: 'Quants adults', less: 'Un adult menys', more: 'Un adult més' },
    children: { label: 'infants', howMany: 'Quants infants', less: 'Un infant menys', more: 'Un infant més' },
    total: 'Total',
    note: 'Això és una mostra. Les reserves de debò es fan a la web, i reben un correu de confirmació.',
  },

  // Forms
  forms: {
    title: 'Tres formularis, un panell',
    text: "Tots tres es desen a la base de dades, es gestionen des del panell amb estats i exportació a CSV, i cadascun s'obre i es tanca per separat. El butlletí fa al revés que els altres: recull correus mentre la web encara no és pública.",
    tableLabel: 'Taula de formularis',
    head: ['Formulari', 'On surt', 'Què demana', 'Correu de confirmació'],
    rows: [
      { name: 'Reserves del dinar', where: 'a la portada', asks: 'nom, correu, adults i infants', mail: 'sí' },
      { name: 'Inscripció de glosadors', where: 'pàgina pròpia, /inscripcio', asks: "nou preguntes, les del formulari de Google d'abans", mail: 'sí' },
      { name: 'Butlletí', where: 'pàgina de compte enrere', asks: 'només el correu', mail: 'no' },
    ],
  },

  // How it is made
  how: {
    title: 'Com està fet',
    details: [
      { title: 'Un sol procés', text: 'Nuxt 4 amb SSR, backend a Nitro i SQLite amb Drizzle. Un sol desplegament, i una còpia de seguretat és copiar una carpeta.' },
      { title: 'Afegir al calendari', text: "Un fitxer .ics generat al servidor amb la data i el lloc de l'edició, a un clic des del compte enrere." },
      { title: "Formularis que no s'omplen de brossa", text: 'Limitador per IP: 8 enviaments cada 10 minuts per formulari. Apuntar-se dos cops al butlletí no revela si el correu ja hi era.' },
      { title: 'El correu, des del panell', text: 'Confirmacions per correu configurables a /admin, amb la contrasenya desada xifrada (AES-256-GCM) i un botó per enviar una prova.' },
      { title: 'Vídeos sense rastreig', text: "Els vídeos de les edicions anteriors no es carreguen fins que prems play: abans, YouTube no sap que hi has entrat." },
      { title: 'Accessibilitat i velocitat, mesurades', text: "Scripts propis per passar l'auditoria d'accessibilitat i PageSpeed abans de cada publicació." },
    ],
  },

  // Closing banner
  cta: {
    title: 'Glosadores del món, uniu-vos!',
    link: 'Visita la web →',
  },
};

export type GlosaText = typeof ca;

const es: GlosaText = {
  meta: {
    title: 'Combat de Glosa i Corrandes de Tortellà · Gerard Fortea',
    description:
      'Web del Combat de Glosa i Corrandes de Tortellà: programa, reservas de la comida, inscripción de glosadores y un panel para gestionarlo todo. La web está en catalán.',
    ldName: 'Web del Combat de Glosa i Corrandes de Tortellà',
    ldDescription: 'Página de presentación y panel de gestión del Combat de Glosa de Tortellà.',
  },

  hero: {
    backHome: '← Gerard Fortea',
    eventName: '5.º Combat de Glosa de Tortellà',
    visit: 'Visitar la web',
    kicker: 'Página de presentación y panel de gestión',
    title: 'Combat de Glosa i Corrandes de Tortellà',
    when: '21 de noviembre · 16:30 h · Casino de Tortellà',
    countdownLabel: 'Cuenta atrás hasta el Combat',
    units: { days: 'días', hours: 'h', minutes: 'min', seconds: 'seg' },
    done: 'Ya se ha celebrado. ¡Hasta el año que viene!',
    intro:
      'La web del acto: programa, comida popular con reservas, inscripción de glosadores, vídeos de las ediciones anteriores y un panel para que la organización lo cambie todo sin tocar código.',
    tryPanel: 'Prueba el panel.',
    tryPanelRest: 'Cada edición usa los colores de su cartel: se eligen en',
    tryPanelEnd: 'y la web se repinta sola.',
    paletteLabel: 'Paleta',
    backgroundLabel: 'Fondo',
    palettes: { '2026': 'Cartel 2026', blue: 'Ejemplo: azul y naranja', yellow: 'Ejemplo: amarillo y negro' },
    patterns: { 'stripes-v': 'Rayas verticales', 'stripes-h': 'Rayas horizontales', flat: 'Color liso' },
  },

  about: {
    title: 'Glosa y corrandes',
    text: 'La glosa —o corrandes— es canto improvisado con rima. Los participantes se enfrentan en verso y se responden sobre la marcha, delante del público y sin guion. La web tiene que hacer lo mismo que el acto: ir al grano y dejar sitio a la fiesta.',
    program: [
      { hora: '12h', titol: 'Debate', text: 'Los combates de glosa en Cataluña. Jurado y reglas del juego.' },
      { hora: '14h', titol: 'Comida popular', text: 'Arroz de montaña, 15 €.' },
      { hora: '16:30h', titol: '5.º Combat de Glosa', text: 'Y después… ¿glosada popular?' },
    ],
  },

  dinar: {
    title: 'Comida popular',
    menu: 'Arroz con verduras y setas · hamburguesa vegetal o butifarra',
    adults: { label: 'adultos', howMany: 'Cuántos adultos', less: 'Un adulto menos', more: 'Un adulto más' },
    children: { label: 'niños', howMany: 'Cuántos niños', less: 'Un niño menos', more: 'Un niño más' },
    total: 'Total',
    note: 'Esto es una muestra. Las reservas de verdad se hacen en la web y reciben un correo de confirmación.',
  },

  forms: {
    title: 'Tres formularios, un panel',
    text: 'Los tres se guardan en la base de datos, se gestionan desde el panel con estados y exportación a CSV, y cada uno se abre y se cierra por separado. El boletín funciona al revés que los demás: recoge correos mientras la web aún no es pública.',
    tableLabel: 'Tabla de formularios',
    head: ['Formulario', 'Dónde aparece', 'Qué pide', 'Correo de confirmación'],
    rows: [
      { name: 'Reservas de la comida', where: 'en la portada', asks: 'nombre, correo, adultos y niños', mail: 'sí' },
      { name: 'Inscripción de glosadores', where: 'página propia, /inscripcio', asks: 'nueve preguntas, las del formulario de Google de antes', mail: 'sí' },
      { name: 'Boletín', where: 'página de cuenta atrás', asks: 'solo el correo', mail: 'no' },
    ],
  },

  how: {
    title: 'Cómo está hecho',
    details: [
      { title: 'Un solo proceso', text: 'Nuxt 4 con SSR, backend en Nitro y SQLite con Drizzle. Un solo despliegue, y una copia de seguridad es copiar una carpeta.' },
      { title: 'Añadir al calendario', text: 'Un archivo .ics generado en el servidor con la fecha y el lugar de la edición, a un clic desde la cuenta atrás.' },
      { title: 'Formularios que no se llenan de basura', text: 'Limitador por IP: 8 envíos cada 10 minutos por formulario. Apuntarse dos veces al boletín no revela si el correo ya estaba.' },
      { title: 'El correo, desde el panel', text: 'Confirmaciones por correo configurables en /admin, con la contraseña guardada cifrada (AES-256-GCM) y un botón para enviar una prueba.' },
      { title: 'Vídeos sin rastreo', text: 'Los vídeos de las ediciones anteriores no se cargan hasta que pulsas play: antes, YouTube no sabe que has entrado.' },
      { title: 'Accesibilidad y velocidad, medidas', text: 'Scripts propios para pasar la auditoría de accesibilidad y PageSpeed antes de cada publicación.' },
    ],
  },

  cta: {
    title: '¡Glosadores del mundo, uníos!',
    link: 'Visitar la web →',
  },
};

const en: GlosaText = {
  meta: {
    title: 'Combat de Glosa i Corrandes de Tortellà · Gerard Fortea',
    description:
      'Website of the Combat de Glosa i Corrandes de Tortellà: schedule, lunch bookings, signup for glosa singers and an admin panel to manage it all. The site is in Catalan.',
    ldName: 'Website of the Combat de Glosa i Corrandes de Tortellà',
    ldDescription: 'Landing page and admin panel for the Combat de Glosa in Tortellà.',
  },

  hero: {
    backHome: '← Gerard Fortea',
    eventName: '5th Combat de Glosa de Tortellà',
    visit: 'Visit the site',
    kicker: 'Landing page and admin panel',
    title: 'Combat de Glosa i Corrandes de Tortellà',
    when: 'November 21 · 4:30 pm · Casino de Tortellà',
    countdownLabel: 'Countdown to the Combat',
    units: { days: 'days', hours: 'h', minutes: 'min', seconds: 'sec' },
    done: "It's over. See you next year!",
    intro:
      'The event website: schedule, community lunch with bookings, signup for glosa singers, videos from past editions and a panel so the organizers can change everything without touching code.',
    tryPanel: 'Try the panel.',
    tryPanelRest: "Each edition uses the colors of its poster: they're chosen at",
    tryPanelEnd: 'and the site repaints itself.',
    paletteLabel: 'Palette',
    backgroundLabel: 'Background',
    palettes: { '2026': '2026 poster', blue: 'Example: blue and orange', yellow: 'Example: yellow and black' },
    patterns: { 'stripes-v': 'Vertical stripes', 'stripes-h': 'Horizontal stripes', flat: 'Flat color' },
  },

  about: {
    title: 'Glosa and corrandes',
    text: 'Glosa, or corrandes, is improvised rhyming song. Participants face off in verse and answer each other on the spot, in front of an audience and without a script. The website has to do what the event does: get to the point and leave room for the party.',
    program: [
      { hora: '12h', titol: 'Debate', text: 'Glosa contests in Catalonia. Jury and rules of the game.' },
      { hora: '14h', titol: 'Community lunch', text: 'Mountain rice, €15.' },
      { hora: '16:30h', titol: '5th Combat de Glosa', text: 'And afterwards… an open glosa session?' },
    ],
  },

  dinar: {
    title: 'Community lunch',
    menu: 'Rice with vegetables and mushrooms · veggie burger or botifarra sausage',
    adults: { label: 'adults', howMany: 'How many adults', less: 'One adult less', more: 'One adult more' },
    children: { label: 'children', howMany: 'How many children', less: 'One child less', more: 'One child more' },
    total: 'Total',
    note: 'This is a sample. Real bookings are made on the site, and they get a confirmation email.',
  },

  forms: {
    title: 'Three forms, one panel',
    text: 'All three are saved in the database, managed from the panel with statuses and CSV export, and each one opens and closes separately. The newsletter works the other way round: it collects emails while the site is not public yet.',
    tableLabel: 'Forms table',
    head: ['Form', 'Where it appears', 'What it asks', 'Confirmation email'],
    rows: [
      { name: 'Lunch bookings', where: 'on the home page', asks: 'name, email, adults and children', mail: 'yes' },
      { name: 'Glosa singer signup', where: 'own page, /inscripcio', asks: 'nine questions, the ones from the old Google form', mail: 'yes' },
      { name: 'Newsletter', where: 'countdown page', asks: 'just the email', mail: 'no' },
    ],
  },

  how: {
    title: 'How it is built',
    details: [
      { title: 'A single process', text: 'Nuxt 4 with SSR, Nitro backend and SQLite with Drizzle. One deployment, and a backup is just copying a folder.' },
      { title: 'Add to calendar', text: "An .ics file generated on the server with the edition's date and place, one click from the countdown." },
      { title: "Forms that don't fill up with junk", text: "Per-IP rate limit: 8 submissions every 10 minutes per form. Signing up to the newsletter twice doesn't reveal whether the email was already there." },
      { title: 'Email, from the panel', text: 'Email confirmations configurable at /admin, with the password stored encrypted (AES-256-GCM) and a button to send a test.' },
      { title: 'Videos without tracking', text: "Videos from past editions don't load until you press play: until then, YouTube doesn't know you visited." },
      { title: 'Accessibility and speed, measured', text: 'Own scripts to run the accessibility and PageSpeed audits before every release.' },
    ],
  },

  cta: {
    title: 'Glosa singers of the world, unite!',
    link: 'Visit the site →',
  },
};

export const glosa: Record<Lang, GlosaText> = { ca, es, en };
