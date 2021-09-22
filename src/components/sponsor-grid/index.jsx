import React from 'react';

const SponsorGrid = ({ children }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ padding: '0 24px 56px 24px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {children}
    </div>
);

export default SponsorGrid;
