import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function AnimatedLetters({ text, delayStepMs = 18 }: { text: string; delayStepMs?: number }) {
  const words = text.split(" ")
  const manualBreaks: Record<string, number[]> = {
    infraestructura: [5],
  }

  return (
    <span className="relative inline-block">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const prefixLength = words
            .slice(0, wordIndex)
            .reduce((acc, w) => acc + w.length, 0)
          const delayOffset = prefixLength + wordIndex

          const normalized = word.toLowerCase()
          const breakpoints = manualBreaks[normalized]
          const computedBreak = Math.max(4, Math.min(word.length - 4, Math.ceil(word.length / 2)))
          const safeBreakpoints = word.length >= 14 ? [computedBreak] : []
          const points = (breakpoints ?? safeBreakpoints)
            .filter((p) => p > 0 && p < word.length)
            .sort((a, b) => a - b)

          const segments: string[] = []
          let cursor = 0
          for (const p of points) {
            segments.push(word.slice(cursor, p))
            cursor = p
          }
          segments.push(word.slice(cursor))

          const noWrapWord = word.length <= 12

          return (
            <span key={`word-${wordIndex}`}>
              <span className={noWrapWord ? "whitespace-nowrap" : undefined}>
                {(() => {
                  let offsetInWord = 0
                  return segments.map((segment, segmentIndex) => {
                    const segmentStart = offsetInWord
                    offsetInWord += segment.length

                    return (
                      <span key={`seg-${wordIndex}-${segmentIndex}`}>
                        {Array.from(segment).map((char, charIndex) => (
                          <span
                            key={`${wordIndex}-${segmentIndex}-${char}-${charIndex}`}
                            className="animate-hero-letter"
                            style={{
                              animationDelay: `${(delayOffset + segmentStart + charIndex) * delayStepMs}ms`,
                            }}
                          >
                            {char}
                          </span>
                        ))}
                        {segmentIndex < segments.length - 1 ? <wbr /> : null}
                      </span>
                    )
                  })
                })()}
              </span>
              {wordIndex < words.length - 1 ? " " : null}
            </span>
          )
        })}
      </span>
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 md:pb-36 md:pt-44">
      {/* Dot pattern background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_0.8px,transparent_0.8px)] bg-[size:28px_28px] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 shadow-sm sm:mb-8">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/40 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Ingeniería digital para operación y escalabilidad
            </span>
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <AnimatedLetters text="Construimos infraestructura digital" />{" "}
            <span className="text-muted-foreground">
              <AnimatedLetters text="para empresas en crecimiento" delayStepMs={14} />
            </span>
            .
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 md:text-lg">
            Diseñamos y construimos software a medida y productos listos para usar,
            con foco en robustez, claridad operativa y escalabilidad. Trabajamos
            con contratos cerrados y entregables definidos.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <Button size="lg" className="w-full px-8 sm:w-auto" asChild>
              <a href="#contacto">
                Solicitar diagnóstico
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full px-8 sm:w-auto" asChild>
              <a href="#productos">Ver productos</a>
            </Button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 md:mt-24 md:grid-cols-4">
          {[
            { value: "3", label: "Productos en producción" },
            { value: "+50", label: "Negocios operando" },
            { value: "99.9%", label: "Disponibilidad garantizada" },
            { value: "<2s", label: "Tiempo de respuesta" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-background px-4 py-6 sm:px-6 sm:py-8"
            >
              <span className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {stat.value}
              </span>
              <span className="text-center text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
