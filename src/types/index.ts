export interface Skill {
  name: string;
  category: 'Programming' | 'Web' | 'Databases' | 'Tools' | 'Engineering' | 'AI/ML';
}

export interface Project {
  id: string;
  title: string;
  period: string;
  technologies: string[];
  description: string;
  badge?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface Achievement {
  emoji: string;
  title: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  period?: string;
  id?: string;
  topics: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  period: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  portfolio: string;
}
