import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MdMenu } from 'react-icons/md';

import {
    NavbarContainer,
    Nav,
    NavLogo,
    NavbarMenu,
    Bars,
    Mobile,
  } from './styles';

function Navbar() {
    return(
        <Nav>
            <NavbarContainer>
                <Link to="/"><NavLogo>Healthy Food</NavLogo></Link>
                <Mobile>
                    <div className="navbar-icon">
                        <MdMenu
                            size={40}
                            color="fff"
                        />
                    </div>
                </Mobile>
                <NavbarMenu>
                    <AnchorLink href='#recipes'><Link to="/"><li>Healthy Recipes</li></Link></AnchorLink>
                    <AnchorLink  href='#blog'><Link to="/"><li>Blog</li></Link></AnchorLink>
                    <AnchorLink href='#member'><Link to="/"><li>Join</li></Link></AnchorLink>
                    <Link to="/cadastro"><li className="menu-botton">Register</li></Link>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>

        // <Nav>
        //     <NavbarContainer>
        //         <Link to="/"><NavLogo>Healthy Food</NavLogo></Link>
        //         <Mobile>
        //             <div className="navbar-icon">
        //                 <MdMenu
        //                     size={40}
        //                     color="fff"
        //                 />
        //             </div>
        //         </Mobile>
        //         <NavbarMenu>
        //             <AnchorLink href='#recipes'><Link to="/"><li>Healthy Recipes</li></Link></AnchorLink>
        //             <AnchorLink  href='#blog'><Link to="/"><li>Blog</li></Link></AnchorLink>
        //             <AnchorLink href='#member'><Link to="/"><li>Join</li></Link></AnchorLink>
        //             <Link to="/cadastro"><li className="menu-botton">Register</li></Link>
        //         </NavbarMenu>
        //     </NavbarContainer>
        // </Nav>
  );
}

export default Navbar;