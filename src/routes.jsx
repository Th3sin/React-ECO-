import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Produto from './pages/Produto/Produto';
import DescarteMaterial from "./pages/Descarte/DescarteMaterial";
import Register from './pages/Register/Registro';
import CadastroCliente from './pages/Register/CadastroCliente';
import CadastroEmpresaColetora from './pages/Register/CadastroEmpresaColetora';
import CadastroEmpresa from './pages/Register/CadastroEmpresa';

function AppHeader() {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const noHeaderRoutes = ["/CadastroCliente", "/CadastroEmpresaColetora", "/CadastroEmpresa"];
        setShowHeader(!noHeaderRoutes.includes(location.pathname));
    }, [location]);

    return showHeader ? <Header /> : null;
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <AppHeader /> {/* Header fixo será mostrado ou ocultado conforme a rota */}
            <div className="main-content"> {/* Aplica o espaço necessário para o conteúdo */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Produto" element={<Produto />} />
                    <Route path="/Registro" element={<Register />} />
                    <Route path="/DescarteMaterial" element={<DescarteMaterial />} />
                    {/* Páginassem Header */}
                    <Route path="/CadastroCliente" element={<CadastroCliente />} />
                    <Route path="/CadastroEmpresaColetora" element={<CadastroEmpresaColetora />} />
                    <Route path="/CadastroEmpresa" element={<CadastroEmpresa />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default RoutesApp;
