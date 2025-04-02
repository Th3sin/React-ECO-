import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../img/ecoplus05.png';
import UserPic from '../../img/profile-pic-empresa.png';

function Header() {
    return (
        <header> 
            <nav>
                <div className='user-profile-picture'>
                    <Link to="#">
                        <img src={UserPic} alt='Foto de perfil do usuário' title='Clique para acessar as funcionalidades do seu perfil' />
                    </Link>
                </div>

                <div className="logo-header">
                    <Link to="/">
                        <img src={Logo} alt="Logo Ecoplus" title="Bem-vindo" />
                    </Link>
                </div>

                <div className='user-name'>
                        <p>Grupo AA Alternativas</p>
                </div>

                <div className="links-header">
                    
                    <Link to="/Ecomapa" className='abas'>Serviços</Link>

                    <Link to="/Background" className='abas'>Informações</Link>

                    <Link to="/Login" className="abas">Entre</Link>

                    <Link to="#" className='abas'>Sobre nós</Link>

                </div>

            </nav>
        </header>
    );
}

export default Header;
