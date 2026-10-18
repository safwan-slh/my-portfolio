import Link from "next/link"
import { ExternalLink, GitBranch } from "lucide-react"

import { Section } from "@/components/shared/section"
import { Heading } from "@/components/shared/heading"
import { Reveal } from "@/components/shared/reveal"
import { projects } from "@/data/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <div className="flex flex-col gap-10">
          <Heading title="Projects" subtitle="A selection of my recent work" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.05}>
                <Card className="flex flex-col h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                      {project.featured && (
                        <Badge variant="default">Featured</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.github && (
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.github} target="_blank" rel="noreferrer">
                          <GitBranch className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.live && (
                      <Button asChild size="sm">
                        <Link href={project.live} target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}