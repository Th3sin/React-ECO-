import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./home.css";
import Ecomapa from '../../components/Mapa/Ecomapa';
import Informativo from '../Descarte/Informativo';

function Home() {

    return (
        <div className="container-home">
            <div className="banner-container">
                <video autoPlay loop muted className="background-video">
                    <source src="/video/projeto-eco-video.mp4" type="video/mp4" />
                    banner
                </video>

                <section className="banner-informations">

                <div className="titulo-pagina-home">
                    <h1> Bem-vindo ao {" "}
                        <span style={{ color: '#173a3b' }}>E</span>
                        <span style={{ color: '#2a5152' }}>C</span>
                        <span style={{ color: '#218962' }}>O</span>
                        <span style={{ color: '#51de5a' }}>+</span>
                    </h1>
                </div>

                    <h2>DESCARTE INTELIGENTE PARA UM FUTURO SUSTENTÁVEL</h2>

                    <div className="carousel-container">

                        <div className="card">
                            {/* <h1>Conexão Sustentável</h1> */}
                            <h2>O Eco+ é uma plataforma que conecta empresas geradoras de resíduos às destinadoras ambientais especializadas, promovendo o descarte correto, seguro e sustentável. Unimos tecnologia e responsabilidade para facilitar a gestão de resíduos, reduzir impactos ambientais e fortalecer o compromisso com um futuro mais verde e consciente.</h2>
                        </div>

                    </div>
                </section>

             </div>

            <div className="links-section">
                <section>
                    <h1>O que você encontra aqui?</h1>
                    <ul className="list">
                        <li><strong>Solicitação inteligente de coletas</strong></li>
                        <li><strong>Localização de empresas destinadoras especializadas</strong></li>
                        <li><strong>Histórico completo de solicitações e status em tempo real</strong></li>
                        <li><strong><a href="#blog">Informações sobre gerenciamento de resíduos sólidos</a></strong></li>
                        <li><strong><a href="#mapa">Conheça nosso Ecomapa</a></strong></li>
                    </ul>
                </section>
            </div>
                

            <section className="mapa" id="mapa">
                <Ecomapa />
            </section>
            
            <section className="blog" id="blog">
                <Informativo />
            </section>

        </div>
    );
}

export default Home;