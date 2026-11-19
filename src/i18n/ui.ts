/**
 * Strings shared by several pages: layout, header, contact footer, legal pages, project footer, copy button
 * and language switcher. Page texts live in src/i18n/pages/<page>.ts.
 *
 * The Catalan object is the reference: `es` and `en` must have exactly the same keys (the build fails otherwise).
 * Contact form copy has two voices: `tu` (home, privacy) and `vos` (/serveis, addressed to companies).
 * In Spanish that is tú / vosotros; English uses the same text for both.
 */
import type { Lang } from './index';

const ca = {
  // BaseLayout: defaults for pages that don't pass their own
  layout: {
    title: 'Gerard Fortea — Programador sènior a la Garrotxa',
    description: 'Gerard Fortea, programador sènior a la Garrotxa (Olot) especialitzat en aplicacions de gestió a mida.',
    ogImageAlt: 'Gerard Fortea, programador sènior a la Garrotxa: aplicacions de gestió a mida',
    skipLink: 'Salta al contingut',
  },

  // SiteHeader
  header: {
    homeLabel: 'Gerard Fortea, inici',
    navLabel: 'Principal',
    projects: 'Projectes',
    experience: 'Experiència',
    services: 'Serveis',
    contact: 'Contacte',
  },

  // LangSwitch
  langSwitch: {
    label: 'Idioma',
  },

  // ContactFooter
  contact: {
    title: 'Parlem?',
    email: 'Correu',
    phone: 'Telèfon',
    nameField: 'Nom',
    emailField: 'Correu',
    phoneField: 'Telèfon (opcional)',
    honeypot: 'No omplis aquest camp',
    send: 'Envia el missatge',
    sending: 'Enviant…',
    privacy: 'Privacitat',
    sendAnother: "Envia'n un altre",
    /** Copy that changes with the voice. `{name}` is replaced by the sender's first name. */
    voice: {
      tu: {
        heading: 'Escriu-me',
        need: 'Què necessites?',
        note: "Només faig servir aquestes dades per respondre't.",
        doneTitle: 'He rebut el teu missatge!',
        doneTitleNamed: 'Gràcies, {name}! He rebut el teu missatge.',
        doneText: 'En breu em poso en contacte amb tu.',
        sendFailed: "No s'ha pogut enviar. Escriu-me a fortea.gerard@mail.com.",
        offline: 'No hi ha connexió. Torna-ho a provar o escriu-me a fortea.gerard@mail.com.',
        nameError: 'Escriu el teu nom (mínim 2 caràcters).',
        emailError: 'Escriu una adreça de correu vàlida, com nom@exemple.cat.',
        needError: "Explica'm què necessites (mínim 10 caràcters).",
      },
      vos: {
        heading: 'Escriviu-me',
        need: 'Què necessiteu?',
        note: 'Només faig servir aquestes dades per respondre-us.',
        doneTitle: 'He rebut el vostre missatge!',
        doneTitleNamed: 'Gràcies, {name}! He rebut el vostre missatge.',
        doneText: 'En breu em poso en contacte amb vosaltres.',
        sendFailed: "No s'ha pogut enviar. Escriviu-me a fortea.gerard@mail.com.",
        offline: 'No hi ha connexió. Torneu-ho a provar o escriviu-me a fortea.gerard@mail.com.',
        nameError: 'Escriviu el vostre nom (mínim 2 caràcters).',
        emailError: 'Escriviu una adreça de correu vàlida, com nom@exemple.cat.',
        needError: 'Expliqueu-me què necessiteu (mínim 10 caràcters).',
      },
    },
  },

  // Legal links (ContactFooter, LegalPage, ProjectFooter)
  legal: {
    navLabel: 'Legal',
    notice: 'Avís legal',
    privacy: 'Privacitat',
  },

  // LegalPage
  legalPage: {
    updated: 'Última actualització:',
    backHome: "Torna a l'inici",
  },

  // ProjectFooter
  projectFooter: {
    navLabel: 'Altres projectes',
    allProjects: 'Tots els projectes',
    services: 'Programador web a Olot per a pimes',
  },

  // CopyCommand (Vue island): pass these as props
  copy: {
    copy: 'Copia',
    copied: 'Copiat',
    srCopied: 'Ordre copiada',
  },
};

export type Ui = typeof ca;

