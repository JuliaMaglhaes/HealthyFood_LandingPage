import styled from 'styled-components';
import Background from '../../../../assets/img/bloco_services.svg'

export const Container = styled.div`
    position: fixed;
    z-index: 999;
    justify-content:center;
    align-items:center;
    text-align:center;
    display:flex;
    width: 100%;
    min-height: 100vh;
    height:auto;
    backdrop-filter: blur(10px);
    top:0;
    left:0;
    background: var(--color-black-transparent);
`;

export const ModalContainer = styled.div`
    position: fixed;
    background-color:var(--color-white);
    width:70%;
    height:70vh;
    z-index:9999;
    display:flex;
    justify-content:center;
    border-radius: 10px; 
    align-items: center; 
    box-shadow: var(--shadow);

    #botao-close{
        position:absolute;
        top:-20px;
        right:10px;
        width: 60px;
        box-shadow: 0px 0px 8px -6px rgba(0,0,0,0.26)
    }
    
    .modal-imagem{
        width:120%;
        height:100%;
        background-size: cover;
        padding:0;
        background-image: url(${Background});
        border-radius: 10px; 
    }
`

export const ModalBackground = styled.div`
    justify-content:center;
    padding: 0 100px 0 0;

    .modal-texto{
        h1{
            font-size:50px;
        }
    }
`
