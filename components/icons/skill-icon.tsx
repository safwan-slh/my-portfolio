import type { ComponentType, CSSProperties } from "react"
import { Code2 } from "lucide-react"
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhpmyadmin,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

import { VsCodeIcon } from "@/components/icons/vscode-icon"

type IconComponent = ComponentType<{
  className?: string
  style?: CSSProperties
}>

interface BrandIcon {
  Icon: IconComponent
  /** Used as a hover accent so the default state stays monochrome. */
  color: string
}

/**
 * Brand mark for each skill.
 *
 * Logos render in `currentColor` by default (clean and readable in both
 * themes) and light up in their brand color on hover. Monochrome brands
 * such as Next.js and GitHub use `var(--foreground)` so they flip with
 * the active theme instead of disappearing.
 */
const brandIcons: Record<string, BrandIcon> = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#663399" },
  javascript: { Icon: SiJavascript, color: "#C9A800" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#0E86A8" },
  nextjs: { Icon: SiNextdotjs, color: "var(--foreground)" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  shadcn: { Icon: SiShadcnui, color: "var(--foreground)" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E" },
  phpmyadmin: { Icon: SiPhpmyadmin, color: "#6C78AF" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "var(--foreground)" },
  vscode: { Icon: VsCodeIcon, color: "#007ACC" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
}

/** Brand accent color for a skill, falling back to the foreground color. */
export function skillBrandColor(id: string) {
  return brandIcons[id]?.color ?? "var(--foreground)"
}

export function SkillIcon({
  id,
  className,
}: {
  id: string
  className?: string
}) {
  const Icon = brandIcons[id]?.Icon ?? Code2

  return <Icon className={className} aria-hidden="true" />
}
