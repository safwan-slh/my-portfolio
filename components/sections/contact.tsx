import { Section } from "@/components/shared/section"
import { Heading } from "@/components/shared/heading"
import { Reveal } from "@/components/shared/reveal"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="flex flex-col gap-10">
          <Heading title="Get In Touch" subtitle="Feel free to reach out for collaborations or just a friendly hello" />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Send me a message and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Write your message here..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Other Ways</CardTitle>
                <CardDescription>Prefer a different channel? Reach out directly.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {siteConfig.links.email && (
                  <Button asChild variant="outline" className="justify-start">
                    <Link href={siteConfig.links.email}>
                      <Mail className="mr-2 h-4 w-4" />
                      {siteConfig.links.email.replace("mailto:", "")}
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}