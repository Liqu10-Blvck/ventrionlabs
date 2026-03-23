import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getLandingDictionary } from "@/lib/landing-dictionaries"
import { withLocalePath, type Locale } from "@/lib/i18n"

type SitePageShellProps = {
  locale: Locale
  eyebrow: string
  title: string
  description: string
  sections: Array<{
    title: string
    content: string[]
  }>
}

export async function SitePageShell({
  locale,
  eyebrow,
  title,
  description,
  sections,
}: SitePageShellProps) {
  const dict = await getLandingDictionary(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        locale={locale}
        ctaLabel={dict.navbar.cta}
        navLinks={dict.navbar.links}
        themeLabel={dict.navbar.theme}
      />
      <main className="px-6 pb-24 pt-28 sm:pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {eyebrow}
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-14 h-px w-full bg-border" />

          <div className="mt-12 grid gap-12">
            {sections.map((section, index) => (
              <section key={section.title} className="grid gap-5">
                <div className="grid gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-4">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {index < sections.length - 1 ? <div className="mt-2 h-px w-full bg-border/70" /> : null}
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <div className="max-w-2xl">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Si quieres conversar sobre un sistema interno, una automatización o un producto para tu operación, podemos ayudarte a definir el siguiente paso con claridad.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href={withLocalePath(locale, "/#contacto")}
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Hablar con Ventrion Labs
                </Link>
                <Link
                  href={withLocalePath(locale, "/")}
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} copy={dict.footer} />
    </div>
  )
}
