import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Minimal & modern portfolio built with Next.js, TypeScript, Tailwind CSS and shadcn/ui.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourdomain.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Sample Project",
    description: "A clean, responsive web app showcasing best practices in frontend development.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-2",
    featured: false,
  },
]