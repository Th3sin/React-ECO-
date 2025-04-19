import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Ecomapa from './components/Mapa/Ecomapa';
import Register from './pages/Registros/Registro';
import EmpresaDestinadoraCadastro from './pages/Registros/Destinadora/EmpresaDestinadoraCadastro';
import CadastroEmpresa from './pages/Registros/Geradora/CadastroEmpresa';
import Informativo from "./pages/Descarte/Informativo";
import Endereco from "./components/Formularios/Endereco";
import Solicitacao from "./pages/Coleta/Form/Solicitacao";
// import Infectante from "./pages/Descarte/Infectante";
// import Quimico from "./pages/Descarte/Quimico";
// import Radioativo from "./pages/Descarte/Radioativo";
// import Cortante from "./pages/Descarte/Cortante";
// import Comuns from "./pages/Descarte/Comuns";


function AppHeader() {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const noHeaderRoutes = [
            "/Login", 
            "/Registro", 
            "/CadastroEmpresaColetora", 
            "/CadastroEmpresa", 
            "/Background"
        ];

        setShowHeader(!noHeaderRoutes.includes(location.pathname)); 
    }, [location.pathname]);

    return showHeader ? <Header /> : null;
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Ecomapa" element={<Ecomapa />} />
                <Route path="/informativo" element={<Informativo />} />

                {/* Páginas sem Header */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Register />} />
                <Route path="/CadastroEmpresaColetora" element={<EmpresaDestinadoraCadastro />} />
                <Route path="/Cadastroempresa" element={<CadastroEmpresa />} />
                <Route path="/Endereco" element={<Endereco />} />
                <Route path="/Solicitacao" element={<Solicitacao />} />
                {/* <Route path="/Quimico" element={<Quimico/>} />
                <Route path="/Infectante" element={<Infectante/>} />
                <Route path="/Radioativo" element={<Radioativo/>} />
                <Route path="/Comuns" element={<Comuns />} />
                <Route path="/Cortante" element={<Cortante />} /> */}
                
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;
