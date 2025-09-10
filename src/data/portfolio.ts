import { FeaturedProject, Skill, Experience, ContactInfo } from '../types'

export const portfolioData = {
  name: "Your Name",
  tagline: "Full-Stack Developer | C++98 | Django | Docker | Web Applications",
  about: `I'm a passionate Full-Stack Developer and a student at 1337 Coding School (42 Network). 
  I specialize in backend development with expertise in C++, Django, and modern web applications. 
  My journey in software development has been driven by a deep curiosity for solving complex problems 
  and building efficient, scalable solutions.`,
  
  githubUsername: "your-github-username", // Replace with your actual GitHub username
  
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/your-github-username",
    linkedin: "https://linkedin.com/in/your-linkedin-profile",
  } as ContactInfo,
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "inception",
    title: "Inception",
    description: "A comprehensive Docker-based containerization project that demonstrates advanced container orchestration, multi-service architecture, and automated deployment workflows.",
    image: "/images/inception.jpg",
    techStack: ["Docker", "Docker Compose", "Nginx", "MariaDB", "WordPress", "Redis"],
    githubUrl: "https://github.com/your-github-username/inception",
    featured: true
  },
  {
    id: "webserver",
    title: "Webserver",
    description: "Custom HTTP server implementation in C++98 featuring CGI support, file upload handling, persistent connections, and robust error management.",
    image: "/images/webserver.jpg",
    techStack: ["C++98", "HTTP/1.1", "CGI", "Socket Programming", "Multiplexing"],
    githubUrl: "https://github.com/your-github-username/webserver",
    featured: true
  },
  {
    id: "ft_transcendence",
    title: "Ft_transcendence",
    description: "Full-stack web application (SPA) with real-time features, authentication system, game logic, and modern web technologies.",
    image: "/images/ft_transcendence.jpg",
    techStack: ["React", "TypeScript", "Django", "PostgreSQL", "WebSocket", "Docker"],
    githubUrl: "https://github.com/your-github-username/ft_transcendence",
    liveUrl: "https://ft-transcendence-demo.com",
    featured: true
  }
]

export const skills: Skill[] = [
  // Languages
  { name: "C++", icon: "devicon-cplusplus-plain", level: 90, category: "language" },
  { name: "Python", icon: "devicon-python-plain", level: 85, category: "language" },
  { name: "JavaScript", icon: "devicon-javascript-plain", level: 80, category: "language" },
  { name: "TypeScript", icon: "devicon-typescript-plain", level: 75, category: "language" },
  
  // Frameworks
  { name: "Django", icon: "devicon-django-plain", level: 85, category: "framework" },
  { name: "React", icon: "devicon-react-original", level: 80, category: "framework" },
  { name: "Node.js", icon: "devicon-nodejs-plain", level: 70, category: "framework" },
  
  // Tools
  { name: "Docker", icon: "devicon-docker-plain", level: 85, category: "tool" },
  { name: "Git", icon: "devicon-git-plain", level: 90, category: "tool" },
  { name: "Linux", icon: "devicon-linux-plain", level: 85, category: "tool" },
  
  // Databases
  { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 80, category: "database" },
  { name: "MySQL", icon: "devicon-mysql-plain", level: 75, category: "database" },
  { name: "Redis", icon: "devicon-redis-plain", level: 70, category: "database" },
  
  // Additional Skills
  { name: "REST APIs", icon: "devicon-express-original", level: 85, category: "tool" },
  { name: "Nginx", icon: "devicon-nginx-original", level: 75, category: "tool" },
  { name: "AWS", icon: "devicon-amazonwebservices-original", level: 65, category: "tool" },
]

export const experience: Experience[] = [
  {
    id: "1337",
    title: "Student Developer",
    company: "1337 Coding School (42 Network)",
    period: "2023 - Present",
    description: [
      "Intensive peer-to-peer learning program focusing on software engineering",
      "Completed projects in C++, system administration, and web development",
      "Collaborated on team projects using Git workflow and agile methodologies",
      "Developed problem-solving skills through algorithm challenges and peer evaluations"
    ],
    technologies: ["C++", "C", "Shell Scripting", "Git", "Docker", "Linux"]
  },
  {
    id: "internship",
    title: "Backend Developer Intern",
    company: "Tech Company",
    period: "2023 - 2023",
    description: [
      "Developed RESTful APIs using Django and Django REST Framework",
      "Implemented database optimization and caching strategies",
      "Collaborated with frontend team on API integration",
      "Participated in code reviews and agile development processes"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "Git"]
  }
]

export const education = {
  degree: "Software Engineering",
  school: "1337 Coding School (42 Network)",
  period: "2023 - Present",
  description: "Peer-to-peer learning program focused on software engineering, algorithms, and system administration."
}

