import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Layers } from 'lucide-react';

const Hero = () => {
    return (
        <div className="h-auto bg-[#0b1329] text-white font-sans selection:bg-blue-600 selection:text-white overflow-hidden relative">
            <a
                href="#contenido-principal"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
            >
                Saltar al contenido
            </a>

            {/* Background Gradient/Noise (Simulated) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#111c38] via-[#0b1329] to-[#0b1329] opacity-50 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none" />

            {/* Navigation */}
            <nav className="relative z-10 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#111c38] border border-blue-500/20 flex items-center justify-center p-2 text-blue-400">
                        <Layers size={20} />
                    </div>
                    <span className="font-semibold tracking-tight text-slate-200 hidden sm:inline">Juan Moore</span>
                </div>

                <div className="flex gap-6 sm:gap-8 items-center text-sm font-medium text-gray-300">
                    <a href="#services" className="rounded-full px-1 py-1 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]">Servicios</a>
                    <a href="#work" className="rounded-full px-1 py-1 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]">Proyectos</a>
                    <a href="#about" className="rounded-full px-1 py-1 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]">Sobre mí</a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]"
                    >
                        Contacto
                    </motion.a>
                </div>
            </nav>

            {/* Main Content */}
            <main id="contenido-principal" className="relative z-10 flex flex-col items-center justify-center mt-10 md:mt-14 px-4 text-center max-w-4xl mx-auto">

                {/* Status */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2.5 text-xs text-slate-400 mb-8 font-mono"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Estado: <strong className="text-slate-200 font-medium">Disponible para proyectos</strong></span>
                    <span className="text-slate-600">·</span>
                    <span>La Plata & Remoto</span>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 relative group"
                >
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-blue-500/30 p-1 relative z-10 bg-[#0b1329]">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#111c38] to-[#0b1329] flex items-center justify-center text-4xl font-bold text-blue-400 overflow-hidden">
                            <img
                                src="/foto.png"
                                alt="Juan Moore - Desarrollador de Software"
                                width="320"
                                height="320"
                                fetchPriority="high"
                                className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Name & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3">
                        Juan Moore
                    </h1>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-6 max-w-2xl mx-auto">
                        Soluciones Digitales & Software a Medida para Comercios y Pymes
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-300 max-w-2xl text-base sm:text-lg mb-10 leading-relaxed font-normal"
                >
                    Ayudo a negocios a digitalizar sus ventas, automatizar pedidos y ordenar su gestión interna con herramientas a medida, fáciles de usar y sin complicaciones técnicas.
                </motion.p>

                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-16"
                >
                    {/* Primary CTA: WhatsApp direct */}
                    <motion.a
                        href="https://wa.me/542216430365?text=Hola%20Juan,%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultar%20por%20una%20soluci%C3%B3n%20para%20mi%20negocio"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Consultar por WhatsApp
                    </motion.a>

                    {/* Secondary CTA: Explore projects */}
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full sm:w-auto px-7 py-3.5 bg-[#111c38] hover:bg-[#162447] text-slate-200 border border-blue-500/20 hover:border-blue-500/40 font-medium text-base rounded-full flex items-center justify-center gap-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1329]"
                    >
                        Ver soluciones
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </main>
        </div>
    );
};

export default Hero;
