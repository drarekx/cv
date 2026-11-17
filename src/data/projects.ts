export type ProjectSlug = 'canconers' | 'sepa-generator' | 'xml-viewer' | 'clientitos' | 'chordy' | 'ledly' | 'wallpy' | 'atajoly' | 'terminaly' | 'casino-tortella' | 'combat-glosa';

export interface Project {
  slug: ProjectSlug;
  name: string;
  kind: 'mac' | 'web' | 'tool';
  /** Mac apps: release version. */
  version?: string;
  /** Public repo (Mac apps). The web projects' repos are private. */
  repo?: string;
  install?: string;
  /** Live site (web projects). */
  url?: string;
}

export const projects: Project[] = [
  {
    slug: 'canconers',
    name: 'Cançoners',
    kind: 'mac',
    version: 'v1.5.10',
    repo: 'https://github.com/drarekx/songery',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/songery/main/install.sh | bash',
  },
  {
    slug: 'sepa-generator',
    name: 'sepa-gen',
    kind: 'web',
    url: 'https://sepa-generator.mrdrarek.es/',
  },
  {
    slug: 'xml-viewer',
    name: 'XML Viewer',
    kind: 'web',
    url: 'https://xml-viewer.mrdrarek.es/',
  },
  {
    slug: 'clientitos',
    name: 'Clientitos',
    kind: 'tool',
  },
  {
    slug: 'chordy',
    name: 'Chordy',
    kind: 'mac',
    version: 'v1.2.1',
    repo: 'https://github.com/drarekx/Chordy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Chordy/main/install.sh | bash',
  },
  {
    slug: 'ledly',
    name: 'Ledly',
    kind: 'mac',
    version: 'v1.0.0',
    repo: 'https://github.com/drarekx/ledly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/ledly/main/install.sh | bash',
  },
  {
    slug: 'wallpy',
    name: 'Wallpy',
    kind: 'mac',
    version: 'v1.10.0',
    repo: 'https://github.com/drarekx/Wallpy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Wallpy/main/install.sh | bash',
  },
  {
    slug: 'atajoly',
    name: 'Atajoly',
    kind: 'mac',
    version: 'v1.2.0',
    repo: 'https://github.com/drarekx/atajoly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/atajoly/main/install.sh | bash',
  },
  {
    slug: 'terminaly',
    name: 'Terminaly',
    kind: 'mac',
    version: 'v0.6.4',
    repo: 'https://github.com/drarekx/terminaly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/terminaly/main/install.sh | bash',
  },
  {
    slug: 'casino-tortella',
    name: 'Casino de Tortellà',
    kind: 'web',
    url: 'https://casino.mrdrarek.es/',
  },
  {
    slug: 'combat-glosa',
    name: 'Combat de Glosa',
    kind: 'web',
    url: 'https://combatglosa.casinotortella.cat/',
  },
];

export const project = (slug: ProjectSlug) => projects.find((p) => p.slug === slug)!;
