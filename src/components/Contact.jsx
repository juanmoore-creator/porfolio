import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#021a1a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ff9d] rounded-full mix-blend-screen filter blur-[128px] opacity-5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff9d]/20 bg-[#052e2e]/50 backdrop-blur-sm mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
                            <span className="text-[#00ff9d] text-xs font-bold tracking-widest uppercase">Contacto</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Hablemos</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            ¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Contáctame!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
                        {/* WhatsApp */}
                        <ContactCard
                            href="https://wa.me/542216430365"
                            icon={<MessageCircle className="w-8 h-8 text-[#00ff9d]" />}
                            title="WhatsApp"
                            value="+54 221 643-0365"
                            action="Enviar mensaje"
                        />

                        {/* Email */}
                        <ContactCard
                            href="mailto:moorejuanf@gmail.com"
                            icon={<Mail className="w-8 h-8 text-[#00ff9d]" />}
                            title="Email"
                            value="moorejuanf@gmail.com"
                            action="Enviar correo"
                        />
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

const ContactCard = ({ href, icon, title, value, action }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        className="block p-8 rounded-2xl bg-[#032222] border border-[#00ff9d]/10 hover:border-[#00ff9d]/30 hover:bg-[#052e2e] transition-all group"
    >
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-[#021a1a] border border-[#00ff9d]/20 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-mono text-sm md:text-base">
                {value}
            </p>
            <span className="text-[#00ff9d] text-sm font-semibold mt-2 flex items-center gap-2">
                {action}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
        </div>
    </motion.a>
);

export default Contact;
