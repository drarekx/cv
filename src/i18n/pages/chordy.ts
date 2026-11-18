import type { Lang } from '../index';

/**
 * Texts of /chordy. Sections in page order. The catalan object is the reference for the type.
 * Chord symbols, key names and keyboard shortcuts are not translated. Texts with markup (`kbd`, `code`) go
 * through `set:html`; the view adds the classes.
 */
const ca = {
  meta: {
    title: "Chordy — acords al Mac, amb l'iPad i l'iPhone de comandament · Gerard Fortea",
    description:
      "Chordy: cada tecla toca un grau de l'escala ja harmonitzat i W A S D en canvien el color. Loops, sintetitzador, instruments reals, MIDI i caixa de ritmes al Mac, amb l'iPad i l'iPhone de comandament.",
  },
  header: { install: 'Instal·la-la' },
  hero: {
    title: 'Acords sense saber on van els dits',
    text: "Tries el to i el mode, i cada tecla del Mac toca un grau de l'escala ja harmonitzat. Amb W A S D li canvies el color: menor, maj7, sus… Amb un teclat MIDI, els pads, les rodetes i els knobs ho fan tot. I l'iPad i l'iPhone fan de comandament.",
    platforms: 'Plataformes',
  },
  demo: {
    srTitle: 'Prova-la aquí',
    chord: 'ACORD',
    keyTitle: 'TO',
    prevKey: 'To anterior (Z)',
    nextKey: 'To següent (C)',
    history: 'Últims acords',
    historyEmpty: 'Els últims acords sortiran aquí',
    modeGroup: 'Mode',
    /** Names of the modes (the script also uses them for the key label). */
    modes: { major: 'major', minor: 'menor', dorian: 'dòric' },
    octaveDown: 'Octava avall',
    space: 'espai',
    colorGroup: "Color de l'acord",
    /** Label of the wheel's centre button (the chord of the key itself). */
    diatonic: 'diat.',
    hold: 'Mantén {keys}',
    ownChord: "L'acord del to",
    degrees: 'Graus',
    hint: "Toca els pads o fes servir el teclat: <kbd>J U K I L O ;</kbd> els graus, <kbd>W A S D</kbd> el color (dues alhora fan les diagonals), <kbd>Z C</kbd> el to i <kbd>Q E</kbd> el mode. Aquí sona un sintetitzador senzill del navegador; l'app té el seu i instruments de debò.",
  },
  features: [
    { title: "Teclat d'acords", text: "Tres modes (major, menor i dòric), els dotze tons i nou colors d'acord. Si canvies el color o el to amb l'acord premut, el que sona el segueix al moment." },
    { title: 'Loops', text: 'Grava amb metrònom i edita les notes: moure, allargar, esborrar. Si avances un acord abans del final, sona lligat a la volta. Cada loop té la seva reverb, eco i filtre.' },
    { title: 'Sintetitzador', text: "Tres oscil·ladors amb una ona d'harmònics que es dibuixa, filtre amb envolupant, ADSR i vibrato. Catorze sons de fàbrica i els teus." },
    { title: 'Instruments de debò', text: 'Piano de cua Salamander, piano de paret, pianos elèctrics, orgues, cordes, guitarres, baixos i vuit bateries, que sonen amb la força amb què toques.' },
    { title: 'MIDI', text: "Detecta qualsevol teclat sol i aprèn qualsevol pad, tecla o rodeta. Amb el Launchkey 25 MK2 els pads s'il·luminen amb l'acord que sona." },
    { title: 'Cap al teu DAW', text: 'Un aparell MIDI virtual, «Chordy», per gravar el que toques a Logic, GarageBand o Ableton.' },
    { title: 'Estudi', text: 'Cada teclat connectat té el seu so, zona, octava, volum i efectes, i una mescla amb un fader per teclat, bateria i loops. Tries per quina sortida d\'àudio sona.' },
    { title: 'Caixa de ritmes i cançó', text: 'Patrons A–H de setze passos, una cançó amb pistes de bateria i loops, i projectes .chordy que es desen sols.' },
  ],
  shots: {
    title: 'Toca, grava i dona-li el so que vulguis',
    /** Same order as the files in the view: loops, sonido, midi. */
    items: [
      { alt: 'Chordy amb tres loops gravats i un sonant', caption: 'Toca amb J U K I L O ; i grava loops amb R.' },
      { alt: 'Editor de so de Chordy amb el so Warm Pad', caption: "L'editor de so: tres oscil·ladors, filtre i envolupant." },
      { alt: 'Panell MIDI de Chordy amb el Launchkey connectat', caption: 'El panell MIDI amb un Launchkey connectat.' },
    ],
  },
  remote: {
    title: "L'iPad i l'iPhone, de comandament",
    text: "Chordy Pads és l'app nativa per a l'iPad i l'iPhone. Troba el Mac sola a la mateixa wifi, et diu quants mil·lisegons triga cada ordre i el so surt del Mac. Així toques la bateria amb els dits o canvies el tempo des de l'altra punta de l'habitació.",
    /** iPad first, then iPhone. */
    devices: [
      {
        title: 'Pads, passos, teclats i mescla',
        items: [
          ['Pads', 'Setze pads grans per tocar la bateria en directe: com més amunt piques, més fort sona.'],
          ['Passos', 'La graella del patró: toca un pas per posar-lo i arrossega amunt o avall per donar-li força.'],
          ['Teclats', 'Els teclats MIDI del Mac dibuixats, amb les tecles que toques il·luminades, els sons preferits i els efectes.'],
          ['Mescla', 'Faders grans per a la bateria, cada teclat i els loops, amb mut i solo per pista.'],
        ] as [string, string][],
      },
      {
        title: 'El comandament de butxaca',
        items: [
          ['Compte', "L'1 · 2 · 3 · 4 ben gran, en vermell quan grava."],
          ['Tempo', 'Amb botons o marcant-lo amb el dit al ritme.'],
          ['Grava', 'Un botó per gravar un loop i desar-lo quan acabes.'],
          ['Toca i para', "Engega els loops o la bateria, i atura-ho tot d'un cop."],
        ] as [string, string][],
      },
    ],
    note: "Encara no és a l'App Store: es compila amb Xcode des de la carpeta <code>iPad/</code> del repositori.",
  },
  install: {
    title: 'Instal·la Chordy',
    text: "Enganxa això al Terminal. Baixa l'última versió, la posa a Aplicacions i l'obre. S'actualitza sola i comprova cada descàrrega amb el seu SHA-256. Està en català, castellà i anglès. Per a l'iPad i l'iPhone, mira Chordy Pads més amunt.",
    macos: 'macOS 14 o posterior',
    chips: 'Apple Silicon o Intel',
    /** `{link}` is replaced by the ChordBoy link. */
    basedOn: 'Basada en {link}, de james.',
  },
};

