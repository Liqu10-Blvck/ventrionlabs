import type { MetadataRoute } from "next"

function getSiteUrl() {
  const raw = process.env.SITE_URL
  if (!raw) return null
  return raw.replace(/\/$/, "")
}

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: siteUrl ?? undefined,
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  }
}
