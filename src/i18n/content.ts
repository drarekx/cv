export const locales = ['ca', 'es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = {
  ca: '/',
  es: '/es/',
  en: '/en/',
};

type Localized<T> = Record<Locale, T>;

export const ui: Localized<{
  title: string;
  description: string;
  ogLocale: string;
  nav: { home: string; cv: string; projects: string };
  navLabel: string;
  langLabel: string;
  role: string;
  summary: string;
  experience: string;
  education: string;
  tech: string;
  languages: string;
  languageList: string[];
  present: string;
  copy: string;
  copied: string;
  repo: string;
  download: string;
  allRepos: string;
  power: string;
}> = {
  ca: {
    title: 'Gerard Fortea — Desenvolupador web Fullstack',
    description: "CV i projectes de Gerard Fortea Castellsague, desenvolupador web Fullstack a la Garrotxa amb més de 15 anys d'experiència.",
    ogLocale: 'ca_ES',
    nav: { home: 'inici', cv: 'cv', projects: 'projectes' },
    navLabel: 'Seccions',
    langLabel: 'Idioma',
    role: 'Desenvolupador web Fullstack',
    summary: "Programador amb més de 15 anys d'experiència en el desenvolupament web.",
    experience: 'Experiència',
    education: 'Formació',
    tech: 'Tecnologies',
    languages: 'Idiomes',
    languageList: ['Català · natiu', 'Castellà · natiu', 'Anglès · B1'],
    present: 'actualitat',
    copy: 'copiar',
    copied: 'copiat',
    repo: 'repositori',
    download: 'descarregar',
    allRepos: 'Tots els repositoris a github.com/drarekx',
    power: 'Encendre o apagar la pantalla',
  },
  es: {
    title: 'Gerard Fortea — Desarrollador web Fullstack',
    description: 'CV y proyectos de Gerard Fortea Castellsague, desarrollador web Fullstack en la Garrotxa con más de 15 años de experiencia.',
    ogLocale: 'es_ES',
    nav: { home: 'inicio', cv: 'cv', projects: 'proyectos' },
    navLabel: 'Secciones',
    langLabel: 'Idioma',
    role: 'Desarrollador web Fullstack',
    summary: 'Programador con más de 15 años de experiencia en desarrollo web.',
    experience: 'Experiencia',
    education: 'Formación',
    tech: 'Tecnologías',
    languages: 'Idiomas',
    languageList: ['Catalán · nativo', 'Castellano · nativo', 'Inglés · B1'],
    present: 'actualidad',
    copy: 'copiar',
    copied: 'copiado',
    repo: 'repositorio',
    download: 'descargar',
    allRepos: 'Todos los repositorios en github.com/drarekx',
    power: 'Encender o apagar la pantalla',
  },
  en: {
    title: 'Gerard Fortea — Full Stack web developer',
    description: 'CV and projects of Gerard Fortea Castellsague, Full Stack web developer based in la Garrotxa with more than 15 years of experience.',
    ogLocale: 'en_GB',
    nav: { home: 'home', cv: 'cv', projects: 'projects' },
    navLabel: 'Sections',
    langLabel: 'Language',
    role: 'Full Stack web developer',
    summary: 'Web developer with more than 15 years of experience.',
    experience: 'Experience',
    education: 'Education',
    tech: 'Technologies',
    languages: 'Languages',
    languageList: ['Catalan · native', 'Spanish · native', 'English · B1'],
    present: 'present',
    copy: 'copy',
    copied: 'copied',
    repo: 'repository',
    download: 'download',
    allRepos: 'All repositories at github.com/drarekx',
    power: 'Turn the screen on or off',
  },
};

export const contact = {
  location: 'Maià de Montcal, la Garrotxa',
  email: 'fortea.gerard@mail.com',
  phone: '+34 616 27 10 11',
  linkedin: 'https://www.linkedin.com/in/gerard-fortea-a3863741/',
  github: 'https://github.com/drarekx',
};

export const skills = ['PHP', 'JavaScript', 'TypeScript', 'Java', 'Vue.js', 'HTML', 'CSS / Tailwind', 'MySQL'];

