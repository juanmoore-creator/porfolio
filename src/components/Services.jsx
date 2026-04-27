import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Gauge, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
    {
        icon: <Rocket className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Pack Starter',
        price: 'Desde USD 350',
        description: 'Landing profesional para empezar a captar consultas sin perder tiempo en una web gigante.',
        deliverables: ['Copy base orientado a accion', 'Formulario conectado a WhatsApp o email', 'SEO tecnico inicial'],
        timeline: '5 a 7 dias'
    },
    {
        icon: <Gauge className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Pack Growth',
        price: 'Desde USD 650',
        description: 'Web de negocio con estructura completa para vender mejor, comunicar claro y escalar.',
        deliverables: ['Sitio multi-seccion responsive', 'Optimización de rendimiento y SEO on-page', 'Integración de analitica y eventos clave'],
        timeline: '10 a 14 dias'
    },
    {
        icon: <Wrench className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Pack Retainer',
        price: 'USD 180 / mes',
        description: 'Acompañamiento mensual para iterar tu web, lanzar mejoras y mantener todo bajo control.',
        deliverables: ['Soporte tecnico y ajustes continuos', 'Mejoras evolutivas de conversion', 'Monitoreo basico de errores y performance'],
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
                        Servicios para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-emerald-600">vender mas y mejor</span>
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Trabajo con pymes, marcas personales y negocios de Argentina que necesitan una web rapida,
                        clara y pensada para convertir visitas en clientes.
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
                            <p className="text-[#00ff9d] font-bold tracking-wide mb-3">{service.price}</p>
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
                                Si hoy tu web no te esta trayendo clientes, la optimizamos o armamos una nueva en foco comercial.
                                Coordinamos una llamada de 20 min y te llevo una propuesta clara en menos de 48 horas.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff9d] text-[#021a1a] font-bold px-6 py-3 shadow-[0_0_20px_rgba(0,255,157,0.25)] hover:shadow-[0_0_28px_rgba(0,255,157,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021a1a]"
                        >
                            Reservar llamada
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>

                <p className="text-center text-xs text-gray-500 mt-8">
                    Precios orientativos para proyectos nuevos. El presupuesto final depende del alcance y complejidad.
                </p>
            </div>
        </section>
    );
};

export default Services;