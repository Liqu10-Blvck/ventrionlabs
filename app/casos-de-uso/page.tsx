import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Casos de uso",
  description:
    "Escenarios típicos donde Ventrion Labs aporta valor: sistemas internos, automatización y productos para operaciones reales.",
  alternates: {
    canonical: "/casos-de-uso",
  },
  openGraph: {
    title: "Casos de uso | Ventrion Labs",
    description:
      "Escenarios típicos donde Ventrion Labs aporta valor: sistemas internos, automatización y productos para operaciones reales.",
    url: "/casos-de-uso",
  },
}

export default function CasosDeUsoPage() {
  return (
    <SitePageShell
      eyebrow="Recursos"
      title="Casos de uso donde una base digital bien hecha cambia la operación"
      description="Estas son algunas situaciones típicas donde intervenimos para convertir procesos dispersos en sistemas más claros, controlables y escalables."
      sections={[
        {
          title: "Sistemas internos para ordenar la operación",
          content: [
            "Empresas que operan con planillas, mensajes sueltos y múltiples herramientas desconectadas suelen perder trazabilidad y tiempo. Diseñamos sistemas internos que centralizan información, roles y estados del proceso.",
            "El resultado es una operación más visible, menos dependiente de coordinación manual y con mejores datos para tomar decisiones.",
          ],
        },
        {
          title: "Automatización de tareas repetitivas",
          content: [
            "Cuando tareas administrativas consumen tiempo operativo, automatizar deja de ser una mejora secundaria y pasa a ser una necesidad. Implementamos automatizaciones con reglas claras, integraciones puntuales y control sobre excepciones.",
            "Esto reduce errores manuales y libera tiempo para actividades con mayor valor.",
          ],
        },
        {
          title: "Productos digitales para verticales específicas",
          content: [
            "En algunos escenarios no hace falta partir desde cero, sino adaptar o desplegar productos preparados para contextos concretos. Por eso también desarrollamos soluciones enfocadas en industrias y operaciones específicas.",
            "Así aceleramos la adopción sin perder la disciplina de una implementación seria.",
          ],
        },
      ]}
    />
  )
}
