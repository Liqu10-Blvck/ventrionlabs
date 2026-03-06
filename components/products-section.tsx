import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowUpRight,
  ShoppingCart,
  Scissors,
  GraduationCap,
} from "lucide-react"
import {
  fetchPublicProductCatalog,
  fetchPublicProducts,
  getPublicLandingProductCodes,
} from "@/lib/public-landing-api"
import { translateModuleLabel } from "@/lib/module-i18n"

const iconByProductCode: Record<string, typeof ShoppingCart> = {
  fruitpos: ShoppingCart,
  barberos: Scissors,
  educontrol: GraduationCap,
}

const productAudienceByCode: Record<string, string> = {
  fruitpos: "Retail y comercio",
  barberos: "Servicios y agenda",
  educontrol: "Educación y control interno",
}

const productSummaryByCode: Record<string, string> = {
  fruitpos: "Ordena ventas, catálogo, inventario y operación diaria desde un solo sistema.",
  barberos: "Centraliza reservas, atención, clientes y seguimiento operativo del negocio.",
  educontrol: "Mejora control administrativo, procesos internos y visibilidad de información crítica.",
}

const productUseCaseByCode: Record<string, string> = {
  fruitpos: "Ideal para puntos de venta que necesitan ordenar caja, inventario y operación diaria.",
  barberos: "Ideal para negocios con reservas, atención recurrente y gestión de clientes.",
  educontrol: "Ideal para instituciones que requieren control administrativo y trazabilidad interna.",
}

function formatPrice(amount: string, currency: string) {
  const value = Number(amount)
  if (Number.isNaN(value)) return `${amount} ${currency}`

  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

function getStartingPrice(plans: Array<{ prices?: Array<{ amount: string; currency: string; interval: string; is_active: boolean }> }>) {
  const active = plans
    .flatMap((p) => p.prices ?? [])
    .filter((p) => p.is_active)
    .map((p) => ({
      amountNumber: Number(p.amount),
      amount: p.amount,
      currency: p.currency,
      interval: p.interval,
    }))
    .filter((p) => !Number.isNaN(p.amountNumber))

  if (active.length === 0) return null

  const min = active.reduce((acc, cur) => (cur.amountNumber < acc.amountNumber ? cur : acc))
  return `${formatPrice(min.amount, min.currency)}/${min.interval}`
}

function getTopModules(plans: Array<{ modules?: Array<{ code: string; name?: string }> }>) {
  const modules = plans
    .flatMap((p) => p.modules ?? [])
    .map((m) => ({
      code: m.code,
      label: translateModuleLabel({ code: m.code, apiName: m.name, locale: "es" }),
    }))

  const unique = Array.from(new Map(modules.map((m) => [m.code, m])).values())
  return unique.slice(0, 6)
}

export async function ProductsSection() {
  let productCodes: string[] = []

  try {
    const products = await fetchPublicProducts()
    productCodes = products.map((p) => p.code).filter(Boolean)
  } catch {
    productCodes = []
  }

  if (productCodes.length === 0) {
    productCodes = getPublicLandingProductCodes()
  }

  productCodes = productCodes.filter((code) => code.toLowerCase() !== "demo")

  const catalogs = await Promise.all(
    productCodes.map(async (code) => {
      try {
        const data = await fetchPublicProductCatalog(code)
        return { ok: true as const, code, data }
      } catch (error) {
        return {
          ok: false as const,
          code,
          error: error instanceof Error ? error.message : String(error),
        }
      }
    }),
  )

  const visibleCatalogs = catalogs.filter((catalog) => catalog.code.toLowerCase() !== "demo")

  return (
    <section id="productos" className="bg-secondary/50 px-6 py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Productos
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Productos presentados como soluciones, no como fichas técnicas
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Cada producto está orientado a un tipo de operación concreto y busca
            resolver un problema real con más orden, visibilidad y continuidad.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {visibleCatalogs.map((catalog, index) => (
            <Card
              key={catalog.code}
              className="futuristic-panel motion-safe-lift group flex flex-col border-border bg-background/85 shadow-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardHeader className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="animate-pulse-glow flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                    {(() => {
                      const Icon =
                        iconByProductCode[catalog.code.toLowerCase()] ??
                        ShoppingCart
                      return <Icon className="size-5" />
                    })()}
                  </div>
                  <Badge
                    variant="secondary"
                    className="animate-border-beam text-xs"
                  >
                    {productAudienceByCode[catalog.code.toLowerCase()] ?? "Solución vertical"}
                  </Badge>
                </div>
                <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                  {catalog.ok
                    ? catalog.data.product.name ?? catalog.data.product.code
                    : catalog.code}
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100" />
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {catalog.ok
                    ? productSummaryByCode[catalog.code.toLowerCase()] ??
                      "Producto diseñado para resolver procesos críticos con más orden y trazabilidad."
                    : "Esta solución puede configurarse según la necesidad operativa del negocio."}
                </CardDescription>
                {catalog.ok ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {productUseCaseByCode[catalog.code.toLowerCase()] ??
                      "Ideal para operaciones que requieren más control, trazabilidad y estandarización."}
                  </p>
                ) : null}
                {!catalog.ok ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    No pudimos cargar el detalle completo en este momento, pero la solución sigue disponible para evaluación comercial.
                  </p>
                ) : null}
              </CardHeader>
              <CardContent>
                <div className="border-t border-border pt-4">
                  {catalog.ok ? (
                    <div className="grid gap-4">
                      {(() => {
                        const startingPrice = getStartingPrice(catalog.data.plans)
                        const modules = getTopModules(catalog.data.plans)
                        return (
                          <>
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-medium text-muted-foreground">
                                {startingPrice ? "Desde" : "Configuración"}
                              </p>
                              <p className="text-sm font-semibold text-foreground">
                                {startingPrice ?? `${catalog.data.plans.length} alternativas`}
                              </p>
                            </div>

                            {modules.length > 0 ? (
                              <div className="grid gap-2">
                                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                  Capacidades clave
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {modules.map((m) => (
                                    <Badge
                                      key={`module-${catalog.code}-${m.code}`}
                                      variant="secondary"
                                      className="px-2 py-1 text-[11px] font-medium"
                                    >
                                      {m.label}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ) : null}

                            <Button size="sm" className="motion-safe-lift w-full" asChild>
                              <a href="#contacto">Solicitar demo</a>
                            </Button>
                          </>
                        )
                      })()}
                    </div>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
