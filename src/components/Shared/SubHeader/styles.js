import styled from 'styled-components';
import ImageHeader from '../../../assets/img/Illustration.svg';

export const Container = styled.div`
    position: relative;
    display:flex;
    height:100vh;
    width:100%;
    background-color: var(--color-white);
    background-image: url(${ImageHeader});
    background-repeat: no-repeat;
    min-height:650px;
    background-position: right;
    background-position-y: 0px;
    
    @media screen and (max-width:616px){
        background-size: 100%;
        justify-content:center;
    }
`;

export const Information = styled.div`
    display:flex;
    flex-direction: column;
    width:50%;
    justify-content:center;
    padding: var(--padding-default);
    
    h1{
        color: var(--color-titles);
        font-size:50px;
    }

    @media screen and (max-width:616px){
        justify-content:center;
        padding:0;
        width:90%;
    }
`
export const InputArea = styled.div`
    display:flex;
    padding-top:30px;
    input{
        display: block;
        width: 100%;
        height: 40px;
        font-size:15px;
        color: var(--color-p);
        padding: 25px 10px 25px;
        background-color: var(--color-white);
        background-clip: padding-box;
        border: 1px solid var(--color-titles);
        border-radius: 5px;     
    } 
    button{
        background-color: var(--color-font-title-logo);
        border:none;
        border-radius: 5px;
        margin-left:10px;
        width:70px;
        cursor:pointer;
        transition: 0.3s;

        :hover{
            background-color: var(--color-verde-hover);
            transition: 0.3s;
        }
    }

`

export const Spacer = styled.div`
    height:85px;

    @media screen and (max-width:616px){
        height:51%;
    }
`;