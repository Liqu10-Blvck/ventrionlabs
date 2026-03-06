import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const footerSections = [
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Filosofía", href: "/filosofia" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Productos", href: "/#productos" },
      { label: "Casos de uso", href: "/casos-de-uso" },
      { label: "Contacto", href: "/#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos del sitio", href: "/terminos" },
      { label: "Aviso legal", href: "/aviso-legal" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/ventrionblack.png"
                alt="Ventrion Labs"
                width={48}
                height={48}
                sizes="48px"
                className="block h-10 w-10 dark:hidden"
              />
              <Image
                src="/ventrionwhite.png"
                alt="Ventrion Labs"
                width={48}
                height={48}
                sizes="48px"
                className="hidden h-10 w-10 dark:block"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Ventrion Labs
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Software que impulsa la excelencia operativa de negocios reales.
            </p>
          </div>

          {footerSections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-8 sm:my-10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Ventrion Labs. Todos los derechos reservados."}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
