import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: var(--background-color);
    width:100%;
    height:110%;
    min-height:690px;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;

    @media (min-width:1500px) and (max-width:2569px){
        min-height:500px;
        height:auto;
    }
`;

export const TextArea = styled.div`
    position: relative;
    width:37%;
    height:120px;
    margin-top:50px;
    align-items: center;
    text-align:center;

    h1{
        color: var(--color-titles);
        font-family: Montserrat;
    }

    p{
        margin-top:15px;
        color: var(--color-p)
    }

    @media screen and (max-width:1200px){
        width:90%;

    }
`

export const SliderArea = styled.div`
    position: relative;
    width:100%;
    height:auto;
    justify-content:center;
    overflow: hidden;
    display:flex;
    /* padding: 0 0 150px 0; */
`
