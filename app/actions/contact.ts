"use server"

import { z } from "zod"
import { env } from "@/lib/env"

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

function getContactMailConfig() {
  return {
    apiKey: env.RESEND_API_KEY,
    fromEmail: env.CONTACT_FROM_EMAIL,
    toEmail: env.CONTACT_TO_EMAIL,
  }
}

function buildContactEmailHtml(data: z.infer<typeof contactSchema>) {
  const submittedAt = new Date().toLocaleString("es-CL", {
    dateStyle: "medium",
    timeStyle: "short",
  })
  const companyLabel = data.company?.trim() || "No informado"

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1 style="margin-bottom: 16px; font-size: 20px;">Nuevo contacto desde ventrionlabs.cl</h1>
      <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${data.fullName}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin: 0 0 8px;"><strong>Empresa:</strong> ${companyLabel}</p>
      <p style="margin: 0 0 8px;"><strong>Fecha:</strong> ${submittedAt}</p>
      <div style="margin-top: 24px;">
        <p style="margin: 0 0 8px;"><strong>Mensaje:</strong></p>
        <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb; white-space: pre-wrap;">${data.message}</div>
      </div>
    </div>
  `
}

async function sendContactEmail(data: z.infer<typeof contactSchema>) {
  const { apiKey, fromEmail, toEmail } = getContactMailConfig()
  const companyLabel = data.company?.trim() || "No informado"

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY")
  }

  if (!toEmail) {
    throw new Error("Missing CONTACT_TO_EMAIL")
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: data.email,
      subject: `Nuevo contacto web: ${data.fullName} - ${companyLabel}`,
      text: [
        "Nuevo contacto desde ventrionlabs.cl",
        `Nombre: ${data.fullName}`,
        `Email: ${data.email}`,
        `Empresa: ${companyLabel}`,
        "",
        "Mensaje:",
        data.message,
      ].join("\n"),
      html: buildContactEmailHtml(data),
    }),
  })

  if (!response.ok) {
    const details = await response.text().catch(() => "")
    throw new Error(`Resend error: ${response.status} ${details}`)
  }
}

export async function submitContact(input: unknown) {
  try {
    const data = contactSchema.parse(input)

    await sendContactEmail(data)

    return { ok: true }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { ok: false, error: "invalid_payload", details: error.flatten() }
    }

    if (error instanceof Error) {
      return { ok: false, error: "contact_delivery_failed", message: error.message }
    }

    return { ok: false, error: "unknown_error" }
  }
}
