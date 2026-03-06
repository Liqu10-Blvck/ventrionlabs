import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Users, Building2, Workflow, Package } from "lucide-react"

const serviceIcons = [Users, Building2, Workflow, Package] as const

type WhatWeDoSectionProps = {
  eyebrow: string
  title: string
  description: string
  items: Array<{ title: string; description: string }>
}

export function WhatWeDoSection({ eyebrow, title, description, items }: WhatWeDoSectionProps) {
  const services = items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index] ?? Users,
  }))

  return (
    <section id="soluciones" className="px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/45">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-white/60 sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="futuristic-panel motion-safe-lift group border-border bg-card/80 shadow-sm transition-all duration-300 hover:border-foreground/15 hover:bg-card hover:shadow-2xl hover:shadow-black/8 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:shadow-black/20"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background dark:border-white/10 dark:bg-white/4 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  <service.icon className="size-5" />
                </div>
                <CardTitle className="text-foreground dark:text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
