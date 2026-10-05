import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import BrowserFrame from './ui/BrowserFrame';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import Tag from './ui/Tag';
import { whatsappLink } from '../constants';

const featuredProjects = [
    {
        id: 'rivas',
        title: "Club Riva's",
        subtitle: 'Sistema de membresías y puntos',
        category: 'Fidelización e ingresos recurrentes',
        description: 'Plataforma web para barbería orientada a predecir ingresos mensuales y fidelizar clientes.',
        challenge: 'Cortes esporádicos y caja impredecible. Dificultad para fidelizar clientes e incentivar compra de productos en el salón.',
        solution: 'Web con tarjeta digital de socio #0001, planes de suscripción mensual (4 cortes al mes) y sistema de acumulación de puntos por consumo canjeables en mostrador.',
        tags: ['Membresías mensuales', 'Club de puntos', 'Tarjeta digital', 'Turnos online'],
        image: '/projects/rivas.webp',
        width: 1024,
        height: 487,
        whatsappText: "Hola Juan, vi el caso de Club Riva's y me gustaría consultarte por una solución similar para mi negocio",
        longDescription: 'Solución integral diseñada para peluquerías y centros de estética orientada a generar ingresos recurrentes predecibles y maximizar la retención de clientes. Incorpora catálogo visual de servicios, suscripciones mensuales recurrentes (ej: 4 cortes al mes con tarjeta digital de socio #0001) y un programa de puntos acumulables por consumo para canjear en el local por productos de salón. Incluye integración de reservas de turnos y mapa geolocalizado.'
    },
    {
        id: 'tasando',
        title: 'Tasando',
        subtitle: 'Valuaciones inmobiliarias inmediatas',
        category: 'PropTech e inteligencia artificial',
        description: 'Plataforma profesional que automatiza el análisis comparativo de mercado (ACM) para inmobiliarias y martilleros.',
        challenge: 'Tasaciones manuales lentas, dispersión de valores entre portales y necesidad de entregar informes confiables a propietarios en minutos.',
        solution: 'Búsqueda cruzada automática en portales líderes, cálculo instantáneo de valor por m² ajustado por coeficientes y generación de reportes ejecutivos en PDF.',
        tags: ['Búsqueda entre portales', 'Generación de PDF', 'Cálculos automáticos', 'PropTech B2B'],
        image: '/projects/tasando.webp',
        width: 1024,
        height: 394,
        link: 'https://tasando.com.ar',
        linkLabel: 'tasando.com.ar',
        longDescription: 'Herramienta profesional desarrollada para martilleros, inmobiliarias y agentes que automatiza el proceso de tasación mediante análisis comparativo de mercado (ACM) e inteligencia artificial. Integra búsqueda cruzada de propiedades comparables en portales líderes, cálculo automático de valor por metro cuadrado ajustado por coeficientes, y generación de informes ejecutivos en PDF de alto impacto visual listos para presentar al cliente.'
    }
];

