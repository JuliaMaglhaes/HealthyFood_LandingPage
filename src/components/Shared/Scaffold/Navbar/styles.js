import styled from 'styled-components';

export const Nav = styled.nav`
    display:flex;
    height:80px;
    width:100%;
    justify-content:center;
    align-items:center;
    background-color:transparent;
    top:0;
    z-index:999;
    position: absolute;

    &#colorAtive{
        transition: 0.5s;
    }

    @media screen and (max-width: 790px){
        position:fixed;
        
        &#colorAtive{
            top:0%;
            background-color: var(--color-titles);
            transition: 0.5s;
        }
    }
`;
export const NavbarContainer = styled.div`
    display:flex;
    width:78%;
    max-width: 1400px;
    height:80px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 790px){
        justify-content:center
    }

    @media (min-width:791px) and (max-width: 862px){
        width:80%;
    }
`;

export const NavLogo = styled.a`
    color: var(--color-font-title-logo);
    font-size:35px;
    text-decoration: none;
    font-weight: 700;
    width:100%;
    white-space: nowrap;

    @media screen and (max-width: 790px){
        color: var(--color-white);   
    }
    @media (min-width:791px) and (max-width: 845px){
        font-size:30px;
    }
`;

export const NavbarMenu = styled.ul`
    display:flex;
    height:80px;
    align-items:center;
    justify-content:space-between;
    width:450px;

    @media (min-width:791px) and (max-width: 905px){
        width:390px;
    }

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
        font-weight: 600;
        width:100%;
        transition: 0.1s;

        &:hover{
            transition:0.1s;
            border-bottom: 2px solid var(--color-white);
        }

        @media (min-width:791px) and (max-width: 845px){
            font-size:15px;
        }
    }

    @media screen and (max-width: 790px){
        display:flex;
        flex-direction: column;
        width:100%;
        height:300px;
        position: absolute;
        justify-content: space-around;
        top:-550%;
        left:0%;
        transition: 0.3s;

        &#active{
            background:var(--color-titles);
            transition: 0.3s ;
            left:0;
            top:0;

            margin-top:80px;
        }
    }
`;

export const Mobile = styled.div`
    display:none;
    height:40%;
    align-items: center;

    .navbar-icon{
        cursor:pointer;
        display:none;
    }
    
    @media screen and (max-width:790px){
        display:flex;
        height:40%;

        .navbar-icon{
            display:flex;
            z-index: 1999;
            position:absolute;
            right:40px;
        }

    }
`
export const NavbarBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 790px){
        display:none;
    }
`
