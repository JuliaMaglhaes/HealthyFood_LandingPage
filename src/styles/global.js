import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Sora:wght@522&display=swap');

    :root{
        --color-font-title-logo: #badc58;
        --color-verde-hover: #a9c84f;
        --color-titles: #1d164d;
        --color-titles-secundary: #353c67;
        --color-white: #fff;
        --background-color: #fafafc;
        --color-white-hover: #ccc;
        --color-p: #a2a1a6;
        --verde-escuro: #53a547;
        --color-p-hover: #726b6b;
        --color-black-transparent: rgba(0, 0, 0, 0.541);
        --shadow: 6px 9px 28px -6px rgba(0,0,0,0.26);
        --padding-default: 0 150px;
    }

  * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Open Sans;
        list-style: none;
    }

    html,body, #root{
        height: 100%;
    }

    body{
        background-color: var(--background-color);
        -webkit-font-smoothing: antialiased !important;
    }

    ul,a{
        list-style: none;
        text-decoration:none;
    }


`;