const secondaryProjects = [
    {
        title: 'Menú online y pedidos QR',
        category: 'Gastronomía',
        description: 'Catálogo digital interactivo para agilizar la toma de comandas. Genera pedidos automáticos a WhatsApp sin comisiones.',
        longDescription: 'Sistema de menú digital autogestionable que permite a los restaurantes actualizar precios y disponibilidad en tiempo real. Los clientes pueden armar su pedido escaneando un QR, personalizar ingredientes y enviar la orden directamente al WhatsApp del local con un mensaje preformateado, eliminando errores de transcripción y comisiones de apps de delivery.',
        image: '/projects/menu-qr.webp',
        width: 800,
        height: 800,
        imagePosition: 'object-center',
        tags: ['Catálogo QR', 'WhatsApp API', 'Cero comisiones', 'Gestión rápida']
    },
    {
        title: 'Gestor inmobiliario y CRM',
        category: 'Administración pyme',
        description: 'Solución integral para gestión de agencias y pymes. Centraliza carteras de clientes, propiedades y agenda de visitas.',
        longDescription: 'Plataforma completa diseñada para optimizar el flujo de trabajo de agencias inmobiliarias modernas. Permite una gestión centralizada de propiedades con carga de multimedia, administración de clientes potenciales (leads) con seguimiento de estado, y un calendario interactivo para coordinar visitas. Incluye generación automática de contratos en PDF y reportes de rendimiento.',
        image: '/projects/gestor-crm.webp',
        width: 1248,
        height: 831,
        tags: ['CRM a medida', 'Gestión de clientes', 'Calendario', 'Reportes PDF']
    },
    {
        title: 'Web de alquiler temporal',
        category: 'Reservas directas',
        description: 'Plataforma de reservas directas para alojamiento vacacional. Gestión de disponibilidad en tiempo real y panel de administración.',
        longDescription: 'Portal de reservas directas para propietarios de alquileres temporales. Ofrece una experiencia de usuario fluida con galería de imágenes inmersiva, selector de fechas con bloqueo automático de días no disponibles y pasarela de pagos integrada para señas. El panel administrativo permite visualizar reservas, ingresos y gestionar el bloqueo de fechas por mantenimiento.',
        image: '/projects/el-refugio.webp',
        width: 1400,
        height: 674,
        tags: ['Reservas directas', 'Calendario dinámico', 'Pagos online', 'Panel admin'],
        link: 'https://www.elrefugioaguasverdes.com.ar/',
        linkLabel: 'elrefugioaguasverdes.com.ar'
    },
    {
        title: 'BusApp',
        category: 'Geolocalización',
        description: 'App de seguimiento de transporte público en tiempo real con integración de mapas y predicción de arribos.',
        longDescription: 'Aplicación móvil para el seguimiento en tiempo real de unidades de transporte público. Integra la API de Google Maps para visualizar recorridos y paradas cercanas con algoritmos de estimación de llegada.',
        image: '/projects/busapp.webp',
        width: 1200,
        height: 707,
        tags: ['Google Maps', 'Geolocalización', 'Tiempo real', 'Mobile UX']
    }
];

const similarSolutionLink = (project) =>
    whatsappLink(
        project.whatsappText ||
            `Hola Juan, vi tu proyecto ${project.title} y me gustaría consultarte por algo similar para mi negocio`
    );

