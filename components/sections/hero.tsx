import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/shared/section"
import { Reveal } from "@/components/shared/reveal"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <Section id="home" className="pt-10 sm:pt-16 lg:pt-20">
      <Reveal>
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">{siteConfig.title}</p>
            <p className="text-base text-muted-foreground max-w-2xl">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}