export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tech: string[]
  github?: string
  live?: string
  featured?: boolean
}

export interface Skill {
  id: string
  name: string
  category: "frontend" | "backend" | "tools" | "others"
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  location?: string
  description: string[]
}