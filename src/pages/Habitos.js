import Menu from "../components/Menu/Menu"
import Topo from "../components/Topo"
import Texto from "../components/Texto"
import MeusHabitos from "../components/MeusHabitos"
import AdicionarHabito from "../components/AdicioinarHabito/AdicionarHabito"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import axios from "axios"
import ListaHabitos from "../components/ListaHabitos/ListaHabitos"

export default function Habitos(){

    const {novoHabito, token, mostra, setMostra, setListagem} = useContext(AuthContext)

    function listar(h){
        
        setListagem(h)

        if(h.data.length === 0){
            setMostra(<Texto/>)
        }

        if(h.data.length > 0){
            setMostra(<ListaHabitos/>)
        }

        console.log('habitos', h.data)
    }

    useEffect(()=>{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)

        promise.then((h)=>listar(h))
        promise.catch((erro)=>(console.log(erro.response.data)))
    }, [])

    return(
        <div>
            <Topo/>
            <MeusHabitos/>
            {novoHabito && <AdicionarHabito/>}
            {mostra}
            <Menu/>
        </div>
    )
}