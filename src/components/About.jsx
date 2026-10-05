import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, LineChart, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#0b1329] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-semibold mb-3">// 03 · SOBRE MÍ</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">Mí</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                <span className="text-white font-semibold">No desarrollo webs de adorno;</span> construyo herramientas digitales pensadas para la rentabilidad, la fidelización y el orden operativo de tu negocio.
                            </p>
                            <p>
                                Combino el desarrollo de software con mi formación en <span className="text-blue-400 font-medium">Ciencia de Datos en Organizaciones (UNLP)</span>. Esto me permite entender la estructura de tu negocio más allá del código: optimizar tus procesos, eliminar tareas repetitivas y ayudarte a tomar decisiones con números claros.
                            </p>
                            <p>
                                Trabajo con dueños de comercios y pymes hablando su mismo idioma: sin tecnicismos innecesarios, con presupuestos cerrados y un compromiso absoluto con los resultados de cada entrega.
                            </p>
                        </div>

                        {/* Visual/Stats/Cards */}
                        <div className="grid grid-cols-1 gap-5">
                            <FeatureCard
                                icon={<Briefcase className="w-6 h-6 text-blue-400" />}
                                title="Foco en el Negocio"
                                description="Soluciones pensadas para generar ventas directas, retener clientes y ahorrar tiempo operativo."
                            />
                            <FeatureCard
                                icon={<LineChart className="w-6 h-6 text-blue-400" />}
                                title="Criterio de Datos (UNLP)"
                                description="Estructura de información sólida para ordenar tu operación y entender qué funciona en tu local."
                            />
                            <FeatureCard
                                icon={<ShieldCheck className="w-6 h-6 text-blue-400" />}
                                title="Claridad & Acompañamiento"
                                description="Comunicación directa y transparente, plazos de entrega realistas y soporte post-implementación."
                            />
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <motion.div
        whileHover={{ x: 5 }}
        className="p-5 rounded-xl bg-[#111c38] border border-blue-500/15 hover:border-blue-500/35 transition-[border-color,transform] flex items-start gap-4"
    >
        <div className="p-2.5 rounded-lg bg-[#162447] border border-blue-500/25 shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold mb-1 text-base">{title}</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

export default About;
