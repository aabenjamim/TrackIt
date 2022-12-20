import Menu from "../components/Menu/Menu";
import Topo from "../components/Topo";
import styled from "styled-components";
import Breve from "../components/Breve";

export default function Historico(){
    return(
        <>
            <Topo  data-test="header"/>
            <Breve/>
            <Menu data-test="menu"/>
        </>
    )
}

const Tudo = styled.div`
    width: 100%;
    height: 77px;
    margin-top: 90px;
    h1{
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    p{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`