import { Link } from 'react-router-dom'
import {Tudo, Barra, Circulo, EstiloLink} from './styled'

export default function Menu(){
    return(
        <Tudo>
            <Barra>
                <EstiloLink to="/habitos">
                    <p>Hábitos</p>
                </EstiloLink>
                <EstiloLink to="/historico">
                    <p>Histórico</p>
                </EstiloLink>
                <Circulo>
                    <EstiloLink to="/hoje">
                        <p>Hoje</p>
                    </EstiloLink>
                </Circulo>
            </Barra>
        </Tudo>
    )
}

