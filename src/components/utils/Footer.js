import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 1rem;
    text-align: center;
    background: transparent;
    max-width: 100%;
    padding: 3rem 0;
    margin-top: -3rem;
    font-weight: 700;
    letter-spacing: 1.2px
`;

const FooterText = styled.p`
    color: #0b4f6c;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>Created on January 14, 2020. <br />All rights reserved &copy; 2020.</FooterText>
        </StyledFooter>
    )
}
