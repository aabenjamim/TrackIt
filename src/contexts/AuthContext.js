import { createContext, useState } from "react";
import Texto from "../components/Texto";
import ListaHabitos from "../components/ListaHabitos/ListaHabitos";

export const AuthContext = createContext()

export default function AuthProvider({children}){

    const [token, setToken] = useState('')
    const [image, setImage] = useState('')
    const [novoHabito, setNovoHabito] = useState(false)
    const [listaDias, setListaDias] = useState([])
    const [mostra, setMostra] = useState('')
    const [listagem, setListagem] = useState([])

    const [listaHoje, setListaHoje] = useState([])

    const [praticados, setPraticados] = useState([])

    function listar(h){
        
        setListagem(h)

        if(h.data.length === 0){
            setMostra(<Texto/>)
        }

        if(h.data.length > 0){
            setMostra(<ListaHabitos/>)
        }
    }

    return(
        <AuthContext.Provider value={{image, setImage, token, setToken, 
        novoHabito, setNovoHabito, listaDias, setListaDias, mostra, setMostra,
        listagem, setListagem, listar, listaHoje, setListaHoje, 
        praticados, setPraticados}}>
            {children}
        </AuthContext.Provider>
    )
}