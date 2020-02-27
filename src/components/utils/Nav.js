import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIconLink from '../../res/method-draw-image.svg';

const StyledLink = styled(Link)`
    display: inline-block;
    margin: .75rem 3rem;
    text-decoration: none;
    text-align: center;
    color: #0b4f6c;
    font-family: 'Roboto Condensed';
    letter-spacing: 1.2px;
`;

const StyledLi = styled.li`
    list-style: none;
`;

const StyledNav = styled.nav`
    background: transparent;
    border-radius: 1.5rem;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    align-content: center;
`;

const StyledUl = styled.ul`
    padding: 0;
    @media screen and (min-width: 320px) and (max-width: 768px) {
      display: none;
      position: absolute;
      width: 100%;
      right: 0;
      bottom: -150%;
      text-align: right;
      padding: 2rem;
      background: #FBFBFF;
    }

    @media screen and (min-width: 769px) {
      display: flex;
    }
`;

const Brand = styled.p`
  font-size: 3rem;
  color: #0b4f6c;
  font-family: 'Nunito';
  font-weight: 700;
`;

const MenuIcon = styled.img`
  max-width: 100%;
  display: none;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    display: inline-block;
  }
`;

export default function Nav() {
    return (
      <StyledNav>
        <Brand>Spenser</Brand>
        <MenuIcon src={ MenuIconLink } />
        <StyledUl>
          <StyledLi>
            <StyledLink to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/expenses">Expenses</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/categories">Categories</StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    )
}