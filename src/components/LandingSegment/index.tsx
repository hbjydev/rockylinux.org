import React from 'react';
import { styled } from '@stitches/react';

const StyledComponent = styled('div', {
    padding: '43px 86px',
    alignItems: 'center',
    width: '100%',
    background: '#fff',
    
    '& .inner': {
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: '1200px',
        width: '100%'
    },
    '& .inner div': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        '&.left': { paddingRight: '16px' },
        '&.right': {
            paddingLeft: '16px',
            textAlign: 'right',
            alignItems: 'flex-end'
        }
    },
    '&:first-child': { paddingTop: '86px' },
    '&:last-child': { paddingBottom: '86px' },

    '@media (max-width: 800px)': {
        '& .inner': {
            gridTemplateColumns: '1fr',
            '& div': {
                textAlign: 'center',
                alignItems: 'center',
                '&.left': {
                    paddingRight: 0
                },
                '&.right': {
                    paddingLeft: 0,
                    textAlign: 'center',
                    alignItems: 'center'
                }
            }
        }
    }
});

const LandingSegment = ({ left, right }) => (
    <StyledComponent>
        <div className="inner">
            <div className="left">{left}</div>
            <div className="right">{right}</div>
        </div>
    </StyledComponent>
);

export default LandingSegment;
