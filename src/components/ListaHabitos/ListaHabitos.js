import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import {Cartao, Linha, Texto, Posicao, Botao} from './styled'
import axios from "axios"

export default function ListaHabitos(){

    const {listaDias, listagem, token} = useContext(AuthContext)

    const dias = [
    {dia: 'D', id: '7'}, 
    {dia: 'S', id: '1'}, 
    {dia: 'T', id: '2'}, 
    {dia: 'Q', id: '3'}, 
    {dia: 'Q', id: '4'}, 
    {dia: 'S', id: '5'}, 
    {dia: 'S', id: '6'}
    ]

    function excluir(id){
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        const requisicao = axios.delete(url, config)

        requisicao.then(alert('excluido com sucesso!'))
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
                    <Botao type='button'
                    fundo={listaDias.includes(d.id)? '#CFCFCF' : '#FFFFFF'}
                    letra={listaDias.includes(d.id)? '#FFFFFF' : '#DBDBDB'}>
                        {d.dia}
                    </Botao>)}
                </Posicao>
            </div>
        </Cartao>
        )}
        </>
    )
}