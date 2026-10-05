import React from 'react';

// Screenshot inside a minimal browser chrome. The image keeps its natural
// aspect ratio so there are no empty bands around it.
const BrowserFrame = ({ src, alt, label, width, height, loading = 'lazy', fetchPriority, className = '' }) => (
    <div className={`rounded-xl overflow-hidden border border-line bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] ${className}`}>
        <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-line bg-surface-2">
            <div className="flex gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
                <span className="w-2.5 h-2.5 rounded-full bg-line" />
            </div>
            {label && <span className="font-mono text-[11px] text-muted truncate">{label}</span>}
        </div>
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            fetchPriority={fetchPriority}
            className="block w-full h-auto"
        />
    </div>
);

export default BrowserFrame;
