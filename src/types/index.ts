export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  created_at: string
  updated_at: string
  fork: boolean
  archived: boolean
}

export interface FeaturedProject {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'language' | 'framework' | 'tool' | 'database'
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

export interface ContactInfo {
  email: string
  github: string
  linkedin: string
  twitter?: string
}

