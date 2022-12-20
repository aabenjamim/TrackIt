import Topo from "../../components/Topo";
import Menu from "../../components/Menu/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs";
import {Dia, Habito, Texto, Check, H1, P} from './styled'

export default function Hoje(){

    const {token, listaHoje, setListaHoje, praticados, setPraticados} = useContext(AuthContext)


    const semana = [
        {dia: 'Segunda', id: '1'},
        {dia: 'Terça', id: '2'},
        {dia: 'Quarta', id:'3'},
        {dia: 'Quinta', id: '4'},
        {dia: 'Sexta', id: '5'},
        {dia: 'Sábado', id: '6'},
        {dia: 'Domingo', id: '7'}
    ]
   
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
            setListaHoje(res.data)
            
        })
    },[])

    if(praticados.length===0){
        listaHoje.map((lh)=>
        (lh.done && setPraticados([...praticados, lh.id])))
    }


    function desmarcar(id){
        const novo = praticados.filter((p)=> p !== id)
        setPraticados(novo)
    }

    function concluir(id){

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        if(!praticados.includes(id)){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    
            const requisicao = axios.post(url,{}, config)
    
            requisicao.then(()=>{
                setPraticados([...praticados, id])
            })
            requisicao.catch((e)=>console.log(e.response.data.message)) 
        }

        if(praticados.includes(id)){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            
            const requisicao = axios.post(url, {}, config)

            requisicao.then((res)=>{
                desmarcar(id)
            }
            )
            requisicao.catch((err)=>console.log(err.response.data))
        }
    }

    const porcentagem = ((praticados.length/listaHoje.length).toFixed(2))*100

    return(
        <>
            <Topo  data-test="header"/>
                <Dia data-test="today today-counter">
                    <h1 data-test="today">{nomeDia}, {data}/{mes}</h1>
                    {praticados.length===0 ?
                    <P data-test="today-counter" >Ainda não há atiividades concluídas</P> :
                    <h2 data-test="today-counter" >
                        {porcentagem}% dos hábitos concluídos
                    </h2>}
                </Dia>
                {listaHoje.map((lh)=>
                    <Habito data-test="today-habit-container">
                        <Texto>
                            <H1 data-test="today-habit-name">{lh.name}</H1>
                            <div>
                                <P data-test="today-habit-sequence">
                                    Sequência atual: {lh.currentSequence && lh.currentSequence} dias
                                </P>
                                <P data-test="today-habit-record">
                                    Seu recorde: {lh.highestSequence && lh.highestSequence} dias
                                </P>
                            </div>
                        </Texto>
                        <Check onClick={()=>concluir(lh.id)} data-test="today-habit-check-btn"
                        cor={praticados.includes(lh.id)? '#8FC549' : '#E7E7E7'}>
                            <ion-icon name="checkbox"></ion-icon>
                        </Check>
                    </Habito>
                )
                }
            <Menu data-test="menu"/>
        </>
    )
}

