import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="futuristic-panel animate-pulse-glow overflow-hidden rounded-2xl bg-foreground px-6 py-12 text-center shadow-2xl sm:px-8 sm:py-16 md:px-16 md:py-20">
          <div className="animate-aurora absolute inset-x-0 top-0 h-28 bg-linear-to-r from-transparent via-background/10 to-transparent blur-2xl" aria-hidden="true" />
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-background sm:text-3xl md:text-4xl">
            Si tu operación ya no cabe en planillas y parches, conversemos.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-background/60 sm:text-base">
            Podemos ayudarte a definir qué conviene construir, qué conviene estandarizar
            y cómo ordenar la base tecnológica que hoy sostiene tu negocio.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="motion-safe-lift animate-pulse-glow w-full bg-background text-foreground hover:bg-background/90 active:scale-[0.98] transition-transform sm:w-auto"
              asChild
            >
              <a href="#contacto">Solicitar conversación</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="motion-safe-lift w-full border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background active:scale-[0.98] transition-transform sm:w-auto"
              asChild
            >
              <a href="#productos">Ver productos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
