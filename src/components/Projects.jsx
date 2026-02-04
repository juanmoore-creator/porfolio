
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Gestor Inmobiliario",
        category: "CRM / Administración",
        description: "Solución integral para la gestión de agencias inmobiliarias. Centraliza la administración de carteras de inmuebles y clientes con calendario inteligente.",
        image: "real_estate_crm_1770145563511.png",
        tags: ["React", "Node.js", "MongoDB", "Calendar API"]
    },
    {
        title: "Menú Online & Pedidos",
        category: "E-commerce / Gastronomía",
        description: "Catálogo digital interactivo para agilizar la toma de comandas. Genera pedidos automáticos a WhatsApp sin backend complejo.",
        image: "food_menu_app_1770145577594.png",
        tags: ["Next.js", "WhatsApp API", "Tailwind"]
    },
    {
        title: "Web de Alquiler Temporal",
        category: "Booking / Landing Page",
        description: "Plataforma de reservas directas para alojamiento vacacional. Gestión de disponibilidad en tiempo real y panel de administración.",
        image: "vacation_rental_booking_1770145599875.png",
        tags: ["React", "Firebase", "Stripe"]
    },
    {
        title: "El Impostor",
        category: "Game Dev / Real-Time",
        description: "Videojuego web multijugador de deducción social. Comunicación bidireccional (WebSockets) para sincronización en tiempo real.",
        image: "impostor_game_1770145615166.png",
        tags: ["Socket.io", "Canvas API", "Node.js"]
    },
    {
        title: "BusApp",
        category: "Utility / Geolocalización",
        description: "App de seguimiento de transporte público en tiempo real. Integra mapas y APIs de tránsito para predecir llegadas.",
        image: "bus_tracking_app_1770145629770.png",
        tags: ["React Native", "Google Maps API", "Geolocation"]
    },
    {
        title: "Dashboard Financiero",
        category: "Fintech / Data Visualization",
        description: "Panel de control analítico para finanzas personales. Visualizaciones gráficas interactivas de ingresos, egresos y flujo de caja.",
        image: "financial_dashboard_1770145645143.png",
        tags: ["D3.js", "TypeScript", "Supabase"]
    }
];

const Projects = () => {
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
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    // Determine image logic (using generated artifacts logic, here passing filename directly but in real app would need import or public path)
    // Assuming images are in the same folder or public, but for now we will use the filename.
    // NOTE: In a real Vite app, we'd probably put these in the public folder. I will assume they are/will be moved to public.

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl bg-[#032222] border border-[#00ff9d]/10 overflow-hidden hover:border-[#00ff9d]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,157,0.1)] flex flex-col h-full"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-[#021a1a]/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <button className="p-3 rounded-full bg-[#00ff9d] text-[#021a1a] hover:bg-white transition-colors transform hover:scale-110">
                        <ArrowUpRight size={20} />
                    </button>
                    <button className="p-3 rounded-full bg-[#052e2e] text-[#00ff9d] border border-[#00ff9d]/30 hover:bg-[#00ff9d] hover:text-[#021a1a] transition-all transform hover:scale-110">
                        <Github size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[#00ff9d] text-xs font-bold tracking-wider uppercase bg-[#00ff9d]/10 px-2 py-1 rounded">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff9d] transition-colors">{project.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-medium text-gray-500 bg-[#052e2e] px-2 py-1 rounded border border-[#00ff9d]/5 group-hover:border-[#00ff9d]/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
