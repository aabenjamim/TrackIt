import {Tudo, Barra, Cont, EstiloLink} from './styled'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Menu(){

    const {praticados, listaHoje} = useContext(AuthContext)

    const porcentagem = ((praticados.length/listaHoje.length).toFixed(2))*100

    return(
        <Tudo data-test="menu">
            <Barra>
                <EstiloLink to="/habitos" data-test="habit-link">
                    <p>Hábitos</p>
                </EstiloLink>
                <EstiloLink to="/historico" data-test="history-link">
                    <p>Histórico</p>
                </EstiloLink>
                <Cont>
                    <EstiloLink to="/hoje" data-test="today-link">
                        <CircularProgressbar
                            value={porcentagem}
                            text={'Hoje'}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            })}
                        />
                    </EstiloLink>
                </Cont>
            </Barra>
        </Tudo>
    )
}

