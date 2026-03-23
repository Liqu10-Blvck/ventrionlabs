import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"
import { type Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
  title: "Aviso legal",
  description:
    "Aviso legal e información general del sitio web de Ventrion Labs.",
  alternates: {
    canonical: `/${locale}/aviso-legal`,
  },
  openGraph: {
    title: "Aviso legal | Ventrion Labs",
    description:
      "Aviso legal e información general del sitio web de Ventrion Labs.",
    url: `/${locale}/aviso-legal`,
  },
}

}

export default async function AvisoLegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return (
    <SitePageShell
      locale={locale as Locale}
      eyebrow="Legal"
      title="Información general del sitio"
      description="Este sitio presenta información institucional y comercial de Ventrion Labs sobre su enfoque, servicios y soluciones digitales para empresas en crecimiento."
      sections={[
        {
          title: "Titularidad y propósito",
          content: [
            "El sitio tiene por objeto informar sobre la actividad de Ventrion Labs y habilitar un canal de contacto para potenciales clientes o interesados.",
            "Las referencias a productos, capacidades y casos de uso describen líneas de trabajo y no deben interpretarse automáticamente como compromisos contractuales.",
          ],
        },
        {
          title: "Propiedad intelectual",
          content: [
            "Los textos, elementos visuales, signos distintivos y materiales publicados en este sitio pertenecen a Ventrion Labs o se utilizan con autorización correspondiente.",
            "No está permitido su uso con fines de suplantación, confusión comercial o reproducción no autorizada.",
          ],
        },
        {
          title: "Canal de contacto",
          content: [
            "Para consultas comerciales o relacionadas con la información publicada en este sitio, puedes escribir a contacto@ventrionlabs.cl.",
            "Cualquier acuerdo profesional o prestación de servicios se formaliza por separado y bajo condiciones específicas.",
          ],
        },
      ]}
    />
  )
}
