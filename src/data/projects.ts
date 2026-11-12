export type ProjectSlug = 'canconers' | 'ledly' | 'wallpy' | 'atajoly' | 'terminaly' | 'casino-tortella' | 'combat-glosa';

export interface Project {
  slug: ProjectSlug;
  name: string;
  kind: 'mac' | 'web';
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
    version: 'v0.5.0',
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
