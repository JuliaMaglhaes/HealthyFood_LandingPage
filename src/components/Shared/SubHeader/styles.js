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
    @media (min-width:1221px) and (max-width: 1896px) {
        min-height: 100vh;
        background-size: contain;
    }
    @media (min-width: 1900px) and (max-width: 3060px){
        background-size: contain;
    }
    @media (min-width: 905px )and (max-width:1200px){
        background-position: 400px;
        background-position-y:0;
        background-size:contain;
    }
    @media (min-width: 598px )and (max-width:840px){
        background-position: 200px;
        background-position-y: 0;
    }
    @media screen and (max-width:859px){
        background-size: contain;
        justify-content:left;
        padding:40px;
    }
    @media (min-width:841px )and (max-width:903px){
        background-position: 300px;
        justify-content:left;
        height:auto;
    }
    @media screen and (max-width:460px){
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

    @media (min-width: 1890px) and (max-width: 2514px){
        width:45%;
        margin-left:140px;

        h1{
            font-size:90px;
        }
    }
    @media (min-width: 2515px) and (max-width: 3060px){
        width:40%;
        margin-left:400px;

        h1{
            font-size:90px;
        }
    }
    @media screen and (max-width:596px){
        margin-top:390px;
        align-items: center;
        padding: 0;
        width:100%;

        h1{
            font-size:39px;
        }
    }
    @media (min-width:860px) and (max-width: 906px){
        padding:100px;
        width:60%;
    }

    @media (min-width:576px) and (max-width: 859px){
        padding:30px;

        h1{
            font-size:39px;
        }
    }

    @media (min-width: 907px ) and (max-width:1000px){
        width: 65%;
        justify-content: center;
        padding:100px;

        h1{
            font-size:40px;
        }
    }

    @media (min-width:1001px) and (max-width:1200px){
        width:60%;
        padding:120px;
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

    @media screen and (max-width: 768px){
        width:100%
    }

`

export const Spacer = styled.div`
    height:85px;

    @media screen and (max-width:616px){
        height:51%;
    }

    @media (min-width: 597px )and (max-width:700px){
        display:none;
    }
`;