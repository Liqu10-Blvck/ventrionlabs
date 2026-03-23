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
import type { Locale } from "@/lib/i18n"

type ProductsCopy = {
  eyebrow: string
  title: string
  description: string
  audiences: Record<string, string>
  summaries: Record<string, string>
  useCases: Record<string, string>
  verticalSolution: string
  fallbackSummary: string
  fallbackDescription: string
  fallbackUseCase: string
  startingAt: string
  configuration: string
  optionsLabel: (count: number) => string
  capabilitiesLabel: string
  requestDemo: string
}

const iconByProductCode: Record<string, typeof ShoppingCart> = {
  fruitpos: ShoppingCart,
  barberos: Scissors,
  educontrol: GraduationCap,
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

function getTopModules(plans: Array<{ modules?: Array<{ code: string; name?: string }> }>, locale: Locale) {
  const modules = plans
    .flatMap((p) => p.modules ?? [])
    .map((m) => ({
      code: m.code,
      label: translateModuleLabel({ code: m.code, apiName: m.name, locale: locale === "es-cl" ? "es" : "en" }),
    }))

  const unique = Array.from(new Map(modules.map((m) => [m.code, m])).values())
  return unique.slice(0, 6)
}

export async function ProductsSection({ locale, copy }: { locale: Locale; copy: ProductsCopy }) {
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

  const visibleCatalogs = catalogs.filter((catalog) => catalog.ok)

  return (
    <section id="productos" className="bg-secondary/30 px-6 py-20 dark:bg-[#070b17] sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground dark:text-white/45">
            {copy.eyebrow}
          </p>
          <h2 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl md:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground dark:text-white/60 sm:text-base">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {visibleCatalogs.map((catalog, index) => (
            <Card
              key={catalog.code}
              className="futuristic-panel motion-safe-lift group flex flex-col border-border bg-card/80 shadow-sm transition-all duration-300 hover:border-foreground/15 hover:bg-card hover:shadow-2xl hover:shadow-black/8 dark:border-white/10 dark:bg-white/3 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:shadow-black/20"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardHeader className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background dark:border-white/10 dark:bg-white/4 dark:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                    {(() => {
                      const Icon =
                        iconByProductCode[catalog.code.toLowerCase()] ??
                        ShoppingCart
                      return <Icon className="size-5" />
                    })()}
                  </div>
                  <Badge
                    variant="secondary"
                    className="border border-border bg-secondary text-xs text-muted-foreground dark:border-white/10 dark:bg-white/4 dark:text-white/70"
                  >
                    {copy.audiences[catalog.code.toLowerCase()] ?? copy.verticalSolution}
                  </Badge>
                </div>
                <CardTitle className="flex items-center gap-2 text-xl text-foreground dark:text-white">
                  {catalog.ok
                    ? catalog.data.product.name ?? catalog.data.product.code
                    : catalog.code}
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 dark:text-white/40" />
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                  {catalog.ok
                    ? copy.summaries[catalog.code.toLowerCase()] ?? copy.fallbackSummary
                    : copy.fallbackDescription}
                </CardDescription>
                {catalog.ok ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                    {copy.useCases[catalog.code.toLowerCase()] ?? copy.fallbackUseCase}
                  </p>
                ) : null}
                {!catalog.ok ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
                    We could not load the full detail right now, but the solution is still available for commercial evaluation.
                  </p>
                ) : null}
              </CardHeader>
              <CardContent>
                <div className="border-t border-border pt-4 dark:border-white/10">
                  {catalog.ok ? (
                    <div className="grid gap-4">
                      {(() => {
                        const startingPrice = getStartingPrice(catalog.data.plans)
                        const modules = getTopModules(catalog.data.plans, locale)
                        return (
                          <>
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-medium text-muted-foreground dark:text-white/50">
                                {startingPrice ? copy.startingAt : copy.configuration}
                              </p>
                              <p className="text-sm font-semibold text-foreground dark:text-white">
                                {startingPrice ?? copy.optionsLabel(catalog.data.plans.length)}
                              </p>
                            </div>

                            {modules.length > 0 ? (
                              <div className="grid gap-2">
                                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground dark:text-white/45">
                                  {copy.capabilitiesLabel}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {modules.map((m) => (
                                    <Badge
                                      key={`module-${catalog.code}-${m.code}`}
                                      variant="secondary"
                                      className="border border-border bg-secondary px-2 py-1 text-[11px] font-medium text-muted-foreground dark:border-white/10 dark:bg-white/4 dark:text-white/70"
                                    >
                                      {m.label}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ) : null}

                            <Button size="sm" className="motion-safe-lift w-full" asChild>
                              <a href="#contacto">{copy.requestDemo}</a>
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
