import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){

    const [token, setToken] = useState('')
    const [image, setImage] = useState('')
    const [novoHabito, setNovoHabito] = useState(false)
    const [listaDias, setListaDias] = useState([])
    const [mostra, setMostra] = useState('')
    const [listagem, setListagem] = useState([])

    return(
        <AuthContext.Provider value={{image, setImage, token, setToken, 
        novoHabito, setNovoHabito, listaDias, setListaDias, mostra, setMostra,
        listagem, setListagem}}>
            {children}
        </AuthContext.Provider>
    )
}