const es: Ui = {
  layout: {
    title: 'Gerard Fortea — Programador sénior en la Garrotxa',
    description: 'Gerard Fortea, programador sénior en la Garrotxa (Olot) especializado en aplicaciones de gestión a medida.',
    ogImageAlt: 'Gerard Fortea, programador sénior en la Garrotxa: aplicaciones de gestión a medida',
    skipLink: 'Saltar al contenido',
  },

  header: {
    homeLabel: 'Gerard Fortea, inicio',
    navLabel: 'Principal',
    projects: 'Proyectos',
    experience: 'Experiencia',
    services: 'Servicios',
    contact: 'Contacto',
  },

  langSwitch: {
    label: 'Idioma',
  },

  contact: {
    title: '¿Hablamos?',
    email: 'Correo',
    phone: 'Teléfono',
    nameField: 'Nombre',
    emailField: 'Correo',
    phoneField: 'Teléfono (opcional)',
    honeypot: 'No rellenes este campo',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    privacy: 'Privacidad',
    sendAnother: 'Enviar otro',
    voice: {
      tu: {
        heading: 'Escríbeme',
        need: '¿Qué necesitas?',
        note: 'Solo uso estos datos para responderte.',
        doneTitle: '¡He recibido tu mensaje!',
        doneTitleNamed: '¡Gracias, {name}! He recibido tu mensaje.',
        doneText: 'En breve me pongo en contacto contigo.',
        sendFailed: 'No se ha podido enviar. Escríbeme a fortea.gerard@mail.com.',
        offline: 'No hay conexión. Vuelve a intentarlo o escríbeme a fortea.gerard@mail.com.',
        nameError: 'Escribe tu nombre (mínimo 2 caracteres).',
        emailError: 'Escribe una dirección de correo válida, como nombre@ejemplo.es.',
        needError: 'Cuéntame qué necesitas (mínimo 10 caracteres).',
      },
      vos: {
        heading: 'Escribidme',
        need: '¿Qué necesitáis?',
        note: 'Solo uso estos datos para responderos.',
        doneTitle: '¡He recibido vuestro mensaje!',
        doneTitleNamed: '¡Gracias, {name}! He recibido vuestro mensaje.',
        doneText: 'En breve me pongo en contacto con vosotros.',
        sendFailed: 'No se ha podido enviar. Escribidme a fortea.gerard@mail.com.',
        offline: 'No hay conexión. Volved a intentarlo o escribidme a fortea.gerard@mail.com.',
        nameError: 'Escribid vuestro nombre (mínimo 2 caracteres).',
        emailError: 'Escribid una dirección de correo válida, como nombre@ejemplo.es.',
        needError: 'Contadme qué necesitáis (mínimo 10 caracteres).',
      },
    },
  },

  legal: {
    navLabel: 'Legal',
    notice: 'Aviso legal',
    privacy: 'Privacidad',
  },

  legalPage: {
    updated: 'Última actualización:',
    backHome: 'Volver al inicio',
  },

  projectFooter: {
    navLabel: 'Otros proyectos',
    allProjects: 'Todos los proyectos',
    services: 'Programador web en Olot para pymes',
  },

  copy: {
    copy: 'Copiar',
    copied: 'Copiado',
    srCopied: 'Comando copiado',
  },
};

const en: Ui = {
  layout: {
    title: 'Gerard Fortea — Senior developer in la Garrotxa',
    description: 'Gerard Fortea, senior developer in la Garrotxa (Olot, Catalonia) who builds custom business software.',
    ogImageAlt: 'Gerard Fortea, senior developer in la Garrotxa: custom business software',
    skipLink: 'Skip to content',
  },

  header: {
    homeLabel: 'Gerard Fortea, home',
    navLabel: 'Main',
    projects: 'Projects',
    experience: 'Experience',
    services: 'Services',
    contact: 'Contact',
  },

  langSwitch: {
    label: 'Language',
  },

  contact: {
    title: "Let's talk",
    email: 'Email',
    phone: 'Phone',
    nameField: 'Name',
    emailField: 'Email',
    phoneField: 'Phone (optional)',
    honeypot: 'Leave this field empty',
    send: 'Send message',
    sending: 'Sending…',
    privacy: 'Privacy',
    sendAnother: 'Send another one',
    voice: {
      tu: {
        heading: 'Write to me',
        need: 'What do you need?',
        note: 'I only use this information to reply to you.',
        doneTitle: 'I got your message!',
        doneTitleNamed: 'Thanks, {name}! I got your message.',
        doneText: "I'll get back to you soon.",
        sendFailed: "The message couldn't be sent. Email me at fortea.gerard@mail.com.",
        offline: 'No connection. Try again or email me at fortea.gerard@mail.com.',
        nameError: 'Enter your name (at least 2 characters).',
        emailError: 'Enter a valid email address, like name@example.com.',
        needError: 'Tell me what you need (at least 10 characters).',
      },
      vos: {
        heading: 'Write to me',
        need: 'What do you need?',
        note: 'I only use this information to reply to you.',
        doneTitle: 'I got your message!',
        doneTitleNamed: 'Thanks, {name}! I got your message.',
        doneText: "I'll get back to you soon.",
        sendFailed: "The message couldn't be sent. Email me at fortea.gerard@mail.com.",
        offline: 'No connection. Try again or email me at fortea.gerard@mail.com.',
        nameError: 'Enter your name (at least 2 characters).',
        emailError: 'Enter a valid email address, like name@example.com.',
        needError: 'Tell me what you need (at least 10 characters).',
      },
    },
  },

  legal: {
    navLabel: 'Legal',
    notice: 'Legal notice',
    privacy: 'Privacy',
  },

  legalPage: {
    updated: 'Last updated:',
    backHome: 'Back to home',
  },

  projectFooter: {
    navLabel: 'Other projects',
    allProjects: 'All projects',
    services: 'Web developer in Olot for small businesses',
  },

  copy: {
    copy: 'Copy',
    copied: 'Copied',
    srCopied: 'Command copied',
  },
};

export const ui: Record<Lang, Ui> = { ca, es, en };

/** Shared strings for `lang`. */
export const useUi = (lang: Lang): Ui => ui[lang];
