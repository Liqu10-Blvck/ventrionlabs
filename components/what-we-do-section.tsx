import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Users, Building2, Workflow, Package } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Software a medida",
    description:
      "Diseñamos y construimos soluciones específicas para operaciones con necesidades propias, reglas complejas y procesos críticos.",
  },
  {
    icon: Building2,
    title: "Sistemas internos",
    description:
      "Creamos plataformas internas para ordenar flujos, permisos, trazabilidad, control y visibilidad operativa.",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Reducimos trabajo manual y errores operativos con automatizaciones diseñadas para funcionar en escenarios reales.",
  },
  {
    icon: Package,
    title: "Productos verticales",
    description:
      "Ofrecemos productos listos para usar orientados a industrias y necesidades recurrentes, con foco en adopción rápida y orden operativo.",
  },
]

export function WhatWeDoSection() {
  return (
    <section id="soluciones" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Lo que hacemos
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Qué hace Ventrion Labs
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ayudamos a empresas que necesitan ordenar su operación, digitalizar
            procesos críticos y construir una base tecnológica más clara para crecer.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="futuristic-panel motion-safe-lift group border-border bg-background/80 shadow-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <CardHeader>
                <div className="animate-pulse-glow mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                  <service.icon className="size-5" />
                </div>
                <CardTitle className="text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
