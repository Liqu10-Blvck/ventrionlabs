"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"

const contactSchema = z.object({
  fullName: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Ingresa un email válido"),
  company: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const text = await res.text().catch(() => "")
        throw new Error(text || `Error ${res.status}`)
      }

      toast({
        title: "Mensaje enviado",
        description: "Te contactaremos pronto.",
      })
      form.reset()
    } catch (error) {
      toast({
        title: "No se pudo enviar",
        description: error instanceof Error ? error.message : "Intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contacto
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Hablemos de tu operación
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cuéntanos qué estás intentando ordenar, digitalizar o escalar. Te
            responderemos con una conversación inicial y un siguiente paso claro.
          </p>

          <div className="futuristic-panel mt-8 overflow-hidden rounded-2xl border border-border bg-background/70 shadow-sm sm:mt-10">
            <div className="grid gap-1 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Información
              </p>
              <p className="text-sm text-muted-foreground">
                Respuesta inicial dentro de 1 día hábil.
              </p>
            </div>
            <div className="grid divide-y divide-border">
              <div className="px-5 py-4 sm:px-6">
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Disponible por formulario y configuración de correo transaccional
                </p>
              </div>
              <div className="px-5 py-4 sm:px-6">
                <p className="text-sm font-medium text-foreground">Horario</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lunes a viernes, 09:00 – 18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="futuristic-panel animate-pulse-glow rounded-2xl border border-border bg-background/70 p-5 shadow-sm sm:p-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input autoComplete="name" placeholder="Tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          placeholder="tu@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa (opcional)</FormLabel>
                    <FormControl>
                      <Input autoComplete="organization" placeholder="Tu empresa" {...field} value={field.value ?? ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre tu operación y objetivos"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Al enviar este formulario aceptas ser contactado por nuestro equipo para continuar la conversación.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="motion-safe-lift w-full sm:w-auto"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar conversación"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
