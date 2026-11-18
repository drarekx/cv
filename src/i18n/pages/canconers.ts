/**
 * /canconers texts (src/views/Canconers.astro), in page order.
 * The sample songbook page (lyrics of «Els segadors», chords, «Tornada», credit line) is content of the example
 * songbook, not interface: it stays in Catalan in every language and lives in the view.
 */
import type { Lang } from '../index';

const ca = {
  // <head>
  meta: {
    title: 'Cançoners — dissenya cançoners amb lletra i acords · Gerard Fortea',
    description:
      'Cançoners: app per al Mac per dissenyar cançoners amb lletra, acords i diagrames, i imprimir-los com un llibret A5 a punt per plegar i cosir. En català.',
  },

  // Header
  header: {
    backHome: '← Gerard Fortea',
    install: 'Instal·la-la',
  },

  // Hero
  hero: {
    title: 'El teu cançoner, a punt per plegar i cosir',
    text: "Escrius les cançons amb els acords, col·loques cada element a la pàgina amb el ratolí i l'app et dona el PDF per imprimir en A4 a doble cara. El plegues, el cuses pel mig i tens un llibret A5.",
    ctaInstall: 'Instal·la-la al Mac',
    ctaCode: 'Codi a GitHub',
    note: 'Gratuïta i en català. Les dades es queden al teu ordinador.',
  },

  // Transpose demo
  transpose: {
    label: 'Transport',
    down: 'Baixa un semitò',
    up: 'Puja un semitò',
    hint: 'Canvia el to',
  },

  // Editor screenshot
  editor: {
    title: 'Ho veus tal com sortirà',
    text: "El mateix codi dibuixa la pàgina a l'editor i al PDF, i el PDF el genera el mateix motor que el navegador.",
    alt: "L'editor de Cançoners: la llista de cançons, una pàgina amb «Els segadors», els acords i els diagrames, i el panell de la cançó amb el transport.",
  },

  // Features
  features: [
    { title: 'Lletra amb acords', text: "Escriu [G] abans de la síl·laba i l'acord hi queda ancorat. El text copiat de webs de tabs es converteix sol." },
    { title: "Diagrames d'acords", text: "De guitarra i d'ukulele, d'un acord o de tots els de la cançó, arrossegats on vulguis de la pàgina." },
    { title: 'Transport', text: "Puja o baixa el to d'una cançó dins d'un cançoner: els acords i els diagrames canvien sols." },
    { title: 'Disseny lliure', text: 'Text, imatges, formes i codis QR cap a un vídeo de la cançó, amb pàgines mestres i estils.' },
    { title: 'Biblioteca de cançons', text: 'Amb versions i autors, compartida entre cançoners. Hi ha nadales i cançons populars per començar.' },
    { title: 'A punt per a impremta', text: 'PDF A4 ja imposat, llibret A5, vista en 3D i PDF en CMYK per portar a la impremta.' },
  ],

  // Printing
  print: {
    title: 'Imprimir sense fer números',
    text: "Cada full A4 porta dues pàgines A5 per cara, en l'ordre que toca per plegar-lo. Cada cançó comença a l'esquerra i el llibret s'omple fins a un múltiple de quatre pàgines.",
    sheetsIntro: "Així queden els tres fulls d'un llibret de 12 pàgines:",
    sheet: 'Full',
    front: 'Davant',
    back: 'Darrere',
    note: 'També fa PDF per a impressores sense doble cara, per a anelles i en CMYK per a impremta.',
    alt: 'La pàgina Imprimir amb el llibret muntat en 3D, obert per «Els segadors».',
  },

  // Library
  library: {
    title: 'Totes les cançons, en una biblioteca',
    text: "Cada cançó té el seu historial de versions i els seus autors, i la pots fer servir en tants cançoners com vulguis. Abans de cada actualització, l'app en fa una còpia de seguretat.",
    alt: "La biblioteca de cançons amb la vista prèvia d'una cançó.",
  },

  // Install
  install: {
    title: 'Enganxa això al Terminal',
    text: "Instal·la l'última versió a Aplicacions i l'obre. L'app avisa quan n'hi ha una de nova i, abans d'actualitzar-se, fa una còpia de les teves dades.",
    requirements: ['Apple Silicon (M1 o posterior)', 'macOS 12 o posterior'],
    inCatalan: 'En català',
  },
};

export type CanconersText = typeof ca;

