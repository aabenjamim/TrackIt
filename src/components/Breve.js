import styled from "styled-components"

export default function Breve(){
    return(
        <>
        <Container>
            <p>Histórico</p>
        </Container>
        <Paragrafo>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Paragrafo>
        </>
    )
}

const Paragrafo = styled.div`
    width: 100%;
    height: 114px;
    padding: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`
const Container = styled.div`
    width: 100%;
    height: 77px;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    padding: 17px;
    align-items: center;
    p{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
`