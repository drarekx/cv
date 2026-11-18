/**
 * /atajoly texts (src/views/Atajoly.astro and src/components/atajoly/AtajolyDemo.vue), in page order.
 * The demo receives `t.demo` as a prop (islands can't import this module).
 * The Catalan object is the reference; `es` and `en` must have the same keys.
 *
 * `demo.apps` is keyed by neutral ids (not shown). The demo takes each app's letter from the first letter of its
 * name in the page's language, so the keyboard works with the names the reader sees.
 */
import type { Lang } from '../index';

const ca = {
  meta: {
    title: "Atajoly — canvia d'app amb el polze al Mac · Gerard Fortea",
    description:
      "Atajoly: mantén ⌘ dret i prem la inicial d'una app per posar-la al davant. App de barra de menús per a macOS, sense permisos i amb teclat visual.",
  },

  header: {
    back: '← Gerard Fortea',
    install: "Instal·la'l",
  },

  hero: {
    h1Line1: "Atajoly: canvia d'app",
    h1Line2: 'amb el polze.',
    /** {key} is replaced by the bold `key`. */
    text: "Mantén {key} i prem la inicial d'una app: es posa davant. Si ja hi era, s'amaga o passa a la següent amb la mateixa lletra.",
    key: '⌘ dret',
    hint: 'Prova-ho amb el teclat de sota. ⌘ dret ja està premut.',
  },

  // Interactive keyboard (island)
  demo: {
    apps: {
      appstore: 'App Store',
      calendar: 'Calendari',
      calculator: 'Calculadora',
      finder: 'Finder',
      photos: 'Fotos',
      mail: 'Mail',
      maps: 'Mapes',
      music: 'Música',
      notes: 'Notes',
      podcasts: 'Podcasts',
      safari: 'Safari',
      terminal: 'Terminal',
      xcode: 'Xcode',
    },
    /** The key held down, as on the keyboard. */
    heldKey: '⌘ dret',
    inFront: 'al davant',
    empty: 'Escriptori buit · tot amagat',
    openApps: 'Apps obertes',
    keyboard: 'Teclat',
    noApp: 'cap app',
    /** Placeholders: {letter} {app}. */
    log: {
      front: '⌘ dret + {letter} → {app} al davant',
      next: 'Una altra vegada → següent app amb la {letter}: {app}',
      hide: "Una altra vegada → {app} s'amaga",
      needHeld: 'Primer mantén ⌘ dret: sense ell, la {letter} és una lletra normal.',
      noApp: 'Cap app oberta comença per {letter}.',
      held: '⌘ dret premut: tria una lletra.',
      released: '⌘ dret deixat anar.',
    },
    hint: "Tecles blanques: lletres amb una app oberta. A la M n'hi ha tres: prem-la uns quants cops.",
  },

  shortcuts: {
    title: 'Sis dreceres. Res més a aprendre.',
    label: 'Taula de dreceres',
    items: [
      ['⌘ dret + lletra', "Obre l'app que comença per aquella lletra, o la que li hagis assignat."],
      ['Una altra vegada', 'La seva acció: amagar-la, passar a la següent app amb la mateixa lletra, Exposé o següent finestra.'],
      ['⌘ dret + ⇧ esquerre + lletra', "Obre l'app i amaga totes les altres."],
      ['⌘ dret + ⇧ dret + lletra', 'Sempre a la següent app amb aquella lletra.'],
      ['⌘ dret + ⌥ + lletra', "Assigna la lletra a l'app activa. Una altra vegada l'allibera."],
      ['⌘ dret + −', "Amaga l'app activa. Amb ⇧, totes les altres."],
    ],
  },

  features: [
    { title: 'Lletres automàtiques', text: 'Cada app oberta té la lletra del seu nom. Si diverses la comparteixen, la més usada va primer.' },
    { title: 'Assignacions a mà', text: "Una tecla per a una app concreta, encara que no estigui oberta: s'obre en prémer-la." },
    { title: 'Teclat visual', text: "Amb la icona de cada tecla i adaptat a la teva distribució: QWERTY, AZERTY… Des d'allà s'assigna o es desactiva una tecla." },
    { title: 'Mapa de tecles i favorites', text: "En mantenir ⌘ dret surt el mapa en pantalla, amb una fila d'apps favorites a sobre, com un llançador." },
    { title: 'Triar entre diverses apps', text: "Mantén la lletra i surt una llista com la de ⌘⇥: lletra o fletxes per moure't, 1–9 o ↩ per obrir." },
    { title: 'Sense permisos', text: "Canviar d'app no demana res. Només «passar a la següent finestra» demana Accessibilitat. També funciona amb ⌥ dret." },
  ],

  install: {
    title: 'Enganxa això a Terminal.',
    text: "L'instal·lador baixa l'última versió, la copia a Aplicacions i l'obre. S'actualitza sola i comprova cada descàrrega amb el seu SHA-256. Si fas servir rcmd, tanca'l: tots dos usen ⌘ dret.",
    os: 'macOS 14 Sonoma o posterior',
    arch: 'Apple Silicon o Intel',
  },
};

