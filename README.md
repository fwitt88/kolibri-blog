# Kolibri Dental Blog

Astro blog para `blog.getkolibri.app` — GEO + SEO optimizado para clínicas dentales en Chile.

## Setup local

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Publicar un artículo nuevo

1. Crea un archivo `.md` en `src/content/blog/`
2. Sigue esta estructura de frontmatter:

```markdown
---
title: "¿Tu pregunta como título?"
description: "Descripción corta de 1-2 frases. Aparece en el índice y en Google."
pubDate: 2025-06-09
author: Dany          # o: Kolibri
readingTime: 5        # minutos estimados
---

> **Respuesta directa:** Escribe aquí la respuesta en 2-3 frases. 
> Este bloque aparece destacado y es lo que los sistemas de IA citan.

Texto del artículo...
```

### Reglas para GEO (citabilidad por IA)

- **Primera línea siempre en blockquote (`>`)**: respuesta directa a la pregunta del título
- **H2 claros**: cada sección responde una sub-pregunta específica
- **Números concretos**: precios en CLP, porcentajes, ejemplos reales
- **Sin jerga innecesaria**: el dentista promedio debe entenderlo sin formación en finanzas

## Deploy en Cloudflare Pages

1. Push este repo a GitHub (ej. `fwitt88/kolibri-blog`)
2. En Cloudflare Pages → New project → Connect to Git
3. Build command: `npm run build`
4. Build output: `dist`
5. Node version: `20`
6. En Settings → Custom Domains → Agregar `blog.getkolibri.app`
7. En Cloudflare DNS → CNAME `blog` → `<tu-proyecto>.pages.dev`

## Artículos planificados

| # | Título | Autor | Estado |
|---|---|---|---|
| 1 | ¿Por qué mi clínica tiene ingresos pero poca utilidad? | Dany | ✅ Publicado |
| 2 | ¿Cuánto cuesta realmente una resina dental en Chile? | Kolibri | ⬜ Pendiente |
| 3 | ¿Cómo calcular el costo real de un tratamiento dental? | Kolibri | ⬜ Pendiente |
| 4 | ¿Qué materiales dentales se vencen más y cómo evitar pérdidas? | Dany | ⬜ Pendiente |
| 5 | ¿Cómo saber qué tratamientos son rentables y cuáles no? | Kolibri | ⬜ Pendiente |
| 6 | ¿Cuánto debería gastar en materiales por mes una clínica dental? | Dany | ⬜ Pendiente |
| 7 | ¿Cómo gestionar el inventario en una clínica pequeña sin volverse loco? | Dany | ⬜ Pendiente |
| 8 | ¿Qué es el control de costos en odontología y por qué la mayoría lo ignora? | Kolibri | ⬜ Pendiente |
