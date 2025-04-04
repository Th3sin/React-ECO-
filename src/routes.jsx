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
import Background from "./pages/Teste/Background";

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
                <Route path="/Background" element={<Background />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default RoutesApp;
