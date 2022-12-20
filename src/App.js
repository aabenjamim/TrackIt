import Login from "./pages/Login/Login"
import Habitos from "./pages/Habitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Login/Cadastro";
import Hoje from './pages/Hoje/Hoje'
import AuthProvider from "./contexts/AuthContext";
import GlobalStyle from './style/GlobalStyle'
import Historico from "./pages/Historico";

export default function App() {

  return(
    <AuthProvider>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/habitos" element={<Habitos/>}/>
            <Route path="/hoje" element={<Hoje/>}/>
            <Route path="/historico" element={<Historico/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
