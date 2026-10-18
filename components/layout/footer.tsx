import { siteConfig } from "@/config/site"
import { getCurrentYear } from "@/lib/current-year"
import { GitBranch, Mail } from "lucide-react"
import Link from "next/link"

export async function Footer() {
  const year = await getCurrentYear()

  return (
    <footer className="border-t py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>
          <div className="flex items-center gap-4">
            {siteConfig.links.github && (
              <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                <GitBranch className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            )}
            {siteConfig.links.linkedin && (
              <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                <GitBranch className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            )}
            {siteConfig.links.email && (
              <Link href={siteConfig.links.email}>
                <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            )}
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}