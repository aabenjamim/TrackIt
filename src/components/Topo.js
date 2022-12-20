import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../contexts/AuthContext"

export default function Topo(){

    const {image} = useContext(AuthContext)

    return(
        <Barra>
            <p>TrackIt</p>
            <img src={image} alt="foto-perfil"/>
        </Barra>
    )
}

const Barra = styled.div`
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`