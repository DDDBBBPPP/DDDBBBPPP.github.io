export interface StackCategory {
  id: string;
  titleKey: string;
  technologies: string[];
}

export const stackCategories: StackCategory[] = [
  {
    id: 'frontend',
    titleKey: 'stack.categories.frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Ionic', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    titleKey: 'stack.categories.backend',
    technologies: ['PHP', 'Laravel', 'Java', 'Spring Boot'],
  },
  {
    id: 'databases',
    titleKey: 'stack.categories.databases',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'tools-infrastructure',
    titleKey: 'stack.categories.toolsInfrastructure',
    technologies: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'AWS', 'Terraform', 'phpMyAdmin'],
  },
];
