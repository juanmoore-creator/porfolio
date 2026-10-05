import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';

const featuredProjects = [
    {
        id: 'rivas',
        title: "Club Riva's · Sistema de Membresías y Puntos",
        category: "Fidelización & Ingresos Recurrentes",
        description: "Plataforma web para barbería orientada a predecir ingresos mensuales y fidelizar clientes.",
        challenge: "Cortes esporádicos y caja impredecible. Dificultad para fidelizar clientes e incentivar compra de productos en el salón.",
        solution: "Web con tarjeta digital de socio #0001, planes de suscripción mensual (4 cortes al mes) y sistema de acumulación de puntos por consumo canjeables en mostrador.",
        tags: ["Membresías Mensuales", "Club de Puntos", "Tarjeta Digital", "Turnos Online"],
        image: "/rivas_barberia_loyalty.png",
        browserUrl: "club.rivaspeluqueria.com",
        whatsappText: "Hola Juan, vi el caso de Club Riva's y me gustaría consultarte por una solución similar para mi negocio",
        longDescription: "Solución integral diseñada para peluquerías y centros de estética orientada a generar ingresos recurrentes predecibles y maximizar la retención de clientes. Incorpora catálogo visual de servicios, suscripciones mensuales recurrentes (ej: 4 cortes al mes con tarjeta digital de socio #0001) y un programa de puntos acumulables por consumo para canjear en el local por productos de salón. Incluye integración de reservas de turnos y mapa geolocalizado."
    },
    {
        id: 'tasando',
        title: "Tasando · Valuaciones Inmobiliarias Inmediatas",
        category: "PropTech & Inteligencia Artificial",
        description: "Plataforma profesional que automatiza el análisis comparativo de mercado (ACM) para inmobiliarias y martilleros.",
        challenge: "Tasaciones manuales lentas, dispersión de valores entre portales y necesidad de entregar informes confiables a propietarios en minutos.",
        solution: "Búsqueda cruzada automática en portales líderes, cálculo instantáneo de valor por m² ajustado por coeficientes y generación de reportes ejecutivos en PDF.",
        tags: ["Búsqueda entre Portales", "Generación de PDF", "Cálculos Automáticos", "PropTech B2B"],
        image: "/tasando_valuaciones.png",
        browserUrl: "tasando.com.ar",
        link: "https://tasando.com.ar",
        longDescription: "Herramienta profesional desarrollada para martilleros, inmobiliarias y agentes que automatiza el proceso de tasación mediante análisis comparativo de mercado (ACM) e inteligencia artificial. Integra búsqueda cruzada de propiedades comparables en portales líderes, cálculo automático de valor por metro cuadrado ajustado por coeficientes, y generación de informes ejecutivos en PDF de alto impacto visual listos para presentar al cliente."
    }
];

