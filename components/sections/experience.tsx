import { Section } from "@/components/shared/section"
import { Heading } from "@/components/shared/heading"
import { Reveal } from "@/components/shared/reveal"
import { experiences } from "@/data/experience"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <div className="flex flex-col gap-10">
          <Heading title="Experience" subtitle="My professional journey" />
          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.05}>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.period}
                        {exp.location && ` • ${exp.location}`}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}