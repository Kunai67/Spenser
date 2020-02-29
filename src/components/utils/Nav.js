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
      transition: 500ms opacity ease;
      position: absolute;
      z-index: 1000;
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

// function ResponsiveLinks(props) {
//   const [display, setDisplay] = useState("none");

//   return (
//     <div>
//       <MenuIcon src={ MenuIconLink } onClick={ () => setDisplay(display === 'none' ? 'none' : 'block') } />
//       <StyledUl display={ display }>
//         { props.children }
//       </StyledUl>
//     </div>
//   )
// }

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
        </ResponsiveLinks>
      </StyledNav>
    )
}