import React from 'react';

const PageHeader = ({ title, description }) => (
    <div className="mt-16 px-6" style={{ marginBottom: '56px', borderBottom: '1px solid #e1e1e1' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', paddingBottom: '24px' }}>
        <h2 style={{ marginBottom: '12px' }}>{title}</h2>
        <p className="text-base dark:text-gray-300 md:text-lg sm:px-4" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{description}</p>
      </div>
    </div>
);

export default PageHeader;
