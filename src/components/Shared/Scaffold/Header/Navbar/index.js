import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {
  NavbarContainer,
  Nav,
  NavLogo,
  NavbarMenu,
} from './styles';

const Navbar = () => {
  return(
      <Nav>
        <NavbarContainer>
          <Link to="/"><NavLogo>Healthy Food</NavLogo></Link>
          <NavbarMenu>
            <Link to="/"><li>Healthy Recipes</li></Link>
            <AnchorLink href='#blog'><li>Blog</li></AnchorLink>
            <AnchorLink href='#'><li>Join</li></AnchorLink>
            <Link to="/form"><li className="menu-botton">Register</li></Link>
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
  );
}

export default Navbar;