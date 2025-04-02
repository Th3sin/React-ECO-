import React, { useState } from "react";
import "./registro.css"; // Corrija a importação para usar o CSS regular
import { Link } from "react-router-dom";
import empresaIcon1 from "../../img/Destinadora-icon.png";
import empresaIcon2 from "../../img/Pessoa-fisica-icon.png";
import seta from '../../img/botao-voltar-verde.png'

function Registro() {

    return (  
        <div className="registro-container">

            <div className="back-button">
                <Link to={"/"}> <img src={seta} alt="botão para voltar" title="Voltar" /></Link>
            </div>

            <h1>Qual o seu perfil?</h1>

            <div className="entidades-container">
                <div className="lista-entidades">

                    <div className="item-entidade">
                        <button className="entidade-botao">
                            <Link to="/CadastroEmpresaColetora" className="link" title="Empresa Destinadora">
                                <img src={empresaIcon1} alt="Ícone Empresa Coletora" className="entidade-icon" />
                                <h2 className="coletora">Empresa Destinadora</h2>
                            </Link>
                        </button>
                    </div>

                    <div className="item-entidade" >
                        <button className="entidade-botao">
                            <Link to="/CadastroEmpresa" className="link">
                                <img src={empresaIcon2} alt="Ícone Empresa ou Organização" title="Pessoa Jurídica" className="entidade-icon" />
                                <h2 className="pessoa-juridica">Pessoa Jurídica</h2>
                            </Link>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;