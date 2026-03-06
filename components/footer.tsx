import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { withLocalePath, type Locale } from "@/lib/i18n"

type FooterCopy = {
  company: string
  sections: string
  legal: string
  about: string
  philosophy: string
  build: string
  problem: string
  products: string
  technology: string
  privacy: string
  terms: string
  legalNotice: string
  description: string
  rights: string
}

const defaultFooterCopy: FooterCopy = {
  company: "Empresa",
  sections: "Secciones",
  legal: "Legal",
  about: "Nosotros",
  philosophy: "Filosofía",
  build: "Qué construimos",
  problem: "Problema",
  products: "Productos",
  technology: "Tecnología",
  privacy: "Privacidad",
  terms: "Términos",
  legalNotice: "Aviso legal",
  description:
    "Sistemas de software modernos para empresas que necesitan flujos más claros, mejor ejecución y control operacional real.",
  rights: "© 2026 Ventrion Labs. Todos los derechos reservados.",
}

export function Footer({
  locale = "es-cl",
  copy = defaultFooterCopy,
}: Partial<{ locale: Locale; copy: FooterCopy }>) {
  const footerSections = [
    {
      title: copy.company,
      links: [
        { label: copy.about, href: withLocalePath(locale, "/nosotros") },
        { label: copy.philosophy, href: withLocalePath(locale, "/filosofia") },
      ],
    },
    {
      title: copy.sections,
      links: [
        { label: copy.build, href: "#soluciones" },
        { label: copy.problem, href: "#problema" },
        { label: copy.products, href: "#productos" },
        { label: copy.technology, href: "#tecnologia" },
      ],
    },
    {
      title: copy.legal,
      links: [
        { label: copy.privacy, href: withLocalePath(locale, "/privacidad") },
        { label: copy.terms, href: withLocalePath(locale, "/terminos") },
        { label: copy.legalNotice, href: withLocalePath(locale, "/aviso-legal") },
      ],
    },
  ]

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
              {copy.description}
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

        <Separator className="my-8 bg-border sm:my-10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {copy.rights}
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
