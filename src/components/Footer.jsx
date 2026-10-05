import React from 'react';
import { DEFAULT_WHATSAPP_LINK, EMAIL, GITHUB_URL, navLinks } from '../constants';

const externalLinks = [
    { href: DEFAULT_WHATSAPP_LINK, label: 'WhatsApp' },
    { href: `mailto:${EMAIL}`, label: 'Email' },
    { href: GITHUB_URL, label: 'GitHub' }
];

const Footer = () => (
    <footer className="bg-ink border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start text-sm">
            <div>
                <p className="font-display font-bold text-fg">Juan Moore</p>
                <p className="mt-1 text-muted">Software para comercios y pymes · La Plata, Argentina</p>
            </div>

            <nav aria-label="Secciones" className="flex flex-wrap gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-muted hover:text-fg transition-colors rounded">
                        {link.label}
                    </a>
                ))}
            </nav>

            <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {externalLinks.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted hover:text-fg transition-colors rounded"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <p className="md:col-span-3 pt-6 border-t border-line text-muted">
                © {new Date().getFullYear()} Juan Moore
            </p>
        </div>
    </footer>
);

export default Footer;
