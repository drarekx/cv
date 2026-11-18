/**
 * /ledly texts (src/views/Ledly.astro), in page order. Commands and the sample curl call are not translated.
 * `install.title` has an `{os}` placeholder (Mac / Windows).
 */
import type { Lang } from '../index';

const ca = {
  // <head>
  meta: {
    title: 'Ledly — ambilight per al Mac i Windows amb Arduino · Gerard Fortea',
    description:
      'Ledly: una tira de LEDs darrere del monitor que segueix els colors de la pantalla, fa efectes i balla amb la música. Per al Mac i Windows, amb un Arduino Nano i una tira WS2812B.',
  },

  // Header
  header: {
    backHome: '← Gerard Fortea',
    install: 'Instal·la-la',
  },

  // Hero
  hero: {
    title: "La pantalla s'escampa per la paret",
    text: 'Ledly és un ambilight per al Mac i Windows: una tira de LEDs darrere del monitor que agafa els colors de la vora de la pantalla, fa efectes i balla amb la música. Funciona amb un Arduino Nano i una tira WS2812B.',
  },

  // Live demo
  demo: {
    screenLabel: "Pantalla d'exemple amb colors que es mouen",
    modeLabel: 'Mode',
    modes: { screen: 'Pantalla', effect: 'Efecte arc de Sant Martí', music: 'Música', color: 'Color fix' },
  },

  // Features
  features: [
    { title: 'Pantalla', text: "De tota la pantalla o només de la finestra d'una app. Ignora les franges negres de les pel·lícules i suavitza els canvis perquè no parpellegi." },
    { title: 'Efectes', text: "Tots els d'HyperHDR i més: foc, aurora, meteor, serp, Nadal, rellotge… amb velocitat i color." },
    { title: 'Música', text: "Pols, ones, vúmetre i un equalitzador amb 100 combinacions, amb l'àudio de l'ordinador i sense instal·lar res." },
    { title: 'Arduino Nano', text: 'Detecta el port, instal·la i actualitza el firmware i es reconnecta sola. Fins a 400 LEDs, 300 a uns 46 fps.' },
    { title: 'Límit de consum', text: "Abaixa la brillantor si la tira demanaria més del que dona la font d'alimentació." },
    { title: 'API i WLED', text: 'API HTTP i WebSocket, temps real per DDP i compatible amb WLED: Home Assistant la troba sola a la xarxa.' },
  ],

  // Five steps
  steps: {
    title: 'Del calaix a la paret en cinc passos',
    text: "Només cal un Arduino Nano (qualsevol clon amb CH340, FTDI o CP210x), una tira WS2812B i una font de 5 V. No cal l'Arduino IDE: el firmware va dins de l'app.",
    items: [
      ['Munta la tira', 'Darrere del monitor, amb les dades (DIN) a un pin del Nano, el D6 per exemple, i una font de 5 V pròpia.'],
      ['Connecta el Nano per USB', 'Ledly el detecta sol.'],
      ['Instal·la el firmware', "Des de l'app, en uns segons. Abans desa una còpia del que tenia el Nano."],
      ['Digues com és la tira', "L'assistent encén un LED que portes a cada cantonada i calcula la resta."],
      ['Posa el límit de la font', 'Per no forçar-la amb la brillantor al màxim.'],
    ],
  },

  // API
  api: {
    title: "Controla-la des d'on vulguis",
    text: "Té una API amb documentació a la mateixa app, un plugin per a l'Stream Deck i parla com un WLED, així que Home Assistant la reconeix. Per exemple, un avís vermell de tres segons:",
  },

  // Install
  install: {
    title: 'Ledly per a {os}',
    macWhere: 'Enganxa això al Terminal',
    winWhere: 'Enganxa això a PowerShell',
    macReq: ['macOS 14 o posterior', 'Apple Silicon o Intel'],
    winReq: ['Windows 10 (2004) o 11', 'x64 o ARM64'],
    text: "Baixa l'última versió i l'obre. S'actualitza sola i comprova cada descàrrega amb el seu SHA-256.",
  },
};

export type LedlyText = typeof ca;

