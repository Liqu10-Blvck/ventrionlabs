import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-foreground px-6 py-12 text-center sm:px-8 sm:py-16 md:px-16 md:py-20">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-background sm:text-3xl md:text-4xl">
            Solicita un diagnóstico y ordenemos el sistema que sostiene tu operación.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-background/60 sm:text-base">
            Si tu operación está creciendo y depende de herramientas improvisadas,
            un diagnóstico reduce riesgo, evita retrabajo y define un plan realista
            de construcción o estandarización.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="w-full bg-background text-foreground hover:bg-background/90 active:scale-[0.98] transition-transform sm:w-auto"
              asChild
            >
              <a href="#contacto">Solicitar diagnóstico</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background active:scale-[0.98] transition-transform sm:w-auto"
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
