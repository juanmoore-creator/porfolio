
import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
    {
        title: "Temario express",
        category: "EdTech / IA Generativa",
        description: "Web para generar temarios de estudio con IA y compartirlos facilmente con amigos.",
        longDescription: "Aplicacion web enfocada en estudiantes que permite crear temarios personalizados con ayuda de IA en pocos segundos. Incluye organizacion por temas, estructura clara para estudiar y una opcion simple para compartir cada temario mediante enlace.",
        image: "/temario-express.png",
        tags: ["React", "Firebase", "IA", "UX"],
        link: "https://temario-express.web.app/"
    },
    {
        title: "Gestor Inmobiliario",
        category: "CRM / Administración",
        description: "Solución integral para la gestión de agencias inmobiliarias. Centraliza la administración de carteras de inmuebles y clientes con calendario inteligente.",
        longDescription: "Plataforma completa diseñada para optimizar el flujo de trabajo de agencias inmobiliarias modernas. Permite una gestión centralizada de propiedades con carga de multimedia, administración de clientes potenciales (leads) con seguimiento de estado, y un calendario interactivo para coordinar visitas. Incluye generación automática de contratos en PDF y reportes de rendimiento de agentes.",
        image: "/real_estate_crm_1770145563511.png",
        tags: ["React", "Node.js", "MongoDB", "Calendar API", "PDFKit"]
    },
    {
        title: "Menú Online & Pedidos",
        category: "E-commerce / Gastronomía",
        description: "Catálogo digital interactivo para agilizar la toma de comandas. Genera pedidos automáticos a WhatsApp sin backend complejo.",
        longDescription: "Sistema de menú digital autogestionable que permite a los restaurantes actualizar precios y disponibilidad en tiempo real. Los clientes pueden armar su pedido escaneando un QR, personalizar ingredientes y enviar la orden directamente al WhatsApp del local con un mensaje preformateado, eliminando errores de transcripción y comisiones de apps de delivery.",
        image: "/food_menu_app_1770145577594.png",
        tags: ["Next.js", "WhatsApp API", "Tailwind", "Zustand"]
    },
    {
        title: "Web de Alquiler Temporal",
        category: "Booking / Landing Page",
        description: "Plataforma de reservas directas para alojamiento vacacional. Gestión de disponibilidad en tiempo real y panel de administración.",
        longDescription: "Portal de reservas directas para propietarios de alquileres temporales. Ofrece una experiencia de usuario fluida con galería de imágenes inmersiva, selector de fechas con bloqueo automático de días no disponibles y pasarela de pagos integrada para señas. El panel administrativo permite visualizar reservas, ingresos y gestionar el bloqueo de fechas por mantenimiento.",
        image: "/vacation_rental_booking_1770145599875.png",
        tags: ["React", "Firebase", "Stripe", "Date-fns"],
        link: "https://www.elrefugioaguasverdes.com.ar/"
    },
    {
        title: "El Impostor",
        category: "Game Dev / Real-Time",
        description: "Videojuego web multijugador de deducción social. Comunicación bidireccional (WebSockets) para sincronización en tiempo real.",
        longDescription: "Juego multijugador en tiempo real inspirado en 'Among Us', desarrollado íntegramente con tecnologías web. Utiliza WebSockets para la sincronización instantánea de movimiento y estado de los jugadores. Cuenta con sistema de salas privadas, chat de proximidad simulado y lógica de servidor autoritativa para prevenir trampas.",
        image: "/impostor_game_1770145615166.png",
        tags: ["Socket.io", "Canvas API", "Node.js", "Express"]
    },
    {
        title: "BusApp",
        category: "Utility / Geolocalización",
        description: "App de seguimiento de transporte público en tiempo real. Integra mapas y APIs de tránsito para predecir llegadas.",
        longDescription: "Aplicación móvil para el seguimiento en tiempo real de unidades de transporte público. Integra la API de Google Maps para visualizar recorridos y paradas cercanas. Utiliza algoritmos de predicción basados en la ubicación GPS de los colectivos para estimar tiempos de llegada con alta precisión, mejorando la experiencia de viaje de los usuarios.",
        image: "/bus_tracking_app_1770145629770.png",
        tags: ["React Native", "Google Maps API", "Geolocation", "Redux"]
    },
    {
        title: "Dashboard Financiero",
        category: "Fintech / Data Visualization",
        description: "Panel de control analítico para finanzas personales. Visualizaciones gráficas interactivas de ingresos, egresos y flujo de caja.",
        longDescription: "Herramienta de visualización de datos financieros que transforma registros contables complejos en gráficos intuitivos e interactivos. Permite filtrar gastos por categoría, visualizar tendencias de ahorro mensual y proyectar flujos de caja futuros. Implementa modo oscuro y diseño responsive para consulta desde cualquier dispositivo.",
        image: "/financial_dashboard_1770145645143.png",
        tags: ["D3.js", "TypeScript", "Supabase", "Recharts"]
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);
    const triggerRef = React.useRef(null);

    const handleOpenProject = (project, event) => {
        triggerRef.current = event.currentTarget;
        setSelectedProject(project);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
        window.requestAnimationFrame(() => {
            triggerRef.current?.focus();
        });
    };

    return (
        <section id="work" className="py-24 bg-[#021a1a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00ff9d] rounded-full mix-blend-screen filter blur-[128px] opacity-5"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#052e2e] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff9d]/20 bg-[#052e2e]/50 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
                        <span className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase">Portafolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Trabajos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-emerald-600">Seleccionados</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Una colección de proyectos que demuestran mi experiencia en desarrollo full-stack, sistemas en tiempo real y diseño UI/UX, enfocados en solucionar problemas para pymes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            onClick={(event) => handleOpenProject(project, event)}
                        />
                    ))}
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

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.button
            type="button"
            aria-haspopup="dialog"
            aria-label={`Ver detalles de ${project.title}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl bg-[#032222] border border-[#00ff9d]/10 overflow-hidden hover:border-[#00ff9d]/30 transition-[border-color,box-shadow,transform] duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.1)] flex flex-col h-full cursor-pointer text-left touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021a1a]"
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-[#021a1a]">
                <div className="absolute inset-0 bg-[#021a1a]/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    width="800"
                    height="560"
                    loading="lazy"
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <span className="text-[#00ff9d] font-bold tracking-wider uppercase border border-[#00ff9d] px-4 py-2 rounded-full hover:bg-[#00ff9d] hover:text-[#021a1a] transition-all">
                        Ver Detalles
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[#00ff9d] text-xs font-bold tracking-wider uppercase bg-[#00ff9d]/10 px-2 py-1 rounded">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff9d] transition-colors">{project.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-gray-500 bg-[#052e2e] px-2 py-1 rounded border border-[#00ff9d]/5 group-hover:border-[#00ff9d]/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-xs font-medium text-gray-500 bg-[#052e2e] px-2 py-1 rounded border border-[#00ff9d]/5 group-hover:border-[#00ff9d]/20 transition-colors">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.button>
    );
};

const ProjectModal = ({ project, onClose }) => {
    // Use createPortal to render the modal outside the current DOM hierarchy (e.g., in body)
    // to avoid z-index and overflow issues.
    const modalRef = React.useRef(null);

    React.useEffect(() => {
        if (typeof document === 'undefined') return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        modalRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
                return;
            }

            if (event.key !== 'Tab') {
                return;
            }

            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (!focusableElements || focusableElements.length === 0) {
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }

            if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
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
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00ff9d] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
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
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain bg-[#032222] border border-[#00ff9d]/20 rounded-2xl shadow-2xl shadow-[#00ff9d]/10 scrollbar-thin scrollbar-thumb-[#00ff9d]/20 scrollbar-track-transparent focus-visible:outline-none"
                onClick={(e) => e.stopPropagation()}
                style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Explicit styles to ensure centering even with motion
            >
                <button
                    onClick={onClose}
                    aria-label={`Cerrar detalles de ${project.title}`}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-[#00ff9d] hover:text-[#021a1a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#032222]"
                >
                    <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-full min-h-[300px] relative bg-[#021a1a] flex items-center justify-center">
                        <img
                            src={project.image}
                            alt={project.title}
                            width="800"
                            height="900"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#032222] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#032222]/50"></div>
                    </div>

                    <div className="p-8 flex flex-col">
                        <div className="mb-6">
                            <span className="text-[#00ff9d] text-sm font-bold tracking-wider uppercase bg-[#00ff9d]/10 px-3 py-1 rounded-full mb-4 inline-block">
                                {project.category}
                            </span>
                            <h2 id="project-modal-title" className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
                            <p id="project-modal-description" className="text-gray-300 text-lg leading-relaxed">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-white font-semibold mb-3">Tecnologías</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-sm font-medium text-[#00ff9d] bg-[#052e2e] px-3 py-1.5 rounded border border-[#00ff9d]/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-fit items-center justify-center px-4 py-2 rounded-lg bg-[#00ff9d] text-[#021a1a] font-semibold hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#032222]"
                            >
                                Ver proyecto
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
