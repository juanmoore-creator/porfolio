import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    MessageCircle,
    LifeBuoy,
    ShoppingBag,
    CalendarCheck,
    MapPin,
    Zap,
    ArrowRight,
    CheckCircle2,
    Sparkles
} from 'lucide-react';

// Reference prices in ARS. Update them here every quarter to keep up with inflation.
const PRICES = {
    web: '$350.000',
    whatsapp: '$450.000',
    monthly: '$45.000',
    store: '$600.000',
    bookings: '$400.000',
    googleMaps: '$150.000',
    automations: '$250.000',
    combo: '$650.000',
    comboRegular: '$800.000'
};

const services = [
    {
        icon: <Globe className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Web para tu negocio',
        price: PRICES.web,
        description: 'Una página profesional para que te encuentren, confíen en vos y te escriban.',
        benefits: [
            'Botón de WhatsApp para recibir consultas',
            'Se ve perfecta en el celular',
            'Tu ubicación en Google Maps',
            'Dominio .com.ar incluido el primer año'
        ],
        timeline: '7 días'
    },
    {
        icon: <MessageCircle className="w-6 h-6 text-[#00ff9d]" />,
        title: 'WhatsApp que responde solo',
        price: PRICES.whatsapp,
        description: 'Contestá consultas las 24 horas, aunque estés ocupado o con el local cerrado.',
        benefits: [
            'Respuestas automáticas a las preguntas de siempre',
            'Muestra tus productos, precios y horarios',
            'Te pasa la charla cuando el cliente quiere comprar',
            'Nunca más un cliente sin respuesta'
        ],
        timeline: '1 a 2 semanas',
        featured: true
    },
    {
        icon: <LifeBuoy className="w-6 h-6 text-[#00ff9d]" />,
        title: 'Plan mensual',
        price: PRICES.monthly,
        priceSuffix: '/ mes',
        description: 'Olvidate de la parte técnica. Yo me encargo de que todo funcione.',
        benefits: [
            'Hosting y dominio al día',
            'Cambios de textos, fotos y precios',
            'Ayuda por WhatsApp cuando la necesites',
            'Copias de seguridad para no perder nada'
        ],
        timeline: 'Mes a mes'
    }
];

const extras = [
    {
        icon: <ShoppingBag className="w-5 h-5 text-[#00ff9d]" />,
        title: 'Tienda online',
        description: 'Vendé todos los días y cobrá con Mercado Pago.',
        price: PRICES.store
    },
    {
        icon: <CalendarCheck className="w-5 h-5 text-[#00ff9d]" />,
        title: 'Turnos online',
        description: 'Tus clientes reservan solos y reciben un recordatorio.',
        price: PRICES.bookings
    },
    {
        icon: <MapPin className="w-5 h-5 text-[#00ff9d]" />,
        title: 'Aparecer en Google',
        description: 'Que te encuentren cuando buscan "cerca mío".',
        price: PRICES.googleMaps
    },
    {
        icon: <Zap className="w-5 h-5 text-[#00ff9d]" />,
        title: 'Ahorro de tiempo',
        description: 'Pedidos, stock y avisos que se ordenan solos.',
        price: PRICES.automations
    }
];

const trustPoints = ['Precios en pesos', 'Pagás 50% al empezar', 'Atención por WhatsApp', 'Sin letra chica'];

const processSteps = [
    'Charlamos 20 minutos sobre tu negocio',
    'Te paso un presupuesto claro en menos de 48 horas',
    'Arrancamos y te muestro avances durante el camino',
    'Te lo entrego, te enseño a usarlo y sigo a disposición'
];

