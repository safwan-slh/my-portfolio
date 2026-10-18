import { Section } from "@/components/shared/section"
import { Heading } from "@/components/shared/heading"
import { Reveal } from "@/components/shared/reveal"
import { siteConfig } from "@/config/site"
import { GitBranch, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <div className="flex flex-col gap-8">
          <Heading
            title="About Me"
            subtitle="A passionate frontend developer focused on building beautiful, user-friendly web experiences."
          />
          <div className="prose prose-neutral dark:prose-invert max-w-3xl">
            <p>
              I'm a frontend developer with a passion for creating clean, minimal, and functional web applications.
              I love working with modern technologies like React, Next.js, TypeScript, and Tailwind CSS to bring ideas to life.
            </p>
            <p>
              When I'm not coding, I enjoy learning new things, exploring design trends, and building side projects.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.links.github && (
              <Button asChild variant="ghost" size="icon">
                <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  <GitBranch className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {siteConfig.links.linkedin && (
              <Button asChild variant="ghost" size="icon">
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                  <GitBranch className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {siteConfig.links.email && (
              <Button asChild variant="ghost" size="icon">
                <Link href={siteConfig.links.email}>
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}