/**
 * /serveis texts (src/views/Serveis.astro), in page order. Addressed to companies: vós (Spanish: vosotros).
 *
 * Strings with markup (`<strong>`, `<a href="/…">`) are rendered as HTML: write links with the Catalan path,
 * the view localizes them. The Catalan object is the reference; `es` and `en` must have the same keys.
 */
import type { Lang } from '../index';

const ca = {
  // <head>: title, description and the JSON-LD
  meta: {
    title: 'Programador web sènior a Olot i la Garrotxa · Consultor per a pimes',
    description:
      "Programador web sènior a Olot i la Garrotxa. Assessorament tecnològic i aplicacions web a mida per a pimes, del primer consell a l'aplicació en marxa.",
    jobTitle: 'Programador web sènior freelance i consultor tecnològic',
    serviceName: 'Gerard Fortea — Programador web sènior i consultor tecnològic a la Garrotxa',
    /** knowsAbout: these, then the tech names, then `knowsAboutAfter`. */
    knowsAboutBefore: ['Programació web', "Desenvolupament d'aplicacions web"],
    knowsAboutAfter: ['Assessorament tecnològic', 'Digitalització de pimes'],
    catalogName: 'Serveis de programació i consultoria web',
    offers: [
      "Desenvolupament d'aplicacions web a mida",
      'Assessorament tecnològic per a pimes',
      'Manteniment i evolució de projectes web',
      'Digitalització de processos empresarials',
    ],
  },

  // Hero
  hero: {
    kicker: 'Programador web sènior freelance i consultor tecnològic',
    title: 'Programador web a la Garrotxa, per a pimes',
    intro:
      "Soc <strong>Gerard Fortea</strong>, <strong>programador web sènior freelance a la Garrotxa</strong> (Maià de Montcal) amb més de 15 anys d'experiència en programació i desenvolupament web. Ofereixo serveis d'<strong>assessorament tecnològic i desenvolupament d'aplicacions web a mida</strong> per a pimes de la Garrotxa, Olot i comarques veïnes.",
    ctaContact: 'Parlem del vostre projecte',
    ctaServices: 'Veure els serveis',
    /** Key facts next to the intro: [label, value]. */
    facts: [
      ['On', 'Maià de Montcal'],
      ['Zona', 'Olot i la Garrotxa'],
      ['Per a', 'Pimes i autònoms'],
      ['Experiència', 'Més de 15 anys'],
      ['Idiomes', 'Català, castellà, anglès'],
    ],
  },

  // #serveis: the four services
  services: {
    title: 'Què puc fer per la vostra empresa',
    text: "Quatre maneres de treballar junts, del primer consell a l'aplicació en marxa.",
    items: [
      {
        title: 'Desenvolupament web a mida',
        description:
          "Disseny i programació d'aplicacions web adaptades al vostre negoci: des de panells de gestió interna fins a plataformes orientades al client, amb tecnologies modernes i escalables.",
      },
      {
        title: 'Assessorament tecnològic',
        description:
          'Anàlisi de les vostres necessitats digitals i orientació en la tria de les solucions més adequades: tecnologies, eines, arquitectura de sistemes i proveïdors de serveis cloud.',
      },
      {
        title: 'Manteniment i evolució de projectes',
        description:
          "Suport tècnic continuat per a webs i aplicacions existents: correcció d'errors, implementació de noves funcionalitats i migració o modernització de tecnologies obsoletes.",
      },
      {
        title: 'Digitalització de processos',
        description:
          "Identificació i automatització de fluxos de treball manuals mitjançant solucions digitals a mida, millorant l'eficiència operativa i reduint errors a la vostra pime.",
      },
    ],
    examples:
      'Alguns exemples recents: la web del <a href="/casino-tortella">Casino de Tortellà</a>, la del <a href="/combat-glosa">Combat de Glosa</a> i la meva especialitat, les <a href="/#gestio">aplicacions de gestió a mida</a>.',
  },

  // Nearby: where and with what
  nearby: {
    title: 'Un programador a prop',
    text: 'Tant si necessiteu un <strong>programador web a Olot</strong> o a qualsevol municipi de la Garrotxa, com si cerqueu un consultor tecnològic extern de confiança per a la vostra empresa, puc ajudar-vos a digitalitzar processos, crear o millorar la vostra presència digital i prendre les millors decisions tecnològiques.',
    whereTitle: 'On treballo',
    areas: ['Olot', 'la Garrotxa', 'el Ripollès', 'la Selva', 'Girona', 'Catalunya'],
    stackTitle: 'Amb què treballo',
  },

  // Contact footer
  contact: {
    title: 'Parlem del vostre projecte',
    text: 'Sense compromís. Expliqueu-me el que necessiteu i us faré una proposta.',
  },
};

