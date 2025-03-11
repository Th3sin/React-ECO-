import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Produto from './pages/Produto/Produto';
import Mapa from './pages/Mapa/Mapa';
import Register from './pages/Register/Registro';
import CadastroCliente from './pages/Register/CadastroCliente';
import CadastroEmpresaColetora from './pages/Register/CadastroEmpresaColetora';
import CadastroEmpresa from './pages/Register/CadastroEmpresa';

function AppHeader() {
    const location = useLocation();

    const noHeaderRoutes = ["/CadastroCliente", "/CadastroEmpresaColetora", "/CadastroEmpresa"];

    if (noHeaderRoutes.includes(location.pathname)) {
        return null; 
    }

    return <Header />;
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>
                {/* COM Header */}
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Produto" element={<Produto />} />
                <Route path="/Mapa" element={<Mapa />} />
                <Route path="/Registro" element={<Register />} />

                {/* SEM Header */}
                <Route path="/CadastroCliente" element={<CadastroCliente />} />
                <Route path="/CadastroEmpresaColetora" element={<CadastroEmpresaColetora />} />
                <Route path="/CadastroEmpresa" element={<CadastroEmpresa />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;