/**
 * /avis-legal texts (src/views/AvisLegal.astro). Legal text: translations must say exactly the same as the Catalan.
 * Names, NIF, address and contact details are not translated (they are written in the view).
 *
 * `html` strings are rendered as HTML; write links with the Catalan path, the view localizes them.
 */
import type { Lang } from '../index';

const ca = {
  title: 'Avís legal',
  description: "Dades del titular del web gerardfortea.com i condicions d'ús.",
  updated: '12 de novembre de 2026',

  intro:
    "En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), aquestes són les dades del titular d'aquest lloc web.",

  // Owner details: the labels of the table
  holder: {
    title: 'Titular',
    name: 'Nom',
    nif: 'NIF',
    address: 'Domicili',
    email: 'Correu',
    phone: 'Telèfon',
    web: 'Web',
  },

  // The rest of the notice, one entry per heading
  sections: [
    {
      title: 'Objecte',
      html: 'Aquest web presenta el currículum professional de Gerard Fortea, els serveis de programació web i consultoria tecnològica que ofereix i una selecció de projectes propis i per a tercers.',
    },
    {
      title: "Condicions d'ús",
      html: "L'accés al web és gratuït i no requereix registre. Qui el visita es compromet a fer-ne un ús lícit i a no fer servir el formulari de contacte per enviar publicitat no sol·licitada ni continguts il·lícits.",
    },
    {
      title: 'Propietat intel·lectual',
      html: "Els textos, el disseny i el codi d'aquest web són de Gerard Fortea, llevat que s'indiqui el contrari. Els noms, logotips i imatges dels projectes de tercers que s'hi mostren (com el Casino de Tortellà, el Combat de Glosa de Tortellà o Cia Nom Provisional) pertanyen als seus titulars i s'utilitzen només per presentar la feina feta per a ells.",
    },
    {
      title: 'Enllaços externs',
      html: "El web conté enllaços a llocs de tercers. Gerard Fortea no es fa responsable dels continguts ni de les polítiques d'aquests llocs.",
    },
    {
      title: 'Protecció de dades',
      html: "El tractament de les dades que es facilitin a través del formulari de contacte s'explica a la <a href=\"/privacitat\">política de privacitat</a>.",
    },
    {
      title: 'Legislació aplicable',
      html: 'Aquest avís legal es regeix per la legislació espanyola.',
    },
  ],
};

export type AvisLegalText = typeof ca;

const es: AvisLegalText = {
  title: 'Aviso legal',
  description: 'Datos del titular de la web gerardfortea.com y condiciones de uso.',
  updated: '12 de noviembre de 2026',

  intro:
    'En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), estos son los datos del titular de este sitio web.',

  holder: {
    title: 'Titular',
    name: 'Nombre',
    nif: 'NIF',
    address: 'Domicilio',
    email: 'Correo',
    phone: 'Teléfono',
    web: 'Web',
  },

  sections: [
    {
      title: 'Objeto',
      html: 'Esta web presenta el currículum profesional de Gerard Fortea, los servicios de programación web y consultoría tecnológica que ofrece y una selección de proyectos propios y para terceros.',
    },
    {
      title: 'Condiciones de uso',
      html: 'El acceso a la web es gratuito y no requiere registro. Quien la visita se compromete a hacer un uso lícito de ella y a no utilizar el formulario de contacto para enviar publicidad no solicitada ni contenidos ilícitos.',
    },
    {
      title: 'Propiedad intelectual',
      html: 'Los textos, el diseño y el código de esta web son de Gerard Fortea, salvo que se indique lo contrario. Los nombres, logotipos e imágenes de los proyectos de terceros que se muestran en ella (como el Casino de Tortellà, el Combat de Glosa de Tortellà o Cia Nom Provisional) pertenecen a sus titulares y se utilizan solo para presentar el trabajo hecho para ellos.',
    },
    {
      title: 'Enlaces externos',
      html: 'La web contiene enlaces a sitios de terceros. Gerard Fortea no se hace responsable de los contenidos ni de las políticas de esos sitios.',
    },
    {
      title: 'Protección de datos',
      html: 'El tratamiento de los datos que se faciliten a través del formulario de contacto se explica en la <a href="/privacitat">política de privacidad</a>.',
    },
    {
      title: 'Legislación aplicable',
      html: 'Este aviso legal se rige por la legislación española.',
    },
  ],
};

const en: AvisLegalText = {
  title: 'Legal notice',
  description: 'Details of the owner of the gerardfortea.com website and terms of use.',
  updated: 'November 12, 2026',

  intro:
    'In compliance with Article 10 of Spanish Law 34/2002 on information society services and electronic commerce (LSSI-CE), these are the details of the owner of this website.',

  holder: {
    title: 'Owner',
    name: 'Name',
    nif: 'Tax ID (NIF)',
    address: 'Address',
    email: 'Email',
    phone: 'Phone',
    web: 'Website',
  },

  sections: [
    {
      title: 'Purpose',
      html: "This website presents Gerard Fortea's professional CV, the web development and technology consulting services he offers, and a selection of his own projects and projects for third parties.",
    },
    {
      title: 'Terms of use',
      html: 'Access to the website is free and does not require registration. Visitors agree to use it lawfully and not to use the contact form to send unsolicited advertising or unlawful content.',
    },
    {
      title: 'Intellectual property',
      html: 'The texts, design and code of this website belong to Gerard Fortea, unless otherwise stated. The names, logos and images of the third-party projects shown on it (such as the Casino de Tortellà, the Combat de Glosa de Tortellà or Cia Nom Provisional) belong to their owners and are used only to present the work done for them.',
    },
    {
      title: 'External links',
      html: 'The website contains links to third-party sites. Gerard Fortea is not responsible for the content or the policies of those sites.',
    },
    {
      title: 'Data protection',
      html: 'How the data provided through the contact form is processed is explained in the <a href="/privacitat">privacy policy</a>.',
    },
    {
      title: 'Governing law',
      html: 'This legal notice is governed by Spanish law.',
    },
  ],
};

export const avisLegal: Record<Lang, AvisLegalText> = { ca, es, en };
