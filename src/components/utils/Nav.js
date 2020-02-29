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

    @media screen and (min-width: 320px) and (max-width: 768px) {
      margin: .75rem 1rem;
    }
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
      opacity: ${ props => props.display === 'false' ? 0 : 100 };
      width: ${ props => props.display === 'false' ? 0 : '30vw' };
      height: 100vh;
      overflow: hidden;
      transition: 750ms opacity ease, 500ms width ease;
      position: absolute;
      z-index: 1000;
      right: 0;
      text-align: center;
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

class ResponsiveLinks extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isShown: false
    }
  }

  render() {
    return (
      <div>
        <MenuIcon src={ MenuIconLink } onClick={ () => this.setState({ isShown: !this.state.isShown }) } />
        <StyledUl display={ this.state.isShown.toString() }>
          { this.props.children }
        </StyledUl>
      </div>
    )
  } 
}

export default function Nav() {
    return (
      <StyledNav>
        <Brand>Spenser</Brand>
        <ResponsiveLinks>
          <StyledLi>
              <StyledLink to="/">Home</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/expenses">Expenses</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/categories">Categories</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/graph">Graph</StyledLink>
            </StyledLi>
        </ResponsiveLinks>
      </StyledNav>
    )
}