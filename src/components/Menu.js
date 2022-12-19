import styled from "styled-components"

export default function Menu(){
    return(
        <Tudo>
            <Barra>
                <p>Hábitos</p>
                <p>Histórico</p>
                <Circulo>
                    <p>Hoje</p>
                </Circulo>
            </Barra>
        </Tudo>
    )
}

const Barra = styled.div`
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

const Circulo = styled.div`
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
    }

    @media (max-width: 614px){
        position: absolute;
        bottom: 10px;
        left: 38%;
    }
`

const Tudo = styled.div`

`