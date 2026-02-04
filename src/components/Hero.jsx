
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <div className="h-auto bg-[#021a1a] text-white font-sans selection:bg-[#00ff9d] selection:text-[#021a1a] overflow-hidden relative">
            {/* Background Gradient/Noise (Simulated) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#052e2e] via-[#021a1a] to-[#021a1a] opacity-50 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none" />

            {/* Navigation */}
            <nav className="relative z-10 flex justify-between items-center px-6 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#052e2e] border border-[#00ff9d]/20 flex items-center justify-center p-2 text-[#00ff9d]">
                        <Terminal size={20} />
                    </div>
                </div>

                <div className="flex gap-8 items-center text-sm font-medium text-gray-300">
                    <a href="#work" className="hover:text-[#00ff9d] transition-colors">Proyectos</a>
                    <a href="#about" className="hover:text-[#00ff9d] transition-colors">Sobre mí</a>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 rounded-full border border-[#00ff9d]/30 text-[#00ff9d] hover:bg-[#00ff9d]/10 transition-colors"
                    >
                        Contacto
                    </motion.button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center mt-12 px-4 text-center max-w-4xl mx-auto">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#052e2e]/80 backdrop-blur-sm border border-[#00ff9d]/20 px-4 py-1.5 rounded-full flex items-center gap-2 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
                    <span className="text-[#00ff9d] text-xs font-bold tracking-wider uppercase">Disponible para trabajar</span>
                </motion.div>

                {/* Profile Image (Placeholder wrapper) */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 relative group"
                >
                    <div className="absolute inset-0 bg-[#00ff9d] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="w-40 h-40 rounded-full border-2 border-[#00ff9d]/30 p-1 relative z-10 bg-[#021a1a]">
                        {/* Placeholder for Profile Image - using initials for now or a reliable placeholder */}
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#052e2e] to-[#021a1a] flex items-center justify-center text-4xl font-bold text-[#00ff9d] overflow-hidden">
                            <img
                                src="/foto.png"
                                alt="Juan Dev"
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
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
                        Juan Moore
                    </h1>
                    <h2 className="text-[#00ff9d] text-xl md:text-2xl font-mono tracking-widest font-medium mb-6">
                        Científico de datos / Desarrollador Full Stack
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed"
                >
                    Creando experiencias digitales con precisión y código, mi enfoque es la creación de webs y apps que impulsen a las pymes.
                </motion.p>

                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col items-center gap-8 w-full"
                >
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-4 bg-[#00ff9d] text-[#021a1a] font-bold text-lg rounded-full w-full max-w-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] transition-shadow"
                    >
                        Explorar proyectos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                </motion.div>
            </main>
        </div>

    );
};





export default Hero;