const es: CanconersText = {
  meta: {
    title: 'Cançoners — diseña cancioneros con letra y acordes · Gerard Fortea',
    description:
      'Cançoners: app para Mac para diseñar cancioneros con letra, acordes y diagramas, e imprimirlos como un librito A5 listo para plegar y coser. En catalán.',
  },

  header: {
    backHome: '← Gerard Fortea',
    install: 'Instálala',
  },

  hero: {
    title: 'Tu cancionero, listo para plegar y coser',
    text: 'Escribes las canciones con los acordes, colocas cada elemento en la página con el ratón y la app te da el PDF para imprimir en A4 a doble cara. Lo plegas, lo coses por el medio y tienes un librito A5.',
    ctaInstall: 'Instálala en el Mac',
    ctaCode: 'Código en GitHub',
    note: 'Gratuita y en catalán. Los datos se quedan en tu ordenador.',
  },

  transpose: {
    label: 'Transporte',
    down: 'Baja un semitono',
    up: 'Sube un semitono',
    hint: 'Cambia el tono',
  },

  editor: {
    title: 'Lo ves tal como saldrá',
    text: 'El mismo código dibuja la página en el editor y en el PDF, y el PDF lo genera el mismo motor que el navegador.',
    alt: 'El editor de Cançoners: la lista de canciones, una página con «Els segadors», los acordes y los diagramas, y el panel de la canción con el transporte.',
  },

  features: [
    { title: 'Letra con acordes', text: 'Escribe [G] antes de la sílaba y el acorde queda anclado ahí. El texto copiado de webs de tabs se convierte solo.' },
    { title: 'Diagramas de acordes', text: 'De guitarra y de ukelele, de un acorde o de todos los de la canción, arrastrados donde quieras de la página.' },
    { title: 'Transporte', text: 'Sube o baja el tono de una canción dentro de un cancionero: los acordes y los diagramas cambian solos.' },
    { title: 'Diseño libre', text: 'Texto, imágenes, formas y códigos QR hacia un vídeo de la canción, con páginas maestras y estilos.' },
    { title: 'Biblioteca de canciones', text: 'Con versiones y autores, compartida entre cancioneros. Hay villancicos y canciones populares para empezar.' },
    { title: 'Listo para imprenta', text: 'PDF A4 ya impuesto, librito A5, vista en 3D y PDF en CMYK para llevar a la imprenta.' },
  ],

  print: {
    title: 'Imprimir sin hacer números',
    text: 'Cada hoja A4 lleva dos páginas A5 por cara, en el orden que toca para plegarla. Cada canción empieza a la izquierda y el librito se rellena hasta un múltiplo de cuatro páginas.',
    sheetsIntro: 'Así quedan las tres hojas de un librito de 12 páginas:',
    sheet: 'Hoja',
    front: 'Anverso',
    back: 'Reverso',
    note: 'También hace PDF para impresoras sin doble cara, para anillas y en CMYK para imprenta.',
    alt: 'La página Imprimir con el librito montado en 3D, abierto por «Els segadors».',
  },

  library: {
    title: 'Todas las canciones, en una biblioteca',
    text: 'Cada canción tiene su historial de versiones y sus autores, y puedes usarla en tantos cancioneros como quieras. Antes de cada actualización, la app hace una copia de seguridad.',
    alt: 'La biblioteca de canciones con la vista previa de una canción.',
  },

  install: {
    title: 'Pega esto en el Terminal',
    text: 'Instala la última versión en Aplicaciones y la abre. La app avisa cuando hay una nueva y, antes de actualizarse, hace una copia de tus datos.',
    requirements: ['Apple Silicon (M1 o posterior)', 'macOS 12 o posterior'],
    inCatalan: 'En catalán',
  },
};

const en: CanconersText = {
  meta: {
    title: 'Cançoners — design songbooks with lyrics and chords · Gerard Fortea',
    description:
      'Cançoners: a Mac app to design songbooks with lyrics, chords and diagrams, and print them as an A5 booklet ready to fold and stitch. The app is in Catalan.',
  },

  header: {
    backHome: '← Gerard Fortea',
    install: 'Install it',
  },

  hero: {
    title: 'Your songbook, ready to fold and stitch',
    text: 'You write the songs with their chords, place each element on the page with the mouse, and the app gives you the PDF to print on A4, double-sided. Fold it, stitch it down the middle and you have an A5 booklet.',
    ctaInstall: 'Install it on your Mac',
    ctaCode: 'Code on GitHub',
    note: 'Free, and in Catalan. Your data stays on your computer.',
  },

  transpose: {
    label: 'Transpose',
    down: 'Down one semitone',
    up: 'Up one semitone',
    hint: 'Change the key',
  },

  editor: {
    title: 'You see it as it will print',
    text: 'The same code draws the page in the editor and in the PDF, and the PDF is generated by the same engine as the browser.',
    alt: 'The Cançoners editor: the song list, a page with «Els segadors», the chords and diagrams, and the song panel with the transpose control.',
  },

  features: [
    { title: 'Lyrics with chords', text: 'Type [G] before the syllable and the chord stays anchored to it. Text copied from tab sites is converted automatically.' },
    { title: 'Chord diagrams', text: 'For guitar and ukulele, for one chord or all the chords in the song, dragged wherever you want on the page.' },
    { title: 'Transpose', text: "Raise or lower a song's key inside a songbook: the chords and diagrams change on their own." },
    { title: 'Free layout', text: 'Text, images, shapes and QR codes pointing to a video of the song, with master pages and styles.' },
    { title: 'Song library', text: 'With versions and authors, shared between songbooks. It includes Christmas carols and folk songs to get started.' },
    { title: 'Print-shop ready', text: 'Imposed A4 PDF, A5 booklet, 3D preview and CMYK PDF to take to the print shop.' },
  ],

  print: {
    title: 'Print without doing the math',
    text: 'Each A4 sheet carries two A5 pages per side, in the order needed to fold it. Each song starts on a left page and the booklet is padded up to a multiple of four pages.',
    sheetsIntro: 'This is how the three sheets of a 12-page booklet end up:',
    sheet: 'Sheet',
    front: 'Front',
    back: 'Back',
    note: 'It also makes PDFs for printers without duplex, for ring binding, and in CMYK for print shops.',
    alt: 'The Print page with the booklet assembled in 3D, open at «Els segadors».',
  },

  library: {
    title: 'All the songs in one library',
    text: 'Each song has its version history and its authors, and you can use it in as many songbooks as you like. Before each update, the app makes a backup.',
    alt: 'The song library with the preview of a song.',
  },

  install: {
    title: 'Paste this into Terminal',
    text: 'It installs the latest version in Applications and opens it. The app tells you when there is a new one and, before updating, makes a copy of your data.',
    requirements: ['Apple Silicon (M1 or later)', 'macOS 12 or later'],
    inCatalan: 'In Catalan',
  },
};

export const canconers: Record<Lang, CanconersText> = { ca, es, en };
