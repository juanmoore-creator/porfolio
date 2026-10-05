import React from 'react';
import { motion } from 'framer-motion';

// The one entrance animation used across the site: a short fade and rise.
const Reveal = ({ as = 'div', delay = 0, className = '', children, ...props }) => {
    const Component = motion[as];

    return (
        <Component
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            className={className}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Reveal;
