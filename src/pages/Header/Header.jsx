import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../img/ecoplus05.png';
import UserPic from '../../img/profile-pic-empresa.png';

function Header() {

const [showUserMenu, setShowUserMenu] = useState(false);

const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
};

    return (
        <header> 
            <nav>
                <div className='user-profile-picture'>
                    
                        <img src={UserPic} 
                        alt='Foto de perfil do usuário' 
                        title='Clique para acessar as funcionalidades do seu perfil' 
                        onClick={toggleUserMenu}/>
                </div>

                {showUserMenu && (
                    <ul className='user-dropdown'>
                        
                        <li><Link to="#">Configurações</Link></li>
                        <li><Link to="#">Informações</Link></li>
                        <li><Link to="#">Sair</Link></li>

                    </ul>
                )}

                <div className="logo-header">
                    <Link to="/">
                        <img src={Logo} alt="Logo Ecoplus" title="Bem-vindo" />
                    </Link>
                </div>

                <div className='user-name'>
                        <p>EMPRESA B</p>
                </div>

                <div className="links-header">
                    
                    <div className='dropdown'>
                    <Link to="#" className='abas'>Serviços</Link>

                        <ul className='submenu'>
                            <li> <Link to="/Ecomapa">Mapa</Link> </li>

                            <li> <Link to="/Ecomapa">Descartar</Link> </li>

                            <li> <Link to="/Endereco">Consulta CEP</Link> </li>
                        </ul>

                    </div>

                    <Link to="/" className='abas'>Informações</Link>

                    <Link to="/Login" className="abas">Entre</Link>

                    <Link to="#" className='abas'>Sobre nós</Link>

                </div>

            </nav>
        </header>
    );
}

export default Header;
