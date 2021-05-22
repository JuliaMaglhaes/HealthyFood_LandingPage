import styled from 'styled-components';
import Background from '../../assets/img/bloco_services.svg';

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: var(--color-white);
    background-image: url(${Background});
    background-position: left;
    background-repeat: no-repeat;
    min-height:690px;
    justify-content:right;
`;

export const TextContainer = styled.div`
    position: relative;
    display:flex;
    width:70%;
    height:100%;
    flex-direction: column;
    justify-content:space-around;
    float:right;
    padding: 0 260px;
`

export const Description = styled.div`
    height:60%;
    display:flex;
    flex-direction: column;
    position: relative;
    justify-content:space-around;

    h1{
        color: var(--color-titles);
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
`


