import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../img/ecoplus05.png';
import UserPic from '../../img/user-profile.jpg';

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
                        <p>EMPRESA B</p>
                </div>

                <div className="links-header">
                    
                    <Link to="/Ecomapa" className='abas'>Descartar</Link>

                    <Link to="/Produto" className="abas">Produtos</Link>

                    <Link to="/Login" className="abas">Entre</Link>

                </div>

            </nav>
        </header>
    );
}

export default Header;
