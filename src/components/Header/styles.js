import styled from 'styled-components';
import ImageHeader from '../../assets/img/Illustration.svg';

export const Container = styled.div`
    display:flex;
    height:100%;
    width:100%;
    background-color: var(--color-white);
    background-image: url(${ImageHeader});
    background-repeat: no-repeat;
    min-height:650px;
    background-position: right;
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
    }
`

export const Spacer = styled.div`
    height:85px;
`

