import styled from "styled-components";

export const Dia = styled.div`
    box-sizing: border-box;
    margin-top: 70px;
    height: 107px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 17px;
    h1{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 0;
    }
    p{
        margin-top: 0;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;

    }
    h2{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
    }
`

export const Habito = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    margin-bottom: 8px;

    div{
        margin-bottom: 8px;
    }
`

export const Texto = styled.div`
    display: flex;
    flex-direction: column;
`

export const Check = styled.div`
    ion-icon{
        width: 80px;
        height: 80px;        
        color: ${props => props.cor};
        margin: 0;
    }
`

export const H1 = styled.h1`
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #666666;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
`

export const P = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 13px;
    line-height: 16px;
    color: ${props => props.cor};
`