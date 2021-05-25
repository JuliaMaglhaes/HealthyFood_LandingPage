import styled from 'styled-components';

export const Container = styled.div`
  height:auto;
  width:100%;
  min-height:100vh;
  background-color: var(--background-color);
  justify-content:center;
  position: relative;

  @media (min-width:1600px) and (max-width:2560px){
    min-height: 290px;
    height:auto;
  }

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

  @media (min-width: 1691px) and (max-width: 2514px){
    width:45%;

    h1{
      font-size:50px;
    }
    p{
      font-size:20px;
    }
  }

    @media (min-width: 2515px) and (max-width: 3060px){
        width:40%;

        h1{
            font-size:70px;
        }
        p{
          font-size:30px;
        }
    }
`

export const ContainerCards = styled.div`
  width:100%;
  position: relative;
  justify-content:center;
  display:flex;
`

