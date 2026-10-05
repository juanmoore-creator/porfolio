export const WHATSAPP_NUMBER = '542216430365';
export const WHATSAPP_DISPLAY = '+54 221 643-0365';
export const EMAIL = 'moorejuanf@gmail.com';
export const GITHUB_URL = 'https://github.com/juanmoore-creator';

export const whatsappLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const DEFAULT_WHATSAPP_LINK = whatsappLink(
    'Hola Juan, vi tu portfolio y me gustaría consultar por una solución para mi negocio'
);

export const navLinks = [
    { href: '#work', label: 'Proyectos' },
    { href: '#services', label: 'Servicios' },
    { href: '#about', label: 'Sobre mí' },
    { href: '#contact', label: 'Contacto' }
];
