import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    display: flex;
    overflow: hidden;
    margin-top:14px;
    margin-left:140px;
    cursor: grab;

    @media (max-width: 1000px){
        margin-left:0;
    }

    button{
        margin-top:49px;
        position: absolute;
        right:20px;
        border:none;
        outline:none;
        background: var(--color-white);
        color: var(--color-font-title-logo);

        &:focus:enabled {
            color: var(--color-font-title-logo);
            background-color: white;
            box-shadow: 0 0 2px 0 #333;
        }

        &:hover:enabled {
            color: var(--color-font-title-logo);
            background-color: white;
            box-shadow: 0 0 2px 0 #333;
        }

        &:disabled{
            background-color: rgba(255, 255, 255, 0.425);
            visibility: hidden;
        }

        &:focus{
            background-color: white;
        }

        &:hover{
            background-color: var(--color-verde-hover);
            color: white;
        }

        &:nth-child(1){
            left:20px;
            z-index: 999;
        }
        
        .ec-arrow-right{
            right:0;
        }  
    }
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
    border-radius: 7px 7px 0 0;
    background-repeat: no-repeat;
`;

export const CardArea = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    padding: 25px;
    justify-content:center;
    align-items: center;
    /* text-align:center; */
    
    h1{
        color: var(--color-titles);
        font-size:23px;
        padding-bottom:20px;
        font-weight:700;
        max-height:100px;
        overflow: hidden;
        height:100px;
        font-family: Montserrat;
    }

    .area-person{
        width:89%;
        display:flex;
        flex:1;
        align-items: center;

        img{
            width:55px;
            height:50px;
            border-radius: 50%;
            color:var(--color-p);
            margin-right: 10px;
            margin-left:-15px;
        }
    }
`
