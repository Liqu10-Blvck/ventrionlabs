import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Términos del sitio",
  description:
    "Términos generales de uso del sitio web de Ventrion Labs.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Términos del sitio | Ventrion Labs",
    description:
      "Términos generales de uso del sitio web de Ventrion Labs.",
    url: "/terminos",
  },
}

export default function TerminosPage() {
  return (
    <SitePageShell
      eyebrow="Legal"
      title="Términos generales del sitio"
      description="Estos términos regulan el uso informativo del sitio web de Ventrion Labs. No constituyen, por sí solos, una oferta contractual de servicios ni reemplazan propuestas o acuerdos específicos."
      sections={[
        {
          title: "Uso del contenido",
          content: [
            "La información publicada en este sitio tiene carácter referencial y busca describir el enfoque, capacidades y servicios de Ventrion Labs.",
            "Puedes navegar y consultar el contenido para fines informativos, pero no reproducirlo o reutilizarlo de forma engañosa o contraria a derecho.",
          ],
        },
        {
          title: "Alcance comercial",
          content: [
            "Cualquier proyecto, servicio, alcance, plazo o condición económica se define caso a caso mediante conversaciones y documentos específicos.",
            "El contenido del sitio no garantiza disponibilidad inmediata ni condiciones universales de contratación.",
          ],
        },
        {
          title: "Disponibilidad del sitio",
          content: [
            "Buscamos mantener este sitio disponible y actualizado, pero no garantizamos ausencia total de interrupciones, errores o cambios de contenido.",
            "Ventrion Labs puede modificar la información publicada cuando lo estime necesario para reflejar su operación real.",
          ],
        },
      ]}
    />
  )
}
