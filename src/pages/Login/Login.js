import logo from '../../assets/Group 8.svg'
import {Container, Form} from './styled'
import { Link } from "react-router-dom";


export default function Login(){

    let email
    let senha
    
    return(
        <Container>
            <img src={logo} />
            <Form>
                <input type='email' placeholder="email" value={email} required/>
                <input type='password' value={senha} placeholder="senha" required/>
                <button>Entrar</button>
            </Form>
            <Link to={'/cadastro'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>

    )
}