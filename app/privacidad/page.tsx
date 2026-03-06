import type { Metadata } from "next"
import { SitePageShell } from "@/components/site-page-shell"

export const metadata: Metadata = {
  title: "Privacidad",
  description:
    "Política de privacidad del sitio de Ventrion Labs respecto de los datos enviados a través del formulario de contacto.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Privacidad | Ventrion Labs",
    description:
      "Política de privacidad del sitio de Ventrion Labs respecto de los datos enviados a través del formulario de contacto.",
    url: "/privacidad",
  },
}

export default function PrivacidadPage() {
  return (
    <SitePageShell
      eyebrow="Legal"
      title="Política de privacidad del sitio"
      description="Esta política aplica al uso del sitio web de Ventrion Labs y, en particular, a la información que una persona envía voluntariamente mediante el formulario de contacto."
      sections={[
        {
          title: "Qué datos recopilamos",
          content: [
            "Actualmente este sitio puede recopilar nombre, correo electrónico, empresa y mensaje cuando una persona completa el formulario de contacto.",
            "No solicitamos datos sensibles ni información que no sea necesaria para responder consultas comerciales o coordinar una conversación inicial.",
          ],
        },
        {
          title: "Para qué usamos esa información",
          content: [
            "Usamos la información exclusivamente para responder consultas, evaluar necesidades iniciales y mantener comunicación relacionada con los servicios de Ventrion Labs.",
            "No vendemos ni cedemos esos datos a terceros con fines publicitarios.",
          ],
        },
        {
          title: "Conservación y contacto",
          content: [
            "Conservamos la información solo durante el tiempo razonablemente necesario para gestionar la conversación iniciada o cumplir obligaciones aplicables.",
            "Si deseas solicitar actualización o eliminación de tus datos de contacto, puedes escribir a contacto@ventrionlabs.cl.",
          ],
        },
      ]}
    />
  )
}
