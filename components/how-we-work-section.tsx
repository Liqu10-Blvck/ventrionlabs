type HowWeWorkSectionProps = {
  eyebrow: string
  title: string
  description: string
  steps: Array<{ number: string; title: string; description: string }>
}

export function HowWeWorkSection({ eyebrow, title, description, steps }: HowWeWorkSectionProps) {

  return (
    <section id="proceso" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/45">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-white/60 sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-6 hidden h-px w-8 translate-x-full bg-border dark:bg-white/10 lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="text-3xl font-semibold text-foreground/20 dark:text-white/20">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
