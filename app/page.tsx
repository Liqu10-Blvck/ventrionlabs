import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { ValuesSection } from "@/components/values-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { ProductsSection } from "@/components/products-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedSection } from "@/components/animated-section"
import { Footer } from "@/components/footer"

const siteUrl = (process.env.SITE_URL?.trim() || "http://localhost:3000").replace(/\/$/, "")

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
        logo: `${siteUrl}/web-app-manifest-512x512.png`,
        email: "contacto@ventrionlabs.cl",
      },
      {
        "@type": "WebSite",
        name: "Ventrion Labs",
        url: siteUrl,
        inLanguage: "es-CL",
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
          <ProblemsSection />
        </AnimatedSection>

        <AnimatedSection>
          <WhatWeDoSection />
        </AnimatedSection>

        <AnimatedSection>
          <ValuesSection />
        </AnimatedSection>

        <AnimatedSection>
          <HowWeWorkSection />
        </AnimatedSection>

        <AnimatedSection>
          <ProductsSection />
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