export type AtajolyText = typeof ca;

const es: AtajolyText = {
  meta: {
    title: 'Atajoly — cambia de app con el pulgar en el Mac · Gerard Fortea',
    description:
      'Atajoly: mantén ⌘ derecho y pulsa la inicial de una app para ponerla delante. App de barra de menús para macOS, sin permisos y con teclado visual.',
  },

  header: {
    back: '← Gerard Fortea',
    install: 'Instálalo',
  },

  hero: {
    h1Line1: 'Atajoly: cambia de app',
    h1Line2: 'con el pulgar.',
    text: 'Mantén {key} y pulsa la inicial de una app: se pone delante. Si ya estaba, se oculta o pasa a la siguiente con la misma letra.',
    key: '⌘ derecho',
    hint: 'Pruébalo con el teclado de abajo. ⌘ derecho ya está pulsado.',
  },

  demo: {
    apps: {
      appstore: 'App Store',
      calendar: 'Calendario',
      calculator: 'Calculadora',
      finder: 'Finder',
      photos: 'Fotos',
      mail: 'Mail',
      maps: 'Mapas',
      music: 'Música',
      notes: 'Notas',
      podcasts: 'Podcasts',
      safari: 'Safari',
      terminal: 'Terminal',
      xcode: 'Xcode',
    },
    heldKey: '⌘ derecho',
    inFront: 'delante',
    empty: 'Escritorio vacío · todo oculto',
    openApps: 'Apps abiertas',
    keyboard: 'Teclado',
    noApp: 'ninguna app',
    log: {
      front: '⌘ derecho + {letter} → {app} delante',
      next: 'Otra vez → siguiente app con la {letter}: {app}',
      hide: 'Otra vez → {app} se oculta',
      needHeld: 'Primero mantén ⌘ derecho: sin él, la {letter} es una letra normal.',
      noApp: 'Ninguna app abierta empieza por {letter}.',
      held: '⌘ derecho pulsado: elige una letra.',
      released: '⌘ derecho soltado.',
    },
    hint: 'Teclas blancas: letras con una app abierta. En la M hay tres: púlsala unas cuantas veces.',
  },

  shortcuts: {
    title: 'Seis atajos. Nada más que aprender.',
    label: 'Tabla de atajos',
    items: [
      ['⌘ derecho + letra', 'Abre la app que empieza por esa letra, o la que le hayas asignado.'],
      ['Otra vez', 'Su acción: ocultarla, pasar a la siguiente app con la misma letra, Exposé o siguiente ventana.'],
      ['⌘ derecho + ⇧ izquierdo + letra', 'Abre la app y oculta todas las demás.'],
      ['⌘ derecho + ⇧ derecho + letra', 'Siempre a la siguiente app con esa letra.'],
      ['⌘ derecho + ⌥ + letra', 'Asigna la letra a la app activa. Otra vez, la libera.'],
      ['⌘ derecho + −', 'Oculta la app activa. Con ⇧, todas las demás.'],
    ],
  },

  features: [
    { title: 'Letras automáticas', text: 'Cada app abierta tiene la letra de su nombre. Si varias la comparten, la más usada va primero.' },
    { title: 'Asignaciones a mano', text: 'Una tecla para una app concreta, aunque no esté abierta: se abre al pulsarla.' },
    { title: 'Teclado visual', text: 'Con el icono de cada tecla y adaptado a tu distribución: QWERTY, AZERTY… Desde ahí se asigna o se desactiva una tecla.' },
    { title: 'Mapa de teclas y favoritas', text: 'Al mantener ⌘ derecho aparece el mapa en pantalla, con una fila de apps favoritas encima, como un lanzador.' },
    { title: 'Elegir entre varias apps', text: 'Mantén la letra y aparece una lista como la de ⌘⇥: letra o flechas para moverte, 1–9 o ↩ para abrir.' },
    { title: 'Sin permisos', text: 'Cambiar de app no pide nada. Solo «pasar a la siguiente ventana» pide Accesibilidad. También funciona con ⌥ derecho.' },
  ],

  install: {
    title: 'Pega esto en Terminal.',
    text: 'El instalador descarga la última versión, la copia en Aplicaciones y la abre. Se actualiza sola y comprueba cada descarga con su SHA-256. Si usas rcmd, ciérralo: los dos usan ⌘ derecho.',
    os: 'macOS 14 Sonoma o posterior',
    arch: 'Apple Silicon o Intel',
  },
};

