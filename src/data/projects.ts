export interface Project {
  slug: 'wallpy' | 'atajoly' | 'terminaly';
  name: string;
  version: string;
  repo: string;
  install: string;
}

export const projects: Project[] = [
  {
    slug: 'wallpy',
    name: 'Wallpy',
    version: 'v1.10.0',
    repo: 'https://github.com/drarekx/Wallpy',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/Wallpy/main/install.sh | bash',
  },
  {
    slug: 'atajoly',
    name: 'Atajoly',
    version: 'v1.2.0',
    repo: 'https://github.com/drarekx/atajoly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/atajoly/main/install.sh | bash',
  },
  {
    slug: 'terminaly',
    name: 'Terminaly',
    version: 'v0.5.0',
    repo: 'https://github.com/drarekx/terminaly',
    install: 'curl -fsSL https://raw.githubusercontent.com/drarekx/terminaly/main/install.sh | bash',
  },
];

export const project = (slug: Project['slug']) => projects.find((p) => p.slug === slug)!;
