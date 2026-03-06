export const moduleLabelsEs: Record<string, string> = {
  public_booking: "Reserva pública",
  public_agenda: "Agenda pública",
  public_appointments: "Citas públicas",
  automatic_confimations: "Confirmaciones automáticas",
  basic_branding: "Branding básico",
  basic_metrics: "Métricas básicas",
  client_history: "Historial de clientes",
  email_reminder: "Recordatorios por email",
  manual_reviews: "Reseñas manuales",
  multi_box: "Multi-box",
  multi_sede: "Multi-sede",
  public_agenda_whatsapp: "Recordatorios por WhatsApp",
  whatsapp_reminders: "Recordatorios por WhatsApp",
  advanced_reports: "Reportes avanzados",
}

function humanizeCode(code: string) {
  const cleaned = code.replace(/[_-]+/g, " ").trim()
  if (!cleaned) return code
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
}

export function translateModuleLabel(params: {
  code: string
  apiName?: string
  locale?: "es" | "en"
}) {
  const { code, apiName, locale = "es" } = params

  if (locale === "es") {
    return moduleLabelsEs[code] ?? apiName ?? humanizeCode(code)
  }

  return apiName ?? humanizeCode(code)
}
