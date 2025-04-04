import React from "react";
import "./home.css";
import bannerECO from '../../img/banner_sustentabilidade-removebg.png';

function Home() {
    return (
        <div className="container-home">
            <div className="banner-container">
                <section className="pg1">
                    <h1>BEM-VINDO AO ECO+</h1>
                    <h2>DESCARTE INTELIGENTE PARA UM FUTURO SUSTENTÁVEL</h2>
                    <h4>No eco+ conectamos pessoas aos destinadores corretos, garantindo que seu lixo chegue ao lugar certo.</h4>
                </section>
                <div className="banner-home">
                    <img src={bannerECO} alt="Banner sustentabilidade" />
                </div>
            </div>

            <section className="pg2-container">
                <section className="pg2">
                    <h1>O QUE É O <br /> eco+?</h1>
                    <h2>Somos uma plataforma que facilita o descarte consciente, conectando pessoas e empresas a pontos de coleta e reciclagem de maneira eficiente.</h2>
                </section>
            </section>

            <section className="pg3-container">
                <section className="pg3">
                    <h1>POR QUE USAR O eco+?</h1>
                    <h2>Facilidade e responsabilidade ambiental em um só lugar!</h2>
                    <ul>
                        <li><p><strong>Localização de pontos de coleta</strong> próximos a você.</p></li>
                        <li><p><strong>Informações sobre reciclagem</strong> e descarte correto.</p></li>
                        <li><p><strong>Parcerias com recicladoras</strong> para garantir a destinação adequada.</p></li>
                        <li><p><strong>Redução de impacto ambiental</strong> através do descarte correto.</p></li>
                    </ul>
                </section>
            </section>

            <section className="pg4-container">
                <section className="pg4">
                    <h1>O que você encontra aqui?</h1>
                    <ul className="list">
                        <li>Mapa de Coleta</li>
                        <li>Blog sobre Sustentabilidade</li>
                        <li>Empresas Parceiras</li>
                        <li>Dicas de Reciclagem</li>
                        <li>Contato Direto com Destinadores</li>
                    </ul>
                    <button className="learn-more"><a href="h-planos.html">SAIBA MAIS</a></button>
                </section>
            </section>
        </div>
    );
}

export default Home;