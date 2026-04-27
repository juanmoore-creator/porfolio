import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Gauge, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
    {
        icon: <Rocket className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Landing que convierte',
        description: 'Diseño y desarrollo de landing pages enfocadas en transformar visitas en consultas reales.',
        deliverables: ['Copy base orientado a accion', 'Formulario conectado a WhatsApp o email', 'SEO tecnico inicial'],
        timeline: '5 a 7 dias'
    },
    {
        icon: <Gauge className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Optimización de rendimiento',
        description: 'Mejoro velocidad, estabilidad y experiencia para aumentar retencion y posicionamiento.',
        deliverables: ['Mejora de Core Web Vitals', 'Optimización de assets y carga', 'Checklist de mejoras priorizadas'],
        timeline: '3 a 5 dias'
    },
    {
        icon: <Wrench className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Soporte mensual',
        description: 'Mantenimiento continuo para que tu web siga actualizada, estable y lista para crecer.',
        deliverables: ['Correcciones y ajustes continuos', 'Nuevas secciones pequeñas', 'Monitoreo basico de errores'],
        timeline: 'Plan mensual'
    }
];

const processSteps = [
    'Brief de 20 min para entender objetivos y publico',
    'Propuesta con alcance, tiempos y entregables',
    'Ejecucion en sprints cortos con feedback',
    'Entrega final y soporte para salida a producción'
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#021a1a] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#00ff9d] rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>
                <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#052e2e] rounded-full filter blur-[120px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff9d]/20 bg-[#052e2e]/50 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
                        <span className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase">Servicios freelance</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Soluciones para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-emerald-600">hacer crecer tu negocio</span>
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Trabajo con pymes y profesionales que necesitan una web rapida, clara y pensada para generar resultados.
                        Cada servicio tiene foco en conversion, rendimiento y una experiencia de usuario impecable.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-14">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full rounded-2xl bg-[#032222] border border-[#00ff9d]/10 p-7 hover:border-[#00ff9d]/35 hover:shadow-[0_0_30px_rgba(0,255,157,0.08)] transition-[border-color,box-shadow,transform]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#052e2e] border border-[#00ff9d]/25 flex items-center justify-center mb-5">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                            <ul className="space-y-3 mb-6">
                                {service.deliverables.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#00ff9d] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-5 border-t border-[#00ff9d]/10 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-[#00ff9d] font-bold">Timeline</span>
                                <span className="text-sm text-gray-200 font-medium">{service.timeline}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch"
                >
                    <div className="rounded-2xl bg-[#032222] border border-[#00ff9d]/10 p-7 text-left">
                        <h3 className="text-white text-2xl font-bold mb-4">Como trabajo</h3>
                        <ul className="space-y-4">
                            {processSteps.map((step, index) => (
                                <li key={step} className="flex items-start gap-4 text-gray-300">
                                    <span className="w-8 h-8 rounded-full bg-[#052e2e] border border-[#00ff9d]/25 flex items-center justify-center text-[#00ff9d] text-sm font-bold shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="pt-1">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-[#053333] to-[#032222] border border-[#00ff9d]/20 p-7 text-left flex flex-col justify-between">
                        <div>
                            <p className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase mb-3">Disponibilidad actual</p>
                            <h3 className="text-white text-2xl font-bold mb-3">2 cupos para nuevos proyectos en mayo</h3>
                            <p className="text-gray-300 leading-relaxed mb-7">
                                Si queres mejorar tu web o lanzar una nueva landing, te propongo una llamada breve para
                                definir alcance y enviarte una propuesta en menos de 48 horas.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff9d] text-[#021a1a] font-bold px-6 py-3 shadow-[0_0_20px_rgba(0,255,157,0.25)] hover:shadow-[0_0_28px_rgba(0,255,157,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021a1a]"
                        >
                            Quiero una propuesta
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;