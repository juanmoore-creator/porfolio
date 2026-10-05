import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShoppingBag, Gauge, ArrowRight, CheckCircle2, CreditCard, Coins } from 'lucide-react';

const services = [
    {
        icon: <Award className="w-6 h-6 text-blue-400" />,
        title: 'Web & Club de Fidelización',
        badge: 'Alta Retención',
        price: 'Desde $450.000 ARS',
        financing: 'Hasta 3 cuotas fijas o 50% anticipo + 50% saldo',
        description: 'Ideal para peluquerías, barberías, gimnasios o centros de estética que quieren ingresos recurrentes y clientes fieles.',
        deliverables: [
            'Web moderna con turnos y tarjeta digital de socio',
            'Membresías con cuota mensual recurrente (ej: 4 cortes al mes)',
            'Sistema de puntos por consumo canjeables por productos en el local',
            'Panel administrativo para gestión de socios, turnos y canjes'
        ],
        timeline: '2 a 3 semanas'
    },
    {
        icon: <ShoppingBag className="w-6 h-6 text-blue-400" />,
        title: 'Catálogo Online & Pedidos QR',
        badge: 'Venta Directa',
        price: 'Desde $220.000 ARS',
        financing: 'Plan en 2 o 3 cuotas fijas sin sorpresas',
        description: 'Catálogo interactivo autogestionable para bares, restaurantes y comercios. Pedidos directos a tu WhatsApp sin pagar comisiones.',
        deliverables: [
            'Menú digital visual con fotos, descripciones y precios al día',
            'Generador de pedidos automáticos directo al WhatsApp del local',
            'Cartelería QR lista para imprimir en mesas y mostrador',
            'Cero comisiones por venta a intermediarios o plataformas'
        ],
        timeline: '5 a 7 días'
    },
    {
        icon: <Gauge className="w-6 h-6 text-blue-400" />,
        title: 'Sistemas de Gestión / CRM',
        badge: 'Orden Operativo',
        price: 'Desde $590.000 ARS',
        financing: 'Financiación por etapas o plan a medida de tu caja',
        description: 'Software a medida para ordenar la administración interna de tu negocio. Dejá atrás las planillas desordenadas y centralizá tu operación.',
        deliverables: [
            'Gestión centralizada de clientes, presupuestos y órdenes de trabajo',
            'Dashboard interactivo con datos clave para tomar mejores decisiones',
            'Roles y permisos por usuario para empleados y administradores',
            'Exportación de reportes y seguimiento de cobranzas'
        ],
        timeline: '3 a 5 semanas'
    }
];

