import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Brain } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#021a1a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00ff9d] rounded-full mix-blend-screen filter blur-[128px] opacity-5"></div>
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff9d]/20 bg-[#052e2e]/50 backdrop-blur-sm mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
                            <span className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase">Perfil Profesional</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-emerald-600">Mí</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                <span className="text-white font-medium">Soy un Desarrollador Web</span> enfocado en construir herramientas que aporten valor real. Actualmente, complemento mi experiencia técnica cursando la licenciatura en <span className="text-[#00ff9d]">Ciencia de Datos en Organizaciones</span> en la Universidad Nacional de La Plata (UNLP).
                            </p>
                            <p>
                                Esta formación me permite abordar el desarrollo no solo desde la escritura de código, sino desde la arquitectura de la información y la optimización de procesos.
                            </p>
                            <p>
                                Disfruto creando soluciones donde la lógica de negocio y la experiencia de usuario se encuentran, desde sistemas de gestión hasta visualización de datos en tiempo real.
                            </p>
                        </div>

                        {/* Visual/Stats/Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            <FeatureCard
                                icon={<Code className="w-6 h-6 text-[#00ff9d]" />}
                                title="Desarrollo Web"
                                description="Construcción de herramientas y plataformas digitales de alto valor."
                            />
                            <FeatureCard
                                icon={<Database className="w-6 h-6 text-[#00ff9d]" />}
                                title="Ciencia de Datos"
                                description="Arquitectura de información y optimización basada en datos."
                            />
                            <FeatureCard
                                icon={<Brain className="w-6 h-6 text-[#00ff9d]" />}
                                title="Lógica de Negocio"
                                description="Soluciones estratégicas que unen tecnología y objetivos comerciales."
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
        className="p-4 rounded-xl bg-[#032222] border border-[#00ff9d]/10 hover:border-[#00ff9d]/30 transition-colors flex items-start gap-4"
    >
        <div className="p-2 rounded-lg bg-[#052e2e] border border-[#00ff9d]/20">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold mb-1">{title}</h4>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    </motion.div>
);

export default About;
