import styled from "styled-components"

export default function Texto(){
    return(
        <Paragrafo>
            <p>Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!</p>
        </Paragrafo>
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