const processSteps = [
    'Diagnóstico inicial de 20 min para entender tu modelo de negocio y dolores',
    'Propuesta técnica clara con alcance, presupuesto cerrado en pesos y tiempos de entrega',
    'Desarrollo iterativo con demostraciones funcionales para recibir tu feedback',
    'Puesta en marcha en producción, capacitación para tu equipo y soporte post-entrega'
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#0b1329] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>
                <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#111c38] rounded-full filter blur-[120px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-semibold mb-3">// 01 · SERVICIOS PARA NEGOCIOS</p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Soluciones digitales para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">hacer crecer tu negocio</span>
                    </h2>

                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        Herramientas pensadas para resolver problemas concretos de comercios locales y pymes:
                        fidelización de clientes, venta directa sin intermediarios y control ordenado de tu administración.
                    </p>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300 font-medium mb-12">
                    <span className="flex items-center gap-1.5 text-blue-300"><span className="text-blue-400">✓</span> Precios transparentes en Pesos ARS</span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5 text-blue-300"><span className="text-blue-400">✓</span> Hasta 3 cuotas fijas</span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5 text-blue-300"><span className="text-blue-400">✓</span> Planes adaptados a tu caja</span>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-12">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full rounded-2xl bg-[#111c38] border border-blue-500/15 p-7 hover:border-blue-500/35 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-[border-color,box-shadow,transform] flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-[#162447] border border-blue-500/25 flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        {service.badge}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                
                                <div className="mb-4">
                                    <p className="text-blue-400 font-bold text-xl tracking-tight">{service.price}</p>
                                    <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5 font-medium">
                                        <CreditCard className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                        {service.financing}
                                    </p>
                                </div>

                                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>

                                <ul className="space-y-3 mb-6">
                                    {service.deliverables.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-5 border-t border-blue-500/15 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Entrega estimada</span>
                                <span className="text-sm text-gray-200 font-medium">{service.timeline}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Financing Banner & Options */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#111c38] via-[#162447] to-[#111c38] border border-blue-500/25"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7 pb-6 border-b border-blue-500/15">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1.5">
                                <CreditCard className="w-4 h-4" />
                                Facilidades de Pago & Transparencia
                            </div>
                            <h3 className="text-2xl font-bold text-white">Opciones de Financiación para tu Negocio</h3>
                            <p className="text-gray-300 text-sm mt-1 max-w-2xl">
                                Entiendo la realidad económica de los comercios locales. El objetivo es que modernices tu local sin descapitalizarte y que la herramienta se pague con su propio valor.
                            </p>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 whitespace-nowrap self-start md:self-auto">
                            Precios en Pesos ($ ARS)
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Financiación Estándar */}
                        <div className="p-5 rounded-xl bg-[#0b1329]/75 border border-blue-500/15 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <CreditCard className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Financiación Estándar</h4>
                                        <p className="text-xs text-blue-300">Esquemas tradicionales y transparentes</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span><strong>Esquema 50 / 50:</strong> 50% de anticipo para congelar presupuesto y 50% al entregar la solución probada.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span><strong>Hasta 3 Cuotas Fijas:</strong> Financiación en 3 pagos mensuales acordados al inicio del proyecto.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span>Comprobante y detalle formal por cada hito de pago completado.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Financiación Personalizada */}
                        <div className="p-5 rounded-xl bg-[#0b1329]/75 border border-blue-500/15 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                        <Coins className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">Financiación Personalizada</h4>
                                        <p className="text-xs text-blue-300">A la medida del flujo de tu local</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span><strong>Adaptado a tu Flujo de Caja:</strong> Cronograma de pagos escalonado según la estacionalidad o ingresos del negocio.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span><strong>Plan Desarrollo + Soporte:</strong> Reducción del desembolso inicial compensado en un abono mensual de evolución y mantenimiento.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                                        <span>Facilidades especiales para proyectos con retorno inmediato en ventas (ej: Catálogos QR y Club de Puntos).</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Process & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch"
                >
                    <div className="rounded-2xl bg-[#111c38] border border-blue-500/15 p-7 text-left">
                        <h3 className="text-white text-2xl font-bold mb-4">Cómo trabajamos juntos</h3>
                        <ul className="space-y-4">
                            {processSteps.map((step, index) => (
                                <li key={step} className="flex items-start gap-4 text-gray-300 text-sm sm:text-base">
                                    <span className="w-8 h-8 rounded-full bg-[#162447] border border-blue-500/25 flex items-center justify-center text-blue-400 text-sm font-bold shrink-0">
                                        {index + 1}
                                    </span>
                                    <span className="pt-1">{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-[#162447] to-[#111c38] border border-blue-500/20 p-7 text-left flex flex-col justify-between">
                        <div>
                            <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3">Diagnóstico sin compromiso</p>
                            <h3 className="text-white text-2xl font-bold mb-3">¿Tenés una idea o querés digitalizar tu local?</h3>
                            <p className="text-gray-300 leading-relaxed mb-7 text-sm sm:text-base">
                                Coordinamos una breve charla de 20 minutos para entender las necesidades de tu comercio. Te preparo una propuesta personalizada en pesos con el plan de financiación más conveniente para tu negocio.
                            </p>
                        </div>

                        <motion.a
                            href="https://wa.me/542216430365?text=Hola%20Juan,%20quiero%20hacer%20un%20diagn%C3%B3stico%20sin%20cargo%20y%20consultar%20por%20planes%20de%20financiaci%C3%B3n"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_28px_rgba(59,130,246,0.45)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]"
                        >
                            Consultar planes de financiación
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>

                <p className="text-center text-xs text-gray-500 mt-8">
                    Presupuestos cerrados en pesos argentinos. Los valores finales se ajustan a la complejidad y alcance acordado.
                </p>
            </div>
        </section>
    );
};

export default Services;