import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#0b1329] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] opacity-5"></div>
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
                        <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-semibold mb-3">// 04 · CONTACTO DIRECTO</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">Negocio</span>
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            ¿Tenés un comercio o pyme y querés dar el salto digital? Escribime directamente para analizar tu caso sin ningún compromiso.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
                        {/* WhatsApp */}
                        <ContactCard
                            href="https://wa.me/542216430365?text=Hola%20Juan,%20vi%20tu%20portfolio%20y%20quiero%20hacerte%20una%20consulta%20por%20un%20proyecto"
                            icon={<MessageCircle className="w-8 h-8 text-blue-400" />}
                            title="WhatsApp"
                            value="+54 221 643-0365"
                            action="Escribir por WhatsApp"
                        />

                        {/* Email */}
                        <ContactCard
                            href="mailto:moorejuanf@gmail.com"
                            icon={<Mail className="w-8 h-8 text-blue-400" />}
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
        className="block p-8 rounded-2xl bg-[#111c38] border border-blue-500/15 hover:border-blue-500/35 hover:bg-[#162447] transition-[border-color,background-color,transform] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]"
    >
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-[#0b1329] border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors font-mono text-sm md:text-base">
                {value}
            </p>
            <span className="text-blue-400 text-sm font-semibold mt-2 flex items-center gap-2">
                {action}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
        </div>
    </motion.a>
);

export default Contact;
