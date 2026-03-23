import { z } from "zod"

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  CONTACT_FROM_EMAIL: z.string().default("Ventrion Labs <onboarding@resend.dev>"),
  CONTACT_TO_EMAIL: z.string().optional(),
  CMS_CONTENT_URL: z.string().optional(),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error("❌ Entorno inválido o incompleto:", parsed.error.format())
  throw new Error("Invalid environment variables")
}

export const env = parsed.data