export type ServeisText = typeof ca;

const es: ServeisText = {
  meta: {
    title: 'Programador web sénior en Olot y la Garrotxa · Consultor para pymes',
    description:
      'Programador web sénior en Olot y la Garrotxa. Asesoramiento tecnológico y aplicaciones web a medida para pymes, del primer consejo a la aplicación en marcha.',
    jobTitle: 'Programador web sénior freelance y consultor tecnológico',
    serviceName: 'Gerard Fortea — Programador web sénior y consultor tecnológico en la Garrotxa',
    knowsAboutBefore: ['Programación web', 'Desarrollo de aplicaciones web'],
    knowsAboutAfter: ['Asesoramiento tecnológico', 'Digitalización de pymes'],
    catalogName: 'Servicios de programación y consultoría web',
    offers: [
      'Desarrollo de aplicaciones web a medida',
      'Asesoramiento tecnológico para pymes',
      'Mantenimiento y evolución de proyectos web',
      'Digitalización de procesos empresariales',
    ],
  },

  hero: {
    kicker: 'Programador web sénior freelance y consultor tecnológico',
    title: 'Programador web en la Garrotxa, para pymes',
    intro:
      'Soy <strong>Gerard Fortea</strong>, <strong>programador web sénior freelance en la Garrotxa</strong> (Maià de Montcal) con más de 15 años de experiencia en programación y desarrollo web. Ofrezco servicios de <strong>asesoramiento tecnológico y desarrollo de aplicaciones web a medida</strong> para pymes de la Garrotxa, Olot y comarcas vecinas.',
    ctaContact: 'Hablemos de vuestro proyecto',
    ctaServices: 'Ver los servicios',
    facts: [
      ['Dónde', 'Maià de Montcal'],
      ['Zona', 'Olot y la Garrotxa'],
      ['Para', 'Pymes y autónomos'],
      ['Experiencia', 'Más de 15 años'],
      ['Idiomas', 'Catalán, castellano, inglés'],
    ],
  },

  services: {
    title: 'Qué puedo hacer por vuestra empresa',
    text: 'Cuatro formas de trabajar juntos, del primer consejo a la aplicación en marcha.',
    items: [
      {
        title: 'Desarrollo web a medida',
        description:
          'Diseño y programación de aplicaciones web adaptadas a vuestro negocio: desde paneles de gestión interna hasta plataformas orientadas al cliente, con tecnologías modernas y escalables.',
      },
      {
        title: 'Asesoramiento tecnológico',
        description:
          'Análisis de vuestras necesidades digitales y orientación para elegir las soluciones más adecuadas: tecnologías, herramientas, arquitectura de sistemas y proveedores de servicios cloud.',
      },
      {
        title: 'Mantenimiento y evolución de proyectos',
        description:
          'Soporte técnico continuado para webs y aplicaciones existentes: corrección de errores, nuevas funcionalidades y migración o modernización de tecnologías obsoletas.',
      },
      {
        title: 'Digitalización de procesos',
        description:
          'Identificación y automatización de flujos de trabajo manuales con soluciones digitales a medida, para ganar eficiencia y reducir errores en vuestra pyme.',
      },
    ],
    examples:
      'Algunos ejemplos recientes: la web del <a href="/casino-tortella">Casino de Tortellà</a>, la del <a href="/combat-glosa">Combat de Glosa</a> y mi especialidad, las <a href="/#gestio">aplicaciones de gestión a medida</a>.',
  },

  nearby: {
    title: 'Un programador cerca',
    text: 'Tanto si necesitáis un <strong>programador web en Olot</strong> o en cualquier municipio de la Garrotxa como si buscáis un consultor tecnológico externo de confianza para vuestra empresa, puedo ayudaros a digitalizar procesos, crear o mejorar vuestra presencia digital y tomar las mejores decisiones tecnológicas.',
    whereTitle: 'Dónde trabajo',
    areas: ['Olot', 'la Garrotxa', 'el Ripollès', 'la Selva', 'Girona', 'Cataluña'],
    stackTitle: 'Con qué trabajo',
  },

  contact: {
    title: 'Hablemos de vuestro proyecto',
    text: 'Sin compromiso. Contadme qué necesitáis y os haré una propuesta.',
  },
};

