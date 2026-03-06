import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32 md:pb-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="futuristic-dot-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
        <div className="animate-aurora absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-foreground/6 blur-2xl" />
        <div className="absolute right-[12%] top-28 h-24 w-24 rounded-full bg-foreground/5 blur-2xl" />
        <div className="absolute bottom-12 left-[10%] h-28 w-28 rounded-full bg-foreground/4 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="futuristic-panel mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-4 py-1.5 shadow-sm sm:mb-8">
            <span className="relative flex size-2">
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Sistemas para ordenar operación, información y crecimiento
            </span>
          </div>

          <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Software y sistemas para empresas que necesitan más control y menos fricción.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 md:text-lg">
            Diseñamos e implementamos soluciones digitales para ordenar procesos,
            centralizar información y sostener el crecimiento de operaciones reales.
            Combinamos software a medida, sistemas internos y productos verticales
            con una ejecución técnica sobria.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <Button size="lg" className="motion-safe-lift w-full px-8 sm:w-auto" asChild>
              <a href="#contacto">
                Solicitar conversación
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="motion-safe-lift w-full border-border/70 bg-background/60 px-8 backdrop-blur-sm sm:w-auto" asChild>
              <a href="#soluciones">Ver soluciones</a>
            </Button>
          </div>

          <div className="mt-8 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
            {[
              "Diagnóstico inicial con foco operativo",
              "Alcance claro y entregables definidos",
              "Implementación iterativa sin promesas infladas",
            ].map((item) => (
              <div key={item} className="futuristic-panel motion-safe-lift rounded-2xl border border-border bg-background/70 px-4 py-4 text-sm text-muted-foreground shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
