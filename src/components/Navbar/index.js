import React from 'react';

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
          <NavLogo to="/" >Healthy Food</NavLogo>
          <NavbarMenu>
            <li>Healthy Recipes</li>
            <li>Blog</li>
            <li>Join</li>
            <li className="menu-botton">Register</li>
          </NavbarMenu>
        </NavbarContainer>
      </Nav>
  );
}

export default  Navbar;