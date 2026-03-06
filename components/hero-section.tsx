import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type HeroSectionProps = {
  eyebrow: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  highlights: string[]
  panelTitle: string
  panelSubtitle: string
  panelBadge: string
  panelMetric: string
  panelSystemsLabel: string
  panelSystemsValue: string
  panelFocusLabel: string
  panelFocusValue: string
}

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  highlights,
  panelTitle,
  panelSubtitle,
  panelBadge,
  panelMetric,
  panelSystemsLabel,
  panelSystemsValue,
  panelFocusLabel,
  panelFocusValue,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 md:pb-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="futuristic-dot-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_42%),radial-gradient(ellipse_at_center,transparent_0%,var(--background)_74%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_45%),radial-gradient(ellipse_at_center,transparent_0%,#050816_72%)]" />
        <div className="animate-aurora absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-foreground/8 blur-3xl dark:bg-white/6" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent dark:via-white/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 shadow-sm sm:mb-8 dark:border-white/10 dark:bg-white/3">
            <span className="relative flex size-2">
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-muted-foreground dark:text-white/70">
              {eyebrow}
            </span>
            </div>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.4rem] dark:text-white">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl dark:text-white/65">
              {description}
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <Button size="lg" className="motion-safe-lift w-full px-8 sm:w-auto" asChild>
              <a href="#contacto">
                {primaryCta}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="motion-safe-lift w-full border-border bg-card/60 px-8 text-foreground hover:bg-secondary sm:w-auto dark:border-white/10 dark:bg-white/3 dark:text-white dark:hover:bg-white/6" asChild>
              <a href="#productos">{secondaryCta}</a>
            </Button>
            </div>

            <div className="mt-10 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card/70 px-4 py-4 text-sm text-muted-foreground shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3 dark:text-white/70">
                {item}
              </div>
            ))}
          </div>
          </div>

          <div className="relative">
            <div className="futuristic-panel rounded-[2rem] border border-border bg-card/70 p-5 shadow-2xl shadow-black/10 backdrop-blur-sm dark:border-white/10 dark:bg-white/3 dark:shadow-black/30 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4 dark:border-white/10">
                <div>
                  <p className="text-sm font-medium text-foreground dark:text-white">{panelTitle}</p>
                  <p className="mt-1 text-sm text-muted-foreground dark:text-white/50">{panelSubtitle}</p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  {panelBadge}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-border bg-secondary/50 p-4 dark:border-white/10 dark:bg-[#0b1020]">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground dark:text-white/40">{panelMetric}</p>
                  <div className="mt-4 grid gap-2">
                    <div className="h-2 rounded-full bg-border dark:bg-white/10">
                      <div className="h-2 w-[72%] rounded-full bg-foreground dark:bg-white" />
                    </div>
                    <div className="h-2 rounded-full bg-border dark:bg-white/10">
                      <div className="h-2 w-[54%] rounded-full bg-foreground/70 dark:bg-white/70" />
                    </div>
                    <div className="h-2 rounded-full bg-border dark:bg-white/10">
                      <div className="h-2 w-[84%] rounded-full bg-indigo-400/80" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-secondary/50 p-4 dark:border-white/10 dark:bg-[#0b1020]">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground dark:text-white/40">{panelSystemsLabel}</p>
                    <p className="mt-3 text-lg font-semibold text-foreground dark:text-white">{panelSystemsValue}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/50 p-4 dark:border-white/10 dark:bg-[#0b1020]">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground dark:text-white/40">{panelFocusLabel}</p>
                    <p className="mt-3 text-lg font-semibold text-foreground dark:text-white">{panelFocusValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
