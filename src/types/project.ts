export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  categories: string[];
  year: number;
  featured: boolean;
  description: string;
  role: string;
  image: string;
  gallery: string[];
  technologies: string[];
  links: ProjectLinks;
  overview: string;
  context: string;
  problem: string;
  process: string;
  result: string;
  metrics?: ProjectMetric[];
}

export type ProjectCategory =
  | 'ALL'
  | 'SOFTWARE'
  | 'DATA'
  | 'BI'
  | 'AI'
  | 'UI/UX'
  | 'MOBILE'
  | 'EXPERIMENTAL';
