import Topo from "../../components/Topo";
import Menu from "../../components/Menu/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs";
import {Dia, Habito, Texto, Check} from './styled'

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

