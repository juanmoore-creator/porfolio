# Portfolio

Portfolio personal desarrollado como single-page application con React, Vite, Tailwind CSS v4 y Framer Motion.

## Stack

- React 19
- Vite 7
- Tailwind CSS v4
- Framer Motion
- Lucide React
- ESLint 9

## Estructura

```text
src/
	App.jsx
	main.jsx
	index.css
	components/
		Hero.jsx
		About.jsx
		Projects.jsx
		Contact.jsx
```

## Secciones

- Hero: presentación principal, navegación interna y llamada a la acción.
- About: perfil profesional, enfoque técnico y áreas de valor.
- Projects: grilla de proyectos destacados con modal de detalle.
- Contact: accesos directos a WhatsApp y correo.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Decisiones actuales

- El sitio está construido como landing de una sola página con navegación por anclas.
- El styling principal se resuelve con utilidades de Tailwind definidas directamente en los componentes.
- La sección de proyectos es el bloque más complejo y usa `createPortal` para renderizar el modal fuera de la jerarquía principal.

## Pendientes recomendados

- Reemplazar el favicon por uno propio.
- Agregar metadatos SEO y Open Graph.
- Mejorar accesibilidad de foco, navegación por teclado y modal.
- Revisar consistencia de contenido personal y nombres visibles.

## Estado del proyecto

El proyecto no presenta errores de diagnóstico en el workspace al momento de esta documentación.