const LiveBadge = () => (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-signal">
        <span className="w-1.5 h-1.5 rounded-full bg-signal" aria-hidden="true" />
        En vivo
    </span>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const triggerRef = React.useRef(null);

    const handleOpenProject = (project, event) => {
        if (event) {
            triggerRef.current = event.currentTarget;
        }
        setSelectedProject(project);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
        window.requestAnimationFrame(() => {
            triggerRef.current?.focus();
        });
    };

    return (
        <section id="work" className="py-20 md:py-28 bg-ink border-t border-line/60">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <SectionHeader
                    eyebrow="Casos"
                    title="Problemas concretos, resueltos con software"
                    description="De tareas operativas del día a día a herramientas que generan ingresos recurrentes, automatizan ventas y ordenan la administración."
                />

                <div className="grid gap-20 md:gap-28">
                    {featuredProjects.map((project, index) => (
                        <CaseStudy
                            key={project.id}
                            project={project}
                            reverse={index % 2 === 1}
                            onOpen={(event) => handleOpenProject(project, event)}
                        />
                    ))}
                </div>

                <div className="mt-24 md:mt-32">
                    <Reveal className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-fg">Otros desarrollos</h3>
                        <p className="text-muted max-w-md">
                            Herramientas para procesos comerciales, reservas directas y logística.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {secondaryProjects.map((project, index) => (
                            <SecondaryCard
                                key={project.title}
                                project={project}
                                index={index}
                                onClick={(event) => handleOpenProject(project, event)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseProject} />}
            </AnimatePresence>
        </section>
    );
};

const CaseStudy = ({ project, reverse, onOpen }) => (
    <Reveal as="article" className="grid gap-8 lg:gap-14 lg:grid-cols-12 lg:items-center">
        <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            aria-label={`Ver detalles de ${project.title}`}
            className={`group block text-left rounded-xl lg:col-span-7 cursor-pointer ${reverse ? 'lg:order-2' : ''}`}
        >
            <BrowserFrame
                src={project.image}
                alt={`${project.title}: ${project.subtitle}`}
                label={project.linkLabel || project.title}
                width={project.width}
                height={project.height}
                className="transition-[border-color,transform] duration-300 group-hover:border-muted/50 group-hover:-translate-y-1"
            />
        </button>

        <div className={`min-w-0 lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{project.category}</p>
                {project.link && <LiveBadge />}
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">{project.title}</h3>
            <p className="mt-1 text-lg text-muted">{project.subtitle}</p>

            <dl className="mt-7 grid gap-5 border-l border-line pl-5">
                <div>
                    <dt className="text-sm font-semibold text-signal mb-1">Desafío</dt>
                    <dd className="text-[0.95rem] leading-relaxed text-fg/85">{project.challenge}</dd>
                </div>
                <div>
                    <dt className="text-sm font-semibold text-fg mb-1">Solución</dt>
                    <dd className="text-[0.95rem] leading-relaxed text-fg/85">{project.solution}</dd>
                </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
                {project.link ? (
                    <Button href={project.link} external>
                        Visitar {project.linkLabel}
                        <ExternalLink className="w-4 h-4" />
                    </Button>
                ) : (
                    <Button href={similarSolutionLink(project)} external>
                        <MessageCircle className="w-4 h-4" />
                        Quiero algo similar
                    </Button>
                )}
                <Button variant="secondary" onClick={onOpen} aria-haspopup="dialog" className="group">
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
            </div>
        </div>
    </Reveal>
);

const SecondaryCard = ({ project, index, onClick }) => (
    <Reveal delay={index * 0.06} className="h-full">
        <button
            type="button"
            aria-haspopup="dialog"
            aria-label={`Ver detalles de ${project.title}`}
            onClick={onClick}
            className="group h-full w-full flex flex-col text-left rounded-xl border border-line bg-surface overflow-hidden hover:border-muted/50 transition-colors cursor-pointer"
        >
            <div className="aspect-[16/10] overflow-hidden border-b border-line bg-ink">
                <img
                    src={project.image}
                    alt=""
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                    className={`w-full h-full object-cover ${project.imagePosition || 'object-top'} transition-transform duration-500 group-hover:scale-[1.03]`}
                />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted truncate">{project.category}</p>
                    {project.link && <LiveBadge />}
                </div>
                <h4 className="font-display text-lg font-bold text-fg leading-snug">{project.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">{project.description}</p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-link">
                    Ver detalles
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
            </div>
        </button>
    </Reveal>
);

const ProjectModal = ({ project, onClose }) => {
    const modalRef = React.useRef(null);

    React.useEffect(() => {
        if (typeof document === 'undefined') return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
            focusableElements[0].focus();
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }

            if (event.key === 'Tab' && focusableElements && focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        event.preventDefault();
                    }
                } else if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (typeof document === 'undefined') return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
                tabIndex={-1}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-surface border border-line rounded-2xl shadow-2xl focus-visible:outline-none"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={`Cerrar detalles de ${project.title}`}
                    className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-ink/80 text-fg hover:bg-ink transition-colors cursor-pointer"
                >
                    <X size={20} />
                </button>

                <div className="bg-ink border-b border-line">
                    <img
                        src={project.image}
                        alt={project.title}
                        width={project.width}
                        height={project.height}
                        className="block w-full h-auto max-h-[45vh] object-contain mx-auto"
                    />
                </div>

                <div className="p-6 sm:p-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{project.category}</p>
                            {project.link && <LiveBadge />}
                        </div>
                        <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold tracking-tight text-fg">
                            {project.title}
                            {project.subtitle && <span className="block text-lg font-normal font-sans text-muted mt-1">{project.subtitle}</span>}
                        </h2>
                        <p id="project-modal-description" className="mt-4 leading-relaxed text-fg/85">
                            {project.longDescription || project.description}
                        </p>

                        {project.challenge && (
                            <dl className="mt-6 grid gap-4 border-l border-line pl-5">
                                <div>
                                    <dt className="text-sm font-semibold text-signal mb-1">Desafío</dt>
                                    <dd className="text-sm leading-relaxed text-fg/85">{project.challenge}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-semibold text-fg mb-1">Solución</dt>
                                    <dd className="text-sm leading-relaxed text-fg/85">{project.solution}</dd>
                                </div>
                            </dl>
                        )}
                    </div>

                    <div className="min-w-0 flex flex-col gap-6">
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-3">Funcionalidades</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </div>
                        </div>

                        <div className="md:mt-auto flex flex-col gap-3">
                            {project.link && (
                                <Button href={project.link} external>
                                    Visitar el sitio
                                    <ExternalLink className="w-4 h-4" />
                                </Button>
                            )}
                            <Button
                                href={similarSolutionLink(project)}
                                external
                                variant={project.link ? 'secondary' : 'primary'}
                            >
                                <MessageCircle className="w-4 h-4" />
                                Quiero algo similar
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

export default Projects;
