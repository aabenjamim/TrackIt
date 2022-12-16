import Login from "./pages/Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Login/Cadastro";

import { AutenticaContext } from "./contexts/autenticacao";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  )
}
