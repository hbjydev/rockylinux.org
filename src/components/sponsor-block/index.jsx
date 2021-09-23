import { styled } from '@stitches/react';
import React from 'react';

const Component = styled('a', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '24px',
    border: '1px solid #e1e1e1',
    transition: 'all .3s ease',
    
    '& p': {
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.6)',
        lineHeight: '1.5'
    },
    
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.16)'
    }
});

const SponsorBlock = ({ href, logo, title, pills, description }) => (
    <Component href={href}>
        <img style={{ maxHeight: '117px', width: '100%', margin: '0 auto' }} src={logo} alt={`${title} logo`} />
        <h3 style={{ marginTop: '12px' }}>{title}</h3>
        <div style={{ display: 'flex', marginBottom: '12px' }}>
            {pills.map((pill, i) => (
                <span style={{ backgroundColor: '#A7F3D0', borderRadius: '18px', padding: '2px 12px', fontSize: '14px', marginRight: '8px' }} key={i}>{pill}</span>
            ))}
        </div>
        <p>{description}</p>
    </Component>
);

export default SponsorBlock;
