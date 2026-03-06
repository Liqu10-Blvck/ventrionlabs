import { Button } from "@/components/ui/button"

type FinalCtaSectionProps = {
  eyebrow: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
}

export function FinalCtaSection({ eyebrow, title, description, primaryCta, secondaryCta }: FinalCtaSectionProps) {
  return (
    <section id="contacto" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="futuristic-panel overflow-hidden rounded-[2rem] border border-border bg-card/80 px-6 py-12 text-center shadow-2xl shadow-black/8 dark:border-white/10 dark:bg-white/3 dark:shadow-black/30 sm:px-8 sm:py-16 md:px-16 md:py-20">
          <div className="animate-aurora absolute inset-x-0 top-0 h-28 bg-linear-to-r from-transparent via-white/10 to-transparent blur-2xl" aria-hidden="true" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/45">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-white/60 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="motion-safe-lift w-full active:scale-[0.98] transition-transform sm:w-auto"
              asChild
            >
              <a href="mailto:contacto@ventrionlabs.cl">{primaryCta}</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="motion-safe-lift w-full border-border bg-transparent text-foreground hover:bg-secondary hover:text-foreground active:scale-[0.98] transition-transform dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              asChild
            >
              <a href="#productos">{secondaryCta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
