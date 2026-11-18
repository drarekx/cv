/**
 * Home page texts (src/views/Home.astro), in page order. Voice: tu (Spanish: tú).
 *
 * Strings with markup (`<strong>`, `<a href="/…">`) are rendered as HTML: write links with the Catalan path,
 * the view localizes them. The Catalan object is the reference; `es` and `en` must have the same keys.
 * Project one-liners for the Utilitats / Apps lists come from src/data/projects.ts (summary).
 */
import type { Lang } from '../index';

const ca = {
  // <head>: title, description and the JSON-LD
  meta: {
    title: 'Gerard Fortea · Programador sènior a Olot · Aplicacions de gestió',
    description:
      "Gerard Fortea, programador sènior a la Garrotxa (Olot) amb més de 15 anys d'experiència. Aplicacions de gestió a mida amb Vue, TypeScript, PHP i Laravel.",
    jobTitle: 'Programador sènior fullstack',
    personDescription:
      'Programador sènior a la Garrotxa (Olot) especialitzat en aplicacions de gestió a mida amb les últimes tecnologies.',
    knowsAbout: ['Aplicacions de gestió a mida', 'Desenvolupament web fullstack', 'Intel·ligència artificial'],
    knowsAboutManagement: ['Gestió de projectes', 'Anàlisi de projectes'],
    profileName: 'Gerard Fortea — Programador sènior a la Garrotxa',
  },

  // Hero (#inici)
  hero: {
    kicker: 'Gerard Fortea, programador sènior a la Garrotxa',
    title: 'Aplicacions de gestió a mida',
    intro:
      "Soc en <strong>Gerard Fortea</strong>, programador sènior a Olot i la Garrotxa amb més de 15 anys d'experiència. Desenvolupo <strong>aplicacions de gestió a mida</strong> per a empreses, escoles i entitats, amb Vue, TypeScript, PHP i Laravel.",
    ctaContact: "Explica'm el teu projecte",
    ctaCv: 'Llegir el CV',
    /** Key facts next to the intro: [label, value]. */
    facts: [
      ['Rol', 'Programador sènior fullstack'],
      ['Especialitat', 'Aplicacions de gestió'],
      ['Projectes', 'Més de 50'],
      ['Base', 'Olot, la Garrotxa'],
      ['Idiomes', 'Català, castellà, anglès'],
    ],
  },

  // The relief under the hero: three links into the page
  relief: {
    label: 'Què faig',
    management: 'Aplicacions de gestió',
    web: 'Projectes web',
    apps: 'Apps i utilitats',
  },

  // #gestio
  management: {
    title: 'Aplicacions de gestió que es fan servir cada dia',
    text: "Fa anys que faig el programari amb què treballa la gent: panells interns, gestió de clients, reserves i processos que abans es feien a mà. Pensat per a qui l'utilitzarà, fàcil de mantenir i fet amb tecnologies actuals.",
    points: {
      custom: {
        title: 'Gestió a mida.',
        text: "Gestió d'alumnes a Editorial Océano, gestió immobiliària a Pimmo i programari per al sector turístic i vacacional a Labsystems.",
      },
      panels: {
        title: 'Panells per a gent no tècnica.',
        text: 'L\'organització del <a href="/combat-glosa">Combat de Glosa</a> canvia continguts, colors i formularis sense tocar codi.',
      },
      current: {
        title: 'Al dia.',
        text: 'Quan estalvia feina, hi afegeixo intel·ligència artificial, com els assistents del backend del <a href="/casino-tortella">Casino de Tortellà</a>.',
      },
    },
    howTitle: 'Com treballo',
    ways: [
      { title: 'Eficient', text: "Solucions que es poden mantenir, sense complicar el que és simple. Del requeriment a l'aplicació en marxa." },
      { title: 'Creatiu', text: 'Busco la manera més clara de resoldre cada problema, i vull que el resultat també es vegi bé.' },
      { title: 'Sociable i comunicatiu', text: "Parlo amb qui farà servir l'aplicació, no només amb qui l'encarrega, i explico les decisions tècniques sense embolics." },
      { title: 'Treballador', text: 'Més de 15 anys programant i en constant aprenentatge: sempre aprenent noves tecnologies.' },
    ],
  },

  // #projectes: kinds of professional work
  projects: {
    title: 'Més de 50 projectes professionals',
    text: 'En més de 15 anys, a Labsystems, Editorial Océano, Pimmo i Sala Assessors, he desenvolupat projectes de tota mena.',
    kinds: [
      { title: 'Webs educatives', text: "Llocs web i eines per al sector de l'educació." },
      { title: 'Plataformes de gestió de la informació', text: 'Panells interns per ordenar dades, usuaris i processos.' },
      { title: 'Ecommerce', text: 'Botigues en línia: catàleg, comandes i pagaments.' },
      { title: 'Webs de turisme', text: 'Webs per a allotjaments i destinacions.' },
      { title: 'Motors de reserves', text: 'Disponibilitat, tarifes i reserves en línia.' },
      { title: 'Immobiliàries', text: 'Webs i eines per publicar i gestionar immobles.' },
      { title: 'Software de gestió de propietats', text: 'Propietats, propietaris, lloguers i manteniment.' },
      { title: 'I més', text: 'Webs corporatives, programari de gestió, TPV…' },
    ],
  },

  // #canconers: featured project
  songbooks: {
    kicker: "L'últim projecte personal",
    text: "Una app per al Mac per dissenyar cançoners amb lletra, acords i diagrames, i imprimir-los com un llibret A5 a punt per plegar i cosir. Editor de pàgines, biblioteca de cançons amb versions, transport d'acords i PDF per a impremta.",
    cta: 'Veure Cançoners',
    repo: 'Codi a GitHub',
  },

  // #webs: the three web project cards (the mock-ups keep the real events' Catalan names)
  web: {
    title: 'Projectes web',
    text: "El Casino de Tortellà, el seu combat de glosa i una companyia de circ. Aviat n'hi haurà més.",
    casinoText:
      "La nova web de l'entitat: agenda d'actes, espais, activitats setmanals i fer-se'n soci. Una cartellera on el programa mana.",
    /** Date line of the Combat de Glosa mock-up. */
    glosaDate: '21 de novembre · 16:30h',
    /** Countdown unit after the number of days: singular and plural. */
    glosaDayOne: 'dia',
    glosaDayOther: 'dies',
    circusTag: 'circ',
    circusText:
      "La web d'una companyia de circ: l'espectacle, la companyia, l'agenda de funcions i el contacte, en quatre idiomes.",
    seeProject: 'Veure el projecte',
    visitSite: 'Visitar la web',
    newTab: " (s'obre en una pestanya nova)",
  },

  // #utilitats and #apps (the one-liners come from projects.ts)
  utilities: {
    title: 'Utilitats',
    text: 'Eines web gratuïtes per a programadors. Tot passa al navegador.',
  },
  apps: {
    title: 'Apps i eines, per gust',
    text: "Per al Mac, l'iPad, Windows i el navegador.",
  },

  // #experiencia: jobs, newest first
  experience: {
    title: 'Experiència',
    text: "Del primer ecommerce, el 2008, al rol d'analista i programador sènior fullstack.",
    jobs: [
      {
        role: 'Soci tecnològic i desenvolupador sènior full stack',
        period: '01/2025 – actualitat',
        company: 'Labsystems Arquitectura i Gestió',
        location: 'Barcelona',
        tasks: [
          "Retorn a l'empresa on vaig treballar anys enrere, aquesta vegada assumint un rol més ampli com a analista i programador fullstack.",
          "Participació en projectes web principalment de l'àmbit turístic, a més d'altres sectors, cobrint tant el frontend com el backend.",
          "Anàlisi de requeriments, disseny de solucions i desenvolupament d'aplicacions web a mida.",
        ],
      },
      {
        role: 'Desenvolupador sènior front-end',
        period: '02/2020 – 05/2023',
        company: 'Editorial Oceano',
        location: 'Barcelona',
        tasks: [
          "Anàlisi, desenvolupament i manteniment d'aplicacions web destinades a la gestió d'alumnes.",
          'Manteniment de llocs web.',
          "Suport en l'anàlisi i desenvolupament del backend.",
        ],
      },
      {
        role: 'Programador web sènior full stack',
        period: '09/2017 – 02/2020',
        company: 'Labsystems Arquitectura i Gestió',
        location: 'Barcelona',
        tasks: ['Gestió, anàlisi i desenvolupament de diferents negocis online.', 'Desenvolupament de software destinat al sector vacacional.'],
      },
      {
        role: "Desenvolupador d'aplicacions web",
        period: '09/2013 – 09/2017',
        company: 'Gestión de Inmuebles Pimmo',
        location: 'Mataró',
        tasks: [
          'Manteniment i desenvolupament de software intern relacionat amb la gestió immobiliària.',
          "Manteniment d'ordinadors.",
          "Manteniment dels diferents llocs web de l'empresa.",
          "Referent tecnològic de l'empresa.",
        ],
      },
      {
        role: 'Desenvolupador web junior',
        period: '01/2008 – 03/2010',
        company: 'Sala Assesors Informàtics',
        location: 'Mataró',
        tasks: [
          'Desenvolupament de pàgines corporatives i del sector educació amb software propi.',
          'Desenvolupament de diversos ecommerces amb EBD.',
          'Formació, manteniment i desenvolupament de funcionalitats per a software de gestió SAGE.',
          "Migració de VB6 a .NET d'un software TPV destinat a la venda en botiga.",
        ],
      },
    ],
  },

  // #habilitats: skills, education and languages
  skills: {
    title: 'Habilitats',
    development: 'Desenvolupament',
    systems: 'Sistemes',
    management: 'Gestió',
    managementItems: ['Gestió de projectes', 'Anàlisi de projectes'],
  },
  education: {
    title: 'Formació',
    items: [
      { period: '2024 – 2025', title: "Tècnic superior en Desenvolupament d'Aplicacions Web", center: 'IOC' },
      { period: '2004 – 2007', title: 'Tècnic superior en Informàtica de Gestió', center: 'Gesem' },
    ],
  },
  languages: {
    title: 'Idiomes',
    items: [
      { lang: 'Català', level: 'natiu' },
      { lang: 'Castellà', level: 'natiu' },
      { lang: 'Anglès', level: 'B1' },
    ],
  },

  // Contact footer
  contact: {
    title: 'Parlem del teu projecte',
    text: 'Tens un projecte web a la Garrotxa o on sigui? Escriu-me i en parlem. <a href="/serveis">Mira què puc fer per la teva empresa.</a>',
  },
};

