import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    position:relative;
    padding: var(--padding-default);
    display: flex;
    overflow: hidden;
`

export const Card = styled.div`
    width:350px;
    height:450px;
    background-color: var(--color-white);
    border-radius: 5px;
    box-shadow: var(--shadow);
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:15px;
`;

export const CardImage = styled.div`
    width:100%;
    position: relative;
    height:220px;
    min-height:250px;
    background-position: center;
    background-size: cover;
    border-radius: 5px 5px 0 0;
    background-repeat: no-repeat;
  
`;
export const CardArea = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    padding: 25px;
    justify-content:center;
    /* text-align:center; */
    
    h1{
        color: var(--color-titles);
        font-size:25px;
        padding-bottom:20px;
        font-weight:700;
        max-height:100px;
        overflow: hidden;
        height:100px;
    }

    .area-person{
        display:flex;
        flex:1;
        align-items: center;

        img{
            width:55px;
            height:50px;
            border-radius: 50%;
            margin-right: 10px;
            color:var(--color-p)
        }
    }
  
`;