export const experience: {
  from: string;
  to: string | null;
  company: string;
  location: string;
  role: Localized<string>;
  tasks: Localized<string[]>;
}[] = [
  {
    from: '01/2025',
    to: null,
    company: 'Labsystems Arquitectura i Gestió',
    location: 'Barcelona',
    role: { ca: 'Desenvolupador sènior Full Stack', es: 'Desarrollador sénior Full Stack', en: 'Senior Full Stack developer' },
    tasks: {
      ca: ['Analista i programador fullstack.', "Projectes web principalment de l'àmbit turístic, frontend i backend.", "Anàlisi de requeriments, disseny de solucions i desenvolupament d'aplicacions web a mida."],
      es: ['Analista y programador fullstack.', 'Proyectos web principalmente del ámbito turístico, frontend y backend.', 'Análisis de requisitos, diseño de soluciones y desarrollo de aplicaciones web a medida.'],
      en: ['Full stack analyst and developer.', 'Web projects, mainly in tourism, covering frontend and backend.', 'Requirements analysis, solution design and custom web application development.'],
    },
  },
  {
    from: '02/2020',
    to: '05/2023',
    company: 'Editorial Oceano',
    location: 'Barcelona',
    role: { ca: 'Desenvolupador sènior Front-end', es: 'Desarrollador sénior Front-end', en: 'Senior Front-end developer' },
    tasks: {
      ca: ["Aplicacions web per a la gestió d'alumnes.", 'Manteniment de llocs web.', "Suport en l'anàlisi i desenvolupament del backend."],
      es: ['Aplicaciones web para la gestión de alumnos.', 'Mantenimiento de sitios web.', 'Apoyo en el análisis y desarrollo del backend.'],
      en: ['Web applications for student management.', 'Website maintenance.', 'Support in backend analysis and development.'],
    },
  },
  {
    from: '09/2017',
    to: '02/2020',
    company: 'Labsystems Arquitectura i Gestió',
    location: 'Barcelona',
    role: { ca: 'Programador web sènior Full Stack', es: 'Programador web sénior Full Stack', en: 'Senior Full Stack web developer' },
    tasks: {
      ca: ['Gestió, anàlisi i desenvolupament de diferents negocis online.', 'Software per al sector vacacional.'],
      es: ['Gestión, análisis y desarrollo de distintos negocios online.', 'Software para el sector vacacional.'],
      en: ['Management, analysis and development of several online businesses.', 'Software for the holiday rental sector.'],
    },
  },
  {
    from: '09/2013',
    to: '09/2017',
    company: 'Gestión de Inmuebles Pimmo',
    location: 'Mataró',
    role: { ca: "Desenvolupador d'aplicacions web", es: 'Desarrollador de aplicaciones web', en: 'Web application developer' },
    tasks: {
      ca: ['Software intern de gestió immobiliària.', "Manteniment d'ordinadors i llocs web.", "Referent tecnològic de l'empresa."],
      es: ['Software interno de gestión inmobiliaria.', 'Mantenimiento de ordenadores y sitios web.', 'Referente tecnológico de la empresa.'],
      en: ['In-house real estate management software.', 'Computer and website maintenance.', 'Go-to person for technology in the company.'],
    },
  },
  {
    from: '01/2008',
    to: '03/2010',
    company: 'Sala Assessors Informàtics',
    location: 'Mataró',
    role: { ca: 'Desenvolupador web júnior', es: 'Desarrollador web júnior', en: 'Junior web developer' },
    tasks: {
      ca: ['Pàgines corporatives i del sector educació.', 'Ecommerces amb EBD.', 'Software de gestió SAGE.', "Migració de VB6 a .NET d'un TPV."],
      es: ['Páginas corporativas y del sector educación.', 'Ecommerces con EBD.', 'Software de gestión SAGE.', 'Migración de VB6 a .NET de un TPV.'],
      en: ['Corporate and education websites.', 'E-commerce sites with EBD.', 'SAGE management software.', 'VB6 to .NET migration of a POS system.'],
    },
  },
];

export const education: { period: string; center: string; title: Localized<string> }[] = [
  {
    period: '2024 – 2025',
    center: 'IOC',
    title: { ca: "Tècnic superior en Desenvolupament d'Aplicacions Web", es: 'Técnico superior en Desarrollo de Aplicaciones Web', en: 'Higher Technician in Web Application Development' },
  },
  {
    period: '2004 – 2007',
    center: 'Gesem',
    title: { ca: 'Tècnic superior en Informàtica de Gestió', es: 'Técnico superior en Informática de Gestión', en: 'Higher Technician in Business Computing' },
  },
];

export const projects: {
  name: string;
  stack: string;
  repo: string;
  download?: string;
  install?: string;
  description: Localized<string>;
  features: Localized<string[]>;
}[] = [
  {
    name: 'Wallpy',
    stack: 'Swift · macOS 14+',
    repo: 'https://github.com/drarekx/Wallpy',
    download: 'https://github.com/drarekx/Wallpy/releases/latest',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Wallpy/main/install.sh | bash',
    description: {
      ca: 'Fons de pantalla amb vídeo per a macOS. Viu a la barra de menú, posa un vídeo en bucle darrere de les finestres i es pausa sol quan no el veus.',
      es: 'Fondos de pantalla con vídeo para macOS. Vive en la barra de menú, pone un vídeo en bucle detrás de tus ventanas y se pausa solo cuando no lo ves.',
      en: 'Video wallpapers for macOS. Lives in the menu bar, plays a looping video behind your windows and pauses itself when you can’t see it.',
    },
    features: {
      ca: ['Fons de vídeo a totes les pantalles i Spaces', 'Descàrrega de YouTube i editor de bucles', 'Pausa automàtica per estalviar energia'],
      es: ['Fondos de vídeo en todas las pantallas y Spaces', 'Descarga de YouTube y editor de bucles', 'Pausa automática para ahorrar energía'],
      en: ['Video wallpapers on every display and Space', 'YouTube download and loop editor', 'Automatic pause to save energy'],
    },
  },
];