const es: LedlyText = {
  meta: {
    title: 'Ledly — ambilight para Mac y Windows con Arduino · Gerard Fortea',
    description:
      'Ledly: una tira de LEDs detrás del monitor que sigue los colores de la pantalla, hace efectos y baila con la música. Para Mac y Windows, con un Arduino Nano y una tira WS2812B.',
  },

  header: {
    backHome: '← Gerard Fortea',
    install: 'Instálala',
  },

  hero: {
    title: 'La pantalla se extiende por la pared',
    text: 'Ledly es un ambilight para Mac y Windows: una tira de LEDs detrás del monitor que toma los colores del borde de la pantalla, hace efectos y baila con la música. Funciona con un Arduino Nano y una tira WS2812B.',
  },

  demo: {
    screenLabel: 'Pantalla de ejemplo con colores que se mueven',
    modeLabel: 'Modo',
    modes: { screen: 'Pantalla', effect: 'Efecto arcoíris', music: 'Música', color: 'Color fijo' },
  },

  features: [
    { title: 'Pantalla', text: 'De toda la pantalla o solo de la ventana de una app. Ignora las franjas negras de las películas y suaviza los cambios para que no parpadee.' },
    { title: 'Efectos', text: 'Todos los de HyperHDR y más: fuego, aurora, meteoro, serpiente, Navidad, reloj… con velocidad y color.' },
    { title: 'Música', text: 'Pulso, ondas, vúmetro y un ecualizador con 100 combinaciones, con el audio del ordenador y sin instalar nada.' },
    { title: 'Arduino Nano', text: 'Detecta el puerto, instala y actualiza el firmware y se reconecta sola. Hasta 400 LEDs, 300 a unos 46 fps.' },
    { title: 'Límite de consumo', text: 'Baja el brillo si la tira pidiera más de lo que da la fuente de alimentación.' },
    { title: 'API y WLED', text: 'API HTTP y WebSocket, tiempo real por DDP y compatible con WLED: Home Assistant la encuentra sola en la red.' },
  ],

  steps: {
    title: 'Del cajón a la pared en cinco pasos',
    text: 'Solo hace falta un Arduino Nano (cualquier clon con CH340, FTDI o CP210x), una tira WS2812B y una fuente de 5 V. No hace falta el Arduino IDE: el firmware va dentro de la app.',
    items: [
      ['Monta la tira', 'Detrás del monitor, con los datos (DIN) a un pin del Nano, el D6 por ejemplo, y una fuente de 5 V propia.'],
      ['Conecta el Nano por USB', 'Ledly lo detecta solo.'],
      ['Instala el firmware', 'Desde la app, en unos segundos. Antes guarda una copia de lo que tenía el Nano.'],
      ['Dile cómo es la tira', 'El asistente enciende un LED que llevas a cada esquina y calcula el resto.'],
      ['Pon el límite de la fuente', 'Para no forzarla con el brillo al máximo.'],
    ],
  },

  api: {
    title: 'Contrólala desde donde quieras',
    text: 'Tiene una API con documentación en la propia app, un plugin para el Stream Deck y habla como un WLED, así que Home Assistant la reconoce. Por ejemplo, un aviso rojo de tres segundos:',
  },

  install: {
    title: 'Ledly para {os}',
    macWhere: 'Pega esto en el Terminal',
    winWhere: 'Pega esto en PowerShell',
    macReq: ['macOS 14 o posterior', 'Apple Silicon o Intel'],
    winReq: ['Windows 10 (2004) u 11', 'x64 o ARM64'],
    text: 'Descarga la última versión y la abre. Se actualiza sola y comprueba cada descarga con su SHA-256.',
  },
};

const en: LedlyText = {
  meta: {
    title: 'Ledly — ambilight for Mac and Windows with Arduino · Gerard Fortea',
    description:
      'Ledly: an LED strip behind the monitor that follows the colors of the screen, runs effects and dances to music. For Mac and Windows, with an Arduino Nano and a WS2812B strip.',
  },

  header: {
    backHome: '← Gerard Fortea',
    install: 'Install it',
  },

  hero: {
    title: 'The screen spills onto the wall',
    text: 'Ledly is an ambilight for Mac and Windows: an LED strip behind the monitor that picks up the colors from the edge of the screen, runs effects and dances to music. It works with an Arduino Nano and a WS2812B strip.',
  },

  demo: {
    screenLabel: 'Sample screen with moving colors',
    modeLabel: 'Mode',
    modes: { screen: 'Screen', effect: 'Rainbow effect', music: 'Music', color: 'Solid color' },
  },

  features: [
    { title: 'Screen', text: "The whole screen or just one app's window. It ignores the black bars of movies and smooths changes so it doesn't flicker." },
    { title: 'Effects', text: 'All of HyperHDR’s and more: fire, aurora, meteor, snake, Christmas, clock… with speed and color.' },
    { title: 'Music', text: "Pulse, waves, VU meter and an equalizer with 100 combinations, using the computer's audio and with nothing to install." },
    { title: 'Arduino Nano', text: 'Detects the port, installs and updates the firmware and reconnects on its own. Up to 400 LEDs, 300 at about 46 fps.' },
    { title: 'Power limit', text: "Lowers the brightness if the strip would draw more than the power supply can give." },
    { title: 'API and WLED', text: 'HTTP and WebSocket API, real time over DDP and WLED-compatible: Home Assistant finds it on its own on the network.' },
  ],

  steps: {
    title: 'From the drawer to the wall in five steps',
    text: 'All you need is an Arduino Nano (any clone with CH340, FTDI or CP210x), a WS2812B strip and a 5 V power supply. You do not need the Arduino IDE: the firmware is inside the app.',
    items: [
      ['Mount the strip', 'Behind the monitor, with the data line (DIN) on a Nano pin, D6 for example, and a 5 V supply of its own.'],
      ['Connect the Nano over USB', 'Ledly detects it on its own.'],
      ['Install the firmware', 'From the app, in a few seconds. It first saves a copy of what the Nano had.'],
      ['Tell it what the strip looks like', 'The wizard lights an LED that you carry to each corner and works out the rest.'],
      ['Set the power supply limit', "So you don't strain it with the brightness at maximum."],
    ],
  },

  api: {
    title: 'Control it from anywhere',
    text: 'It has an API documented in the app itself, a plugin for the Stream Deck, and it speaks like a WLED, so Home Assistant recognizes it. For example, a three-second red alert:',
  },

  install: {
    title: 'Ledly for {os}',
    macWhere: 'Paste this into Terminal',
    winWhere: 'Paste this into PowerShell',
    macReq: ['macOS 14 or later', 'Apple Silicon or Intel'],
    winReq: ['Windows 10 (2004) or 11', 'x64 or ARM64'],
    text: 'It downloads the latest version and opens it. It updates itself and checks every download against its SHA-256.',
  },
};

export const ledly: Record<Lang, LedlyText> = { ca, es, en };
