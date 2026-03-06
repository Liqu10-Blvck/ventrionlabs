import type { MetadataRoute } from "next"

function getSiteUrl() {
  const raw = process.env.SITE_URL?.trim()
  if (!raw) return null
  return raw.replace(/\/$/, "")
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl() ?? "http://localhost:3000"
  const now = new Date()
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/nosotros", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/filosofia", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/casos-de-uso", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terminos", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/aviso-legal", changeFrequency: "yearly" as const, priority: 0.2 },
  ]

  return routes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
}
