import {
  Braces,
  Database,
  GitBranch,
  ShieldCheck,
  Cpu,
  Workflow,
} from "lucide-react"

const capabilityIcons = [Braces, Database, Workflow, ShieldCheck] as const

type TechnologySectionProps = {
  eyebrow: string
  title: string
  description: string
  capabilities: Array<{ title: string; description: string }>
  executionTitle: string
  executionDescription: string
  signals: string[]
  visualLabel: string
}

export function TechnologySection({
  eyebrow,
  title,
  description,
  capabilities,
  executionTitle,
  executionDescription,
  signals,
  visualLabel,
}: TechnologySectionProps) {
  const capabilityItems = capabilities.map((item, index) => ({
    ...item,
    icon: capabilityIcons[index] ?? Braces,
  }))

  return (
    <section id="tecnologia" className="relative px-6 py-20 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="futuristic-dot-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent dark:via-white/15" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/45">
              {eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground dark:text-white/60 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilityItems.map((item) => {
                const Icon = item.icon
                return (
                <div
                  key={item.title}
                  className="futuristic-panel motion-safe-lift rounded-2xl border border-border bg-card/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/3"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-secondary text-foreground dark:border-white/10 dark:bg-white/4 dark:text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                    {item.description}
                  </p>
                </div>
              )})}
            </div>
          </div>

          <div className="futuristic-panel relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-2xl shadow-black/8 dark:border-white/10 dark:bg-white/3 dark:shadow-black/30 sm:p-8">
            <div className="absolute inset-x-6 top-6 h-px bg-linear-to-r from-transparent via-border to-transparent dark:via-white/10" />
            <div className="flex items-center justify-between border-b border-border pb-5 dark:border-white/10">
              <div>
                <p className="text-sm font-medium text-foreground dark:text-white">{executionTitle}</p>
                <p className="mt-1 text-sm text-muted-foreground dark:text-white/50">
                  {executionDescription}
                </p>
              </div>
              <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-secondary text-foreground dark:border-white/10 dark:bg-white/4 dark:text-white">
                <Cpu className="size-5" />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {signals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center justify-between rounded-2xl border border-border bg-secondary/50 px-4 py-3 dark:border-white/10 dark:bg-[#0b1020]"
                >
                  <span className="text-sm text-foreground dark:text-white">{signal}</span>
                  <GitBranch className="size-4 text-muted-foreground dark:text-white/40" />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-5 dark:border-white/10 dark:bg-[#0b1020]">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/40">
                {visualLabel}
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-border bg-card/70 p-4 dark:border-white/10 dark:bg-white/3">
                  <div className="h-16 rounded-xl bg-linear-to-br from-foreground/15 to-transparent dark:from-white/20" />
                </div>
                <div className="rounded-2xl border border-border bg-card/70 p-4 dark:border-white/10 dark:bg-white/3">
                  <div className="h-16 rounded-xl bg-linear-to-b from-foreground/10 via-foreground/5 to-transparent dark:from-white/10 dark:via-white/5" />
                </div>
                <div className="rounded-2xl border border-border bg-card/70 p-4 dark:border-white/10 dark:bg-white/3">
                  <div className="h-16 rounded-xl border border-border bg-secondary dark:border-white/10 dark:bg-white/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
