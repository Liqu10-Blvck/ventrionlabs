import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
})

function getContactMailConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY?.trim(),
    fromEmail:
      process.env.CONTACT_FROM_EMAIL?.trim() || "Ventrion Labs <onboarding@resend.dev>",
    toEmail: process.env.CONTACT_TO_EMAIL?.trim(),
  }
}

function buildContactEmailHtml(data: z.infer<typeof contactSchema>) {
  const submittedAt = new Date().toLocaleString("es-CL", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1 style="margin-bottom: 16px; font-size: 20px;">Nuevo contacto desde ventrionlabs.cl</h1>
      <p style="margin: 0 0 8px;"><strong>Nombre:</strong> ${data.fullName}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin: 0 0 8px;"><strong>Empresa:</strong> ${data.company}</p>
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
      subject: `Nuevo contacto web: ${data.fullName} - ${data.company}`,
      text: [
        "Nuevo contacto desde ventrionlabs.cl",
        `Nombre: ${data.fullName}`,
        `Email: ${data.email}`,
        `Empresa: ${data.company}`,
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

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    await sendContactEmail(data)

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "invalid_payload", details: error.flatten() },
        { status: 400 },
      )
    }

    if (error instanceof Error) {
      return NextResponse.json(
        { ok: false, error: "contact_delivery_failed", message: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json(
      { ok: false, error: "unknown_error" },
      { status: 500 },
    )
  }
}
