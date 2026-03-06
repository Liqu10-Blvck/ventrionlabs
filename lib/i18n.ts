export const locales = ["es-cl", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es-cl"

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function getLocalePrefix(locale: Locale) {
  return `/${locale}`
}

export function withLocalePath(locale: Locale, path: string) {
  if (!path) return getLocalePrefix(locale)
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:")) {
    return path
  }
  if (path === "#") return `${getLocalePrefix(locale)}#`
  if (path.startsWith("#")) return `${getLocalePrefix(locale)}/${path}`
  if (path === "/") return getLocalePrefix(locale)
  return `${getLocalePrefix(locale)}${path}`
}
