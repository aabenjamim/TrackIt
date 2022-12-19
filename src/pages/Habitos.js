import Menu from "../components/Menu"
import Topo from "../components/Topo"
import MeusHabitos from "../components/MeusHabitos"
import AdicionarHabito from "../components/AdicioinarHabito/AdicionarHabito"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Habitos(){

    const {image, setNovoHabito, novoHabito, listaDias, setListaDias} = useContext(AuthContext)

    return(
        <div>
            <Topo/>
            <MeusHabitos/>
            {novoHabito && <AdicionarHabito/>}
            <Menu/>
        </div>
    )
}