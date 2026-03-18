export interface Experience {
  date: string;
  type: string;
  title: string;
  company: string;
  location: string;
  tasks: string[];
}

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  repoLink?: string;
  pdfLink?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  logo: string;
  category: string;
}

export interface GraphicWork {
  title: string;
  image: string;
  description: string;
  type: string;
}

export interface PortfolioData {
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  graphicPortfolio: GraphicWork[];
}