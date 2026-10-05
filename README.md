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
	index.css          # tokens de diseño (@theme) y estilos globales
	constants.js       # WhatsApp, email, links de navegación
	components/
		Hero.jsx
		Projects.jsx
		Services.jsx
		About.jsx
		Contact.jsx
		Footer.jsx
		ui/              # Button, SectionHeader, Reveal, Tag, BrowserFrame
public/
	projects/          # capturas de proyectos en WebP
	og.png             # imagen para redes (1200x630)
```

## Secciones

- Hero: propuesta de valor, captura de un proyecto real y sitios en producción.
- Projects: casos destacados (desafío y solución) y otros desarrollos, con modal de detalle.
- Services: servicios con precio, formas de pago y proceso de trabajo.
- About: perfil, formación y forma de trabajo.
- Contact y Footer: WhatsApp, email y links.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Sistema de diseño

- Colores, fuentes y radios se definen como tokens en `src/index.css` (`@theme` de Tailwind 4) y se usan como clases: `bg-ink`, `bg-surface`, `border-line`, `text-fg`, `text-muted`, `bg-action`, `text-signal`.
- Cada color tiene un rol: el azul (`action`) es solo para lo que se puede tocar y el ámbar (`signal`) para resultados y sitios en vivo.
- Tipografías autoalojadas con Fontsource: Bricolage Grotesque (títulos), Figtree (texto) y JetBrains Mono (cifras, plazos y etiquetas).
- Las animaciones de entrada usan siempre el componente `Reveal`.

## Decisiones actuales

- El sitio está construido como landing de una sola página con navegación por anclas.
- La sección de proyectos usa `createPortal` para renderizar el modal fuera de la jerarquía principal.