export type HomeText = typeof ca;

const es: HomeText = {
  meta: {
    title: 'Gerard Fortea · Programador sénior en Olot · Aplicaciones de gestión',
    description:
      'Gerard Fortea, programador sénior en la Garrotxa (Olot) con más de 15 años de experiencia. Aplicaciones de gestión a medida con Vue, TypeScript, PHP y Laravel.',
    jobTitle: 'Programador sénior fullstack',
    personDescription:
      'Programador sénior en la Garrotxa (Olot) especializado en aplicaciones de gestión a medida con las últimas tecnologías.',
    knowsAbout: ['Aplicaciones de gestión a medida', 'Desarrollo web fullstack', 'Inteligencia artificial'],
    knowsAboutManagement: ['Gestión de proyectos', 'Análisis de proyectos'],
    profileName: 'Gerard Fortea — Programador sénior en la Garrotxa',
  },

  hero: {
    kicker: 'Gerard Fortea, programador sénior en la Garrotxa',
    title: 'Aplicaciones de gestión a medida',
    intro:
      'Soy <strong>Gerard Fortea</strong>, programador sénior en Olot y la Garrotxa con más de 15 años de experiencia. Desarrollo <strong>aplicaciones de gestión a medida</strong> para empresas, escuelas y entidades, con Vue, TypeScript, PHP y Laravel.',
    ctaContact: 'Cuéntame tu proyecto',
    ctaCv: 'Leer el CV',
    facts: [
      ['Rol', 'Programador sénior fullstack'],
      ['Especialidad', 'Aplicaciones de gestión'],
      ['Proyectos', 'Más de 50'],
      ['Base', 'Olot, la Garrotxa'],
      ['Idiomas', 'Catalán, castellano, inglés'],
    ],
  },

  relief: {
    label: 'Qué hago',
    management: 'Aplicaciones de gestión',
    web: 'Proyectos web',
    apps: 'Apps y utilidades',
  },

  management: {
    title: 'Aplicaciones de gestión que se usan cada día',
    text: 'Hace años que hago el software con el que trabaja la gente: paneles internos, gestión de clientes, reservas y procesos que antes se hacían a mano. Pensado para quien lo usará, fácil de mantener y hecho con tecnologías actuales.',
    points: {
      custom: {
        title: 'Gestión a medida.',
        text: 'Gestión de alumnos en Editorial Océano, gestión inmobiliaria en Pimmo y software para el sector turístico y vacacional en Labsystems.',
      },
      panels: {
        title: 'Paneles para gente no técnica.',
        text: 'La organización del <a href="/combat-glosa">Combat de Glosa</a> cambia contenidos, colores y formularios sin tocar código.',
      },
      current: {
        title: 'Al día.',
        text: 'Cuando ahorra trabajo, añado inteligencia artificial, como los asistentes del backend del <a href="/casino-tortella">Casino de Tortellà</a>.',
      },
    },
    howTitle: 'Cómo trabajo',
    ways: [
      { title: 'Eficiente', text: 'Soluciones que se pueden mantener, sin complicar lo que es simple. Del requisito a la aplicación en marcha.' },
      { title: 'Creativo', text: 'Busco la forma más clara de resolver cada problema, y quiero que el resultado también se vea bien.' },
      { title: 'Sociable y comunicativo', text: 'Hablo con quien usará la aplicación, no solo con quien la encarga, y explico las decisiones técnicas sin rodeos.' },
      { title: 'Trabajador', text: 'Más de 15 años programando y en constante aprendizaje: siempre aprendiendo nuevas tecnologías.' },
    ],
  },

  projects: {
    title: 'Más de 50 proyectos profesionales',
    text: 'En más de 15 años, en Labsystems, Editorial Océano, Pimmo y Sala Assessors, he desarrollado proyectos de todo tipo.',
    kinds: [
      { title: 'Webs educativas', text: 'Sitios web y herramientas para el sector educativo.' },
      { title: 'Plataformas de gestión de la información', text: 'Paneles internos para ordenar datos, usuarios y procesos.' },
      { title: 'Ecommerce', text: 'Tiendas online: catálogo, pedidos y pagos.' },
      { title: 'Webs de turismo', text: 'Webs para alojamientos y destinos.' },
      { title: 'Motores de reservas', text: 'Disponibilidad, tarifas y reservas online.' },
      { title: 'Inmobiliarias', text: 'Webs y herramientas para publicar y gestionar inmuebles.' },
      { title: 'Software de gestión de propiedades', text: 'Propiedades, propietarios, alquileres y mantenimiento.' },
      { title: 'Y más', text: 'Webs corporativas, software de gestión, TPV…' },
    ],
  },

  songbooks: {
    kicker: 'El último proyecto personal',
    text: 'Una app para Mac para diseñar cancioneros con letra, acordes y diagramas, e imprimirlos como un librillo A5 listo para doblar y coser. Editor de páginas, biblioteca de canciones con versiones, transposición de acordes y PDF para imprenta.',
    cta: 'Ver Cançoners',
    repo: 'Código en GitHub',
  },

  web: {
    title: 'Proyectos web',
    text: 'El Casino de Tortellà, su combate de glosa y una compañía de circo. Pronto habrá más.',
    casinoText:
      'La nueva web de la entidad: agenda de actos, espacios, actividades semanales y hacerse socio. Una cartelera donde manda el programa.',
    glosaDate: '21 de noviembre · 16:30 h',
    glosaDayOne: 'día',
    glosaDayOther: 'días',
    circusTag: 'circo',
    circusText:
      'La web de una compañía de circo: el espectáculo, la compañía, la agenda de funciones y el contacto, en cuatro idiomas.',
    seeProject: 'Ver el proyecto',
    visitSite: 'Visitar la web',
    newTab: ' (se abre en una pestaña nueva)',
  },

  utilities: {
    title: 'Utilidades',
    text: 'Herramientas web gratuitas para programadores. Todo pasa en el navegador.',
  },
  apps: {
    title: 'Apps y herramientas, por gusto',
    text: 'Para Mac, iPad, Windows y el navegador.',
  },

  experience: {
    title: 'Experiencia',
    text: 'Del primer ecommerce, en 2008, al rol de analista y programador sénior fullstack.',
    jobs: [
      {
        role: 'Socio tecnológico y desarrollador sénior full stack',
        period: '01/2025 – actualidad',
        company: 'Labsystems Arquitectura i Gestió',
        location: 'Barcelona',
        tasks: [
          'Vuelta a la empresa en la que trabajé años atrás, esta vez asumiendo un rol más amplio como analista y programador fullstack.',
          'Participación en proyectos web principalmente del ámbito turístico, además de otros sectores, cubriendo tanto el frontend como el backend.',
          'Análisis de requisitos, diseño de soluciones y desarrollo de aplicaciones web a medida.',
        ],
      },
      {
        role: 'Desarrollador sénior front-end',
        period: '02/2020 – 05/2023',
        company: 'Editorial Oceano',
        location: 'Barcelona',
        tasks: [
          'Análisis, desarrollo y mantenimiento de aplicaciones web destinadas a la gestión de alumnos.',
          'Mantenimiento de sitios web.',
          'Apoyo en el análisis y desarrollo del backend.',
        ],
      },
      {
        role: 'Programador web sénior full stack',
        period: '09/2017 – 02/2020',
        company: 'Labsystems Arquitectura i Gestió',
        location: 'Barcelona',
        tasks: ['Gestión, análisis y desarrollo de distintos negocios online.', 'Desarrollo de software destinado al sector vacacional.'],
      },
      {
        role: 'Desarrollador de aplicaciones web',
        period: '09/2013 – 09/2017',
        company: 'Gestión de Inmuebles Pimmo',
        location: 'Mataró',
        tasks: [
          'Mantenimiento y desarrollo de software interno relacionado con la gestión inmobiliaria.',
          'Mantenimiento de ordenadores.',
          'Mantenimiento de los distintos sitios web de la empresa.',
          'Referente tecnológico de la empresa.',
        ],
      },
      {
        role: 'Desarrollador web junior',
        period: '01/2008 – 03/2010',
        company: 'Sala Assesors Informàtics',
        location: 'Mataró',
        tasks: [
          'Desarrollo de páginas corporativas y del sector educativo con software propio.',
          'Desarrollo de varios ecommerce con EBD.',
          'Formación, mantenimiento y desarrollo de funcionalidades para el software de gestión SAGE.',
          'Migración de VB6 a .NET de un software TPV destinado a la venta en tienda.',
        ],
      },
    ],
  },

  skills: {
    title: 'Habilidades',
    development: 'Desarrollo',
    systems: 'Sistemas',
    management: 'Gestión',
    managementItems: ['Gestión de proyectos', 'Análisis de proyectos'],
  },
  education: {
    title: 'Formación',
    items: [
      { period: '2024 – 2025', title: 'Técnico superior en Desarrollo de Aplicaciones Web', center: 'IOC' },
      { period: '2004 – 2007', title: 'Técnico superior en Informática de Gestión', center: 'Gesem' },
    ],
  },
  languages: {
    title: 'Idiomas',
    items: [
      { lang: 'Catalán', level: 'nativo' },
      { lang: 'Castellano', level: 'nativo' },
      { lang: 'Inglés', level: 'B1' },
    ],
  },

  contact: {
    title: 'Hablemos de tu proyecto',
    text: '¿Tienes un proyecto web en la Garrotxa o donde sea? Escríbeme y lo hablamos. <a href="/serveis">Mira qué puedo hacer por tu empresa.</a>',
  },
};