const secondaryProjects = [
    {
        title: "Menú Online & Pedidos QR",
        category: "Gastronomía",
        description: "Catálogo digital interactivo para agilizar la toma de comandas. Genera pedidos automáticos a WhatsApp sin comisiones.",
        longDescription: "Sistema de menú digital autogestionable que permite a los restaurantes actualizar precios y disponibilidad en tiempo real. Los clientes pueden armar su pedido escaneando un QR, personalizar ingredientes y enviar la orden directamente al WhatsApp del local con un mensaje preformateado, eliminando errores de transcripción y comisiones de apps de delivery.",
        image: "/food_menu_app_1770145577594.png",
        tags: ["Catálogo QR", "WhatsApp API", "Cero Comisiones", "Gestión Rápida"]
    },
    {
        title: "Gestor Inmobiliario & CRM",
        category: "Administración Pyme",
        description: "Solución integral para gestión de agencias y pymes. Centraliza carteras de clientes, propiedades y agenda de visitas.",
        longDescription: "Plataforma completa diseñada para optimizar el flujo de trabajo de agencias inmobiliarias modernas. Permite una gestión centralizada de propiedades con carga de multimedia, administración de clientes potenciales (leads) con seguimiento de estado, y un calendario interactivo para coordinar visitas. Incluye generación automática de contratos en PDF y reportes de rendimiento.",
        image: "/real_estate_crm_1770145563511.png",
        tags: ["CRM a Medida", "Gestión de Clientes", "Calendario", "Reportes PDF"]
    },
    {
        title: "Web de Alquiler Temporal",
        category: "Reservas Directas",
        description: "Plataforma de reservas directas para alojamiento vacacional. Gestión de disponibilidad en tiempo real y panel de administración.",
        longDescription: "Portal de reservas directas para propietarios de alquileres temporales. Ofrece una experiencia de usuario fluida con galería de imágenes inmersiva, selector de fechas con bloqueo automático de días no disponibles y pasarela de pagos integrada para señas. El panel administrativo permite visualizar reservas, ingresos y gestionar el bloqueo de fechas por mantenimiento.",
        image: "/vacation_rental_booking_1770145599875.png",
        tags: ["Reservas Directas", "Calendario Dinámico", "Pagos Online", "Panel Admin"],
        link: "https://www.elrefugioaguasverdes.com.ar/"
    },
    {
        title: "BusApp",
        category: "Geolocalización en Tiempo Real",
        description: "App de seguimiento de transporte público en tiempo real con integración de mapas y predicción de arribos.",
        longDescription: "Aplicación móvil para el seguimiento en tiempo real de unidades de transporte público. Integra la API de Google Maps para visualizar recorridos y paradas cercanas con algoritmos de estimación de llegada.",
        image: "/bus_tracking_app_1770145629770.png",
        tags: ["Google Maps", "Geolocalización", "Tiempo Real", "Mobile UX"]
    }
];

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

    const rivasProject = featuredProjects[0];
    const tasandoProject = featuredProjects[1];

    return (
        <section id="work" className="py-24 bg-[#0b1329] relative overflow-hidden">
            {/* Background Atmosphere Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-5"></div>
                <div className="absolute top-2/3 right-0 w-96 h-96 bg-[#111c38] rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[140px] opacity-5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-semibold mb-3">
                        // 02 · CASOS DE ESTUDIO & SOLUCIONES
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Soluciones con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">Impacto Real en el Negocio</span>
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        De problemas operativos cotidianos a herramientas digitales que generan ingresos recurrentes, automatizan ventas y ordenan la administración.
                    </p>
                </motion.div>

                {/* Featured Case Studies */}
                <div className="space-y-12 lg:space-y-16 mb-20">
                    {/* Featured Case 1: Club Riva's */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl bg-[#111c38] border border-blue-500/20 p-6 sm:p-8 lg:p-10 hover:border-blue-500/35 transition-[border-color,box-shadow] duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Visual: Browser Mockup (7 cols) */}
                            <div className="lg:col-span-7">
                                <BrowserMockup
                                    project={rivasProject}
                                    onClick={(e) => handleOpenProject(rivasProject, e)}
                                />
                            </div>

                            {/* Content (5 cols) */}
                            <div className="lg:col-span-5 flex flex-col justify-between">
                                <div>
                                    <div className="mb-3">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                                            {rivasProject.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                                        {rivasProject.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                        {rivasProject.description}
                                    </p>

                                    {/* Structured Points */}
                                    <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#0b1329]/75 border border-blue-500/15">
                                        <div>
                                            <span className="font-bold text-slate-200 text-sm flex items-center gap-2 mb-1">
                                                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                                El Desafío:
                                            </span>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">
                                                {rivasProject.challenge}
                                            </p>
                                        </div>
                                        <div className="pt-2.5 border-t border-blue-500/10">
                                            <span className="font-bold text-blue-400 text-sm flex items-center gap-2 mb-1">
                                                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                                                La Solución:
                                            </span>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">
                                                {rivasProject.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-7">
                                        {rivasProject.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-slate-300 bg-[#162447] px-2.5 py-1 rounded-md border border-blue-500/15"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={(e) => handleOpenProject(rivasProject, e)}
                                        className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38] cursor-pointer"
                                    >
                                        Ver detalles completos
                                        <ArrowRight className="w-4 h-4" />
                                    </button>

                                    <a
                                        href={`https://wa.me/542216430365?text=${encodeURIComponent(rivasProject.whatsappText)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 rounded-full bg-[#162447] hover:bg-[#1d2f5a] text-blue-300 hover:text-white border border-blue-500/30 font-medium text-sm transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38]"
                                    >
                                        <MessageCircle className="w-4 h-4 text-blue-400" />
                                        Consultar solución similar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Featured Case 2: Tasando (Reversed Layout) */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl bg-[#111c38] border border-blue-500/20 p-6 sm:p-8 lg:p-10 hover:border-blue-500/35 transition-[border-color,box-shadow] duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Content (5 cols on desktop, ordered first on desktop) */}
                            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">
                                <div>
                                    <div className="mb-3">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                                            {tasandoProject.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                                        {tasandoProject.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                        {tasandoProject.description}
                                    </p>

                                    {/* Structured Points */}
                                    <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#0b1329]/75 border border-blue-500/15">
                                        <div>
                                            <span className="font-bold text-slate-200 text-sm flex items-center gap-2 mb-1">
                                                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                                El Desafío:
                                            </span>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">
                                                {tasandoProject.challenge}
                                            </p>
                                        </div>
                                        <div className="pt-2.5 border-t border-blue-500/10">
                                            <span className="font-bold text-blue-400 text-sm flex items-center gap-2 mb-1">
                                                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                                                La Solución:
                                            </span>
                                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">
                                                {tasandoProject.solution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-7">
                                        {tasandoProject.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium text-slate-300 bg-[#162447] px-2.5 py-1 rounded-md border border-blue-500/15"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-2">
                                    <a
                                        href={tasandoProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38]"
                                    >
                                        Visitar tasando.com.ar
                                        <ExternalLink className="w-4 h-4" />
                                    </a>

                                    <button
                                        type="button"
                                        onClick={(e) => handleOpenProject(tasandoProject, e)}
                                        className="px-5 py-2.5 rounded-full bg-[#162447] hover:bg-[#1d2f5a] text-blue-300 hover:text-white border border-blue-500/30 font-medium text-sm transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38] cursor-pointer"
                                    >
                                        Ver detalles
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Visual: Browser Mockup (7 cols on desktop, ordered second on desktop) */}
                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <BrowserMockup
                                    project={tasandoProject}
                                    onClick={(e) => handleOpenProject(tasandoProject, e)}
                                />
                            </div>
                        </div>
                    </motion.article>
                </div>

                {/* Secondary Grid: Otras Soluciones Desarrolladas */}
                <div className="mt-16 pt-16 border-t border-blue-500/15">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4"
                    >
                        <div>
                            <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-semibold mb-2">
                                // MÁS DESARROLLOS
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                Otras Soluciones Implementadas
                            </h3>
                        </div>
                        <p className="text-sm text-gray-400 max-w-md">
                            Herramientas y plataformas complementarias desarrolladas para optimizar procesos comerciales, reservas directas y logística.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {secondaryProjects.map((project, index) => (
                            <SecondaryCard
                                key={project.title}
                                project={project}
                                index={index}
                                onClick={(e) => handleOpenProject(project, e)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Portal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={handleCloseProject} />
                )}
            </AnimatePresence>
        </section>
    );
};

const BrowserMockup = ({ project, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Ver detalles completos de ${project.title}`}
            className="group w-full text-left rounded-2xl overflow-hidden bg-[#0b1329] border border-blue-500/20 hover:border-blue-500/40 transition-[border-color,box-shadow,transform] duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329] block cursor-pointer"
        >
            {/* Top Bar with Three Subtle Dots */}
            <div className="bg-[#162447] px-4 py-3 border-b border-blue-500/15 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
                </div>
                <div className="bg-[#0b1329]/80 rounded-md px-3 py-1 text-xs font-mono text-slate-300 border border-blue-500/15 flex items-center gap-2 max-w-[240px] truncate">
                    <span className="text-blue-400 text-[10px]">🔒</span>
                    <span className="truncate">{project.browserUrl || 'app.solucion.com'}</span>
                </div>
                <div className="w-10 flex justify-end">
                    <span className="text-slate-400 text-xs font-mono group-hover:text-blue-400 transition-colors">↗</span>
                </div>
            </div>

            {/* Viewport Area */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] bg-[#0b1329] flex items-center justify-center overflow-hidden p-3 sm:p-5">
                <img
                    src={project.image}
                    alt={project.title}
                    width="900"
                    height="580"
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg transform group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                {/* Hover Cue */}
                <div className="absolute inset-0 bg-[#0b1329]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-blue-600/90 text-white font-medium text-xs tracking-wider uppercase shadow-lg border border-blue-400/30 flex items-center gap-2">
                        Click para ver detalles interactivos
                    </span>
                </div>
            </div>
        </button>
    );
};

const SecondaryCard = ({ project, index, onClick }) => {
    return (
        <motion.button
            type="button"
            aria-haspopup="dialog"
            aria-label={`Ver detalles de ${project.title}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group rounded-2xl bg-[#111c38] border border-blue-500/15 p-5 hover:border-blue-500/35 hover:bg-[#162447]/60 transition-[border-color,background-color,box-shadow,transform] duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] flex flex-col text-left touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329] h-full cursor-pointer"
            onClick={onClick}
        >
            {/* Thumbnail */}
            <div className="relative h-44 rounded-xl overflow-hidden bg-[#0b1329] mb-4 border border-blue-500/10 flex items-center justify-center p-2.5">
                <img
                    src={project.image}
                    alt={project.title}
                    width="400"
                    height="280"
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-[#0b1329]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-600/90 shadow">
                        Ver detalles
                    </span>
                </div>
            </div>

            {/* Category */}
            <div className="mb-2">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full inline-block">
                    {project.category}
                </span>
            </div>

            {/* Title */}
            <h4 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                {project.title}
            </h4>

            {/* Short Description */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-blue-500/10">
                {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                        key={i}
                        className="text-[11px] font-medium text-slate-300 bg-[#0b1329] px-2 py-0.5 rounded border border-blue-500/10"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.button>
    );
};

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
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                onClick={onClose}
            >
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                aria-describedby="project-modal-description"
                tabIndex={-1}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-[#111c38] border border-blue-500/20 rounded-2xl shadow-2xl shadow-blue-500/10 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent focus-visible:outline-none"
                onClick={(e) => e.stopPropagation()}
                style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
                <button
                    onClick={onClose}
                    aria-label={`Cerrar detalles de ${project.title}`}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38] cursor-pointer"
                >
                    <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-full min-h-[300px] relative bg-[#0b1329] flex items-center justify-center p-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            width="800"
                            height="900"
                            className="w-full h-full object-contain rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111c38] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#111c38]/50"></div>
                    </div>

                    <div className="p-8 flex flex-col justify-between">
                        <div>
                            <div className="mb-4">
                                <span className="text-blue-400 text-xs font-bold tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block">
                                    {project.category}
                                </span>
                            </div>
                            <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {project.title}
                            </h2>
                            <p id="project-modal-description" className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                {project.longDescription || project.description}
                            </p>

                            {/* Structured Challenge & Solution if present */}
                            {project.challenge && (
                                <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#0b1329]/75 border border-blue-500/15">
                                    <div>
                                        <span className="font-bold text-slate-200 text-xs sm:text-sm flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
                                            El Desafío:
                                        </span>
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">
                                            {project.challenge}
                                        </p>
                                    </div>
                                    <div className="pt-2 border-t border-blue-500/10">
                                        <span className="font-bold text-blue-400 text-xs sm:text-sm flex items-center gap-2 mb-1">
                                            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                                            La Solución:
                                        </span>
                                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pl-4">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="mb-6">
                                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2.5">Tecnologías & Enfoque</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-blue-300 bg-[#162447] px-3 py-1 rounded-lg border border-blue-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38]"
                            >
                                Visitar proyecto en vivo
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        ) : (
                            <a
                                href={`https://wa.me/542216430365?text=${encodeURIComponent(project.whatsappText || `Hola Juan, vi tu proyecto de ${project.title} y me gustaría consultarte por algo similar para mi negocio`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111c38]"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Consultar por una solución similar
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </>,
        document.body
    );
};

export default Projects;
