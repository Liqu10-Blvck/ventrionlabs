import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Filosofía | Ventrion Labs",
  description:
    "La filosofía de trabajo de Ventrion Labs: software sobrio, decisiones claras y foco en impacto operacional.",
}

export default function FilosofiaPage() {
  return (
    <SitePageShell
      eyebrow="Empresa"
      title="Creemos en el software que reduce complejidad, no en el que la disfraza"
      description="Nuestra filosofía combina rigor técnico con una visión pragmática del negocio. Preferimos sistemas claros, mantenibles y útiles antes que soluciones espectaculares pero frágiles."
      sections={[
        {
          title: "Simplicidad como criterio",
          content: [
            "La mejor arquitectura no es la más llamativa, sino la que resuelve el problema con el menor nivel de complejidad posible.",
            "Diseñamos sistemas que puedan ser entendidos, operados y evolucionados sin depender de capas innecesarias ni de decisiones oscuras.",
          ],
        },
        {
          title: "Impacto antes que volumen",
          content: [
            "No medimos el valor por cantidad de funcionalidades entregadas. Lo medimos por reducción de errores, visibilidad operativa, ahorro de tiempo y mejor capacidad de decisión.",
            "Cada desarrollo debe justificar su existencia con una mejora tangible en el negocio.",
          ],
        },
        {
          title: "Continuidad operacional",
          content: [
            "Construimos pensando en el uso diario y en la evolución posterior. Un sistema útil no solo debe funcionar al momento del lanzamiento; debe seguir siendo una base confiable con el tiempo.",
            "Por eso priorizamos mantenibilidad, control de cambios y decisiones técnicas sobrias desde el inicio.",
          ],
        },
      ]}
    />
  )
}
