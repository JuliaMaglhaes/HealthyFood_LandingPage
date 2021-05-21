import styled from 'styled-components';

export const Nav = styled.nav`
    display:flex;
    height:80px;
    width:100%;
    justify-content:center;
    align-items:center;
    background-color:transparent;
    top:0;
    padding: var(--padding-default);
    z-index:999;
    position: absolute;
`;

export const NavbarContainer = styled.div`
    display:flex;
    width:100%;
    max-width: 1400px;
    height:80px;
    justify-content: space-between;
    align-items: center;
`;

export const NavLogo = styled.a`
    color: var(--color-font-title-logo);
    font-size:35px;
    text-decoration: none;
    font-weight: 700;
`;

export const NavbarMenu = styled.ul`
    display:flex;
    height:80px;
    align-items:center;
    justify-content:space-between;
    width:450px;

    .menu-botton{
        background-color: var(--color-white);
        color: var(--color-font-title-logo);
        padding:25px;
        height:20px;
        border-radius:5px;
    }

    li {
        display:flex;
        align-items: center;
        color: var(--color-white);
        height:100%;
        text-transform: uppercase;
        cursor:pointer;
        font-weight: 500;
    }
`;


