import { CheckCircle2, FileText, GitBranch, Shield } from "lucide-react"

const trustSignals = [
  {
    icon: FileText,
    title: "Alcance antes que promesas",
    description:
      "Partimos por diagnóstico, alcance y criterios de éxito claros antes de proponer una implementación.",
  },
  {
    icon: GitBranch,
    title: "Construcción iterativa",
    description:
      "Priorizamos entregas controladas y evolución continua en lugar de proyectos opacos o difíciles de sostener.",
  },
  {
    icon: Shield,
    title: "Decisiones técnicas sobrias",
    description:
      "Buscamos trazabilidad, mantenibilidad y continuidad operacional por encima de claims vistosos o complejidad innecesaria.",
  },
  {
    icon: CheckCircle2,
    title: "Conversación honesta",
    description:
      "Si una solución no requiere software a medida, lo correcto es decirlo. El objetivo es resolver el problema real.",
  },
]

export function TrustSection() {
  return (
    <section className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Confianza y criterio
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Cómo buscamos generar confianza desde el primer contacto
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            En vez de inflar métricas o vender certezas vacías, preferimos mostrar cómo pensamos, cómo trabajamos y qué estándares usamos para construir.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal, index) => (
            <div
              key={signal.title}
              className="futuristic-panel motion-safe-lift animate-shimmer-sweep rounded-2xl border border-border bg-background/80 px-5 py-6 shadow-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl"
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="animate-pulse-glow mb-4 flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <signal.icon className="size-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{signal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
