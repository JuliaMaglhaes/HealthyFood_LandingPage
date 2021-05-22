import Background from '../../assets/img/bloco_final_image.svg'

import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    position: relative;
    width:100%;
    height:100vh;
    flex-direction: column;
    background-color: var(--color-white);
    background: no-repeat right  100% url(${Background}) ;
    background-position-y: 0px;
    justify-content:center;
    padding: var(--padding-default);

    .areaText{
        width:40%;
        margin-bottom:25px;

        h1{
            font-family: Montserrat;
            font-size:36px;
            color: var(--color-titles-secundary);
        }
    }

    .inputArea{
        width:45%;
        display: flex;

        input{
            display: block;
            width: 100%;
            height: 40px;
            font-size: 15px;
            color: var(--color-p);
            padding: 25px 10px 25px;
            background-color: var(--color-white);
            background-clip: padding-box;
            border: 1px solid var(--color-titles);
            border-radius: 5px;
        }

        button{
            background-color: var(--color-font-title-logo);
            border: none;
            border-radius: 5px;
            margin-left: 25px;
            width: 120px;
            cursor: pointer;
            transition: 0.3s;
            color: var(--color-white);

            :hover{
                background-color: var(--color-verde-hover)
            }
        }
    }
    @media screen and (max-width:616px){
        background-position: 5% 0;
        padding:15px;

        .areaText{
            width:60%;
        }

        .inputArea{
            width:80%;
        }
    }
  
`;
