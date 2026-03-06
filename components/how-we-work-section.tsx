export function HowWeWorkSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description:
        "Levantamos contexto operativo y definimos alcance verificable. Identificamos riesgos, dependencias y prioridades.",
    },
    {
      number: "02",
      title: "Diseño de solución",
      description:
        "Traducimos objetivos en un diseño claro: flujos, reglas, responsabilidades y criterios de éxito.",
    },
    {
      number: "03",
      title: "Construcción",
      description:
        "Implementamos con entregas iterativas y controladas. Priorizamos continuidad operativa y cambios trazables.",
    },
    {
      number: "04",
      title: "Evolución continua",
      description:
        "Iteramos con orden: mantenimiento, mejoras y ajuste de procesos sin degradación progresiva del sistema.",
    },
  ]

  return (
    <section id="proceso" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Cómo trabajamos
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Método claro, entregables definidos
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Un proceso estructurado para construir y evolucionar sistemas sin
            improvisación.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-6 hidden h-px w-8 translate-x-full bg-border lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="text-3xl font-semibold text-border">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
