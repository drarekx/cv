/**
 * /terminaly texts (src/views/Terminaly.astro and src/components/terminaly/TerminalyDemo.vue), in page order.
 * The demo receives `t.demo` as a prop (islands can't import this module).
 * The Catalan object is the reference; `es` and `en` must have the same keys.
 *
 * Demo lines are plain text: the component colours them by position, so keep the number of lines of each list.
 * The `tly ls` table in the demo is aligned with padEnd(19) on the titles: keep every title at 19 characters or fewer.
 */
import type { Lang } from '../index';

const ca = {
  meta: {
    title: 'Terminaly — tots els teus agents, un sol terminal · Gerard Fortea',
    description:
      "App nativa de macOS per dirigir sessions de Claude Code, Codex, opencode i shell per projecte. Un agent en pot dirigir d'altres en swarm, cadascun en el seu worktree.",
  },

  header: {
    back: '← gerard fortea',
    install: "instal·la'l",
  },

  hero: {
    h1Line1: 'Tots els teus agents.',
    h1Line2: 'Un sol terminal',
    text: "App nativa de macOS per llançar i dirigir sessions d'agents de CLI. Claude, Codex, opencode i el teu shell, ordenats per projecte, i saps en tot moment qui treballa, qui ha acabat i qui t'espera. I ara un agent en pot dirigir d'altres: un swarm.",
  },

  // Interactive terminal (island)
  demo: {
    window: 'Terminaly',
    sessionsLabel: 'Sessions',
    restart: 'torna a començar',
    showSwarm: 'mostra el swarm',
    split: '⌘D divideix',
    allow: 's · permet',
    deny: 'n · denega',
    status: { working: 'treballant', ready: 'a punt', needs: 'et necessita' },
    /** Project (folder) names in the sidebar; the second is also the shell prompt. */
    projects: { shop: 'botiga-web', api: 'api-reserves' },
    /** Session of the shop project that keeps working in a loop. */
    s1: {
      title: 'migració a Vue 3',
      prompt: '> migra la botiga a Vue 3',
      // Same colours by position: 5 plain lines, then the green check
      loop: ['● Llegint src/components/Cistella.vue', '● Editant src/components/Cistella.vue', '● Llegint src/components/Producte.vue', '● Editant src/components/Producte.vue', '● Executant npm run test', '  ✓ proves superades'],
    },
    s2: {
      title: 'tests de la cistella',
      // prompt, 1 plain line, check, dim line
      lines: ['> escriu tests per a la cistella', '● Creat tests/cistella.spec.ts', '  ✓ proves superades', 'Fet. Esperant instruccions.'],
    },
    lead: {
      title: 'pagaments (swarm)',
      // prompt, plain line, then the three `tly new` commands (the worktree names are the workers' `wt`)
      lines: ['> afegeix pagaments a les reserves, amb un swarm', '● Reparteixo la feina en tres workers'],
      commands: [
        '$ tly new --worktree rutes --prompt "rutes de pagament"',
        '$ tly new --worktree tests --prompt "tests del flux"',
        '$ tly new --worktree migracio --prompt "taula de pagaments"',
      ],
      // review, merge (with the three branches), check, dim line
      merge: ['● Revisant les tres branques', '● Fusionant swarm/rutes, swarm/tests i swarm/migracio', '  ✓ 15 proves superades a main', 'Fet. Esperant instruccions.'],
    },
    workers: {
      routes: {
        wt: 'rutes',
        title: 'rutes de pagament',
        // prompt, 3 plain lines, check, dim line
        lines: ['> rutes de pagament', '● Llegint routes/api.php', '● Creat routes/pagaments.php', '● Editant PagamentController.php', '  ✓ rutes verificades', 'Fet. Branca swarm/rutes a punt.'],
      },
      tests: {
        wt: 'tests',
        title: 'tests del flux',
        // prompt, 2 plain, check, plain, check, dim line
        lines: ['> tests del flux de pagament', '● Creat tests/Feature/PagamentTest.php', '● Executant php artisan test', '  ✓ 12 proves superades', "● Afegint els casos d'error", '  ✓ 15 proves superades', 'Fet. Branca swarm/tests a punt.'],
      },
      migration: {
        wt: 'migracio',
        title: 'taula de pagaments',
        before: ['> taula de pagaments', '● Creat la migració create_pagaments'],
        ask: '? Permís: executar php artisan migrate (s/n)',
        // answered "no": prompt, dim line
        denied: ['> n', 'Sense executar. Branca swarm/migracio a punt.'],
        // answered "yes": prompt, plain, check, dim line
        allowed: ['> s', '● Executant php artisan migrate', '  ✓ migració aplicada', 'Fet. Branca swarm/migracio a punt.'],
      },
    },
  },
  demoCaption: "El lead reparteix la feina entre tres workers, cadascun al seu worktree. Mira'ls tots alhora amb «mostra el swarm» i dona-li permís al que te'l demana.",

  swarm: {
    title: "Un agent que en dirigeix d'altres.",
    /** {tly} is replaced by the highlighted `tly`. */
    text: "Amb el swarm, una tasca gran es reparteix entre diverses sessions que treballen alhora, sense trepitjar-se. Terminaly només posa les eines: sessions, worktrees i la CLI {tly}. Fins a 6 workers per sessió (es canvia a Ajustos → Agents), i «Treu els workers acabats» neteja sessions i worktrees.",
    steps: [
      ['Instal·la la skill', 'A Ajustos → Agents, la skill terminaly-swarm per a Claude Code o opencode.'],
      ['Demana un swarm', "L'agent que rep l'encàrrec es converteix en el lead i reparteix la feina."],
      ['Els workers treballen', 'Cadascun en una sessió i un worktree de git propis, penjats del lead a la barra lateral.'],
      ['El lead revisa i fusiona', 'Espera que acabin, revisa les branques i les fusiona. Els permisos sempre els aproves tu.'],
    ],
  },

  states: {
    title: "Tres estats, d'un cop d'ull.",
    items: [
      { label: 'treballant', text: "L'agent està fent feina. No cal que miris." },
      { label: 'a punt', text: 'Ha acabat i espera la següent instrucció.' },
      { label: 'et necessita', text: "Demana una resposta: notificació i número a la icona del Dock." },
    ],
    note: "Amb Claude Code i opencode, l'estat ve dels seus hooks i del seu plugin (s'instal·len des d'Ajustos → Agents). Amb la resta d'agents, de l'activitat de la sortida.",
  },

  features: [
    { title: 'Projectes i sessions', text: 'Barra lateral amb carpetes i les seves sessions: fixa, reanomena, arxiva, posa-hi color. Arrossega una carpeta per afegir-la.' },
    { title: 'Terminals de veritat', text: 'SwiftTerm a sota. Les sessions segueixen vives encara que no les tinguis a la vista.' },
    { title: 'Presets', text: 'Shell, Claude, Codex… editables a Ajustos. ⌘T llança el primer.' },
    { title: 'Panells dividits', text: '⌘D a la dreta, ⇧⌘D a sota, ⌘W tanca. La disposició es recorda.' },
    { title: "Paleta d'ordres", text: "⌘K per a tot. ⌘[ i ⌘] per passar d'una sessió a l'altra." },
    { title: "Tanca l'app, no la feina", text: 'Les sessions viuen al dimoni tly. En tornar a obrir, es reconnecten amb la sortida recent.' },
    { title: 'Des del navegador', text: "Obre les sessions del Mac des de qualsevol navegador de la xarxa local o la VPN, també des de l'iPhone. Desactivat per defecte i protegit amb un token." },
    { title: 'Pintat amb la GPU', text: 'Els terminals es dibuixen amb la GPU: la meitat de CPU mentre els agents treballen.' },
  ],

  cli: {
    title: "I també des de la línia d'ordres.",
    /** {tly} is replaced by the highlighted `tly`. */
    text: "{tly} és un sol procés per a totes les sessions i, alhora, la CLI per manar-les: llista, crea, envia text, espera respostes o enganxa-t'hi. És el que fa servir el lead d'un swarm per dirigir els seus workers.",
    parts: [
      ['Terminaly', 'app SwiftUI, pinta els terminals'],
      ['tly', 'dimoni i CLI, PTY sense polling'],
      ['TerminalyKit', 'protocol i sockets compartits'],
    ],
    label: 'Ordres de la CLI tly',
    comments: { worker: '# un worker', ask: '# envia i espera la resposta', attach: '# Ctrl-\\ per sortir' },
  },

  install: {
    title: "Instal·la'l des d'on toca: el terminal.",
    copy: 'copia',
    copied: 'copiat',
    /** {tly} and {flag} are replaced by the highlighted `tly` and `bash -s -- --no-cli`. */
    text: "Deixa Terminaly.app a Aplicacions i enllaça la CLI {tly} (amb {flag} se la salta). Les versions noves arriben per l'actualitzador integrat.",
  },
};

