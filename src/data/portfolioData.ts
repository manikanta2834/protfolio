import { Skill, Project, Experience, Achievement, Certification, Education, SocialLinks } from '../types';

export const personalInfo = {
  name: "Manikanta Nalam",
  location: "Chennai, India",
  phone: "+91 7036929246",
  email: "manikanta172834@gmail.com",
  tagline: "Computer Science Undergraduate (AI & Data Science) | Software Engineer Intern",
  subTagline: "Building intelligent, secure, and scalable software experiences across full-stack development, AI/ML, and modern web technologies.",
  about: "CS undergrad specializing in AI & Data Science, hands-on full-stack builder. Strengths: Java, Python, SQL, React, Vue 3, Spring Boot, REST APIs, PostgreSQL, MySQL, MongoDB, Docker, Git/GitHub, AI/ML integration, application security, prompt engineering. Also strong in DSA, SDLC, open-source dev.",
  currentlyBuilding: [
    "Full-stack engineering",
    "AI/ML integration",
    "Generative AI",
    "Application security",
    "Open-source development",
    "Data Structures & Algorithms (DSA)"
  ]
};

export const socialLinks: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/manikanta-nalam",
  github: "https://github.com/manikanta2834",
  email: "mailto:manikanta172834@gmail.com",
  phone: "tel:+917036929246",
  portfolio: "https://manikanta-navigates-code.lovable.app"
};

export const skillsData: Skill[] = [
  // Programming
  { name: "Java", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "C", category: "Programming" },
  { name: "SQL", category: "Programming" },
  { name: "HTML/CSS", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "DSA", category: "Programming" },
  { name: "Problem Solving", category: "Programming" },
  { name: "Complexity Analysis", category: "Programming" },
  { name: "OOP", category: "Programming" },
  
  // Web
  { name: "React", category: "Web" },
  { name: "Vue 3", category: "Web" },
  { name: "Spring Boot", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },
  { name: "REST APIs", category: "Web" },
  
  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  
  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  
  // Engineering
  { name: "SDLC", category: "Engineering" },
  { name: "Automated Testing", category: "Engineering" },
  { name: "Debugging", category: "Engineering" },
  { name: "JWT", category: "Engineering" },
  { name: "reCAPTCHA v3", category: "Engineering" },
  { name: "Cloudflare Turnstile", category: "Engineering" },
  
  // AI/ML
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "Spring AI", category: "AI/ML" },
  { name: "Ollama", category: "AI/ML" },
  { name: "Generative AI", category: "AI/ML" },
  { name: "Prompt Engineering", category: "AI/ML" }
];

export const experienceData: Experience[] = [
  {
    role: "Open Source Software Intern",
    company: "COSS-IN",
    location: "Remote",
    period: "Jun–Jul 2026",
    bullets: [
      "Built full-stack Website Monitoring System (SDLC-driven).",
      "Frontend: Vue 3 + Tailwind; Backend: Spring Boot + Java 17; REST APIs; PostgreSQL; JWT auth; Google reCAPTCHA v3; Cloudflare Turnstile; app security focus."
    ],
    skills: ["Vue 3", "Tailwind CSS", "Spring Boot", "Java 17", "PostgreSQL", "JWT", "reCAPTCHA v3", "Cloudflare Turnstile"]
  }
];

