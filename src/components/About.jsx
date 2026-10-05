import React from 'react';
import Reveal from './ui/Reveal';

const facts = [
    { term: 'Formación', detail: 'Licenciatura en Ciencia de Datos en Organizaciones, UNLP (en curso)' },
    { term: 'Ubicación', detail: 'La Plata, con proyectos remotos en todo el país' },
    { term: 'Forma de trabajo', detail: 'Presupuesto cerrado en pesos, entregas por etapas y soporte posterior' }
];

const About = () => {
    return (
        <section id="about" className="py-20 md:py-28 bg-ink border-t border-line/60">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 grid gap-12 lg:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <Reveal className="max-w-sm w-full mx-auto lg:mx-0">
                    <img
                        src="/foto-720.webp"
                        alt="Juan Moore"
                        width="720"
                        height="720"
                        loading="lazy"
                        className="w-full aspect-square object-cover rounded-2xl border border-line"
                    />
                </Reveal>

                <Reveal delay={0.08} className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">Sobre mí</p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-fg leading-[1.05]">
                        No hago webs de adorno
                    </h2>

                    <div className="mt-6 space-y-5 text-lg leading-relaxed text-fg/85 max-w-2xl">
                        <p>
                            Construyo herramientas digitales pensadas para la rentabilidad, la fidelización y el orden operativo de tu negocio.
                        </p>
                        <p>
                            Combino el desarrollo de software con mi formación en Ciencia de Datos. Eso me permite entender cómo funciona tu negocio más allá del código: optimizar procesos, eliminar tareas repetitivas y ayudarte a decidir con números claros.
                        </p>
                        <p>
                            Trabajo con dueños de comercios y pymes hablando su mismo idioma, sin tecnicismos y con compromiso en cada entrega.
                        </p>
                    </div>

                    <dl className="mt-10 grid gap-5 sm:grid-cols-3">
                        {facts.map((fact) => (
                            <div key={fact.term} className="border-t border-line pt-4">
                                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{fact.term}</dt>
                                <dd className="mt-2 text-sm leading-relaxed text-fg">{fact.detail}</dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
