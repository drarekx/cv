/**
 * /wallpy texts (src/views/Wallpy.astro and the islands in src/components/wallpy), in page order.
 * Islands receive their section as props (`t.hero`, `t.loop`, `t.schedule`); they can't import this module.
 * The Catalan object is the reference; `es` and `en` must have the same keys.
 */
import type { Lang } from '../index';

const ca = {
  meta: {
    title: 'Wallpy — fons de pantalla amb vídeo per a macOS · Gerard Fortea',
    description:
      'Fons de pantalla amb vídeo per al Mac: un bucle darrere les finestres que es posa en pausa quan no el mires. Biblioteca i editor de bucles.',
  },

  // Hero (island) and its header
  hero: {
    back: '← Gerard Fortea',
    paused: '❙❙ fons en pausa',
    h1Start: 'Wallpy: el teu escriptori,',
    h1Accent: 'en moviment.',
    text: 'Fons de pantalla amb vídeo per a macOS. Viu a la barra de menús, posa un vídeo en bucle darrere les teves finestres i es posa en pausa tot sol quan no el veus.',
    install: "Instal·la'l",
    maximize: 'Maximitza la finestra',
    unmaximize: 'Torna a deixar veure el fons',
    tryIt: "Prova-ho: quan una finestra tapa l'escriptori, Wallpy atura el vídeo per no gastar bateria.",
    momentLabel: 'Moment del dia',
    moments: { auto: 'Automàtic', dawn: 'Matinada', morning: 'Matí', afternoon: 'Tarda', night: 'Nit' },
    momentHint: "Canvia el moment del dia: el fons canvia amb una fosa, com a l'app.",
    days: ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
    /** Month with its preposition, for the long date. */
    monthsOf: ['de gener', 'de febrer', 'de març', "d'abril", 'de maig', 'de juny', 'de juliol', "d'agost", 'de setembre', "d'octubre", 'de novembre', 'de desembre'],
    daysShort: ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
    monthsShort: ['gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'],
    /** Placeholders: {day} {date} {month} {time}. */
    dateLong: '{day}, {date} {month}',
    dateMenu: '{day} {date} {month} {time}',
  },

  features: {
    title: "Tot el que cal per tenir un fons viu, sense sortir de l'app.",
    items: [
      { title: 'Biblioteca', text: 'Arrossega-hi vídeos (MP4, MOV, M4V) o imatges (JPG, PNG, HEIC, WebP, TIFF). Els GIF es converteixen sols en vídeo en bucle.' },
      { title: 'Descàrrega de YouTube', text: "Tria la qualitat (1080p, 1440p, 4K), mira títol i durada abans de baixar i queda't només amb un tros dels vídeos llargs." },
      { title: 'Un vídeo per pantalla', text: 'Fons a totes les pantalles i a tots els Spaces, amb un vídeo diferent a cadascuna si vols.' },
      { title: 'Hora i data sobre el fons', text: "Posició, mida, lletra, color i format per pantalla. Es redibuixa un cop per minut i s'atura amb les pantalles apagades." },
      { title: "Estalvi d'energia", text: "Pausa quan les finestres tapen l'escriptori, amb bateria o bateria baixa, i quan s'apaguen les pantalles." },
      { title: 'Originals i idiomes', text: "Desa els vídeos llargs per treure'n més fons un altre dia. En català, castellà i anglès." },
    ],
  },

  // Loop editor section
  loopSection: {
    kicker: 'Editor de bucles',
    title: 'Talla el tram que vols i que no es noti el salt.',
    text: "Monitor gran, línia de temps amb miniatures i zoom, marques d'entrada i sortida, diversos trams per vídeo i exportació en cua. Amb fosa del bucle i HEVC per hardware.",
    hint: "Marca l'entrada i la sortida aquí al costat amb les mateixes tecles de l'app.",
  },
  loop: {
    label: "Editor de bucles. Tecles: Espai reprodueix o atura, I marca l'entrada, O marca la sortida.",
    in: 'entrada',
    head: 'cap',
    out: 'sortida',
    pause: 'Espai · pausa',
    play: 'Espai · reprodueix',
    markIn: 'I · entrada',
    markOut: 'O · sortida',
    whole: 'Tot el vídeo',
  },

  // Schedule grid section
  scheduleSection: {
    kicker: 'Programació per moments del dia',
    title: 'Una graella pantalles × moments. Tries què es veu a cada casella.',
    hint: 'La columna marcada segueix el moment que has triat a dalt. Les hores de cada moment són ajustables.',
  },
  schedule: {
    label: 'Graella de programació',
    screen: 'Pantalla',
    always: 'Sempre',
    dawn: 'Matinada',
    morning: 'Matí',
    afternoon: 'Tarda',
    night: 'Nit',
    /** Row names: {n} is the screen number. */
    screenN: 'Pantalla {n}',
    /** Names of the demo wallpapers, by row then column (always, dawn, morning, afternoon, night). */
    cells: [
      ['—', 'Boira al bosc', 'Costa al matí', 'Camp de blat', 'Ciutat de nit'],
      ['Onades', '—', '—', '—', 'Foc a terra'],
    ],
  },

  // Install section
  install: {
    title: 'Una línia a Terminal i ja el tens.',
    /** {yt} and {ff} are replaced by the <code> elements for yt-dlp and ffmpeg. */
    text: "L'instal·lador baixa l'última versió, la copia a Aplicacions i l'obre. Amb Homebrew també instal·la {yt} i {ff}. S'actualitza sola i comprova cada descàrrega amb el seu SHA-256.",
    os: 'macOS 14 Sonoma o posterior',
    arch: 'Apple Silicon o Intel',
    legal: "Baixa només vídeos teus, amb llicència lliure o amb permís de l'autor.",
  },
};