const en: ServeisText = {
  meta: {
    title: 'Senior web developer in Olot and la Garrotxa · Consultant for small businesses',
    description:
      'Senior web developer in Olot and la Garrotxa. Technology consulting and custom web applications for small businesses, from the first advice to the app up and running.',
    jobTitle: 'Freelance senior web developer and technology consultant',
    serviceName: 'Gerard Fortea — Senior web developer and technology consultant in la Garrotxa',
    knowsAboutBefore: ['Web programming', 'Web application development'],
    knowsAboutAfter: ['Technology consulting', 'Small business digitalization'],
    catalogName: 'Web development and consulting services',
    offers: [
      'Custom web application development',
      'Technology consulting for small businesses',
      'Web project maintenance and evolution',
      'Business process digitalization',
    ],
  },

  hero: {
    kicker: 'Freelance senior web developer and technology consultant',
    title: 'Web developer in la Garrotxa, for small businesses',
    intro:
      "I'm <strong>Gerard Fortea</strong>, a <strong>freelance senior web developer in la Garrotxa</strong> (Maià de Montcal) with over 15 years of experience in programming and web development. I offer <strong>technology consulting and custom web application development</strong> for small businesses in la Garrotxa, Olot and the surrounding area.",
    ctaContact: "Let's talk about your project",
    ctaServices: 'See the services',
    facts: [
      ['Where', 'Maià de Montcal'],
      ['Area', 'Olot and la Garrotxa'],
      ['For', 'Small businesses and freelancers'],
      ['Experience', 'Over 15 years'],
      ['Languages', 'Catalan, Spanish, English'],
    ],
  },

  services: {
    title: 'What I can do for your business',
    text: 'Four ways to work together, from the first advice to the app up and running.',
    items: [
      {
        title: 'Custom web development',
        description:
          'Design and development of web applications that fit your business: from internal management dashboards to customer-facing platforms, with modern, scalable technologies.',
      },
      {
        title: 'Technology consulting',
        description:
          'Analysis of your digital needs and guidance in choosing the right solutions: technologies, tools, system architecture and cloud service providers.',
      },
      {
        title: 'Project maintenance and evolution',
        description:
          'Ongoing technical support for existing websites and applications: bug fixes, new features and migration or modernization of outdated technologies.',
      },
      {
        title: 'Process digitalization',
        description:
          'Finding and automating manual workflows with custom digital solutions, so your business runs more efficiently and makes fewer errors.',
      },
    ],
    examples:
      'Some recent examples: the <a href="/casino-tortella">Casino de Tortellà</a> website, the <a href="/combat-glosa">Combat de Glosa</a> one and my specialty, <a href="/#gestio">custom business software</a>.',
  },

  nearby: {
    title: 'A developer nearby',
    text: 'Whether you need a <strong>web developer in Olot</strong> or anywhere else in la Garrotxa, or you are looking for a trusted outside technology consultant for your business, I can help you digitalize processes, build or improve your online presence and make the best technology decisions.',
    whereTitle: 'Where I work',
    areas: ['Olot', 'la Garrotxa', 'el Ripollès', 'la Selva', 'Girona', 'Catalonia'],
    stackTitle: 'What I work with',
  },

  contact: {
    title: "Let's talk about your project",
    text: "No strings attached. Tell me what you need and I'll send you a proposal.",
  },
};

export const serveis: Record<Lang, ServeisText> = { ca, es, en };
