import React from 'react';
import { Check, ChevronDown, MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import SectionHeader from './ui/SectionHeader';
import { whatsappLink } from '../constants';

const services = [
    {
        title: 'Web y club de fidelización',
        badge: 'Alta retención',
        price: '$450.000',
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
        title: 'Catálogo online y pedidos QR',
        badge: 'Venta directa',
        price: '$220.000',
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
        title: 'Sistemas de gestión / CRM',
        badge: 'Orden operativo',
        price: '$590.000',
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

const paymentOptions = [
    { value: '50 / 50', label: 'Anticipo y saldo al entregar' },
    { value: '3 cuotas', label: 'Fijas, acordadas al inicio' },
    { value: 'A medida', label: 'Según el flujo de tu caja' }
];

const financingDetails = [
    {
        title: 'Financiación estándar',
        items: [
            ['Esquema 50 / 50', '50% de anticipo para congelar presupuesto y 50% al entregar la solución probada.'],
            ['Hasta 3 cuotas fijas', 'Financiación en 3 pagos mensuales acordados al inicio del proyecto.'],
            ['Comprobantes', 'Detalle formal por cada hito de pago completado.']
        ]
    },
    {
        title: 'Financiación personalizada',
        items: [
            ['Adaptada a tu flujo de caja', 'Cronograma de pagos escalonado según la estacionalidad o ingresos del negocio.'],
            ['Plan desarrollo + soporte', 'Menor desembolso inicial, compensado con un abono mensual de evolución y mantenimiento.'],
            ['Retorno inmediato', 'Facilidades especiales para proyectos que generan ventas rápido, como catálogos QR y clubes de puntos.']
        ]
    }
];

const processSteps = [
    { title: 'Diagnóstico', text: 'Charla de 20 minutos para entender tu negocio y qué te está frenando.' },
    { title: 'Propuesta', text: 'Alcance claro, presupuesto cerrado en pesos y fechas de entrega.' },
    { title: 'Desarrollo', text: 'Avances funcionales que vas probando y comentando en el camino.' },
    { title: 'Entrega', text: 'Puesta en marcha, capacitación para tu equipo y soporte posterior.' }
];

const DIAGNOSIS_LINK = whatsappLink(
    'Hola Juan, quiero hacer un diagnóstico sin cargo y consultar por planes de financiación'
);

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-28 bg-ink border-t border-line/60">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <SectionHeader
                    eyebrow="Servicios"
                    title="Precios claros, en pesos y en cuotas"
                    description="Herramientas para problemas concretos de comercios y pymes: fidelizar clientes, vender sin intermediarios y ordenar la administración."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <Reveal
                            as="article"
                            key={service.title}
                            delay={index * 0.06}
                            className="rounded-2xl bg-surface border border-line p-7 flex flex-col"
                        >
                            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{service.badge}</p>
                            <h3 className="mt-3 text-2xl font-bold tracking-tight leading-tight text-fg lg:min-h-[2lh]">{service.title}</h3>

                            <p className="mt-6 flex items-baseline gap-2">
                                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">Desde</span>
                                <span className="font-display text-4xl font-extrabold tracking-tight text-fg tabular-nums">{service.price}</span>
                                <span className="text-sm text-muted">ARS</span>
                            </p>
                            <p className="mt-1.5 text-sm text-muted">{service.financing}</p>

                            <p className="mt-6 text-[0.95rem] leading-relaxed text-fg/85">{service.description}</p>

                            <ul className="mt-6 space-y-3">
                                {service.deliverables.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-fg/85">
                                        <Check className="w-4 h-4 text-muted mt-0.5 shrink-0" aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-7">
                                <div className="pt-5 border-t border-line flex items-center justify-between text-sm">
                                    <span className="text-muted">Entrega estimada</span>
                                    <span className="font-mono text-fg">{service.timeline}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Payment options */}
                <Reveal className="mt-5 rounded-2xl border border-line p-6 sm:p-7">
                    <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
                        <div>
                            <h3 className="text-xl font-bold text-fg">Formas de pago</h3>
                            <p className="mt-1 text-sm text-muted">Para que modernices tu local sin descapitalizarte.</p>
                        </div>
                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {paymentOptions.map((option) => (
                                <div key={option.value} className="sm:border-l sm:border-line sm:pl-4">
                                    <dt className="font-display text-xl font-bold text-fg">{option.value}</dt>
                                    <dd className="text-sm text-muted">{option.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <details className="group mt-6 pt-5 border-t border-line">
                        <summary className="flex items-center gap-2 text-sm font-medium text-link cursor-pointer list-none rounded [&::-webkit-details-marker]:hidden">
                            Ver detalles de financiación
                            <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <div className="mt-6 grid gap-8 md:grid-cols-2">
                            {financingDetails.map((group) => (
                                <div key={group.title}>
                                    <h4 className="font-semibold text-fg mb-3">{group.title}</h4>
                                    <dl className="space-y-3 text-sm">
                                        {group.items.map(([term, text]) => (
                                            <div key={term}>
                                                <dt className="font-medium text-fg">{term}</dt>
                                                <dd className="text-muted leading-relaxed">{text}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </details>
                </Reveal>

                {/* Process */}
                <div className="mt-20 md:mt-24">
                    <Reveal as="h3" className="text-2xl md:text-3xl font-bold tracking-tight text-fg mb-8">
                        Cómo trabajamos
                    </Reveal>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                        {processSteps.map((step, index) => (
                            <Reveal as="li" key={step.title} delay={index * 0.06} className="border-t border-line pt-5">
                                <span className="font-mono text-sm text-muted tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                                <h4 className="mt-2 font-display text-lg font-bold text-fg">{step.title}</h4>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
                            </Reveal>
                        ))}
                    </ol>
                </div>

                {/* CTA */}
                <Reveal className="mt-16 rounded-2xl bg-surface border border-line p-7 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-bold tracking-tight text-fg">¿Tenés una idea o querés digitalizar tu local?</h3>
                        <p className="mt-2 text-muted leading-relaxed">
                            Diagnóstico sin cargo de 20 minutos. Después te paso una propuesta en pesos con el plan de pago que mejor te quede.
                        </p>
                    </div>
                    <Button href={DIAGNOSIS_LINK} external size="lg" className="shrink-0">
                        <MessageCircle className="w-5 h-5" />
                        Pedir diagnóstico
                    </Button>
                </Reveal>

                <p className="mt-6 text-sm text-muted">
                    Presupuestos cerrados en pesos argentinos. El valor final depende del alcance acordado.
                </p>
            </div>
        </section>
    );
};

export default Services;
