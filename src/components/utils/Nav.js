import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    display: inline-block;
    color: black;
    padding: 1rem 2rem;
    background: #40e0d0;
    margin: .75rem;
    border-radius: 20px;
    text-decoration: none;
`;

const StyledLi = styled.li`
    list-style: none;
    display: inline-block;
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