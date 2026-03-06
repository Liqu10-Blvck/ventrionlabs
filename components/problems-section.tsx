import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Layers,
  ShieldCheck,
  LockKeyhole,
  Workflow,
  ListChecks,
  Gauge,
} from "lucide-react"

const problems = [
  {
    icon: Workflow,
    title: "Crecimiento sin estructura",
    description:
      "El negocio crece, pero procesos y sistemas no escalan al mismo ritmo. Aparecen cuellos de botella, retrabajo y dependencia de personas clave.",
  },
  {
    icon: ListChecks,
    title: "Desorden operativo y falta de trazabilidad",
    description:
      "No hay visibilidad confiable de lo que ocurre en la operación. Se vuelve difícil controlar, auditar y estandarizar.",
  },
  {
    icon: Layers,
    title: "Herramientas desconectadas",
    description:
      "Planillas y soluciones parciales que no conversan entre sí. Los datos se duplican y las decisiones se toman con información incompleta.",
  },
  {
    icon: LockKeyhole,
    title: "Permisos y reglas sin control",
    description:
      "Accesos y configuraciones sin criterios consistentes. Esto aumenta el riesgo y la fricción operativa.",
  },
  {
    icon: Gauge,
    title: "Automatización frágil o inexistente",
    description:
      "Tareas repetitivas consumen tiempo y elevan el error. Cuando hay automatización, suele ser difícil de mantener o ajustar.",
  },
  {
    icon: ShieldCheck,
    title: "Evolución lenta y costosa",
    description:
      "Cambios pequeños toman demasiado tiempo porque el sistema no está diseñado para iterar con seguridad y continuidad.",
  },
]

export function ProblemsSection() {
  return (
    <section className="bg-secondary/50 px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Problemas que resolvemos
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Infraestructura y sistemas para ordenar la operación
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cuando el crecimiento supera a los sistemas, el costo aparece en la
            operación. Nuestro trabajo es recuperar control y escalabilidad.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="border-border bg-background transition-all duration-300 hover:border-foreground/20 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground sm:size-10">
                  <problem.icon className="size-5" />
                </div>
                <CardTitle className="text-foreground">{problem.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
