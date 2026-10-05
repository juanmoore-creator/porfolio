import React, { useState } from 'react';
import { Check, Copy, MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { EMAIL, WHATSAPP_DISPLAY, whatsappLink } from '../constants';

const CONTACT_LINK = whatsappLink('Hola Juan, vi tu portfolio y quiero hacerte una consulta por un proyecto');

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 bg-ink border-t border-line/60">
            <Reveal className="max-w-6xl mx-auto px-5 sm:px-6">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">Contacto</p>
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-fg leading-[1.02] max-w-4xl">
                    Hablemos de tu negocio
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
                    Contame qué necesitás y lo analizamos juntos, sin compromiso.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-x-8 gap-y-6">
                    <Button href={CONTACT_LINK} external size="lg">
                        <MessageCircle className="w-5 h-5" />
                        Escribime por WhatsApp
                    </Button>

                    <div className="flex flex-col gap-1 text-sm">
                        <span className="text-muted">
                            WhatsApp <span className="font-mono text-fg">{WHATSAPP_DISPLAY}</span>
                        </span>
                        <span className="flex items-center gap-2 text-muted">
                            Email
                            <a href={`mailto:${EMAIL}`} className="font-mono text-fg hover:text-link transition-colors rounded">
                                {EMAIL}
                            </a>
                            <button
                                type="button"
                                onClick={copyEmail}
                                aria-label={copied ? 'Email copiado' : 'Copiar email'}
                                className="p-1 rounded text-muted hover:text-fg transition-colors cursor-pointer"
                            >
                                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <span role="status" className="sr-only">{copied ? 'Email copiado' : ''}</span>
                        </span>
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default Contact;
