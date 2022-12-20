import Topo from "../components/Topo";
import Menu from "../components/Menu/Menu";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export default function Hoje(){

    const {token} = useContext(AuthContext)

    useEffect(()=>{
        const url='https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config)

        promise.then((res)=>console.log(res))
    },[])

    return(
        <>
            <Topo/>
            <Menu/>
        </>
    )
}