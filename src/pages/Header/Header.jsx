import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../img/ecoplus05.png';

function Header() {
    return (
        <header>
            <nav>
                <div className="logo-header">

                    <Link to="/">
                        <img src={Logo} alt="Logo Ecomais" title="Logo Ecomais" />
                    </Link>
                </div>

                <div className="links-header">

                    <Link to="/" className="abas">Home</Link>
                    <span className='separador'>|</span>

                    <Link to="/Produto" className="abas">Produtos</Link>
                    <span className='separador'>|</span>

                    <Link to="/Mapa" className="abas">Mapa</Link>
                    <span className='separador'>|</span>

                    <Link to="/Login" className="abas">Login</Link>
                    <span className='separador'>|</span>
                    
                    <Link to="Aplicacao" className="abas">Baixe o App</Link>

                </div>
            </nav>
        </header>
    );
}

export default Header;
