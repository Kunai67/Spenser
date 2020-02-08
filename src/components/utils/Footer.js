import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 1rem;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>Created on January 14, 2020. All rights reserved &copy; 2020.</p>
        </StyledFooter>
    )
}
