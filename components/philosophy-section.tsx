export function PhilosophySection() {
  return (
    <section id="filosofia" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Nuestra filosofía
        </p>
        <blockquote className="text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {
            "\u201CCreemos que el software debe generar resultados medibles, no complejidad.\u201D"
          }
        </blockquote>
        <div
          className="mx-auto mt-10 h-px w-16 bg-border"
          aria-hidden="true"
        />
        <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
          Cada línea de código que escribimos se mide por el impacto
          real que genera. Eliminamos capas innecesarias, nos enfocamos en lo
          que los operadores realmente necesitan y entregamos sistemas que se
          pagan solos.
        </p>
      </div>
    </section>
  )
}
