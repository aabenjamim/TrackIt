import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import {Cartao, Linha, Texto, Posicao, Botao} from './styled'
import axios from "axios"

export default function ListaHabitos(){

    const {listar, listagem, token} = useContext(AuthContext)

    console.log('listagem', listagem)

    const dias = [
    {dia: 'D', id: '7'}, 
    {dia: 'S', id: '1'}, 
    {dia: 'T', id: '2'}, 
    {dia: 'Q', id: '3'}, 
    {dia: 'Q', id: '4'}, 
    {dia: 'S', id: '5'}, 
    {dia: 'S', id: '6'}
    ]

    const botoesMarcados = 
        listagem.data.map((cadaHabito) =>
        cadaHabito.days
        )
    

    console.log('botoes marcados', botoesMarcados)

    function excluido(){

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(URL, config)

        promise.then((h)=>{
            listar(h)
            alert('excluido com sucesso!')
        })
        promise.catch((erro)=>(console.log(erro.response.data)))


    }


    function excluir(id){
        const confirmacao = window.confirm('Deseja mesmo excluir este hábito?')
        
        if(confirmacao==true){
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
            const requisicao = axios.delete(url, config)
    
            requisicao.then(excluido)
        } else{
            return
        }
    }
        
    return(
        <>
        {listagem.data.map((habito) =>
            <Cartao>
                <Linha>
                    <Texto>{habito.name}</Texto>
                    <ion-icon name="trash-outline" onClick={()=>excluir(habito.id)}></ion-icon>
                </Linha>
            <div>
                <Posicao>
                    {dias.map((d)=>
                    <Botao>
                        {d.dia}
                    </Botao>)}
                </Posicao>
            </div>
        </Cartao>
        )}
        </>
    )
}