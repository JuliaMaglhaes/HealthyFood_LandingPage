import styled from 'styled-components';

export const Container = styled.div`
    height:auto;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:center;

    header{
        background-color: var(--color-titles-secundary);
        height:340px;
        display: flex;
        flex-direction: column;
        width:100%;

        p{

        }
    }

    form{
        padding-top:40px;
        width:60%;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        margin-top:-150px;
        background-color: var(--color-white);
        border-radius: 5px;


        button{
            background-color: var(--color-font-title-logo);
            width: 130px;
            height: 45px;
            border: none;
            border-radius: 5px;
            color: var(--color-white);
            box-shadow: var(--shadow);
            transition: all 0.2s ease 0s;
            cursor: pointer;
            margin-top:30px;

            :disabled {
                cursor: default;
                opacity: .5;
            }
        }

        img{
            width:10%;
        }

        h1{
            color: var(--color-titles);
        }

        .information{
            display:flex;
            width:100%;

            #city{
                padding:0px 1px 0 100px;;
            }
            #estado{
                padding:0px 100px 0 10px;;
            }
        }
    }
`;

export const ContainerArea = styled.div`
    width:100%;
    justify-content:center;
    display:flex;
`

export const ContainerForm = styled.div`
    width:100%;
    display:flex;
    background-color: var(--color-white);
    padding: 0 100px;
    flex-direction: column;
    margin-top: 30px;

    label{
        color:var(--color-p-hover);
        font-size:19px;
    }

    input{
        display: block;
        width: 100%;
        height: 40px;
        font-size: 15px;
        color: var(--color-p);
        padding: 25px 10px 25px;
        background-color: var(--background-color);
        background-clip: padding-box;
        border: 1px solid var(--color-titles);
        border-radius: 5px;
    }

    select{
        width:100%;
        height:52px;
        font-size:15px;
        display:block;
        border-radius: 5px;
        padding: 2px 1px 2px;
        color: var(--color-p);
        background-color: var(--background-color);
        background-clip: padding-box;
        border: 1px solid var(--color-titles);
    }
    

`

