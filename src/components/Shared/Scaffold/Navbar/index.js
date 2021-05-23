import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import {
    NavbarContainer,
    Nav,
    NavLogo,
    NavbarMenu,
  } from './styles';

function Navbar() {
    return(
        <Nav>
            <NavbarContainer>
                <Link to="/"><NavLogo>Healthy Food</NavLogo></Link>
                <NavbarMenu>
                    <AnchorLink href='#recipes'><li>Healthy Recipes</li></AnchorLink>
                    <AnchorLink  href='#blog'><li>Blog</li></AnchorLink>
                    <AnchorLink href='#member'><li>Join</li></AnchorLink>
                    <Link to="/cadastro"><li className="menu-botton">Register</li></Link>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
  );
}

export default Navbar;