import { cn } from "@/lib/utils"

interface HeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function Heading({ title, subtitle, className }: HeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}