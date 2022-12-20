import { useContext, useState, useNavigate, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import axios from 'axios';
import { Container, Input, Gap, Baixo, Cancelar, Salvar, Botao } from "./styled"
import ListaHabitos from "../ListaHabitos/ListaHabitos";


export default function AdicionarHabito(){

    const dias = [
    {dia: 'D', id: 7}, 
    {dia: 'S', id: 1}, 
    {dia: 'T', id: 2}, 
    {dia: 'Q', id: 3}, 
    {dia: 'Q', id: 4}, 
    {dia: 'S', id: 5}, 
    {dia: 'S', id: 6}]

    const [desabilitar, setDesabilitar] = useState(false)
    const [habito, setHabito] = useState('')

    const {setNovoHabito, listaDias, setListaDias, token, listar} = useContext(AuthContext)

    function marcar(d){
        if(listaDias.includes(d.id)){
            const nova = listaDias.filter((dh)=>dh !== d.id)
            setListaDias(nova)
        } else{
            setListaDias([...listaDias, d.id])
        }
    }

    function cancela(){
        setNovoHabito(false)
    }

    function deuCerto(res){

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)

        promise.then((h)=>listar(h))
        promise.catch((erro)=>(console.log(erro.response.data)))
    
        setNovoHabito(false)
        setListaDias([])
        setHabito('')
    }

    function criar(event){

        event.preventDefault()

        setDesabilitar(true)

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const requisicao = axios.post(url, {
            name: habito,
            days: listaDias
        }, config)

        requisicao.then((res)=>deuCerto(res))
        requisicao.catch((e)=>{
            alert(e.response.data.message)
            setDesabilitar(false)
        })
    }

    return(
        <form onSubmit={criar} data-test="habit-create-container">
        <Container>
            <div>
                <Input placeholder="nome do hábito" type='text' value={habito} 
                onChange={(e)=>setHabito(e.target.value)} data-test="habit-name-input"
                disabled={desabilitar && 'disabled'} />
                <Gap>
                    {dias.map((d)=>
                    <Botao type='button' data-test="habit-day"
                    fundo={listaDias.includes(Number(d.id))? '#CFCFCF' : '#FFFFFF'}
                    letra={listaDias.includes(Number(d.id))? '#FFFFFF' : '#DBDBDB'}
                    onClick={()=> marcar(d)}
                    disabled={desabilitar && 'disabled'} >
                        {d.dia}
                    </Botao>)}
                </Gap>
            </div>
            <Baixo>
                <Cancelar type='button' data-test="habit-create-cancel-btn"
                onClick={cancela}
                disabled={desabilitar && 'disabled'}>
                    Cancelar
                </Cancelar>
                <Salvar data-test="habit-create-save-btn"
                type='submit' disabled={desabilitar && 'disabled'}>
                    Salvar
                </Salvar>
            </Baixo>
        </Container>
        </form>
    )
}

