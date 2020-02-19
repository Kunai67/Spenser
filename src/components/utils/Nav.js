import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    display: inline-block;
    padding: 0 2rem;
    margin: .75rem;
    text-decoration: none;
`;

const StyledLi = styled.li`
    list-style: none;
`;

export default function Nav() {
    return (
      <nav>
        <ul>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/expenses">Expenses</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/categories">Categories</StyledLink>
          </StyledLi>
        </ul>
      </nav>
    )
}