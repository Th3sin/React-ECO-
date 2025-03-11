import React from "react";
import "./home.css";
import biologicalSymbol from '../../img/residuoInfectante.png';
import chemicalSymbol from '../../img/residuoQuimico.png';
import radioactiveSymbol from '../../img/residuoRadioativo.png';
import commomSymbol from '../../img/residuoComum.png';
import sharpSymbol from '../../img/residuoPerfurocortante.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container-home">

            <div className="container-botoes">

                <div className="container-residuo">
                    <button>
                        <img src={sharpSymbol} alt="símbolo risco infectante" />
                        <h2>Resíduo Infectante</h2>
                    </button>
                </div>

                <div className="container-residuo">
                    <button>
                        <img src={chemicalSymbol} alt="símbolo risco químico" />
                        <h2>Resíduo Químico</h2>
                    </button>
                </div>

                <div className="container-residuo">
                    <button>
                        <img src={radioactiveSymbol} alt="símbolo risco radioativo" />
                        <h2>Resíduo Radioativo</h2>
                    </button>
                </div>

                <div className="container-residuo">
                    <button>
                        <img src={commomSymbol} alt="símbolo resíduos comuns" />
                        <h2>Resíduos Comuns</h2>
                    </button>
                </div>

                <div className="container-residuo">
                    <button>
                        <img src={biologicalSymbol} alt="símbolo resíduos perfurocortantes" />
                        <h2>Resíduo Perfurocortante</h2>
                    </button>
                </div>
            </div>
         </div>
    );
}

export default Home;