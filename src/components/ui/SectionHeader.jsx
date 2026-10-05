import React from 'react';
import Reveal from './Reveal';

const SectionHeader = ({ eyebrow, title, description, aside }) => (
    <Reveal className="mb-12 md:mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted mb-4">{eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-fg leading-[1.05]">{title}</h2>
            {description && (
                <p className="mt-5 text-lg leading-relaxed text-muted max-w-2xl">{description}</p>
            )}
        </div>
        {aside}
    </Reveal>
);

export default SectionHeader;
