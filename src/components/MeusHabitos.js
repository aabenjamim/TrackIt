import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

export default function MeusHabitos(){

    const {setNovoHabito} = useContext(AuthContext)

    function adicionar(){
        setNovoHabito(true)
    }

    return(
        <Container>
            <p>Meus Hábitos</p>
            <button onClick={adicionar}>+</button>
        </Container>
    )
}

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
    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        color: white;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
    }
`