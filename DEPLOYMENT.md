# Guía de Despliegue - Ventrion Labs

## Pre-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)
- Cuenta en Vercel (recomendado) o servidor con Node.js

## Despliegue en Vercel (Recomendado)

### Opción 1: Desde la CLI

```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel --prod
```

### Opción 2: Desde GitHub

1. Sube el proyecto a GitHub
2. Importa el repositorio en [vercel.com](https://vercel.com)
3. Configura las variables de entorno:
   - `SITE_URL`: https://ventrionlabs.cl
   - `GOOGLE_SITE_VERIFICATION`: (opcional)
   - `PUBLIC_LANDING_API_BASE_URL`: (opcional)
4. Despliega automáticamente

## Despliegue en Servidor Propio

### 1. Build del Proyecto

```bash
# Instalar dependencias
pnpm install

# Build de producción
pnpm build
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env.production`:

```bash
SITE_URL=https://ventrionlabs.cl
PUBLIC_LANDING_API_BASE_URL=https://api.ventrionlabs.cl
GOOGLE_SITE_VERIFICATION=tu_token_aqui
```

### 3. Iniciar Servidor

```bash
# Modo producción
pnpm start
```

El servidor correrá en el puerto 3000 por defecto.

### 4. Configurar Nginx (Opcional)

```nginx
server {
    listen 80;
    server_name ventrionlabs.cl www.ventrionlabs.cl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Despliegue con Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm install -g pnpm
RUN pnpm build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - SITE_URL=https://ventrionlabs.cl
      - PUBLIC_LANDING_API_BASE_URL=https://api.ventrionlabs.cl
    restart: unless-stopped
```

## Checklist Pre-Despliegue

- [ ] Variables de entorno configuradas
- [ ] Build exitoso (`pnpm build`)
- [ ] Lint sin errores (`pnpm lint`)
- [ ] Imágenes optimizadas en `/public`
- [ ] Dominio configurado y apuntando al servidor
- [ ] SSL/TLS configurado (Let's Encrypt recomendado)
- [ ] Google Analytics/Search Console configurado
- [ ] Formulario de contacto probado
- [ ] Responsive design verificado
- [ ] SEO metadata verificada

## Monitoreo Post-Despliegue

### Verificar:

1. **Performance**
   - Lighthouse score > 90
   - Core Web Vitals en verde

2. **SEO**
   - Sitemap accesible: `/sitemap.xml`
   - Robots.txt accesible: `/robots.txt`
   - Meta tags correctos

3. **Funcionalidad**
   - Formulario de contacto funcional
   - Navegación suave entre secciones
   - Theme toggle (dark/light mode)
   - Responsive en todos los dispositivos

## Actualizaciones

```bash
# Pull cambios
git pull origin main

# Reinstalar dependencias si hay cambios
pnpm install

# Rebuild
pnpm build

# Reiniciar servidor
pm2 restart ventrionlabs
# o
systemctl restart ventrionlabs
```

## Soporte

Para problemas de despliegue, contactar: contacto@ventrionlabs.cl
