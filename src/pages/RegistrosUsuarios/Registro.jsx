import React from "react"
import styles from "./registro.module.css"
import { Link } from "react-router-dom"
import empresaIcon1 from "../../img/Destinadora-icon.png"
import empresaIcon2 from "../../img/Pessoa-fisica-icon.png"

function Registro() {
    return (  
        <div className={styles.containerUsuarios}>
            <h1>Qual o seu perfil?</h1>
            <div className={styles.containerRegistro}>

                <div className={styles.containerEntidades}>
                    <button className={styles.entidadeButton}>
                        <Link to="/CadastroEmpresaColetora" className={styles.link}>
                            <img src={empresaIcon1} alt="Ícone Empresa Coletora" className={styles.entidadeIcon} />
                            <h2 className={styles.coletora}>Empresa Destinadora</h2>
                        </Link>
                    </button>
                </div>

                <div className={styles.Entidadesdescricao}>
                    <p className={styles.descricao}>Amplie sua atuação oferecendo serviços para pequenos e grandes negócios.</p>
                </div>

                <div className={styles.containerEntidades}>
                    <button className={styles.entidadeButton}>
                        <Link to="/CadastroEmpresa" className={styles.link}>
                            <img src={empresaIcon2} alt="Ícone Empresa ou Organização" className={styles.entidadeIcon} />
                            <h2 className={styles.pessoaJuridica}>Pessoa Jurídica</h2>
                        </Link>
                    </button>
                    
                </div>

                <div className={styles.Entidadesdescricao}>
                    <p className={styles.descricao}>Solicite serviços de destinação especializados.</p>
                </div>

            </div>
        </div>
    );
}

export default Registro
