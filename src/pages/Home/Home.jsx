import React from "react";
import "./home.css";
import banner from '../../img/banner_sustentabilidade-removebg.png';

function Home() {
    return (
        <div className="container-home">
            <div className="banner">
            <img src={banner}/>
            </div>
            <h1>Bem-vindo a eco+</h1>
            <h2>Conectamos pessoas aos destinadores corretos, garantindo que seu lixo chegue ao lugar certo.</h2>
         </div>
    );
}

export default Home;