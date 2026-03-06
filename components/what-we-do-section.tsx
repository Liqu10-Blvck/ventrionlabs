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
    title: "Desarrollo dedicado",
    description:
      "Construimos software a medida con contratos cerrados y entregables definidos. Priorizamos claridad operativa, mantenibilidad y continuidad.",
  },
  {
    icon: Building2,
    title: "Construcción de sistemas internos",
    description:
      "Desarrollamos sistemas empresariales para ordenar la operación: flujos críticos, permisos, trazabilidad y control de datos.",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Reducimos trabajo manual con automatizaciones diseñadas para operar en escenarios reales y sostener cambios de negocio.",
  },
  {
    icon: Package,
    title: "Productos propios",
    description:
      "Ofrecemos productos listos para usar que resuelven necesidades recurrentes y se adaptan a distintos contextos de operación.",
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
            Qué hacemos
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Construimos sistemas sólidos para operaciones en crecimiento. Trabajo
            dedicado, alcance claro y una ejecución técnica sobria.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-background transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
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
