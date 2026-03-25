import type { Locale } from "@/lib/i18n"

type Dictionary = {
  metadata: {
    title: string
    description: string
    language: string
    ogLocale: string
  }
  navbar: {
    links: Array<{ label: string; href: string }>
    cta: string
    theme: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    highlights: string[]
    panelTitle: string
    panelSubtitle: string
    panelBadge: string
    panelMetric: string
    panelSystemsLabel: string
    panelSystemsValue: string
    panelFocusLabel: string
    panelFocusValue: string
  }
  whatWeBuild: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  problem: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  process: {
    eyebrow: string
    title: string
    description: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  technology: {
    eyebrow: string
    title: string
    description: string
    capabilities: Array<{ title: string; description: string }>
    executionTitle: string
    executionDescription: string
    signals: string[]
    visualLabel: string
  }
  whyVentrion: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  cta: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
  }
  footer: {
    company: string
    sections: string
    legal: string
    about: string
    philosophy: string
    build: string
    problem: string

    technology: string
    privacy: string
    terms: string
    legalNotice: string
    description: string
    rights: string
  }
}

export const landingDictionaries: Record<Locale, Dictionary> = {
  "es-cl": {
    metadata: {
      title: "Software moderno para empresas que necesitan claridad operacional",
      description:
        "Ventrion Labs diseña productos digitales, sistemas internos y software operacional para equipos que necesitan más control, trazabilidad y velocidad real.",
      language: "es-CL",
      ogLocale: "es_CL",
    },
    navbar: {
      links: [
        { label: "Qué construimos", href: "#soluciones" },
        { label: "Problema", href: "#problema" },

        { label: "Proceso", href: "#proceso" },
        { label: "Tecnología", href: "#tecnologia" },
        { label: "Por qué Ventrion", href: "#why-ventrion" },
        { label: "Contacto", href: "#contacto" },
      ],
      cta: "Agendar llamada",
      theme: "Tema",
    },
    hero: {
      eyebrow: "Software moderno para equipos con operación real",
      title: "Construimos software que le da claridad operacional a empresas en crecimiento.",
      description:
        "Ventrion Labs diseña productos, sistemas internos y software de negocio para equipos que necesitan mejores flujos, datos más limpios y una base tecnológica confiable.",
      primaryCta: "Agendar llamada",

      highlights: [
        "Ejecución técnica con criterio",
        "Sistemas operacionales con ownership claro",
        "Pensamiento de producto sin complejidad innecesaria",
      ],
      panelTitle: "Ventrion Labs",
      panelSubtitle: "Workspace de software operacional",
      panelBadge: "Sistemas activos",
      panelMetric: "Control de flujo",
      panelSystemsLabel: "Sistemas",
      panelSystemsValue: "Productos, herramientas y automatizaciones",
      panelFocusLabel: "Enfoque",
      panelFocusValue: "UX clara + backend mantenible",
    },
    whatWeBuild: {
      eyebrow: "Qué construimos",
      title: "Sistemas de producto para equipos que necesitan que el software genere ventaja real.",
      description:
        "Diseñamos software que mejora operación, visibilidad interna y calidad de ejecución sin sumar complejidad innecesaria.",
      items: [
        {
          title: "Software a medida",
          description:
            "Diseñamos y construimos soluciones específicas para operaciones con reglas propias, procesos críticos y necesidades particulares.",
        },
        {
          title: "Sistemas internos",
          description:
            "Creamos plataformas internas para ordenar flujos, permisos, trazabilidad, control y visibilidad operacional.",
        },
        {
          title: "Automatización de procesos",
          description:
            "Reducimos trabajo manual y errores con automatizaciones pensadas para operar de forma confiable en escenarios reales.",
        },

      ],
    },
    problem: {
      eyebrow: "Problema",
      title: "El crecimiento se desordena cuando los sistemas internos no escalan al ritmo del negocio.",
      description:
        "Ayudamos a reemplazar flujos fragmentados, cuellos de botella ocultos y herramientas frágiles por sistemas más claros de operar y evolucionar.",
      items: [
        {
          title: "Crecimiento sin estructura",
          description:
            "El negocio crece, pero procesos y sistemas no escalan al mismo ritmo. Aparecen cuellos de botella, retrabajo y dependencia de personas clave.",
        },
        {
          title: "Desorden operativo y falta de trazabilidad",
          description:
            "No hay visibilidad confiable de lo que ocurre en la operación. Se vuelve difícil controlar, auditar y estandarizar.",
        },
        {
          title: "Herramientas desconectadas",
          description:
            "Planillas y soluciones parciales que no conversan entre sí. Los datos se duplican y las decisiones se toman con información incompleta.",
        },
        {
          title: "Permisos y reglas sin control",
          description:
            "Accesos y configuraciones sin criterios consistentes. Esto aumenta el riesgo y la fricción operativa.",
        },
        {
          title: "Automatización frágil o inexistente",
          description:
            "Tareas repetitivas consumen tiempo y elevan el error. Cuando hay automatización, suele ser difícil de mantener o ajustar.",
        },
        {
          title: "Evolución lenta y costosa",
          description:
            "Cambios pequeños toman demasiado tiempo porque el sistema no está diseñado para iterar con seguridad y continuidad.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Un proceso claro para construir software que el equipo realmente pueda operar.",
      description:
        "Entrega estructurada, hitos definidos y ejecución moderna sin teatro de proceso innecesario.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          description:
            "Levantamos el contexto operativo, definimos alcance claro e identificamos riesgos, dependencias y prioridades desde el inicio.",
        },
        {
          number: "02",
          title: "Diseño de solución",
          description:
            "Traducimos objetivos en un diseño claro de producto y sistema: flujos, reglas, responsabilidades y criterios de éxito.",
        },
        {
          number: "03",
          title: "Construcción",
          description:
            "Implementamos con entregas iterativas y controladas, priorizando continuidad operacional y cambios trazables.",
        },
        {
          number: "04",
          title: "Evolución continua",
          description:
            "Mejoramos el sistema en el tiempo mediante mantenimiento estructurado, mejoras y ajuste de procesos.",
        },
      ],
    },
    technology: {
      eyebrow: "Tecnología",
      title: "Tecnología pensada para software que se ve moderno y sigue siendo operable.",
      description:
        "Ventrion Labs combina producto, arquitectura y ejecución para construir software que se siente actual para el usuario y mantenible para el equipo.",
      capabilities: [
        {
          title: "Arquitectura de producto",
          description:
            "Diseñamos aplicaciones y backends con una base clara para evolucionar funcionalidades, permisos, flujos y observabilidad.",
        },
        {
          title: "Datos y trazabilidad",
          description:
            "Modelamos información crítica para que cada estado, cambio y proceso importante pueda consultarse con confianza.",
        },
        {
          title: "Automatización confiable",
          description:
            "Integramos procesos, reglas y eventos para reducir trabajo manual sin crear una operación frágil o difícil de mantener.",
        },
        {
          title: "Control y seguridad",
          description:
            "Construimos con permisos, auditoría y criterios de acceso pensados para equipos con responsabilidad operacional real.",
        },
      ],
      executionTitle: "Capa de ejecución",
      executionDescription: "Pensada para equipos que necesitan claridad, no ruido.",
      signals: [
        "Sistemas de producto",
        "Plataformas internas",
        "Aplicaciones web modernas",
        "Flujos automatizados",
        "APIs e integraciones",
        "Herramientas operacionales",
      ],
      visualLabel: "Sistema visual",
    },
    whyVentrion: {
      eyebrow: "Por qué Ventrion",
      title: "Mentalidad moderna de producto con la disciplina que exige el software operacional real.",
      description:
        "Combinamos producto, ingeniería práctica y ejecución sobria para construir sistemas que sigan siendo útiles con el tiempo.",
      items: [
        {
          title: "Alcance antes que promesas",
          description:
            "Partimos con diagnóstico, alcance y criterios de éxito claros antes de proponer una implementación.",
        },
        {
          title: "Entrega iterativa",
          description:
            "Priorizamos releases controlados y evolución continua en lugar de proyectos opacos o difíciles de sostener.",
        },
        {
          title: "Decisiones técnicas sobrias",
          description:
            "Optimizamos por trazabilidad, mantenibilidad y continuidad operacional por encima de claims vistosos o complejidad innecesaria.",
        },
        {
          title: "Guía honesta",
          description:
            "Si un problema no requiere software a medida, lo decimos. El objetivo es resolver el problema operacional real.",
        },
      ],
    },
    cta: {
      eyebrow: "Contacto",
      title: "Construyamos la capa de software que tu operación realmente necesita.",
      description:
        "Si tu equipo ya superó planillas, herramientas fragmentadas o flujos internos frágiles, podemos ayudarte a definir qué producto, sistema o plataforma construir.",
      primaryCta: "Agendar llamada",

    },
    footer: {
      company: "Empresa",
      sections: "Secciones",
      legal: "Legal",
      about: "Nosotros",
      philosophy: "Filosofía",
      build: "Qué construimos",
      problem: "Problema",

      technology: "Tecnología",
      privacy: "Privacidad",
      terms: "Términos",
      legalNotice: "Aviso legal",
      description:
        "Sistemas de software modernos para empresas que necesitan flujos más claros, mejor ejecución y control operacional real.",
      rights: "© 2026 Ventrion Labs. Todos los derechos reservados.",
    },
  },
  en: {
    metadata: {
      title: "Modern software systems for teams building real operations",
      description:
        "Ventrion Labs builds modern software products, internal tools and operational systems for companies that need clarity, speed and reliable execution.",
      language: "en",
      ogLocale: "en_US",
    },
    navbar: {
      links: [
        { label: "What we build", href: "#soluciones" },
        { label: "Problem", href: "#problema" },

        { label: "Process", href: "#proceso" },
        { label: "Technology", href: "#tecnologia" },
        { label: "Why Ventrion", href: "#why-ventrion" },
        { label: "Contact", href: "#contacto" },
      ],
      cta: "Book intro call",
      theme: "Theme",
    },
    hero: {
      eyebrow: "Modern software systems for real operational teams",
      title: "We build software that gives growing companies operational clarity.",
      description:
        "Ventrion Labs designs products, internal tools and business systems for teams that need better workflows, cleaner data and a more reliable software foundation.",
      primaryCta: "Book intro call",

      highlights: [
        "Developer-grade execution",
        "Operational systems with clear ownership",
        "Product thinking without unnecessary complexity",
      ],
      panelTitle: "Ventrion Labs",
      panelSubtitle: "Operational software workspace",
      panelBadge: "Live systems",
      panelMetric: "Flow control",
      panelSystemsLabel: "Systems",
      panelSystemsValue: "Products, tooling, automations",
      panelFocusLabel: "Focus",
      panelFocusValue: "Clear UX + maintainable backend",
    },
    whatWeBuild: {
      eyebrow: "What we build",
      title: "Product systems for teams that need software to feel like leverage.",
      description:
        "We design software that improves operations, internal visibility and execution quality without adding unnecessary complexity.",
      items: [
        {
          title: "Custom software",
          description:
            "We design and build solutions for operations with their own rules, critical workflows and specific requirements.",
        },
        {
          title: "Internal systems",
          description:
            "We create internal platforms to organize workflows, permissions, traceability, control and operational visibility.",
        },
        {
          title: "Process automation",
          description:
            "We reduce manual work and operational errors with automations designed to run reliably in real environments.",
        },

      ],
    },
    problem: {
      eyebrow: "Problem",
      title: "Growth gets messy when internal systems are not designed to scale with the business.",
      description:
        "We help teams replace fragmented workflows, hidden bottlenecks and brittle tooling with systems that are easier to operate and evolve.",
      items: [
        {
          title: "Growth without structure",
          description:
            "The business grows, but processes and systems do not scale at the same pace. Bottlenecks, rework and dependency on key people start to appear.",
        },
        {
          title: "Operational disorder and weak traceability",
          description:
            "There is no reliable visibility into what is happening in the operation, making it harder to control, audit and standardize.",
        },
        {
          title: "Disconnected tools",
          description:
            "Spreadsheets and partial solutions do not talk to each other. Data gets duplicated and decisions are made with incomplete information.",
        },
        {
          title: "Permissions and rules without control",
          description:
            "Access and configuration evolve without consistent criteria, increasing both risk and operational friction.",
        },
        {
          title: "Fragile or missing automation",
          description:
            "Repetitive tasks consume time and increase error rates. When automation exists, it is often hard to maintain or adjust.",
        },
        {
          title: "Slow and expensive evolution",
          description:
            "Small changes take too long because the system was not designed to iterate safely and continuously.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A clear process for building software that teams can actually operate.",
      description:
        "Structured delivery, defined milestones and modern execution without unnecessary process theater.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "We map the operational context, define a clear scope and identify risks, dependencies and priorities early.",
        },
        {
          number: "02",
          title: "Solution design",
          description:
            "We translate goals into a clear product and system design: flows, rules, responsibilities and success criteria.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "We ship through iterative and controlled releases, prioritizing operational continuity and traceable changes.",
        },
        {
          number: "04",
          title: "Continuous evolution",
          description:
            "We improve the system over time through structured maintenance, enhancements and process refinement.",
        },
      ],
    },
    technology: {
      eyebrow: "Technology",
      title: "Technology designed for software that feels modern and stays operable.",
      description:
        "Ventrion Labs combines product thinking, architecture and execution to ship software that feels modern for users and maintainable for teams.",
      capabilities: [
        {
          title: "Product architecture",
          description:
            "We design applications and backends with a clear foundation for evolving features, permissions, workflows and observability.",
        },
        {
          title: "Data and traceability",
          description:
            "We model critical information so each state, change and key process can be inspected with confidence.",
        },
        {
          title: "Reliable automation",
          description:
            "We integrate processes, rules and events to reduce manual work without creating a fragile or hard-to-maintain operation.",
        },
        {
          title: "Control and security",
          description:
            "We build with permissions, audit trails and access controls designed for teams with real operational responsibility.",
        },
      ],
      executionTitle: "Execution layer",
      executionDescription: "Built for teams that need clarity, not noise.",
      signals: [
        "Product systems",
        "Internal platforms",
        "Modern web apps",
        "Automation workflows",
        "APIs and integrations",
        "Operational tooling",
      ],
      visualLabel: "Visual system",
    },
    whyVentrion: {
      eyebrow: "Why Ventrion",
      title: "A modern product mindset with the discipline required for real operational software.",
      description:
        "We combine clean product thinking, practical engineering and sober execution so teams can ship systems that remain useful over time.",
      items: [
        {
          title: "Scope before promises",
          description:
            "We start with discovery, scope and clear success criteria before proposing any implementation path.",
        },
        {
          title: "Iterative delivery",
          description:
            "We prioritize controlled releases and continuous evolution instead of opaque projects that are hard to sustain.",
        },
        {
          title: "Sober technical decisions",
          description:
            "We optimize for traceability, maintainability and operational continuity over flashy claims or unnecessary complexity.",
        },
        {
          title: "Honest guidance",
          description:
            "If a problem does not require custom software, we say so. The goal is to solve the real operational issue.",
        },
      ],
    },
    cta: {
      eyebrow: "CTA",
      title: "Build the software layer your operation actually needs.",
      description:
        "If your team is outgrowing spreadsheets, fragmented tools or brittle internal workflows, we can help define the right product, system or platform to build next.",
      primaryCta: "Book intro call",

    },
    footer: {
      company: "Company",
      sections: "Sections",
      legal: "Legal",
      about: "About",
      philosophy: "Philosophy",
      build: "What we build",
      problem: "Problem",

      technology: "Technology",
      privacy: "Privacy",
      terms: "Terms",
      legalNotice: "Legal notice",
      description:
        "Modern software systems for companies that need cleaner workflows, stronger execution and real operational clarity.",
      rights: "© 2026 Ventrion Labs. All rights reserved.",
    },
  },
}

import { env } from "@/lib/env"

export async function getLandingDictionary(locale: Locale): Promise<Dictionary> {
  const cmsBase = env.CMS_CONTENT_URL
  
  if (cmsBase) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 3000)
      
      const res = await fetch(`${cmsBase}/api/dictionaries/${locale}`, {
        next: { revalidate: 3600 },
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (res.ok) {
        const data = await res.json()
        return data as Dictionary
      }
    } catch (e) {
      console.warn(`[Content Fetch] Failed to load from CMS, falling back to local dictionaries for ${locale}`, e)
    }
  }

  // Fallback to local embedded dictionary
  return landingDictionaries[locale]
}
