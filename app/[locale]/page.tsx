import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ProductsSection } from "@/components/products-section"
import { TrustSection } from "@/components/trust-section"
import { TechnologySection } from "@/components/technology-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"
import { getLandingDictionary } from "@/lib/landing-dictionaries"
import { isLocale, locales, type Locale } from "@/lib/i18n"

const siteUrl = (process.env.SITE_URL?.trim() || "http://localhost:3000").replace(/\/$/, "")

type PageProps = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  if (!isLocale(locale)) {
    return {}
  }

  const dict = await getLandingDictionary(locale)
  const canonicalPath = `/${locale}`

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "es-CL": "/es-cl",
        en: "/en",
      },
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: `${siteUrl}${canonicalPath}`,
      type: "website",
      locale: dict.metadata.ogLocale,
    },
    twitter: {
      title: dict.metadata.title,
      description: dict.metadata.description,
    },
  }
}

async function buildStructuredData(locale: Locale) {
  const dict = await getLandingDictionary(locale)
  const pageUrl = `${siteUrl}/${locale}`

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Ventrion Labs",
        url: siteUrl,
        logo: `${siteUrl}/ventrionblack.png`,
        email: "contacto@ventrionlabs.cl",
        description: dict.metadata.description,
      },
      {
        "@type": "WebPage",
        name: dict.metadata.title,
        url: pageUrl,
        isPartOf: {
          "@type": "WebSite",
          name: "Ventrion Labs",
          url: siteUrl,
        },
        about: {
          "@type": "Organization",
          name: "Ventrion Labs",
        },
        description: dict.metadata.description,
        inLanguage: dict.metadata.language,
      },
      {
        "@type": "WebSite",
        name: "Ventrion Labs",
        url: siteUrl,
        inLanguage: dict.metadata.language,
        description: dict.metadata.description,
      },
    ],
  }
}

export default async function LocalizedHome({ params }: PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dict = await getLandingDictionary(locale)
  const structuredData = await buildStructuredData(locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar
        locale={locale}
        ctaLabel={dict.navbar.cta}
        navLinks={dict.navbar.links}
        themeLabel={dict.navbar.theme}
      />
      <main>
        <AnimatedSection as="section" animationClassName="animate-fade-in">
          <HeroSection {...dict.hero} />
        </AnimatedSection>

        <AnimatedSection as="section">
          <WhatWeDoSection {...dict.whatWeBuild} />
        </AnimatedSection>

        <AnimatedSection as="section">
          <ProblemsSection {...dict.problem} />
        </AnimatedSection>

        <AnimatedSection as="section">
          <HowWeWorkSection {...dict.process} />
        </AnimatedSection>

        <AnimatedSection as="section">
          <TechnologySection {...dict.technology} />
        </AnimatedSection>

        <AnimatedSection as="section">
          <ProductsSection locale={locale} copy={dict.products} />
        </AnimatedSection>

        <AnimatedSection as="section">
          <TrustSection
            eyebrow={dict.whyVentrion.eyebrow}
            title={dict.whyVentrion.title}
            description={dict.whyVentrion.description}
            items={dict.whyVentrion.items}
          />
        </AnimatedSection>

        <AnimatedSection as="section">
          <FinalCtaSection {...dict.cta} />
        </AnimatedSection>
      </main>
      <Footer locale={locale} copy={dict.footer} />
    </div>
  )
}
