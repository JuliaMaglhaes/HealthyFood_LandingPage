import styled from 'styled-components';

export const Container = styled.div`
    height:80px;
    width:100%;
    background-color: var(--color-white);
    align-items: center;
    display:flex;
    justify-content: space-between;
    padding: var(--padding-default);
    bottom:0;
    position: relative;
    flex-wrap: wrap-reverse;

    strong{
        color: var(--color-titles);
        font-weight:500;
    }

    .informations{
        display:flex;
        position: relative;
        gap: 15px;

        li{
            color:var(--color-p);
            cursor:pointer;

            :hover{
                color: var(--color-p-hover)
            }
        }
    }

    @media screen and (max-width:616px){
        justify-content:center;
        text-align:center;
        padding:20px;
    }
  
`;
