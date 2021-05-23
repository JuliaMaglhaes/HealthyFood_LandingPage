import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap: wrap;
    margin-top:20px;
    justify-content:center;
`;

export const Box = styled.div`
    position: relative;
    background-color: var(--color-white);
    width: 500px;
    height:200px;
    display:flex;
    border-radius: 7px;
    box-shadow: var(--shadow);
    margin:20px;
`
export const BoxImage = styled.div`
    min-width:270px;
    height:100%;
    background-size: cover;
    background-position: 16%;
    border-radius: 5px 0 0 5px;

    @media screen and (max-width:375px){
        min-width:200px;
    }
`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    padding:20px;

    h2{
        color: var(--color-titles);
        font-size:25px;
        font-weight:700;
    }

    button{
        background-color: var(--color-font-title-logo);
        width:110px;
        height:40px;
        border:none;
        border-radius: 5px;
        color:var(--color-white);
        cursor:pointer;
        
        :hover{
            background-color: var(--color-verde-hover);
        }
    }

    @media screen and (max-width:616px){
        h2{
            font-size:23px;
        }
    }
`