import { Section } from "@/components/shared/section"
import { Heading } from "@/components/shared/heading"
import { Reveal } from "@/components/shared/reveal"
import { skills } from "@/data/skills"
import { Badge } from "@/components/ui/badge"

const categories = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Others",
  others: "Others",
} as const

export function Skills() {
  const groupedSkills = Object.entries(
    skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, typeof skills>)
  )

  return (
    <Section id="skills">
      <Reveal>
        <div className="flex flex-col gap-10">
          <Heading title="Skills" subtitle="Technologies I work with" />
          <div className="flex flex-col gap-8">
            {groupedSkills.map(([category, items], index) => (
              <Reveal key={category} delay={index * 0.05}>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold capitalize">
                    {categories[category as keyof typeof categories] || category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill.id} variant="secondary" className="px-3 py-1.5 text-sm rounded-md">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}