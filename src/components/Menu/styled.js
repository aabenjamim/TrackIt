import styled from "styled-components"
import { Link } from "react-router-dom"

export const Barra = styled.div`
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    padding: 36px;
    align-items: center;
    position: relative;
    position: fixed;
    bottom: 0;
    left: 0;

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
`

export const Circulo = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 46.5%;
    z-index: 1;

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        text-decoration: none;
    }

    @media (max-width: 614px){
        position: absolute;
        bottom: 10px;
        left: 38%;
    }
`

export const Tudo = styled.div`
`
export const EstiloLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`
export const Cont = styled.div`
    height: 91px;
    width: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 46.5%;
    z-index: 1;

    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        text-decoration: none;
    }

    @media (max-width: 614px){
        position: absolute;
        bottom: 10px;
        left: 38%;
    }

`