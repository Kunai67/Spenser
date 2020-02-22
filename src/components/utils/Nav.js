import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoPath from "../../res/cherry-tree.png";
import HomeLogoPath from "../../res/sydney-opera-house.svg";
import ExpenseLogoPath from "../../res/invoice.svg";
import CategoriesLogoPath from "../../res/list.svg";

const StyledLink = styled(Link)`
    display: inline-block;
    margin: .75rem;
    text-decoration: none;
    text-align: center;
`;

const StyledLi = styled.li`
    list-style: none;
`;

const StyledNav = styled.nav`
    background: #381460;
    position: sticky;
    top: 0;
    border-radius: 1.5rem;
    margin: .75rem;
    padding: 1rem;
    width: 30%;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 0;
`;

const Logo = styled.img`
    width: 100%;
`;

const NavIcons = styled.img`
    width: 50%;
`;

export default function Nav() {
    return (
      <StyledNav>
        <Logo src={LogoPath} alt="Logo"/>
        <StyledUl>
          <StyledLi>
            <StyledLink to="/"><NavIcons src={HomeLogoPath} alt="Home"/></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/expenses"><NavIcons src={ExpenseLogoPath} alt="Expenses"/></StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/categories"><NavIcons src={CategoriesLogoPath} alt="Categories"/></StyledLink>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    )
}