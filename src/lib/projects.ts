import projectsData from '../data/projects.json';
import { Project, ProjectCategory } from '../types/project';

const projects: Project[] = projectsData as Project[];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const all = getAllProjects();
  const currentIndex = all.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return all[0];
  const nextIndex = (currentIndex + 1) % all.length;
  return all[nextIndex];
}

export function filterProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === 'ALL') {
    return projects;
  }
  return projects.filter((p) => {
    return (
      p.categories.includes(category) ||
      p.category.toUpperCase().includes(category)
    );
  });
}
