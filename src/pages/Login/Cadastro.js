import logo from '../../assets/Group 8.svg'
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from './styled';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from "react-loader-spinner";



export default function Cadastro(){
   
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [foto, setFoto] = useState('')
    const [botao, setBotao] = useState('Cadastrar')
    const [desabilitar, setDesabilitar] = useState(false)
    
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate()

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
    
    if(carregando===true){
        setBotao(load)
    }

    function erro(e){
        setDesabilitar(false)
        alert(e.response.data.message)
    }

    function cadastrar(event){

        event.preventDefault();

        setDesabilitar(true)
        setCarregando(true)

        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const requisicao = axios.post(url, {
            email: email,
            name: nome,
            image: foto,
            password: senha
        })

        setCarregando(false)
        
        requisicao.then(() => navigate("/"))
        requisicao.catch((e)=>erro(e))
    }

    return(
        <Container>
        <img src={logo} />
        <Form onSubmit={cadastrar}>
            <input type='email' placeholder="email" value={email} 
            onChange={(e)=>setEmail(e.target.value)} required
            disabled={desabilitar && 'disabled'} data-test="email-input"/>
            <input type='password' value={senha} placeholder="senha" 
            onChange={(e)=>setSenha(e.target.value)} required
            disabled={desabilitar && 'disabled'} data-test="password-input"/>
            <input type='text' placeholder="nome" value={nome} 
            onChange={(e)=>setNome(e.target.value)} required
            disabled={desabilitar && 'disabled'} data-test="user-name-input"/>
            <input type='url' value={foto} placeholder="foto" 
            onChange={(e)=>setFoto(e.target.value)} required
            disabled={desabilitar && 'disabled'} data-test="user-image-input"/>

            <button type='submit' disabled={desabilitar && 'disabled'} data-test="signup-btn" >
                {botao}
            </button>
            
        </Form>
        <Link to={'/'} data-test="login-link">
            <p>Já tem uma conta? Faça login!</p>
        </Link>
    </Container>
    )

}