export type TerminalyText = typeof ca;

const es: TerminalyText = {
  meta: {
    title: 'Terminaly — todos tus agentes, un solo terminal · Gerard Fortea',
    description:
      'App nativa de macOS para dirigir sesiones de Claude Code, Codex, opencode y shell por proyecto. Un agente puede dirigir a otros en swarm, cada uno en su worktree.',
  },

  header: {
    back: '← gerard fortea',
    install: 'instálalo',
  },

  hero: {
    h1Line1: 'Todos tus agentes.',
    h1Line2: 'Un solo terminal',
    text: 'App nativa de macOS para lanzar y dirigir sesiones de agentes de CLI. Claude, Codex, opencode y tu shell, ordenados por proyecto, y sabes en todo momento quién trabaja, quién ha terminado y quién te espera. Y ahora un agente puede dirigir a otros: un swarm.',
  },

  demo: {
    window: 'Terminaly',
    sessionsLabel: 'Sesiones',
    restart: 'volver a empezar',
    showSwarm: 'mostrar el swarm',
    split: '⌘D dividir',
    allow: 's · permitir',
    deny: 'n · denegar',
    status: { working: 'trabajando', ready: 'listo', needs: 'te necesita' },
    projects: { shop: 'tienda-web', api: 'api-reservas' },
    s1: {
      title: 'migración a Vue 3',
      prompt: '> migra la tienda a Vue 3',
      loop: ['● Leyendo src/components/Carrito.vue', '● Editando src/components/Carrito.vue', '● Leyendo src/components/Producto.vue', '● Editando src/components/Producto.vue', '● Ejecutando npm run test', '  ✓ pruebas superadas'],
    },
    s2: {
      title: 'tests del carrito',
      lines: ['> escribe tests para el carrito', '● Creado tests/carrito.spec.ts', '  ✓ pruebas superadas', 'Hecho. Esperando instrucciones.'],
    },
    lead: {
      title: 'pagos (swarm)',
      lines: ['> añade pagos a las reservas, con un swarm', '● Reparto el trabajo entre tres workers'],
      commands: [
        '$ tly new --worktree rutas --prompt "rutas de pago"',
        '$ tly new --worktree tests --prompt "tests del flujo"',
        '$ tly new --worktree migracion --prompt "tabla de pagos"',
      ],
      merge: ['● Revisando las tres ramas', '● Fusionando swarm/rutas, swarm/tests y swarm/migracion', '  ✓ 15 pruebas superadas en main', 'Hecho. Esperando instrucciones.'],
    },
    workers: {
      routes: {
        wt: 'rutas',
        title: 'rutas de pago',
        lines: ['> rutas de pago', '● Leyendo routes/api.php', '● Creado routes/pagos.php', '● Editando PagoController.php', '  ✓ rutas verificadas', 'Hecho. Rama swarm/rutas lista.'],
      },
      tests: {
        wt: 'tests',
        title: 'tests del flujo',
        lines: ['> tests del flujo de pago', '● Creado tests/Feature/PagoTest.php', '● Ejecutando php artisan test', '  ✓ 12 pruebas superadas', '● Añadiendo los casos de error', '  ✓ 15 pruebas superadas', 'Hecho. Rama swarm/tests lista.'],
      },
      migration: {
        wt: 'migracion',
        title: 'tabla de pagos',
        before: ['> tabla de pagos', '● Creada la migración create_pagos'],
        ask: '? Permiso: ejecutar php artisan migrate (s/n)',
        denied: ['> n', 'Sin ejecutar. Rama swarm/migracion lista.'],
        allowed: ['> s', '● Ejecutando php artisan migrate', '  ✓ migración aplicada', 'Hecho. Rama swarm/migracion lista.'],
      },
    },
  },
  demoCaption: 'El lead reparte el trabajo entre tres workers, cada uno en su worktree. Míralos todos a la vez con «mostrar el swarm» y da permiso al que te lo pida.',

  swarm: {
    title: 'Un agente que dirige a otros.',
    text: 'Con el swarm, una tarea grande se reparte entre varias sesiones que trabajan a la vez, sin pisarse. Terminaly solo pone las herramientas: sesiones, worktrees y la CLI {tly}. Hasta 6 workers por sesión (se cambia en Ajustes → Agentes), y «Quitar los workers terminados» limpia sesiones y worktrees.',
    steps: [
      ['Instala la skill', 'En Ajustes → Agentes, la skill terminaly-swarm para Claude Code u opencode.'],
      ['Pide un swarm', 'El agente que recibe el encargo se convierte en el lead y reparte el trabajo.'],
      ['Los workers trabajan', 'Cada uno en una sesión y un worktree de git propios, colgados del lead en la barra lateral.'],
      ['El lead revisa y fusiona', 'Espera a que terminen, revisa las ramas y las fusiona. Los permisos siempre los apruebas tú.'],
    ],
  },

  states: {
    title: 'Tres estados, de un vistazo.',
    items: [
      { label: 'trabajando', text: 'El agente está trabajando. No hace falta que mires.' },
      { label: 'listo', text: 'Ha terminado y espera la siguiente instrucción.' },
      { label: 'te necesita', text: 'Pide una respuesta: notificación y número en el icono del Dock.' },
    ],
    note: 'Con Claude Code y opencode, el estado viene de sus hooks y de su plugin (se instalan desde Ajustes → Agentes). Con el resto de agentes, de la actividad de la salida.',
  },

  features: [
    { title: 'Proyectos y sesiones', text: 'Barra lateral con carpetas y sus sesiones: fija, renombra, archiva, ponles color. Arrastra una carpeta para añadirla.' },
    { title: 'Terminales de verdad', text: 'SwiftTerm por debajo. Las sesiones siguen vivas aunque no las tengas a la vista.' },
    { title: 'Presets', text: 'Shell, Claude, Codex… editables en Ajustes. ⌘T lanza el primero.' },
    { title: 'Paneles divididos', text: '⌘D a la derecha, ⇧⌘D debajo, ⌘W cierra. La disposición se recuerda.' },
    { title: 'Paleta de comandos', text: '⌘K para todo. ⌘[ y ⌘] para pasar de una sesión a otra.' },
    { title: 'Cierra la app, no el trabajo', text: 'Las sesiones viven en el demonio tly. Al volver a abrir, se reconectan con la salida reciente.' },
    { title: 'Desde el navegador', text: 'Abre las sesiones del Mac desde cualquier navegador de la red local o la VPN, también desde el iPhone. Desactivado por defecto y protegido con un token.' },
    { title: 'Pintado con la GPU', text: 'Los terminales se dibujan con la GPU: la mitad de CPU mientras los agentes trabajan.' },
  ],

  cli: {
    title: 'Y también desde la línea de comandos.',
    text: '{tly} es un solo proceso para todas las sesiones y, a la vez, la CLI para manejarlas: lista, crea, envía texto, espera respuestas o engánchate. Es lo que usa el lead de un swarm para dirigir a sus workers.',
    parts: [
      ['Terminaly', 'app SwiftUI, pinta los terminales'],
      ['tly', 'demonio y CLI, PTY sin polling'],
      ['TerminalyKit', 'protocolo y sockets compartidos'],
    ],
    label: 'Comandos de la CLI tly',
    comments: { worker: '# un worker', ask: '# envía y espera la respuesta', attach: '# Ctrl-\\ para salir' },
  },

  install: {
    title: 'Instálalo desde donde toca: el terminal.',
    copy: 'copiar',
    copied: 'copiado',
    text: 'Deja Terminaly.app en Aplicaciones y enlaza la CLI {tly} (con {flag} se la salta). Las versiones nuevas llegan por el actualizador integrado.',
  },
};

