import styled from 'styled-components';
import Background from '../../assets/img/bloco_services.svg';

export const Container = styled.div`
    position: relative;
    width:100%;
    height:100vh;
    background-color: var(--color-white);
    background-image: url(${Background});
    background-position: left;
    background-repeat: no-repeat;
    min-height:690px;

    @media screen and (max-width:616px){
        background-position: 115%;
    }
`;

export const TextContainer = styled.div`
    display:flex;
    width:50%;
    height:100%;
    flex-direction: column;
    justify-content:space-around;
    float:right;

    @media screen and (max-width:616px){
        width:55%;
    }
`

export const Description = styled.div`
    height:65%;
    display:flex;
    flex-direction: column;
    position: relative;
    justify-content:space-around;
    width:63%;

    h1{
        color: var(--color-titles-secundary);
        font-size:35px;
    }

    p{
        color: var(--color-p);
        font-size:17px;
    }

    button{
        background-color: var(--color-font-title-logo);
        width: 130px;
        height: 45px;
        border: none;
        border-radius: 5px;
        color: var(--color-white);
        box-shadow: var(--shadow);
        transition: all 0.2s ease 0s;
        cursor:pointer;

        :hover{
            background-color: var(--color-verde-hover);
        }
    }

    @media screen and (max-width:616px){
        width:100%;

        h1{
            font-size:30px;
        }

        p{
            font-size:15px;
        }

        button{
            width:100px;
        }
    }
`


