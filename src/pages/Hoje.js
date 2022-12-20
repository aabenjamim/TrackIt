import Topo from "../components/Topo";
import Menu from "../components/Menu/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import dayjs from "dayjs";
import styled from "styled-components";

export default function Hoje(){

    const {token} = useContext(AuthContext)

    const semana = [
        {dia: 'Segunda', id: '1'},
        {dia: 'Terça', id: '2'},
        {dia: 'Quarta', id:'3'},
        {dia: 'Quinta', id: '4'},
        {dia: 'Sexta', id: '5'},
        {dia: 'Sábado', id: '6'},
        {dia: 'Domingo', id: '7'}
    ]

    const [listaHoje, setListaHoje] = useState([])
    
    const dia = semana.findIndex(i => i.id == (dayjs().day()))
    const nomeDia = semana[dia].dia
    
    const data = dayjs().date()
    const mes = dayjs().month()

    useEffect(()=>{
        const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config)

        promise.then((res)=>{
            console.log(res)
            setListaHoje(res.data)
            console.log(dayjs().month())
        })
    },[])

    return(
        <>
            <Topo/>
                <Dia>
                    <h1>{nomeDia}, {data}/{mes}</h1>
                    <p>Ainda não há atiividades concluídas</p>
                </Dia>
                {listaHoje.map((lh)=>
                    <Habito>
                        <Texto>
                            <h1>{lh.name}</h1>
                            <div>
                                <p>Sequência atual: {lh.currentSequence} dias</p>
                                <p>Seu recorde: {lh.highestSequence} dias</p>
                            </div>
                        </Texto>
                        <Check>
                            <ion-icon name="checkbox"></ion-icon>
                        </Check>
                    </Habito>
                )
                }
            <Menu/>
        </>
    )
}

const Dia = styled.div`
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
`

const Habito = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    color: #666666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    margin-bottom: 8px;
    h1{
        font-family: 'Lexend Deca';
        font-weight: 400;
        color: #666666;
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 7px;
    }
    p{
        margin-top: 0;
        margin-bottom: 0;
        font-size: 13px;
        line-height: 16px;
    }
    div{
        margin-bottom: 8px;
    }
`

const Texto = styled.div`
    display: flex;
    flex-direction: column;
`

const Check = styled.div`
    ion-icon{
        width: 80px;
        height: 80px;        
        color: #8FC549;
        margin: 0;
    }
`