const Services = () => {
    return (
        <section id="services" className="py-12 md:py-20 bg-[#021a1a] relative overflow-hidden scroll-mt-20">
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
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff9d]/20 bg-[#052e2e]/50 backdrop-blur-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
                        <span className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase">Pymes y emprendedores</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Servicios para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-emerald-600">vender más y mejor</span>
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Te ayudo a que tu negocio aparezca en internet, responda consultas al instante
                        y consiga más clientes, aunque no estés pendiente del celular.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {trustPoints.map((point) => (
                        <span
                            key={point}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#00ff9d]/20 bg-[#052e2e]/40 text-[#00ff9d] text-xs font-bold tracking-wider uppercase"
                        >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {point}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-10">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative h-full rounded-2xl bg-[#032222] border p-7 flex flex-col transition-[border-color,box-shadow,transform] ${
                                service.featured
                                    ? 'border-[#00ff9d]/50 shadow-[0_0_30px_rgba(0,255,157,0.12)]'
                                    : 'border-[#00ff9d]/10 hover:border-[#00ff9d]/35 hover:shadow-[0_0_30px_rgba(0,255,157,0.08)]'
                            }`}
                        >
                            {service.featured && (
                                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-[#00ff9d] text-[#021a1a] text-xs font-bold uppercase tracking-wider px-3 py-1">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    El más pedido
                                </span>
                            )}

                            <div className="w-12 h-12 rounded-xl bg-[#052e2e] border border-[#00ff9d]/25 flex items-center justify-center mb-5">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 mb-5 leading-relaxed">{service.description}</p>

                            <p className="mb-6">
                                <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Desde</span>
                                <span className="text-3xl font-bold text-[#00ff9d]">{service.price}</span>
                                {service.priceSuffix && <span className="text-gray-400 ml-1">{service.priceSuffix}</span>}
                            </p>

                            <ul className="space-y-3 mb-6">
                                {service.benefits.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#00ff9d] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-5 border-t border-[#00ff9d]/10 flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-[#00ff9d] font-bold">Listo en</span>
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
                    className="rounded-2xl bg-gradient-to-r from-[#053333] to-[#032222] border border-[#00ff9d]/30 p-7 mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                >
                    <div className="text-left">
                        <p className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase mb-2">Combo recomendado</p>
                        <h3 className="text-white text-2xl font-bold mb-2">Web + WhatsApp que responde solo</h3>
                        <p className="text-gray-300">Todo lo que necesitás para recibir consultas y convertirlas en ventas.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 shrink-0">
                        <p className="text-left sm:text-right">
                            <span className="block text-gray-500 line-through text-sm">{PRICES.comboRegular}</span>
                            <span className="text-3xl font-bold text-[#00ff9d]">{PRICES.combo}</span>
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff9d] text-[#021a1a] font-bold px-6 py-3 shadow-[0_0_20px_rgba(0,255,157,0.25)] hover:shadow-[0_0_28px_rgba(0,255,157,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021a1a]"
                        >
                            Quiero el combo
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>

                <div className="mb-14">
                    <h3 className="text-white text-2xl font-bold mb-6 text-center">También te puedo ayudar con</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {extras.map((extra, index) => (
                            <motion.div
                                key={extra.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="rounded-2xl bg-[#032222] border border-[#00ff9d]/10 p-5 flex flex-col hover:border-[#00ff9d]/35 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#052e2e] border border-[#00ff9d]/25 flex items-center justify-center mb-4">
                                    {extra.icon}
                                </div>
                                <h4 className="text-white font-bold mb-1">{extra.title}</h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{extra.description}</p>
                                <p className="mt-auto text-sm text-gray-500">
                                    Desde <span className="text-[#00ff9d] font-bold">{extra.price}</span>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch"
                >
                    <div className="rounded-2xl bg-[#032222] border border-[#00ff9d]/10 p-7 text-left">
                        <h3 className="text-white text-2xl font-bold mb-4">Cómo trabajamos</h3>
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
                            <p className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase mb-3">Cupos limitados</p>
                            <h3 className="text-white text-2xl font-bold mb-3">Tomo pocos proyectos por mes para darte buena atención</h3>
                            <p className="text-gray-300 leading-relaxed mb-7">
                                Contame qué necesita tu negocio y en menos de 48 horas te paso un presupuesto claro,
                                sin compromiso.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff9d] text-[#021a1a] font-bold px-6 py-3 shadow-[0_0_20px_rgba(0,255,157,0.25)] hover:shadow-[0_0_28px_rgba(0,255,157,0.45)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff9d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021a1a]"
                        >
                            Pedir presupuesto gratis
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>

                <p className="text-center text-xs text-gray-500 mt-8">
                    Precios de referencia en pesos argentinos. El presupuesto final depende de lo que necesite tu negocio.
                </p>
            </div>
        </section>
    );
};

export default Services;
