export type PublicLandingPlanPrice = {
  currency: string
  interval: string
  amount: string
  is_active: boolean
}

export type PublicLandingPlanLimit = {
  key: string
  value_type: string
  value: number | string
}

export type PublicLandingPlanModule = {
  code: string
  name?: string
}

export type PublicLandingPlan = {
  code: string
  name: string
  id?: string
  status?: string
  prices?: PublicLandingPlanPrice[]
  limits?: PublicLandingPlanLimit[]
  modules?: PublicLandingPlanModule[]
}

export type PublicLandingProduct = {
  code: string
  name?: string
}

type PublicLandingProductsListResponse =
  | PublicLandingProduct[]
  | { products: PublicLandingProduct[] }
  | { results: PublicLandingProduct[] }

export type PublicLandingFounderInfo = {
  code: string
  limit: number
  available: boolean
  remaining: number
}

export type PublicLandingProductCatalogResponse = {
  product: PublicLandingProduct
  plans: PublicLandingPlan[]
  founder?: PublicLandingFounderInfo
}

const fallbackProductCatalogs: Record<string, PublicLandingProductCatalogResponse> = {
  fruitpos: {
    product: {
      code: "fruitpos",
      name: "FruitPOS",
    },
    plans: [
      {
        code: "starter",
        name: "Starter",
        prices: [
          {
            currency: "CLP",
            interval: "mes",
            amount: "29990",
            is_active: true,
          },
        ],
        modules: [
          { code: "sales", name: "Ventas" },
          { code: "inventory", name: "Inventario" },
          { code: "reports", name: "Reportes" },
        ],
      },
    ],
  },
  barberos: {
    product: {
      code: "barberos",
      name: "Barberos",
    },
    plans: [
      {
        code: "pro",
        name: "Pro",
        prices: [
          {
            currency: "CLP",
            interval: "mes",
            amount: "24990",
            is_active: true,
          },
        ],
        modules: [
          { code: "appointments", name: "Reservas" },
          { code: "clients", name: "Clientes" },
          { code: "cashier", name: "Caja" },
        ],
      },
    ],
  },
  educontrol: {
    product: {
      code: "educontrol",
      name: "EduControl",
    },
    plans: [
      {
        code: "growth",
        name: "Growth",
        prices: [
          {
            currency: "CLP",
            interval: "mes",
            amount: "39990",
            is_active: true,
          },
        ],
        modules: [
          { code: "attendance", name: "Asistencia" },
          { code: "billing", name: "Cobranza" },
          { code: "communications", name: "Comunicaciones" },
        ],
      },
    ],
  },
  demo: {
    product: {
      code: "demo",
      name: "Demo Product",
    },
    plans: [
      {
        code: "base",
        name: "Base",
        prices: [
          {
            currency: "CLP",
            interval: "mes",
            amount: "19990",
            is_active: true,
          },
        ],
        modules: [
          { code: "dashboard", name: "Dashboard" },
          { code: "analytics", name: "Analítica" },
        ],
      },
    ],
  },
}

function getFallbackProducts() {
  return Object.values(fallbackProductCatalogs).map(({ product }) => product)
}

function getFallbackProductCatalog(productCode: string) {
  return fallbackProductCatalogs[productCode.toLowerCase()]
}

function getPublicLandingApiBaseUrl() {
  const baseUrl = process.env.PUBLIC_LANDING_API_BASE_URL
  if (!baseUrl) {
    throw new Error("Missing PUBLIC_LANDING_API_BASE_URL")
  }

  return baseUrl.replace(/\/$/, "")
}

export async function fetchPublicProductCatalog(productCode: string) {
  const fallback = getFallbackProductCatalog(productCode)

  try {
    const url = `${getPublicLandingApiBaseUrl()}/api/public/products/${encodeURIComponent(productCode)}`

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    })

    if (!res.ok) {
      const text = await res.text().catch(() => "")
      throw new Error(`Failed to fetch product catalog (${productCode}): ${res.status} ${text}`)
    }

    return (await res.json()) as PublicLandingProductCatalogResponse
  } catch (error) {
    if (fallback) {
      return fallback
    }

    throw error
  }
}

function parseProductsListResponse(data: unknown): PublicLandingProduct[] {
  if (Array.isArray(data)) {
    return data as PublicLandingProduct[]
  }

  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>
    const products = record.products
    if (Array.isArray(products)) return products as PublicLandingProduct[]

    const results = record.results
    if (Array.isArray(results)) return results as PublicLandingProduct[]
  }

  throw new Error("Invalid products list response")
}

export async function fetchPublicProducts() {
  try {
    const url = `${getPublicLandingApiBaseUrl()}/api/public/products/`

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    })

    if (!res.ok) {
      const text = await res.text().catch(() => "")
      throw new Error(`Failed to fetch products: ${res.status} ${text}`)
    }

    const data = (await res.json()) as PublicLandingProductsListResponse
    return parseProductsListResponse(data)
  } catch {
    return getFallbackProducts()
  }
}

export function getPublicLandingProductCodes() {
  const raw = process.env.PUBLIC_LANDING_PRODUCT_CODES ?? ""
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
}
