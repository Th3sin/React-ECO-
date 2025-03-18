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
                    
                    <Link to="/DescarteMaterial" className='abas'>Descartar</Link>

                    <Link to="/Produto" className="abas">Produtos</Link>
                
                    <Link to="/BaixeApp" className="abas">Baixe o App</Link>

                    <Link to="/Login" className="abas">Entre / Cadastre-se</Link>

                </div>
            </nav>
        </header>
    );
}

export default Header;
