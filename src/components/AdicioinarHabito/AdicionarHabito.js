import { useContext, useState, useNavigate } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import axios from 'axios';
import { Container, Input, Gap, Baixo, Cancelar, Salvar, Botao } from "./styled"
import ListaHabitos from "../ListaHabitos/ListaHabitos";

export default function AdicionarHabito(){

    const dias = [
    {dia: 'D', id: '7'}, 
    {dia: 'S', id: '1'}, 
    {dia: 'T', id: '2'}, 
    {dia: 'Q', id: '3'}, 
    {dia: 'Q', id: '4'}, 
    {dia: 'S', id: '5'}, 
    {dia: 'S', id: '6'}]

    const [desabilitar, setDesabilitar] = useState(false)
    const [habito, setHabito] = useState('')

    const {setNovoHabito, listaDias, setListaDias, token} = useContext(AuthContext)

    function marcar(d){
        setListaDias([...listaDias, d.id])
    }

    function cancela(){
        setListaDias([])
        setNovoHabito(false)
    }

    function deuCerto(res){
        setListaDias([])
        setHabito('')
        setNovoHabito(false)
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
        requisicao.catch((e)=>console.log(e.response.data.message))
    }

    return(
        <form onSubmit={criar}>
        <Container>
            <div>
                <Input placeholder="nome do hábito" type='text' value={habito} 
                onChange={(e)=>setHabito(e.target.value)} required/>
                <Gap>
                    {dias.map((d)=>
                    <Botao type='button'
                    fundo={listaDias.includes(d.id)? '#CFCFCF' : '#FFFFFF'}
                    letra={listaDias.includes(d.id)? '#FFFFFF' : '#DBDBDB'}
                    onClick={()=> marcar(d)}>
                        {d.dia}
                    </Botao>)}
                </Gap>
            </div>
            <Baixo>
                <Cancelar type='button'
                onClick={cancela}>Cancelar</Cancelar>
                <Salvar
                type='submit' disabled={desabilitar && 'disabled'}>
                    Salvar
                </Salvar>
            </Baixo>
        </Container>
        </form>
    )
}

