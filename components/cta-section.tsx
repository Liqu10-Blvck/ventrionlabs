import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-background md:text-4xl">
            {"¿Listo para transformar tus operaciones?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-background/60">
            Agenda una conversación con nuestro equipo y descubre cómo
            el software a medida puede generar resultados medibles para tu
            negocio.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 active:scale-[0.98] transition-transform"
              asChild
            >
              <a href="#contacto">
                Agendar una demo
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background active:scale-[0.98] transition-transform"
              asChild
            >
              <a href="#contacto">Escríbenos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
