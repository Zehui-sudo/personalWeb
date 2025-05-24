export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  tags: string[];
  demoLink?: string;
  repoLink?: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  learnings: string[];
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readTime: number;
}

export interface AITool {
  id: string;
  name: string;
  logo: string;
  category: string;
  link: string;
}

export interface Hobby {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface PhotoWork {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}