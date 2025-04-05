import React, { useState } from "react";
import styles from './informativo.module.css';
import biologicalSymbol from "../../img/residuoInfectante.png";
import chemicalSymbol from "../../img/residuoQuimico.png";
import radioactiveSymbol from "../../img/residuoRadioativo.png";
import commomSymbol from "../../img/residuoComum.png";
import sharpSymbol from "../../img/residuoPerfurocortante.png";
import { Link } from 'react-router-dom';

function Informativo() {
    return (
        <div className={styles.secaoResiduos}>
            
            <div className={styles.containerBotoes}>
                <div className={styles.containerResiduo}>  
                     <div className="infectante">
                        <Link to="/infectante">
                            <button>
                                <img src={biologicalSymbol} alt="símbolo risco infectante" />
                                <h2>Resíduo Infectante</h2>
                            </button>
                        </Link>
                </div>
                </div>
                
                <div className={styles.containerResiduo}>
                    <div className="quimico">
                        <Link to="/quimico">
                            <button>
                                <img src={chemicalSymbol} alt="símbolo risco químico" />
                                <h2>Resíduo Químico</h2>
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className={styles.containerResiduo}>
                <div className="radioativo">
                        <Link to="/radioativo">
                            <button>
                                <img src={radioactiveSymbol} alt="símbolo risco radioativo" />
                                <h2>Resíduo Radioativo</h2>
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className={styles.containerResiduo}>
                <div className="comuns">
                        <Link to="/comuns">
                            <button>
                                <img src={commomSymbol} alt="símbolo resíduos comuns" />
                                <h2>Resíduos Comuns</h2>
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className={styles.containerResiduo}>
                <div className="cortante">
                        <Link to="/cortante">
                            <button>
                                <img src={sharpSymbol} alt="símbolo resíduos perfurocortantes" />
                                <h2>Resíduo Perfurocortante</h2>
                            </button>
                        </Link>
                    </div>
                </div>
            </div> 

        </div>
    );
};

export default Informativo;