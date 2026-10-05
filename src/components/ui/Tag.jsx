import React from 'react';

const Tag = ({ children }) => (
    <span className="text-xs font-medium text-muted px-2.5 py-1 rounded-md border border-line">
        {children}
    </span>
);

export default Tag;
