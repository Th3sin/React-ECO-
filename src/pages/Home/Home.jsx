import React from "react";
import "./home.css";
import banner from '../../img/banner_sustentabilidade.png';

function Home() {
    return (
        <div className="container-home">
            <div className="imagem-banner">
            <img src={banner}/>
            </div>
            <p>Bem-vindo a eco+</p>
            <p>Conectamos pessoas aos destinadores corretos, garantindo que seu lixo chegue ao lugar certo.</p>
         </div>
    );
}

export default Home;