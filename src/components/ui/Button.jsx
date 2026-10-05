import React from 'react';

const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-hover focus-visible:ring-offset-2 focus-visible:ring-offset-ink';

const variants = {
    primary: 'bg-action text-white hover:bg-action-hover',
    secondary: 'border border-line text-fg hover:border-muted/60 hover:bg-surface'
};

const sizes = {
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-base'
};

// Renders an <a> when `href` is given, otherwise a <button>.
const Button = ({ href, variant = 'primary', size = 'md', external = false, className = '', children, ...props }) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
        return (
            <a href={href} className={classes} {...externalProps} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
