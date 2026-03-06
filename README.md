# Ventrion Labs

Software para la Excelencia Operativa - Landing Page

## Descripción

Landing page corporativa de Ventrion Labs, empresa especializada en construcción de infraestructura digital para empresas en crecimiento.

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Iconos**: Lucide React
- **Validación**: Zod
- **Formularios**: React Hook Form
- **Analytics**: Vercel Analytics

## Desarrollo

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linting
pnpm lint
```

## Variables de Entorno

Copia `.env.example` a `.env` y configura:

- `PUBLIC_LANDING_API_BASE_URL`: URL del API backend (opcional)
- `SITE_URL`: URL pública del sitio (para SEO)
- `GOOGLE_SITE_VERIFICATION`: Token de Google Search Console
- `RESEND_API_KEY`: API key de Resend para enviar emails del formulario
- `CONTACT_TO_EMAIL`: email donde recibirás los contactos (puede ser tu correo personal al inicio)
- `CONTACT_FROM_EMAIL`: remitente del formulario; mientras no tengas dominio, usa `Ventrion Labs <onboarding@resend.dev>`

## Formulario de Contacto

El endpoint `app/api/contact/route.ts` está preparado para enviar los mensajes del formulario usando la API HTTP de Resend.

Flujo recomendado para comenzar a probar:

- configura `CONTACT_TO_EMAIL` con tu correo personal
- configura `CONTACT_FROM_EMAIL` con `Ventrion Labs <onboarding@resend.dev>`
- agrega tu `RESEND_API_KEY`

Cuando compres tu dominio, podrás cambiar `CONTACT_FROM_EMAIL` a una dirección corporativa como `contacto@ventrionlabs.cl` una vez que el dominio esté verificado en tu proveedor de email.

## Estructura del Proyecto

```
ventrionlabs/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   └── sitemap.ts         # Generación de sitemap
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   └── *-section.tsx     # Secciones de la landing
├── public/               # Assets estáticos
│   └── ventrion*.png     # Logos e imágenes
├── lib/                  # Utilidades
└── styles/              # Estilos adicionales
```

## Secciones de la Landing

1. **Hero**: Presentación principal con estadísticas
2. **Problemas**: Desafíos que resolvemos
3. **Soluciones**: Qué hacemos
4. **Valores**: Sobre nosotros
5. **Proceso**: Cómo trabajamos
6. **Productos**: Plataformas disponibles
7. **CTA Final**: Llamado a la acción
8. **Contacto**: Formulario de contacto

## Producción

El sitio está optimizado para:

- ✅ SEO (metadata, sitemap, robots.txt)
- ✅ Performance (imágenes optimizadas, lazy loading)
- ✅ Accesibilidad (ARIA labels, navegación por teclado)
- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode
- ✅ Analytics integrado

## Contacto

Email: contacto@ventrionlabs.cl

---

© 2026 Ventrion Labs. Todos los derechos reservados.