export type WallpyText = typeof ca;

const es: WallpyText = {
  meta: {
    title: 'Wallpy — fondo de pantalla con vídeo para macOS · Gerard Fortea',
    description:
      'Fondo de pantalla con vídeo para el Mac: un bucle detrás de las ventanas que se pausa cuando no lo miras. Biblioteca y editor de bucles.',
  },

  hero: {
    back: '← Gerard Fortea',
    paused: '❙❙ fondo en pausa',
    h1Start: 'Wallpy: tu escritorio,',
    h1Accent: 'en movimiento.',
    text: 'Fondo de pantalla con vídeo para macOS. Vive en la barra de menús, pone un vídeo en bucle detrás de tus ventanas y se pausa solo cuando no lo ves.',
    install: 'Instálalo',
    maximize: 'Maximizar la ventana',
    unmaximize: 'Volver a dejar ver el fondo',
    tryIt: 'Pruébalo: cuando una ventana tapa el escritorio, Wallpy detiene el vídeo para no gastar batería.',
    momentLabel: 'Momento del día',
    moments: { auto: 'Automático', dawn: 'Madrugada', morning: 'Mañana', afternoon: 'Tarde', night: 'Noche' },
    momentHint: 'Cambia el momento del día: el fondo cambia con un fundido, como en la app.',
    days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    monthsOf: ['de enero', 'de febrero', 'de marzo', 'de abril', 'de mayo', 'de junio', 'de julio', 'de agosto', 'de septiembre', 'de octubre', 'de noviembre', 'de diciembre'],
    daysShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    dateLong: '{day}, {date} {month}',
    dateMenu: '{day} {date} {month} {time}',
  },

  features: {
    title: 'Todo lo necesario para tener un fondo vivo, sin salir de la app.',
    items: [
      { title: 'Biblioteca', text: 'Arrastra vídeos (MP4, MOV, M4V) o imágenes (JPG, PNG, HEIC, WebP, TIFF). Los GIF se convierten solos en vídeo en bucle.' },
      { title: 'Descarga de YouTube', text: 'Elige la calidad (1080p, 1440p, 4K), mira título y duración antes de bajar y quédate solo con un trozo de los vídeos largos.' },
      { title: 'Un vídeo por pantalla', text: 'Fondo en todas las pantallas y en todos los Spaces, con un vídeo distinto en cada una si quieres.' },
      { title: 'Hora y fecha sobre el fondo', text: 'Posición, tamaño, fuente, color y formato por pantalla. Se redibuja una vez por minuto y se detiene con las pantallas apagadas.' },
      { title: 'Ahorro de energía', text: 'Pausa cuando las ventanas tapan el escritorio, con batería o batería baja, y cuando se apagan las pantallas.' },
      { title: 'Originales e idiomas', text: 'Guarda los vídeos largos para sacar más fondos otro día. En catalán, castellano e inglés.' },
    ],
  },

  loopSection: {
    kicker: 'Editor de bucles',
    title: 'Corta el tramo que quieres y que no se note el salto.',
    text: 'Monitor grande, línea de tiempo con miniaturas y zoom, marcas de entrada y salida, varios tramos por vídeo y exportación en cola. Con fundido del bucle y HEVC por hardware.',
    hint: 'Marca la entrada y la salida aquí al lado con las mismas teclas de la app.',
  },
  loop: {
    label: 'Editor de bucles. Teclas: Espacio reproduce o detiene, I marca la entrada, O marca la salida.',
    in: 'entrada',
    head: 'cabezal',
    out: 'salida',
    pause: 'Espacio · pausa',
    play: 'Espacio · reproducir',
    markIn: 'I · entrada',
    markOut: 'O · salida',
    whole: 'Todo el vídeo',
  },

  scheduleSection: {
    kicker: 'Programación por momentos del día',
    title: 'Una cuadrícula pantallas × momentos. Eliges qué se ve en cada casilla.',
    hint: 'La columna marcada sigue el momento que has elegido arriba. Las horas de cada momento se pueden ajustar.',
  },
  schedule: {
    label: 'Cuadrícula de programación',
    screen: 'Pantalla',
    always: 'Siempre',
    dawn: 'Madrugada',
    morning: 'Mañana',
    afternoon: 'Tarde',
    night: 'Noche',
    screenN: 'Pantalla {n}',
    cells: [
      ['—', 'Niebla en el bosque', 'Costa por la mañana', 'Campo de trigo', 'Ciudad de noche'],
      ['Olas', '—', '—', '—', 'Hoguera'],
    ],
  },

  install: {
    title: 'Una línea en Terminal y ya lo tienes.',
    text: 'El instalador descarga la última versión, la copia en Aplicaciones y la abre. Con Homebrew también instala {yt} y {ff}. Se actualiza sola y comprueba cada descarga con su SHA-256.',
    os: 'macOS 14 Sonoma o posterior',
    arch: 'Apple Silicon o Intel',
    legal: 'Descarga solo vídeos tuyos, con licencia libre o con permiso del autor.',
  },
};

