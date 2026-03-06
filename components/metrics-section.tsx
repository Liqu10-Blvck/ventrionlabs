"use client"

import { useInView } from "@/hooks/use-in-view"
import { MetricValue } from "@/components/metric-value"

export function MetricsSection() {
  const metrics = [
    {
      value: "40%",
      label: "Reducción promedio en tiempo operativo",
    },
    {
      value: "2.5x",
      label: "Retorno de inversión en el primer año",
    },
    {
      value: "15min",
      label: "Tiempo promedio de onboarding",
    },
    {
      value: "24/7",
      label: "Soporte técnico especializado",
    },
  ]

  const { ref, isInView } = useInView()

  return (
    <section className="bg-foreground px-6 py-20 md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center gap-2 px-8 py-10 text-center"
            >
              <span className="text-3xl font-semibold tracking-tight text-background md:text-4xl">
                <MetricValue value={metric.value} animate={isInView} />
              </span>
              <span className="max-w-[180px] text-sm leading-relaxed text-background/60">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