const en: HomeText = {
  meta: {
    title: 'Gerard Fortea · Senior developer in Olot · Business software',
    description:
      'Gerard Fortea, senior developer in la Garrotxa (Olot) with over 15 years of experience. Custom business software built with Vue, TypeScript, PHP and Laravel.',
    jobTitle: 'Senior full-stack developer',
    personDescription: 'Senior developer in la Garrotxa (Olot) who builds custom business software with current technologies.',
    knowsAbout: ['Custom business software', 'Full-stack web development', 'Artificial intelligence'],
    knowsAboutManagement: ['Project management', 'Project analysis'],
    profileName: 'Gerard Fortea — Senior developer in la Garrotxa',
  },

  hero: {
    kicker: 'Gerard Fortea, senior developer in la Garrotxa',
    title: 'Custom business software',
    intro:
      "I'm <strong>Gerard Fortea</strong>, a senior developer in Olot and la Garrotxa with over 15 years of experience. I build <strong>custom business software</strong> for companies, schools and nonprofits, with Vue, TypeScript, PHP and Laravel.",
    ctaContact: 'Tell me about your project',
    ctaCv: 'Read my CV',
    facts: [
      ['Role', 'Senior full-stack developer'],
      ['Focus', 'Business software'],
      ['Projects', 'Over 50'],
      ['Based in', 'Olot, la Garrotxa'],
      ['Languages', 'Catalan, Spanish, English'],
    ],
  },

  relief: {
    label: 'What I do',
    management: 'Business software',
    web: 'Web projects',
    apps: 'Apps and utilities',
  },

  management: {
    title: 'Business software people use every day',
    text: "For years I've been building the software people work with: internal dashboards, customer management, bookings and processes that used to be done by hand. Designed for the people who will use it, easy to maintain and built with current technologies.",
    points: {
      custom: {
        title: 'Built to fit.',
        text: 'Student management at Editorial Océano, real estate management at Pimmo, and software for tourism and vacation rentals at Labsystems.',
      },
      panels: {
        title: 'Dashboards for non-technical people.',
        text: 'The <a href="/combat-glosa">Combat de Glosa</a> organizers change content, colors and forms without touching code.',
      },
      current: {
        title: 'Up to date.',
        text: 'When it saves work, I add AI, like the assistants in the <a href="/casino-tortella">Casino de Tortellà</a> back office.',
      },
    },
    howTitle: 'How I work',
    ways: [
      { title: 'Efficient', text: 'Solutions that can be maintained, without complicating what is simple. From the requirements to the app up and running.' },
      { title: 'Creative', text: 'I look for the clearest way to solve each problem, and I want the result to look good too.' },
      { title: 'Sociable and communicative', text: 'I talk to the people who will use the app, not just the ones who commission it, and I explain technical decisions plainly.' },
      { title: 'Hard-working', text: 'Over 15 years of programming and constant learning: always picking up new technologies.' },
    ],
  },

  projects: {
    title: 'Over 50 professional projects',
    text: "In over 15 years, at Labsystems, Editorial Océano, Pimmo and Sala Assessors, I've built all kinds of projects.",
    kinds: [
      { title: 'Education websites', text: 'Websites and tools for the education sector.' },
      { title: 'Information management platforms', text: 'Internal dashboards to organize data, users and processes.' },
      { title: 'E-commerce', text: 'Online stores: catalog, orders and payments.' },
      { title: 'Tourism websites', text: 'Websites for places to stay and destinations.' },
      { title: 'Booking engines', text: 'Availability, rates and online bookings.' },
      { title: 'Real estate', text: 'Websites and tools to list and manage properties.' },
      { title: 'Property management software', text: 'Properties, owners, rentals and maintenance.' },
      { title: 'And more', text: 'Corporate websites, business software, POS…' },
    ],
  },

  songbooks: {
    kicker: 'My latest personal project',
    text: 'A Mac app to design songbooks with lyrics, chords and diagrams, and print them as an A5 booklet ready to fold and sew. Page editor, song library with versions, chord transposition and print-ready PDF.',
    cta: 'See Cançoners',
    repo: 'Code on GitHub',
  },

  web: {
    title: 'Web projects',
    text: 'The Casino de Tortellà, its glosa contest and a circus company. More coming soon.',
    casinoText:
      "The club's new website: events calendar, venues, weekly activities and becoming a member. Listings where the program comes first.",
    glosaDate: 'November 21 · 4:30 pm',
    glosaDayOne: 'day',
    glosaDayOther: 'days',
    circusTag: 'circus',
    circusText: 'The website of a circus company: the show, the company, the performance calendar and contact, in four languages.',
    seeProject: 'See the project',
    visitSite: 'Visit the website',
    newTab: ' (opens in a new tab)',
  },

  utilities: {
    title: 'Utilities',
    text: 'Free web tools for developers. Everything runs in the browser.',
  },
  apps: {
    title: 'Apps and tools, just for fun',
    text: 'For Mac, iPad, Windows and the browser.',
  },

  experience: {
    title: 'Experience',
    text: 'From my first e-commerce site, in 2008, to analyst and senior full-stack developer.',
    jobs: [
      {
        role: 'Technology partner and senior full-stack developer',
        period: '01/2025 – present',
        company: 'Labsystems Arquitectura i Gestió',
        location: 'Barcelona',
        tasks: [
          'Back at the company I worked for years ago, this time in a broader role as analyst and full-stack developer.',
          'Web projects, mainly in tourism but also in other sectors, covering both frontend and backend.',
          'Requirements analysis, solution design and custom web application development.',
        ],
      },
      {
        role: 'Senior front-end developer',
        period: '02/2020 – 05/2023',
        company: 'Editorial Oceano',
        location: 'Barcelona',
        tasks: [
          'Analysis, development and maintenance of web applications for student management.',
          'Website maintenance.',
          'Support with backend analysis and development.',
        ],
      },
      {
        role: 'Senior full-stack web developer',
        period: '09/2017 – 02/2020',
        company: 'Labsystems Arquitectura i Gestió',
        location: 'Barcelona',
        tasks: ['Management, analysis and development of several online businesses.', 'Software development for the vacation rental sector.'],
      },
      {
        role: 'Web application developer',
        period: '09/2013 – 09/2017',
        company: 'Gestión de Inmuebles Pimmo',
        location: 'Mataró',
        tasks: [
          'Maintenance and development of in-house real estate management software.',
          'Computer maintenance.',
          "Maintenance of the company's websites.",
          "The company's go-to person for technology.",
        ],
      },
      {
        role: 'Junior web developer',
        period: '01/2008 – 03/2010',
        company: 'Sala Assesors Informàtics',
        location: 'Mataró',
        tasks: [
          'Corporate and education websites built with in-house software.',
          'Several e-commerce sites built with EBD.',
          'Training, maintenance and feature development for SAGE business software.',
          'Migration of an in-store POS application from VB6 to .NET.',
        ],
      },
    ],
  },

  skills: {
    title: 'Skills',
    development: 'Development',
    systems: 'Systems',
    management: 'Management',
    managementItems: ['Project management', 'Project analysis'],
  },
  education: {
    title: 'Education',
    items: [
      { period: '2024 – 2025', title: 'Advanced vocational diploma in Web Application Development (DAW)', center: 'IOC' },
      { period: '2004 – 2007', title: 'Advanced vocational diploma in Business Computing', center: 'Gesem' },
    ],
  },
  languages: {
    title: 'Languages',
    items: [
      { lang: 'Catalan', level: 'native' },
      { lang: 'Spanish', level: 'native' },
      { lang: 'English', level: 'B1' },
    ],
  },

  contact: {
    title: "Let's talk about your project",
    text: 'Have a web project in la Garrotxa or anywhere else? Write to me and we\'ll talk it over. <a href="/serveis">See what I can do for your business.</a>',
  },
};

export const home: Record<Lang, HomeText> = { ca, es, en };