const en: WallpyText = {
  meta: {
    title: 'Wallpy — video wallpaper for macOS · Gerard Fortea',
    description:
      'Video wallpaper for the Mac: a loop behind your windows that pauses when you are not looking at it. Library and loop editor.',
  },

  hero: {
    back: '← Gerard Fortea',
    paused: '❙❙ wallpaper paused',
    h1Start: 'Wallpy: your desktop,',
    h1Accent: 'in motion.',
    text: 'Video wallpaper for macOS. It lives in the menu bar, loops a video behind your windows and pauses by itself when you cannot see it.',
    install: 'Install',
    maximize: 'Maximize the window',
    unmaximize: 'Show the wallpaper again',
    tryIt: 'Try it: when a window covers the desktop, Wallpy stops the video to save battery.',
    momentLabel: 'Time of day',
    moments: { auto: 'Automatic', dawn: 'Dawn', morning: 'Morning', afternoon: 'Afternoon', night: 'Night' },
    momentHint: 'Change the time of day: the wallpaper changes with a crossfade, as in the app.',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthsOf: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dateLong: '{day}, {month} {date}',
    dateMenu: '{day} {month} {date} {time}',
  },

  features: {
    title: 'Everything you need for a live wallpaper, without leaving the app.',
    items: [
      { title: 'Library', text: 'Drag in videos (MP4, MOV, M4V) or images (JPG, PNG, HEIC, WebP, TIFF). GIFs turn into looping videos on their own.' },
      { title: 'YouTube download', text: 'Pick the quality (1080p, 1440p, 4K), check the title and length before downloading, and keep just a clip of long videos.' },
      { title: 'One video per display', text: 'Wallpaper on every display and every Space, with a different video on each if you want.' },
      { title: 'Time and date over the wallpaper', text: 'Position, size, font, color and format per display. It redraws once a minute and stops while the displays are off.' },
      { title: 'Energy saving', text: 'Pauses when windows cover the desktop, on battery or low battery, and when the displays turn off.' },
      { title: 'Originals and languages', text: 'Keeps the long videos so you can cut more wallpapers another day. In Catalan, Spanish and English.' },
    ],
  },

  loopSection: {
    kicker: 'Loop editor',
    title: 'Cut the part you want, with no visible jump.',
    text: 'Large monitor, timeline with thumbnails and zoom, in and out marks, several clips per video and queued export. With loop crossfade and hardware HEVC.',
    hint: 'Set the in and out points right here with the same keys as the app.',
  },
  loop: {
    label: 'Loop editor. Keys: Space plays or pauses, I sets the in point, O sets the out point.',
    in: 'in',
    head: 'playhead',
    out: 'out',
    pause: 'Space · pause',
    play: 'Space · play',
    markIn: 'I · in',
    markOut: 'O · out',
    whole: 'Whole video',
  },

  scheduleSection: {
    kicker: 'Scheduling by time of day',
    title: 'A grid of displays × times of day. You choose what shows in each cell.',
    hint: 'The highlighted column follows the time of day you picked above. The hours of each time of day can be adjusted.',
  },
  schedule: {
    label: 'Schedule grid',
    screen: 'Display',
    always: 'Always',
    dawn: 'Dawn',
    morning: 'Morning',
    afternoon: 'Afternoon',
    night: 'Night',
    screenN: 'Display {n}',
    cells: [
      ['—', 'Fog in the forest', 'Coast in the morning', 'Wheat field', 'City at night'],
      ['Waves', '—', '—', '—', 'Campfire'],
    ],
  },

  install: {
    title: 'One line in Terminal and you have it.',
    text: 'The installer downloads the latest version, copies it to Applications and opens it. With Homebrew it also installs {yt} and {ff}. It updates itself and checks every download against its SHA-256.',
    os: 'macOS 14 Sonoma or later',
    arch: 'Apple Silicon or Intel',
    legal: "Download only your own videos, freely licensed ones, or ones with the author's permission.",
  },
};

export const wallpy: Record<Lang, WallpyText> = { ca, es, en };
