import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Menu, X, ExternalLink } from 'lucide-react';
import Button from './ui/Button';
import BrowserFrame from './ui/BrowserFrame';
import { DEFAULT_WHATSAPP_LINK, navLinks } from '../constants';

const liveSites = [
    { label: 'tasando.com.ar', href: 'https://tasando.com.ar' },
    { label: 'elrefugioaguasverdes.com.ar', href: 'https://www.elrefugioaguasverdes.com.ar/' }
];

const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut', delay }
});

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="relative bg-ink text-fg">
            <a
                href="#contenido-principal"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-action focus:px-4 focus:py-2 focus:text-white"
            >
                Saltar al contenido
            </a>

            {/* Sticky navigation */}
            <div className="fixed top-0 inset-x-0 z-50 bg-ink/85 backdrop-blur-md border-b border-line/70">
                <nav aria-label="Principal" className="relative flex justify-between items-center px-5 sm:px-6 py-3.5 max-w-6xl mx-auto">
                    <a href="#contenido-principal" className="flex items-center gap-3 rounded-lg">
                        <span className="w-9 h-9 rounded-lg bg-fg text-ink grid place-items-center font-display font-extrabold text-sm tracking-tight">
                            JM
                        </span>
                        <span className="font-display font-bold tracking-tight text-fg">Juan Moore</span>
                    </a>

                    <div className="hidden md:flex gap-8 items-center text-sm font-medium text-muted">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="rounded hover:text-fg transition-colors">
                                {link.label}
                            </a>
                        ))}
                        <Button href={DEFAULT_WHATSAPP_LINK} external className="px-4 py-2.5">
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                        <a
                            href={DEFAULT_WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contactar por WhatsApp"
                            className="w-10 h-10 rounded-lg bg-action text-white grid place-items-center hover:bg-action-hover transition-colors"
                        >
                            <MessageCircle size={18} />
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            className="w-10 h-10 rounded-lg border border-line text-fg grid place-items-center hover:bg-surface transition-colors"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div
                            id="mobile-menu"
                            className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-xl bg-surface border border-line shadow-[0_16px_40px_rgba(0,0,0,0.5)] p-2 flex flex-col text-base font-medium"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="rounded-lg px-4 py-3 text-fg hover:bg-surface-2 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </nav>
            </div>

            <main
                id="contenido-principal"
                className="relative max-w-6xl mx-auto px-5 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-24 grid gap-12 lg:gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center"
            >
                <div className="min-w-0">
                    <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-7">
                        <img
                            src="/foto-160.webp"
                            alt="Juan Moore"
                            width="48"
                            height="48"
                            fetchPriority="high"
                            className="w-12 h-12 rounded-full object-cover ring-1 ring-line"
                        />
                        <div className="text-sm leading-tight">
                            <p className="font-semibold text-fg">Juan Moore</p>
                            <p className="text-muted flex items-center gap-2 mt-1">
                                <span className="relative flex h-2 w-2" aria-hidden="true">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                                </span>
                                Disponible · La Plata y remoto
                            </p>
                        </div>
                    </motion.div>

                    <motion.h1
                        {...fadeUp(0.08)}
                        className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.1rem] font-extrabold tracking-[-0.03em] text-fg"
                    >
                        Software que ordena tu negocio y <span className="text-signal">vende por WhatsApp</span>
                    </motion.h1>

                    <motion.p {...fadeUp(0.16)} className="mt-6 text-lg leading-relaxed text-muted max-w-xl">
                        Webs, catálogos con pedidos QR y sistemas de gestión a medida para comercios y pymes.
                        Presupuesto cerrado en pesos y sin complicaciones técnicas.
                    </motion.p>

                    <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-col sm:flex-row gap-3">
                        <Button href={DEFAULT_WHATSAPP_LINK} external size="lg">
                            <MessageCircle className="w-5 h-5" />
                            Escribime por WhatsApp
                        </Button>
                        <Button href="#work" variant="secondary" size="lg" className="group">
                            Ver casos
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                <motion.div {...fadeUp(0.2)} className="relative min-w-0 pb-10 sm:pb-14 lg:pr-6">
                    <BrowserFrame
                        src="/projects/gestor-crm.webp"
                        alt="Panel de control del Gestor Inmobiliario"
                        width="1248"
                        height="831"
                        className="w-[78%] ml-auto opacity-70"
                    />
                    <BrowserFrame
                        src="/projects/rivas.webp"
                        alt="Web de Club Riva's, barbería con membresías"
                        label="Club Riva's"
                        width="1024"
                        height="487"
                        loading="eager"
                        className="absolute left-0 bottom-0 w-[86%]"
                    />
                </motion.div>

                <motion.div
                    {...fadeUp(0.32)}
                    className="lg:col-span-2 pt-6 border-t border-line flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 text-sm"
                >
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted sm:self-center">En producción</span>
                    {liveSites.map((site) => (
                        <a
                            key={site.href}
                            href={site.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-fg hover:text-link transition-colors rounded"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-signal" aria-hidden="true" />
                            {site.label}
                            <ExternalLink className="w-3.5 h-3.5 text-muted" />
                        </a>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Hero;