export const projectsData: Project[] = [
  {
    id: "website-monitoring",
    title: "Website Monitoring System",
    period: "Jun–Jul 2026",
    technologies: ["Vue 3", "Tailwind", "Spring Boot", "Java 17", "PostgreSQL", "Ollama", "Spring AI", "JWT", "reCAPTCHA v3", "Cloudflare Turnstile"],
    description: "Sandbox monitoring system built full SDLC; AI-assisted monitoring via Ollama/Spring AI; secured with JWT/reCAPTCHA/Turnstile. No verified repo/live link."
  },
  {
    id: "sbi-redesign",
    title: "SBI Web App UI/UX Redesign",
    period: "Feb 2026",
    technologies: ["React", "Tailwind CSS"],
    description: "Redesigned SBI web app navigation/UX flow.",
    badge: "1st Prize — UX Surgery: Interface Redesign Sprint, IEEE Computer Society @ Vel Tech."
  },
  {
    id: "tech-stack-advisor",
    title: "Tech Stack Advisor",
    period: "Ongoing",
    technologies: ["Python", "Scikit-learn", "Gradio", "Docker", "Hugging Face Spaces"],
    description: "ML recommendation engine for optimal tech stacks; Gradio UI; Dockerized."
  },
  {
    id: "ai-tourist-guide",
    title: "AI Tourist Guide",
    period: "Feb 2026",
    technologies: ["React", "Tailwind", "MongoDB", "AI/ML recommendation logic"],
    description: "Smart travel planner (preferences/budget/time) with real-time weather/traffic/event data. Built at 24-hr hackathon, Jeppiaar Institute of Technology (HACK FUSION 1.0)."
  }
];

export const achievementsData: Achievement[] = [
  {
    emoji: "🏆",
    title: "1st Place — UX Surgery: Interface Redesign Sprint",
    description: "Vel Tech & IEEE CS, Feb 2026."
  },
  {
    emoji: "🥇",
    title: "5th/47 — Software Security & Vulnerability Assessment Bootcamp",
    description: "IIITDM Kancheepuram."
  },
  {
    emoji: "🛡",
    title: "National-level competitor — OS Bug Bounty Challenge",
    description: "C-DAC Chennai, Jul 2026."
  },
  {
    emoji: "💻",
    title: "Selected contributor — Elite Coders Summer of Code",
    description: "Ongoing."
  },
  {
    emoji: "🚀",
    title: "Hackathon participant — HACK FUSION 1.0",
    description: "AI Tourist Guide development."
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Mastering Software Security & Vulnerability Assessment",
    issuer: "IIITDM Kancheepuram (ISEA Phase-III, MeitY, Govt. of India)",
    period: "6-day bootcamp",
    topics: ["Secure Coding", "Vulnerability Analysis", "Nuclei", "Grype", "Falco", "Ghidra"]
  },
  {
    title: "Build with AI Bootcamp 2026",
    issuer: "Google for Developers & Hack2Skill, Chennai",
    period: "Aug 2026",
    id: "2026H2S08WAICHNN-P00419",
    topics: ["GenAI", "AI Agents", "production AI architectures"]
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill & Moneycontrol",
    topics: ["Prompt Engineering", "Custom GPTs", "AI Bots/Workflows/Agents"]
  },
  {
    title: "MERN Stack: Launch Your Startup Idea",
    issuer: "DevTown, w/ GDG VIT-AP & MS Student Chapter MSIT",
    topics: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Complete MySQL Bootcamp",
    issuer: "Udemy/Sheikh Coding Institute",
    period: "Sep 2025",
    topics: ["SQL", "joins", "constraints", "DB management"]
  },
  {
    title: "Introduction to C",
    issuer: "SoloLearn",
    topics: ["Variables", "Control flow", "Arrays", "Functions"]
  },
  {
    title: "Python Development & Data Science: Variables and Data Types",
    issuer: "Udemy",
    topics: ["Python variables", "Basic operators", "Data types"]
  },
  {
    title: "Complete MS Office Masterclass",
    issuer: "Udemy/Learnity IT",
    period: "Aug 2025",
    topics: ["Word", "Excel", "PowerPoint", "Outlook"]
  },
  {
    title: "IEEE STEP 2025",
    issuer: "IEEE",
    topics: ["Leadership", "Innovation", "Engineering best practices"]
  }
];

export const educationData: Education[] = [
  {
    degree: "B.Tech CSE (AI & Data Science)",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science & Technology, Chennai",
    location: "Chennai, India",
    period: "Jul 2024–Jul 2028"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya College of Education",
    period: "Jul 2022–Mar 2024"
  }
];
