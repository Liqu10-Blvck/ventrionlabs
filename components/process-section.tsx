export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Nos sumergimos en tu operación. Entrevistas, observación en campo y análisis de datos para entender qué necesitas.",
    },
    {
      number: "02",
      title: "Diseño y Prototipo",
      description:
        "Creamos prototipos funcionales que validamos contigo antes de escribir una sola línea de código de producción.",
    },
    {
      number: "03",
      title: "Desarrollo Iterativo",
      description:
        "Construimos en ciclos cortos con entregas frecuentes. Cada sprint genera valor visible y medible.",
    },
    {
      number: "04",
      title: "Lanzamiento y Soporte",
      description:
        "Desplegamos en producción con acompañamiento completo. Monitoreamos, iteramos y optimizamos continuamente.",
    },
  ]

  return (
    <section id="proceso" className="bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Nuestro proceso
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            De la idea al impacto, paso a paso
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Un proceso estructurado que garantiza resultados predecibles y
            alineados con tus objetivos.
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
