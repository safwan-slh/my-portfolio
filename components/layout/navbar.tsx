"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Briefcase, ChevronRight, GitBranch, Mail, Menu } from "lucide-react";

import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", href: siteConfig.links.github, icon: GitBranch },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: Briefcase },
  { name: "Email", href: siteConfig.links.email, icon: Mail },
].filter((link) => Boolean(link.href));

export function Navbar() {
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(
    () => siteConfig.nav.map((item) => item.href.replace("#", "")),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center space-x-2 border rounded-full px-8 py-2"
        >
          <span className="text-lg font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium border rounded-full p-1">
          {siteConfig.nav.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 transition-colors",
                  isActive
                    ? "text-foreground border rounded-full"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-2 border rounded-full p-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="rounded-full p-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] gap-0 p-0 sm:max-w-sm"
            >
              <SheetHeader className="border-b px-6 py-5 pr-12 text-left">
                <SheetTitle className="text-base font-bold tracking-tight">
                  {siteConfig.name}
                </SheetTitle>
                <SheetDescription className="text-xs">
                  {siteConfig.title}
                </SheetDescription>
              </SheetHeader>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  {siteConfig.nav.map((item, index) => {
                    const isActive =
                      activeSection === item.href.replace("#", "");
                    return (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            aria-current={isActive ? "true" : undefined}
                            className={cn(
                              "group flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors",
                              isActive
                                ? "bg-accent/60 text-accent-foreground border"
                                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={cn(
                                  "font-mono text-xs transition-colors",
                                  isActive
                                    ? "text-primary"
                                    : "text-muted-foreground/60",
                                )}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              {item.name}
                            </span>
                            <ChevronRight
                              className={cn(
                                "size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100",
                                isActive && "translate-x-0 opacity-100",
                              )}
                            />
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <SheetFooter className="gap-4 border-t px-6 py-5">
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      asChild
                      variant="outline"
                      size="icon"
                      className="size-10 rounded-full"
                    >
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.name}
                      >
                        <link.icon className="size-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full">
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
