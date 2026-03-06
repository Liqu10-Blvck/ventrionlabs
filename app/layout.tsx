import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load"
import "./globals.css"

function getSiteUrl() {
  const raw = process.env.SITE_URL?.trim()
  if (!raw) return "http://localhost:3000"
  return raw.replace(/\/$/, "")
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ventrion Labs - Software para la Excelencia Operativa",
  description:
    "Ventrion Labs construye soluciones SaaS verticales diseñadas para optimizar, controlar y escalar negocios reales.",
  alternates: {
    canonical: "/",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/web-app-manifest-192x192.png",
    apple: "/web-app-manifest-192x192.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "Ventrion Labs",
    title: "Ventrion Labs - Software para la Excelencia Operativa",
    description:
      "Ventrion Labs construye soluciones SaaS verticales diseñadas para optimizar, controlar y escalar negocios reales.",
    images: [
      {
        url: "/ventrionlabsblack.png",
        width: 1024,
        height: 341,
        alt: "Ventrion Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventrion Labs - Software para la Excelencia Operativa",
    description:
      "Ventrion Labs construye soluciones SaaS verticales diseñadas para optimizar, controlar y escalar negocios reales.",
    images: ["/ventrionlabsblack.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollToTopOnLoad />
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
