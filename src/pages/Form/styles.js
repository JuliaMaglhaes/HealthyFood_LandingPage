import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    padding: var(--padding-default);

    .first-Container{
        background-color: red;
        width:40%;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .second-Container{
        background: green;
        height:100vh;
        width:60%;
    }
`;
