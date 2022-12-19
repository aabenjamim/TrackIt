import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}){

    const [token, setToken] = useState('')
    const [image, setImage] = useState('')
    const [novoHabito, setNovoHabito] = useState(false)
    const [listaDias, setListaDias] = useState([])

    return(
        <AuthContext.Provider value={{image, setImage, token, setToken, 
        novoHabito, setNovoHabito, listaDias, setListaDias}}>
            {children}
        </AuthContext.Provider>
    )
}