const en: TerminalyText = {
  meta: {
    title: 'Terminaly — all your agents, one terminal · Gerard Fortea',
    description:
      'Native macOS app to run Claude Code, Codex, opencode and shell sessions by project. One agent can direct others in a swarm, each in its own worktree.',
  },

  header: {
    back: '← gerard fortea',
    install: 'install',
  },

  hero: {
    h1Line1: 'All your agents.',
    h1Line2: 'One terminal',
    text: 'Native macOS app to launch and direct CLI agent sessions. Claude, Codex, opencode and your shell, organized by project, and you always know who is working, who has finished and who is waiting for you. And now one agent can direct others: a swarm.',
  },

  demo: {
    window: 'Terminaly',
    sessionsLabel: 'Sessions',
    restart: 'start over',
    showSwarm: 'show the swarm',
    split: '⌘D split',
    allow: 'y · allow',
    deny: 'n · deny',
    status: { working: 'working', ready: 'ready', needs: 'needs you' },
    projects: { shop: 'web-shop', api: 'booking-api' },
    s1: {
      title: 'Vue 3 migration',
      prompt: '> migrate the shop to Vue 3',
      loop: ['● Reading src/components/Cart.vue', '● Editing src/components/Cart.vue', '● Reading src/components/Product.vue', '● Editing src/components/Product.vue', '● Running npm run test', '  ✓ tests passed'],
    },
    s2: {
      title: 'cart tests',
      lines: ['> write tests for the cart', '● Created tests/cart.spec.ts', '  ✓ tests passed', 'Done. Waiting for instructions.'],
    },
    lead: {
      title: 'payments (swarm)',
      lines: ['> add payments to bookings, with a swarm', '● Splitting the work across three workers'],
      commands: [
        '$ tly new --worktree routes --prompt "payment routes"',
        '$ tly new --worktree tests --prompt "flow tests"',
        '$ tly new --worktree migration --prompt "payments table"',
      ],
      merge: ['● Reviewing the three branches', '● Merging swarm/routes, swarm/tests and swarm/migration', '  ✓ 15 tests passed on main', 'Done. Waiting for instructions.'],
    },
    workers: {
      routes: {
        wt: 'routes',
        title: 'payment routes',
        lines: ['> payment routes', '● Reading routes/api.php', '● Created routes/payments.php', '● Editing PaymentController.php', '  ✓ routes verified', 'Done. Branch swarm/routes ready.'],
      },
      tests: {
        wt: 'tests',
        title: 'flow tests',
        lines: ['> tests for the payment flow', '● Created tests/Feature/PaymentTest.php', '● Running php artisan test', '  ✓ 12 tests passed', '● Adding the error cases', '  ✓ 15 tests passed', 'Done. Branch swarm/tests ready.'],
      },
      migration: {
        wt: 'migration',
        title: 'payments table',
        before: ['> payments table', '● Created the create_payments migration'],
        ask: '? Permission: run php artisan migrate (y/n)',
        denied: ['> n', 'Not run. Branch swarm/migration ready.'],
        allowed: ['> y', '● Running php artisan migrate', '  ✓ migration applied', 'Done. Branch swarm/migration ready.'],
      },
    },
  },
  demoCaption: 'The lead splits the work between three workers, each in its own worktree. Watch them all at once with “show the swarm” and give permission to the one that asks.',

  swarm: {
    title: 'One agent that directs others.',
    text: 'With the swarm, a big task is split across several sessions that work at the same time without stepping on each other. Terminaly only provides the tools: sessions, worktrees and the {tly} CLI. Up to 6 workers per session (change it in Settings → Agents), and “Remove finished workers” cleans up sessions and worktrees.',
    steps: [
      ['Install the skill', 'In Settings → Agents, the terminaly-swarm skill for Claude Code or opencode.'],
      ['Ask for a swarm', 'The agent that gets the request becomes the lead and splits the work.'],
      ['The workers work', 'Each in its own session and git worktree, hanging under the lead in the sidebar.'],
      ['The lead reviews and merges', 'It waits for them to finish, reviews the branches and merges them. You always approve the permissions.'],
    ],
  },

  states: {
    title: 'Three states at a glance.',
    items: [
      { label: 'working', text: 'The agent is working. No need to look.' },
      { label: 'ready', text: "It has finished and is waiting for the next instruction." },
      { label: 'needs you', text: 'It asks for an answer: a notification and a number on the Dock icon.' },
    ],
    note: 'With Claude Code and opencode, the state comes from their hooks and plugin (installed from Settings → Agents). With every other agent, from the activity of the output.',
  },

  features: [
    { title: 'Projects and sessions', text: 'Sidebar with folders and their sessions: pin, rename, archive, color them. Drag a folder in to add it.' },
    { title: 'Real terminals', text: 'SwiftTerm underneath. Sessions stay alive even when you are not looking at them.' },
    { title: 'Presets', text: 'Shell, Claude, Codex… editable in Settings. ⌘T launches the first one.' },
    { title: 'Split panes', text: '⌘D to the right, ⇧⌘D below, ⌘W closes. The layout is remembered.' },
    { title: 'Command palette', text: '⌘K for everything. ⌘[ and ⌘] to move from one session to another.' },
    { title: 'Quit the app, not the work', text: 'Sessions live in the tly daemon. When you reopen the app, they reconnect with the recent output.' },
    { title: 'From the browser', text: 'Open the Mac’s sessions from any browser on the local network or the VPN, including from the iPhone. Off by default and protected with a token.' },
    { title: 'GPU rendering', text: 'Terminals are drawn on the GPU: half the CPU while the agents work.' },
  ],

  cli: {
    title: 'And from the command line too.',
    text: '{tly} is a single process for all sessions and, at the same time, the CLI to control them: list, create, send text, wait for replies or attach to one. It is what the lead of a swarm uses to direct its workers.',
    parts: [
      ['Terminaly', 'SwiftUI app, draws the terminals'],
      ['tly', 'daemon and CLI, PTY without polling'],
      ['TerminalyKit', 'shared protocol and sockets'],
    ],
    label: 'tly CLI commands',
    comments: { worker: '# one worker', ask: '# sends and waits for the reply', attach: '# Ctrl-\\ to quit' },
  },

  install: {
    title: 'Install it from where it belongs: the terminal.',
    copy: 'copy',
    copied: 'copied',
    text: 'Puts Terminaly.app in Applications and links the {tly} CLI (with {flag} it skips that). New versions arrive through the built-in updater.',
  },
};

export const terminaly: Record<Lang, TerminalyText> = { ca, es, en };