export type ChordyText = typeof ca;

const es: ChordyText = {
  meta: {
    title: 'Chordy — acordes en el Mac, con el iPad y el iPhone de mando · Gerard Fortea',
    description:
      'Chordy: cada tecla toca un grado de la escala ya armonizado y W A S D cambian su color. Loops, sintetizador, instrumentos reales, MIDI y caja de ritmos en el Mac, con el iPad y el iPhone de mando.',
  },
  header: { install: 'Instálala' },
  hero: {
    title: 'Acordes sin saber dónde van los dedos',
    text: 'Eliges el tono y el modo, y cada tecla del Mac toca un grado de la escala ya armonizado. Con W A S D le cambias el color: menor, maj7, sus… Con un teclado MIDI, los pads, las ruedas y los knobs lo hacen todo. Y el iPad y el iPhone hacen de mando.',
    platforms: 'Plataformas',
  },
  demo: {
    srTitle: 'Pruébala aquí',
    chord: 'ACORDE',
    keyTitle: 'TONO',
    prevKey: 'Tono anterior (Z)',
    nextKey: 'Tono siguiente (C)',
    history: 'Últimos acordes',
    historyEmpty: 'Los últimos acordes saldrán aquí',
    modeGroup: 'Modo',
    modes: { major: 'mayor', minor: 'menor', dorian: 'dórico' },
    octaveDown: 'Octava abajo',
    space: 'espacio',
    colorGroup: 'Color del acorde',
    diatonic: 'diat.',
    hold: 'Mantén {keys}',
    ownChord: 'El acorde del tono',
    degrees: 'Grados',
    hint: 'Toca los pads o usa el teclado: <kbd>J U K I L O ;</kbd> los grados, <kbd>W A S D</kbd> el color (dos a la vez hacen las diagonales), <kbd>Z C</kbd> el tono y <kbd>Q E</kbd> el modo. Aquí suena un sintetizador sencillo del navegador; la app tiene el suyo e instrumentos de verdad.',
  },
  features: [
    { title: 'Teclado de acordes', text: 'Tres modos (mayor, menor y dórico), los doce tonos y nueve colores de acorde. Si cambias el color o el tono con el acorde pulsado, lo que suena lo sigue al momento.' },
    { title: 'Loops', text: 'Graba con metrónomo y edita las notas: mover, alargar, borrar. Si adelantas un acorde antes del final, suena ligado a la vuelta. Cada loop tiene su reverb, eco y filtro.' },
    { title: 'Sintetizador', text: 'Tres osciladores con una onda de armónicos que se dibuja, filtro con envolvente, ADSR y vibrato. Catorce sonidos de fábrica y los tuyos.' },
    { title: 'Instrumentos de verdad', text: 'Piano de cola Salamander, piano de pared, pianos eléctricos, órganos, cuerdas, guitarras, bajos y ocho baterías, que suenan con la fuerza con la que tocas.' },
    { title: 'MIDI', text: 'Detecta cualquier teclado solo y aprende cualquier pad, tecla o rueda. Con el Launchkey 25 MK2 los pads se iluminan con el acorde que suena.' },
    { title: 'Hacia tu DAW', text: 'Un dispositivo MIDI virtual, «Chordy», para grabar lo que tocas en Logic, GarageBand o Ableton.' },
    { title: 'Estudio', text: 'Cada teclado conectado tiene su sonido, zona, octava, volumen y efectos, y una mezcla con un fader por teclado, batería y loops. Eliges por qué salida de audio suena.' },
    { title: 'Caja de ritmos y canción', text: 'Patrones A–H de dieciséis pasos, una canción con pistas de batería y loops, y proyectos .chordy que se guardan solos.' },
  ],
  shots: {
    title: 'Toca, graba y dale el sonido que quieras',
    items: [
      { alt: 'Chordy con tres loops grabados y uno sonando', caption: 'Toca con J U K I L O ; y graba loops con R.' },
      { alt: 'Editor de sonido de Chordy con el sonido Warm Pad', caption: 'El editor de sonido: tres osciladores, filtro y envolvente.' },
      { alt: 'Panel MIDI de Chordy con el Launchkey conectado', caption: 'El panel MIDI con un Launchkey conectado.' },
    ],
  },
  remote: {
    title: 'El iPad y el iPhone, de mando',
    text: 'Chordy Pads es la app nativa para el iPad y el iPhone. Encuentra el Mac sola en la misma wifi, te dice cuántos milisegundos tarda cada orden y el sonido sale del Mac. Así tocas la batería con los dedos o cambias el tempo desde el otro lado de la habitación.',
    devices: [
      {
        title: 'Pads, pasos, teclados y mezcla',
        items: [
          ['Pads', 'Dieciséis pads grandes para tocar la batería en directo: cuanto más arriba pulsas, más fuerte suena.'],
          ['Pasos', 'La cuadrícula del patrón: toca un paso para ponerlo y arrastra arriba o abajo para darle fuerza.'],
          ['Teclados', 'Los teclados MIDI del Mac dibujados, con las teclas que tocas iluminadas, los sonidos favoritos y los efectos.'],
          ['Mezcla', 'Faders grandes para la batería, cada teclado y los loops, con mute y solo por pista.'],
        ],
      },
      {
        title: 'El mando de bolsillo',
        items: [
          ['Cuenta', 'El 1 · 2 · 3 · 4 bien grande, en rojo cuando graba.'],
          ['Tempo', 'Con botones o marcándolo con el dedo al ritmo.'],
          ['Graba', 'Un botón para grabar un loop y guardarlo cuando acabas.'],
          ['Toca y para', 'Arranca los loops o la batería, y lo para todo de golpe.'],
        ],
      },
    ],
    note: 'Todavía no está en la App Store: se compila con Xcode desde la carpeta <code>iPad/</code> del repositorio.',
  },
  install: {
    title: 'Instala Chordy',
    text: 'Pega esto en el Terminal. Descarga la última versión, la pone en Aplicaciones y la abre. Se actualiza sola y comprueba cada descarga con su SHA-256. Está en catalán, castellano e inglés. Para el iPad y el iPhone, mira Chordy Pads más arriba.',
    macos: 'macOS 14 o posterior',
    chips: 'Apple Silicon o Intel',
    basedOn: 'Basada en {link}, de james.',
  },
};

