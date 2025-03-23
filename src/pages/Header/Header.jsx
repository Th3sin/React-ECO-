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
                        <img src={UserPic} alt='foto de perfil do usuario eco+' title='foto de perfil do usuario eco+' />
                    </Link>
                </div>

                <div className="logo-header">
                    <Link to="/">
                        <img src={Logo} alt="Logo Ecomais" title="Logo Ecomais" />
                    </Link>
                </div>

                <div className='user-name'>
                        <p>Breno Ramos Ferreira</p>
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
