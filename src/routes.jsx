import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Produto from './pages/Produto/Produto';
import Ecomapa from './components/Mapa/Ecomapa';
import Register from './pages/RegistrosUsuarios/Registro';
import CadastroCliente from './pages/RegistrosUsuarios/CadastroCliente';
import CadastroEmpresaColetora from './pages/RegistrosUsuarios/CadastroEmpresaColetora';
import CadastroEmpresa from './pages/RegistrosUsuarios/CadastroEmpresa';
import Informativo from "./pages/Descarte/Informativo";

function AppHeader() {
    const location = useLocation();
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const noHeaderRoutes = ["/Login", "/Registro", "/CadastroCliente", "/CadastroEmpresaColetora", "/CadastroEmpresa"];
        setShowHeader(!noHeaderRoutes.includes(location.pathname));
    }, [location]);

    return showHeader ? <Header /> : null;
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Produto" element={<Produto />} />
                <Route path="/Ecomapa" element={<Ecomapa />} />
                <Route path="/informativo" element={<Informativo />} />

                {/* Páginas sem Header */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Register />} />
                <Route path="/CadastroCliente" element={<CadastroCliente />} />
                <Route path="/CadastroEmpresaColetora" element={<CadastroEmpresaColetora />} />
                <Route path="/CadastroEmpresa" element={<CadastroEmpresa />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
