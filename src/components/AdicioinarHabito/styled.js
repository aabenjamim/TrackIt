import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px;
`
export const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    padding-inline: 11px;
    color: grey;
    outline: none;
    ::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-weight: 400;
        font-size: 20px;
    }
`
export const Botao = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: ${props => props.fundo};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.letra};
    gap: 8px;
`
export const Gap = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
`
export const Baixo = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 23px;
`
export const Cancelar = styled.button`
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #52B6FF;
    border: none;
    background-color: white;
`
export const Salvar = styled.button`
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
`