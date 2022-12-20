import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import styled from "styled-components"


export default function ListaHabitos(){

    const {listaDias, listagem} = useContext(AuthContext)

    const dias = [
    {dia: 'D', id: '7'}, 
    {dia: 'S', id: '1'}, 
    {dia: 'T', id: '2'}, 
    {dia: 'Q', id: '3'}, 
    {dia: 'Q', id: '4'}, 
    {dia: 'S', id: '5'}, 
    {dia: 'S', id: '6'}
    ]

        
    return(
        <>
        {listagem.data.map((habito) =>
            <Cartao>
            <Texto>{habito.name}</Texto>
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

const Cartao = styled.div`
    box-sizing: border-box;
    width: 100%;
    min-height: 91px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 13px;
    margin-top: 10px;
`
const Texto = styled.p`
    margin-top: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #666666;
`
const Posicao = styled.div`
    display: flex;
    justify-content: start;
    gap: 8px;
`

const Botao = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
`
