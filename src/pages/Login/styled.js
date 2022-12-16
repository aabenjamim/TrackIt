import styled from "styled-components";


export const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 6px;
    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        padding-inline: 11px;
        color: grey;
        outline: none;
    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-weight: 400;
        font-size: 20px;
    }
    button{
        width: 326px;
        height: 45px;
        font-family: 'Lexend Deca', sans-serif;
        background-color: #52B6FF;
        border-radius: 5px;
        border: 1px solid #52B6FF;
        font-size: 21px;
        font-weight: 400;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;

    p{
        font-family: 'Lexend Deca';
        text-decoration: underline;
        font-size: 14px;
        font-weight: 400;
        color: #52B6FF; 
    }
`