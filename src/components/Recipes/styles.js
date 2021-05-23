import styled from 'styled-components';

export const Container = styled.div`
  height:auto;
  width:100%;
  min-height:100vh;
  background-color: var(--background-color);
  justify-content:center;
  position: relative;

`;

export const ContainerText = styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position: relative;

`

export const InfoText = styled.div`
  margin-top:50px;
  flex-direction:column;
  width:34%;
  text-align:center;
  display:flex;

  h1{
    color:var(--color-titles);
    font-size:33px;
  }

  p{
    margin-top:15px;
    font-size:16px;
    color:var(--color-p)
  }

  @media screen and (max-width:900px){
        width:90%;
    }
`

export const ContainerCards = styled.div`
  width:100%;
  position: relative;
  justify-content:center;
  display:flex;
`

