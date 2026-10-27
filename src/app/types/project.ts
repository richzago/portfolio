export type ProjectCategory = "Back-end" | "Front-end" | "Full Stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;

  year: number;
  updatedYear?: number;

  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}
