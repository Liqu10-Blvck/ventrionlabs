import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { ValuesSection } from "@/components/values-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ProductsSection } from "@/components/products-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"

const siteUrl = (process.env.SITE_URL?.trim() || "http://localhost:3000").replace(/\/$/, "")
const pageTitle = "Software para ordenar operaciones y escalar con claridad"
const pageDescription =
  "Ventrion Labs ayuda a empresas a ordenar procesos, centralizar información y construir sistemas más claros para crecer con control operacional."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Ventrion Labs",
        url: siteUrl,
        logo: `${siteUrl}/ventrionblack.png`,
        email: "contacto@ventrionlabs.cl",
        description: pageDescription,
      },
      {
        "@type": "WebPage",
        name: pageTitle,
        url: siteUrl,
        isPartOf: {
          "@type": "WebSite",
          name: "Ventrion Labs",
          url: siteUrl,
        },
        about: {
          "@type": "Organization",
          name: "Ventrion Labs",
        },
        description: pageDescription,
        inLanguage: "es-CL",
      },
      {
        "@type": "WebSite",
        name: "Ventrion Labs",
        url: siteUrl,
        inLanguage: "es-CL",
        description: pageDescription,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <AnimatedSection animationClassName="animate-fade-in">
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection>
          <WhatWeDoSection />
        </AnimatedSection>

        <AnimatedSection>
          <ProblemsSection />
        </AnimatedSection>

        <AnimatedSection>
          <HowWeWorkSection />
        </AnimatedSection>

        <AnimatedSection>
          <ProductsSection />
        </AnimatedSection>

        <AnimatedSection>
          <TrustSection />
        </AnimatedSection>

        <AnimatedSection>
          <ValuesSection />
        </AnimatedSection>

        <AnimatedSection>
          <FinalCtaSection />
        </AnimatedSection>

        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}
