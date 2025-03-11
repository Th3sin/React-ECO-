import React from "react"
import styles from "./registro.module.css"
import { Link } from "react-router-dom"
import icon1 from "../../img/icon.png"
import icon2 from "../../img/iconPJ.png"
import icon3 from "../../img/iconPF.png"

function Registro() {
    return (
        <div className={styles.texture}>
            <div className={styles.containerRegistro}>
            
                <div className={styles.containerEntidades}>
                    <button className={styles.entidadeButton}>
                        <Link to="/CadastroCliente" className={styles.link}>
                            <img src={icon3} alt="Ícone Consumidor" className={styles.entidadeIcon} />
                            <h2 className={styles.consumidor}>Consumidor</h2>
                        </Link>
                        <p className={styles.descricao}>Solicite serviços de coleta qualificados.</p>
                    </button>
                </div>

                <div className={styles.containerEntidades}>
                    <button className={styles.entidadeButton}>
                        <Link to="/CadastroEmpresaColetora" className={styles.link}>
                            <img src={icon1} alt="Ícone Empresa Coletora" className={styles.entidadeIcon} />
                            <h2 className={styles.coletora}>Empresa Coletora</h2>
                        </Link>
                        <p className={styles.descricao}>Amplie seu impacto sustentável oferecendo serviços para indivíduos e empresas.</p>
                    </button>
                </div>

                <div className={styles.containerEntidades}>
                    <button className={styles.entidadeButton}>
                        <Link to="/CadastroEmpresa" className={styles.link}>
                            <img src={icon2} alt="Ícone Empresa ou Organização" className={styles.entidadeIcon} />
                            <h2 className={styles.pessoaJuridica}>Empresa ou Organização</h2>
                        </Link>
                        <p className={styles.descricao}>Solicite serviços de destinação especializados.</p>
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default Registro;
