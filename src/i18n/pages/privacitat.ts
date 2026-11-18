/**
 * /privacitat texts (src/views/Privacitat.astro). Voice: tu (Spanish: tú).
 * Legal text: translations must say exactly the same as the Catalan, no obligation added or dropped.
 *
 * `html` strings are rendered as HTML (paragraphs, lists, links); write links with the Catalan path,
 * the view localizes them.
 */
import type { Lang } from '../index';

const ca = {
  title: 'Política de privacitat',
  description: 'Com es tracten les dades que deixes al formulari de contacte de gerardfortea.com.',
  updated: '12 de novembre de 2026',

  intro:
    "Aquest web només recull dades personals quan algú omple el formulari de contacte. Aquí s'explica què se'n fa, d'acord amb el Reglament general de protecció de dades (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).",

  // One entry per heading, in page order
  sections: [
    {
      title: 'Qui és el responsable',
      html: '<p><strong>Gerard Fortea Castellsague</strong>, Maià de Montcal (Girona). Correu: <a href="mailto:fortea.gerard@mail.com">fortea.gerard@mail.com</a>. Totes les dades del titular són a l\'<a href="/avis-legal">avís legal</a>.</p>',
    },
    {
      title: 'Quines dades es recullen',
      html: "<ul><li>El nom, el correu electrònic i, si el vols donar, el telèfon.</li><li>El missatge que escrius.</li></ul><p>No es demanen dades especialment protegides. No escriguis al missatge informació que no calgui per a la consulta.</p>",
    },
    {
      title: 'Per a què es fan servir',
      html: "<p>Només per respondre la teva consulta i, si ho demanes, preparar-te una proposta. No s'envia publicitat ni es fan perfils, i no es prenen decisions automatitzades.</p>",
    },
    {
      title: 'Base legal',
      html: "<p>El teu consentiment en enviar el formulari (art. 6.1.a RGPD) i, si la consulta és per encarregar una feina, l'aplicació de mesures precontractuals a petició teva (art. 6.1.b RGPD).</p>",
    },
    {
      title: 'Quant temps es guarden',
      html: "<p>El temps necessari per atendre la consulta. Si no dona lloc a cap encàrrec, el missatge s'esborra en un màxim de 12 mesos. Si dona lloc a una relació professional, les dades es conserven mentre duri i, després, durant els terminis que fixa la llei.</p>",
    },
    {
      title: 'Qui hi té accés',
      html: "<p>Les dades no es cedeixen a ningú. Per fer funcionar el web i el correu s'utilitzen aquests proveïdors:</p><ul><li><strong>Vercel Inc.</strong> (allotjament del web i del formulari). Pot tractar dades als Estats Units, emparat pel Marc de privacitat de dades UE-EUA i per clàusules contractuals tipus.</li><li><strong>Google</strong> (Gmail, on arriben els missatges del formulari). Té les mateixes garanties per a les transferències internacionals.</li></ul>",
    },
    {
      title: 'Els teus drets',
      html: '<p>Pots demanar l\'accés, la rectificació o la supressió de les teves dades, oposar-te al tractament, demanar-ne la limitació o la portabilitat i retirar el consentiment quan vulguis, escrivint a <a href="mailto:fortea.gerard@mail.com">fortea.gerard@mail.com</a>. Si creus que no s\'han respectat els teus drets, pots presentar una reclamació a l\'Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es">aepd.es</a>).</p>',
    },
    {
      title: 'Cookies',
      html: "<p>Aquest web <strong>no utilitza cookies</strong> ni desa res al teu navegador, i no té cap eina d'analítica ni de seguiment. Les tipografies se serveixen des del mateix domini, sense connectar amb serveis de tercers.</p><p>Com qualsevol servidor, el de Vercel registra de manera tècnica l'adreça IP de les visites per seguretat i per detectar errors. Aquests registres no s'utilitzen per identificar ningú.</p>",
    },
  ],
};

export type PrivacitatText = typeof ca;

