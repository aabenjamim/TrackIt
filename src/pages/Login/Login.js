import logo from '../../assets/Group 8.svg'
import {Container, Form} from './styled'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";


export default function Login(){

    const [desabilitar, setDesabilitar] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [carregando, setCarregando] = useState(false)
    const [botao, setBotao] = useState('Entrar')


    const load = <ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="white" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
    />
    
    useEffect(()=>{if(carregando===true){
        setBotao(load)
    }}, [])

    const {setToken, setImage} = useContext(AuthContext)

    const navigate = useNavigate()

    function logar(event){
        event.preventDefault();

        setDesabilitar(true)
        setCarregando(true)

        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const requisicao = axios.post(url ,
            {
                email: email,
                password: senha
            }
        );

        requisicao.then((res)=>{
            setToken(res.data.token)
            setImage(res.data.image)
            navigate('/hoje')
        })

        requisicao.catch((err)=>{
            alert(err.response.data.message)
            setDesabilitar(false)
            setCarregando(false)
            setBotao('Entrar')
        })
    }
    
    return(
        <Container>
            <img src={logo} />
            <Form onSubmit={logar}>
                <input type='email' placeholder="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} required
                disabled={desabilitar && 'disabled'} data-test="email-input"/>
                <input type='password' value={senha} placeholder="senha" 
                onChange={(e)=>setSenha(e.target.value)} required
                disabled={desabilitar && 'disabled'} data-test="password-input"/>
                <button disabled={desabilitar && 'disabled'}  data-test="login-btn">
                    {botao}
                </button>
            </Form>
            <Link to={'/cadastro'} data-test="signup-link">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>

    )
}