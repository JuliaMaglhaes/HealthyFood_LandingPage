import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MdMenu, MdClose } from 'react-icons/md';

import {
    NavbarContainer,
    Nav,
    NavLogo,
    NavbarMenu,
    Mobile,
  } from './styles';

function Navbar() {

    const[isClick, setClick] = useState(false);
    const handleClick = () => {
        setClick(prevent => !prevent);
    }

    const [colorScroll, setColor] = useState(false)
    useEffect(function() {
        const positionSc = () => {
            if(window.scrollY > 30){
                setColor(true);
            }
            if(window.scrollY === 0){
                setColor(false);
            }
        }
        window.addEventListener('scroll', positionSc);
    },[]);


    return(
        <Nav id={colorScroll ? 'colorAtive' : ''}>
            <NavbarContainer>
                <Link to="/"><NavLogo>Healthy Food</NavLogo></Link>
                <Mobile>
                    <div className="navbar-icon"  onClick={handleClick}>
                        {isClick ? (
                            <MdClose
                                size={40}
                                color="fff"
                            />
                            ) : (
                            <MdMenu
                                size={40}
                                color="fff"
                            /> 
                            )
                        }
                    </div>
                </Mobile>
                <NavbarMenu id={isClick ? 'active' : ''}>
                    <AnchorLink href='#recipes'><Link to="/"><li>Healthy Recipes</li></Link></AnchorLink>
                    <AnchorLink  href='#blog'><Link to="/"><li>Blog</li></Link></AnchorLink>
                    <AnchorLink href='#member'><Link to="/"><li>Join</li></Link></AnchorLink>
                    <Link to="/cadastro"><li className="menu-botton">Register</li></Link>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    );
}
export default Navbar;