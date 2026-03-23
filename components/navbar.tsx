"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { withLocalePath, type Locale } from "@/lib/i18n"

type NavbarProps = {
  locale: Locale
  ctaLabel: string
  navLinks: Array<{ label: string; href: string }>
  themeLabel: string
}

const defaultNavLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Filosofía", href: "/filosofia" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Contacto", href: "/#contacto" },
]

export function Navbar({
  locale = "es-cl",
  ctaLabel = "Contactar",
  navLinks = defaultNavLinks,
  themeLabel = "Tema",
}: Partial<NavbarProps>) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href={withLocalePath(locale, "/")} className="flex items-center">
          <Image
            src="/ventrionlabsblack.png"
            alt="Ventrion Labs"
            width={250}
            height={80}
            priority
            sizes="(max-width: 768px) 160px, 250px"
            className="block h-12 w-auto dark:hidden"
          />
          <Image
            src="/ventrionlabswhite.png"
            alt="Ventrion Labs"
            width={250}
            height={80}
            sizes="(max-width: 768px) 160px, 250px"
            priority
            className="hidden h-12 w-auto dark:block"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={withLocalePath(locale, link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button size="sm" asChild>
            <a href={withLocalePath(locale, "#contacto")}>{ctaLabel}</a>
          </Button>
        </div>

        <button
          className="-mr-1 rounded-md p-1 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-5 pb-6 md:hidden sm:px-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={withLocalePath(locale, link.href)}
                onClick={() => setMobileOpen(false)}
                className="rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-muted-foreground">{themeLabel}</span>
              <ThemeToggle />
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Button size="sm" className="w-full" asChild>
                <a href={withLocalePath(locale, "#contacto")}>{ctaLabel}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
