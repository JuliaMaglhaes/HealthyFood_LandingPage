import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    position:relative;
    /* margin-left:250px; */
    display: flex;
    overflow: hidden;
    /* justify-content:center; */

    button{
        position: absolute;
        right:0;
        border:none;
        outline:none;
        background: var(--color-white);

        &:disabled{
            background-color: rgba(255, 255, 255, 0.425);
            visibility: hidden;
        }

        &:focus{
            background-color: white;
        }

        &:hover{
            background-color: var(--color-verde-hover)
        }

        &:nth-child(1){
            left:0;
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
        width:69%;
        display:flex;
        flex:1;
        align-items: center;

        img{
            width:55px;
            height:50px;
            border-radius: 50%;
            color:var(--color-p);
            margin-right: 10px;
        }
    }
`