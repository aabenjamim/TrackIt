import styled from "styled-components";

export const Cartao = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 91px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 13px;
    margin-top: 10px;
    position: relative;
`
export const Texto = styled.p`
    margin-top: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666666;
`
export const Posicao = styled.div`
    display: flex;
    justify-content: start;
    gap: 8px;
`

export const Botao = styled.div`
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
    color: ${props => props.cor};
`
export const Linha = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon{
        width: 18px;
        height: 21px;
        position: absolute;
        right: 10px;
        top: 11px;
    }
`