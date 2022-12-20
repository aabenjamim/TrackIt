import { Link } from 'react-router-dom'
import {Tudo, Barra, Circulo, EstiloLink} from './styled'

export default function Menu(){
    return(
        <Tudo>
            <Barra>
                <p>Hábitos</p>
                <p>Histórico</p>
                <Circulo>
                    <EstiloLink to="/hoje">
                        <p>Hoje</p>
                    </EstiloLink>
                </Circulo>
            </Barra>
        </Tudo>
    )
}