const en: AtajolyText = {
  meta: {
    title: 'Atajoly — switch apps with your thumb on the Mac · Gerard Fortea',
    description:
      "Atajoly: hold right ⌘ and press an app's initial to bring it to the front. Menu bar app for macOS, no permissions needed, with a visual keyboard.",
  },

  header: {
    back: '← Gerard Fortea',
    install: 'Install',
  },

  hero: {
    h1Line1: 'Atajoly: switch apps',
    h1Line2: 'with your thumb.',
    text: "Hold {key} and press an app's initial: it comes to the front. If it was already there, it hides or moves on to the next one with the same letter.",
    key: 'right ⌘',
    hint: 'Try it on the keyboard below. Right ⌘ is already held down.',
  },

  demo: {
    apps: {
      appstore: 'App Store',
      calendar: 'Calendar',
      calculator: 'Calculator',
      finder: 'Finder',
      photos: 'Photos',
      mail: 'Mail',
      maps: 'Maps',
      music: 'Music',
      notes: 'Notes',
      podcasts: 'Podcasts',
      safari: 'Safari',
      terminal: 'Terminal',
      xcode: 'Xcode',
    },
    heldKey: 'right ⌘',
    inFront: 'in front',
    empty: 'Empty desktop · everything hidden',
    openApps: 'Open apps',
    keyboard: 'Keyboard',
    noApp: 'no app',
    log: {
      front: 'right ⌘ + {letter} → {app} in front',
      next: 'Again → next app with {letter}: {app}',
      hide: 'Again → {app} hides',
      needHeld: 'Hold right ⌘ first: without it, {letter} is just a letter.',
      noApp: 'No open app starts with {letter}.',
      held: 'Right ⌘ held: pick a letter.',
      released: 'Right ⌘ released.',
    },
    hint: 'White keys: letters with an open app. M has three: press it a few times.',
  },

  shortcuts: {
    title: 'Six shortcuts. Nothing else to learn.',
    label: 'Shortcuts table',
    items: [
      ['right ⌘ + letter', 'Opens the app that starts with that letter, or the one you assigned to it.'],
      ['Again', 'Its action: hide it, move to the next app with the same letter, Exposé or next window.'],
      ['right ⌘ + left ⇧ + letter', 'Opens the app and hides all the others.'],
      ['right ⌘ + right ⇧ + letter', 'Always goes to the next app with that letter.'],
      ['right ⌘ + ⌥ + letter', 'Assigns the letter to the active app. Again, it frees it.'],
      ['right ⌘ + −', 'Hides the active app. With ⇧, all the others.'],
    ],
  },

  features: [
    { title: 'Automatic letters', text: 'Every open app gets the letter its name starts with. If several share it, the most used goes first.' },
    { title: 'Manual assignments', text: "One key for a specific app, even if it isn't open: pressing it launches it." },
    { title: 'Visual keyboard', text: 'With the icon on each key, adapted to your layout: QWERTY, AZERTY… You assign or disable a key from there.' },
    { title: 'Key map and favorites', text: 'Holding right ⌘ shows the map on screen, with a row of favorite apps above it, like a launcher.' },
    { title: 'Choose between several apps', text: 'Hold the letter and a list appears like the ⌘⇥ one: letter or arrows to move, 1–9 or ↩ to open.' },
    { title: 'No permissions', text: 'Switching apps asks for nothing. Only “move to the next window” asks for Accessibility. It also works with right ⌥.' },
  ],

  install: {
    title: 'Paste this into Terminal.',
    text: 'The installer downloads the latest version, copies it to Applications and opens it. It updates itself and checks every download against its SHA-256. If you use rcmd, quit it: both use right ⌘.',
    os: 'macOS 14 Sonoma or later',
    arch: 'Apple Silicon or Intel',
  },
};

export const atajoly: Record<Lang, AtajolyText> = { ca, es, en };