const es: PrivacitatText = {
  title: 'Política de privacidad',
  description: 'Cómo se tratan los datos que dejas en el formulario de contacto de gerardfortea.com.',
  updated: '12 de noviembre de 2026',

  intro:
    'Esta web solo recoge datos personales cuando alguien rellena el formulario de contacto. Aquí se explica qué se hace con ellos, de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).',

  sections: [
    {
      title: 'Quién es el responsable',
      html: '<p><strong>Gerard Fortea Castellsague</strong>, Maià de Montcal (Girona). Correo: <a href="mailto:fortea.gerard@mail.com">fortea.gerard@mail.com</a>. Todos los datos del titular están en el <a href="/avis-legal">aviso legal</a>.</p>',
    },
    {
      title: 'Qué datos se recogen',
      html: '<ul><li>El nombre, el correo electrónico y, si quieres darlo, el teléfono.</li><li>El mensaje que escribes.</li></ul><p>No se piden datos especialmente protegidos. No escribas en el mensaje información que no sea necesaria para la consulta.</p>',
    },
    {
      title: 'Para qué se usan',
      html: '<p>Solo para responder a tu consulta y, si lo pides, prepararte una propuesta. No se envía publicidad ni se elaboran perfiles, y no se toman decisiones automatizadas.</p>',
    },
    {
      title: 'Base legal',
      html: '<p>Tu consentimiento al enviar el formulario (art. 6.1.a RGPD) y, si la consulta es para encargar un trabajo, la aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD).</p>',
    },
    {
      title: 'Cuánto tiempo se guardan',
      html: '<p>El tiempo necesario para atender la consulta. Si no da lugar a ningún encargo, el mensaje se borra en un máximo de 12 meses. Si da lugar a una relación profesional, los datos se conservan mientras dure y, después, durante los plazos que fija la ley.</p>',
    },
    {
      title: 'Quién tiene acceso',
      html: '<p>Los datos no se ceden a nadie. Para que funcionen la web y el correo se utilizan estos proveedores:</p><ul><li><strong>Vercel Inc.</strong> (alojamiento de la web y del formulario). Puede tratar datos en Estados Unidos, amparado por el Marco de Privacidad de Datos UE-EE. UU. y por cláusulas contractuales tipo.</li><li><strong>Google</strong> (Gmail, donde llegan los mensajes del formulario). Tiene las mismas garantías para las transferencias internacionales.</li></ul>',
    },
    {
      title: 'Tus derechos',
      html: '<p>Puedes solicitar el acceso, la rectificación o la supresión de tus datos, oponerte al tratamiento, solicitar su limitación o su portabilidad y retirar el consentimiento cuando quieras, escribiendo a <a href="mailto:fortea.gerard@mail.com">fortea.gerard@mail.com</a>. Si crees que no se han respetado tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es">aepd.es</a>).</p>',
    },
    {
      title: 'Cookies',
      html: '<p>Esta web <strong>no utiliza cookies</strong> ni guarda nada en tu navegador, y no tiene ninguna herramienta de analítica ni de seguimiento. Las tipografías se sirven desde el mismo dominio, sin conectar con servicios de terceros.</p><p>Como cualquier servidor, el de Vercel registra de forma técnica la dirección IP de las visitas por seguridad y para detectar errores. Estos registros no se utilizan para identificar a nadie.</p>',
    },
  ],
};

const en: PrivacitatText = {
  title: 'Privacy policy',
  description: 'How the data you leave in the gerardfortea.com contact form is handled.',
  updated: 'November 12, 2026',

  intro:
    'This website only collects personal data when someone fills in the contact form. This page explains what is done with it, in accordance with the General Data Protection Regulation (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',

  sections: [
    {
      title: 'Who is the data controller',
      html: '<p><strong>Gerard Fortea Castellsague</strong>, Maià de Montcal (Girona). Email: <a href="mailto:fortea.gerard@mail.com">fortea.gerard@mail.com</a>. All the owner\'s details are in the <a href="/avis-legal">legal notice</a>.</p>',
    },
    {
      title: 'What data is collected',
      html: "<ul><li>Your name, your email address and, if you choose to give it, your phone number.</li><li>The message you write.</li></ul><p>No special categories of personal data are requested. Don't include in your message any information that isn't needed for your inquiry.</p>",
    },
    {
      title: 'What it is used for',
      html: '<p>Only to answer your inquiry and, if you ask for it, to prepare a proposal for you. No advertising is sent, no profiles are built and no automated decisions are made.</p>',
    },
    {
      title: 'Legal basis',
      html: '<p>Your consent when you send the form (Art. 6(1)(a) GDPR) and, if your inquiry is about commissioning work, taking pre-contractual steps at your request (Art. 6(1)(b) GDPR).</p>',
    },
    {
      title: 'How long it is kept',
      html: "<p>As long as needed to handle the inquiry. If it doesn't lead to any work, the message is deleted within 12 months at most. If it leads to a professional relationship, the data is kept while the relationship lasts and, after that, for the periods set by law.</p>",
    },
    {
      title: 'Who has access to it',
      html: '<p>The data is not shared with anyone. These providers are used to run the website and the email:</p><ul><li><strong>Vercel Inc.</strong> (hosting of the website and the form). It may process data in the United States, covered by the EU-U.S. Data Privacy Framework and by standard contractual clauses.</li><li><strong>Google</strong> (Gmail, where the form messages arrive). It has the same safeguards for international transfers.</li></ul>',
    },
    {
      title: 'Your rights',
      html: '<p>You can request access to, rectification or erasure of your data, object to its processing, request its restriction or portability, and withdraw your consent at any time by writing to <a href="mailto:fortea.gerard@mail.com">fortea.gerard@mail.com</a>. If you believe your rights have not been respected, you can file a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos, <a href="https://www.aepd.es">aepd.es</a>).</p>',
    },
    {
      title: 'Cookies',
      html: "<p>This website <strong>does not use cookies</strong> or store anything in your browser, and it has no analytics or tracking tools. Fonts are served from the same domain, without connecting to third-party services.</p><p>Like any server, Vercel's server logs visitors' IP addresses for technical reasons: security and error detection. These logs are not used to identify anyone.</p>",
    },
  ],
};

export const privacitat: Record<Lang, PrivacitatText> = { ca, es, en };
