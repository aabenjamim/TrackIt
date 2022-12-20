import { Link } from 'react-router-dom'
import {Tudo, Barra, Circulo, EstiloLink} from './styled'

export default function Menu(){
    return(
        <Tudo>
            <Barra>
                <EstiloLink to="/habitos" data-test="habit-link">
                    <p>Hábitos</p>
                </EstiloLink>
                <EstiloLink to="/historico" data-test="history-link">
                    <p>Histórico</p>
                </EstiloLink>
                <Circulo>
                    <EstiloLink to="/hoje" data-test="today-link">
                        <p>Hoje</p>
                    </EstiloLink>
                </Circulo>
            </Barra>
        </Tudo>
    )
}

