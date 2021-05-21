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
    }

    p{
        margin-top:15px;
        color: var(--color-p)
    }
`

export const SliderArea = styled.div`
    position: relative;
    width:100%;
    height:70vh;
    justify-content:center;
    overflow: hidden;
`
