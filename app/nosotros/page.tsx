import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Nosotros | Ventrion Labs",
  description:
    "Conoce a Ventrion Labs, nuestro enfoque de trabajo y cómo construimos infraestructura digital para empresas en crecimiento.",
}

export default function NosotrosPage() {
  return (
    <SitePageShell
      eyebrow="Empresa"
      title="Construimos sistemas claros para operaciones que no pueden detenerse"
      description="Ventrion Labs desarrolla software e infraestructura digital para empresas que necesitan ordenar procesos, ganar visibilidad y sostener crecimiento sin improvisación técnica."
      sections={[
        {
          title: "Qué hacemos",
          content: [
            "Diseñamos y construimos sistemas internos, automatizaciones y productos digitales orientados a resolver problemas operativos concretos.",
            "Trabajamos con alcance claro, prioridades definidas y entregables verificables para que cada proyecto tenga impacto real en la operación.",
          ],
        },
        {
          title: "Cómo pensamos",
          content: [
            "No partimos desde modas tecnológicas ni desde herramientas genéricas. Partimos desde la fricción del negocio: cuellos de botella, errores repetitivos, dependencia de planillas y falta de trazabilidad.",
            "Nuestro criterio es simple: cada decisión técnica debe ayudar a que la empresa opere mejor hoy y tenga una base sólida para crecer mañana.",
          ],
        },
        {
          title: "Con quién trabajamos",
          content: [
            "Nos enfocamos en empresas y equipos que operan en contextos reales: atención presencial, logística, servicios, educación, retail especializado y operaciones con procesos repetibles.",
            "Cuando la operación exige control, continuidad y claridad, el software deja de ser accesorio y se vuelve infraestructura. Ahí es donde aportamos más valor.",
          ],
        },
      ]}
    />
  )
}