const en: ChordyText = {
  meta: {
    title: 'Chordy — chords on the Mac, with the iPad and iPhone as a remote · Gerard Fortea',
    description:
      'Chordy: each key plays a degree of the scale already harmonized and W A S D change its color. Loops, synthesizer, real instruments, MIDI and drum machine on the Mac, with the iPad and iPhone as a remote.',
  },
  header: { install: 'Install it' },
  hero: {
    title: 'Chords without knowing where your fingers go',
    text: 'You pick the key and the mode, and each Mac key plays a degree of the scale already harmonized. With W A S D you change its color: minor, maj7, sus… With a MIDI keyboard, the pads, wheels and knobs do it all. And the iPad and iPhone act as a remote.',
    platforms: 'Platforms',
  },
  demo: {
    srTitle: 'Try it here',
    chord: 'CHORD',
    keyTitle: 'KEY',
    prevKey: 'Previous key (Z)',
    nextKey: 'Next key (C)',
    history: 'Recent chords',
    historyEmpty: 'The latest chords will show up here',
    modeGroup: 'Mode',
    modes: { major: 'major', minor: 'minor', dorian: 'dorian' },
    octaveDown: 'Octave down',
    space: 'space',
    colorGroup: 'Chord color',
    diatonic: 'diat.',
    hold: 'Hold {keys}',
    ownChord: "The key's own chord",
    degrees: 'Degrees',
    hint: 'Play the pads or use the keyboard: <kbd>J U K I L O ;</kbd> for the degrees, <kbd>W A S D</kbd> for the color (two at once make the diagonals), <kbd>Z C</kbd> for the key and <kbd>Q E</kbd> for the mode. Here a simple browser synth plays; the app has its own and real instruments.',
  },
  features: [
    { title: 'Chord keyboard', text: 'Three modes (major, minor and dorian), all twelve keys and nine chord colors. If you change the color or the key while holding a chord, what is playing follows right away.' },
    { title: 'Loops', text: 'Record with a metronome and edit the notes: move, lengthen, delete. If you bring a chord in before the end, it plays tied to the next pass. Each loop has its own reverb, echo and filter.' },
    { title: 'Synthesizer', text: 'Three oscillators with a drawable harmonic waveform, filter with envelope, ADSR and vibrato. Fourteen factory sounds and your own.' },
    { title: 'Real instruments', text: 'Salamander grand piano, upright piano, electric pianos, organs, strings, guitars, basses and eight drum kits, which sound as hard as you play.' },
    { title: 'MIDI', text: 'It detects any keyboard by itself and learns any pad, key or wheel. With the Launchkey 25 MK2 the pads light up with the chord that is playing.' },
    { title: 'To your DAW', text: 'A virtual MIDI device, “Chordy”, to record what you play in Logic, GarageBand or Ableton.' },
    { title: 'Studio', text: 'Each connected keyboard has its own sound, zone, octave, volume and effects, and there is a mix with one fader per keyboard, drums and loops. You choose which audio output it plays through.' },
    { title: 'Drum machine and song', text: 'Sixteen-step patterns A–H, a song with drum and loop tracks, and .chordy projects that save themselves.' },
  ],
  shots: {
    title: 'Play, record and give it whatever sound you want',
    items: [
      { alt: 'Chordy with three recorded loops and one playing', caption: 'Play with J U K I L O ; and record loops with R.' },
      { alt: 'Chordy sound editor with the Warm Pad sound', caption: 'The sound editor: three oscillators, filter and envelope.' },
      { alt: 'Chordy MIDI panel with the Launchkey connected', caption: 'The MIDI panel with a Launchkey connected.' },
    ],
  },
  remote: {
    title: 'iPad and iPhone as a remote',
    text: 'Chordy Pads is the native app for iPad and iPhone. It finds the Mac on its own on the same wifi, tells you how many milliseconds each command takes and the sound comes out of the Mac. That way you play the drums with your fingers or change the tempo from the other side of the room.',
    devices: [
      {
        title: 'Pads, steps, keyboards and mix',
        items: [
          ['Pads', 'Sixteen big pads to play the drums live: the higher up you hit, the louder it sounds.'],
          ['Steps', 'The pattern grid: tap a step to set it and drag up or down to give it velocity.'],
          ['Keyboards', "The Mac's MIDI keyboards drawn on screen, with the keys you play lit up, favorite sounds and effects."],
          ['Mix', 'Big faders for the drums, each keyboard and the loops, with mute and solo per track.'],
        ],
      },
      {
        title: 'The pocket remote',
        items: [
          ['Count', 'The 1 · 2 · 3 · 4 nice and big, in red when recording.'],
          ['Tempo', 'With buttons or by tapping it out with your finger.'],
          ['Record', 'One button to record a loop and save it when you finish.'],
          ['Play and stop', 'Starts the loops or the drums, and stops everything at once.'],
        ],
      },
    ],
    note: "It's not on the App Store yet: you build it with Xcode from the <code>iPad/</code> folder of the repository.",
  },
  install: {
    title: 'Install Chordy',
    text: 'Paste this into Terminal. It downloads the latest version, puts it in Applications and opens it. It updates itself and checks each download with its SHA-256. It comes in Catalan, Spanish and English. For iPad and iPhone, see Chordy Pads above.',
    macos: 'macOS 14 or later',
    chips: 'Apple Silicon or Intel',
    basedOn: 'Based on {link}, by james.',
  },
};

export const chordy: Record<Lang, ChordyText> = { ca, es, en };
