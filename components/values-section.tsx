import { Target, Users, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque en resultados",
    description:
      "Cada línea de código se mide por el impacto real que genera. No construimos software por construir, sino para resolver problemas concretos con métricas claras.",
  },
  {
    icon: Users,
    title: "Cercanos al operador",
    description:
      "Pasamos tiempo en campo con nuestros clientes. Entendemos su día a día antes de escribir una sola línea de código. El software debe adaptarse al negocio, no al revés.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidad radical",
    description:
      "Eliminamos capas innecesarias. Nuestras interfaces son intuitivas, nuestros procesos son directos y nuestras arquitecturas son limpias.",
  },
]

export function ValuesSection() {
  return (
    <section id="nosotros" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Sobre nosotros
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Creemos en el software que se paga solo
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ventrion Labs nació de una convicción: las empresas que
              operan en el mundo real merecen software construido para su
              realidad, no adaptaciones de soluciones genéricas.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Somos un equipo de ingenieros, diseñadores y estrategas que
              combinan rigor técnico con una profunda comprensión
              operativa.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <value.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
