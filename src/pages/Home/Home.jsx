import React from "react";
import "./home.css";
import bannerECO from '../../img/banner_sustentabilidade-removebg.png'

function Home() {
    return (
        <div className="container-home">
           <div className="banner-container">
            <section className="pg1">
                <h1>BEM-VINDO AO</h1>
                <h2>ECO+</h2>
                <h3>DESCARTE INTELIGENTE PARA UM FUTURO SUSTENTÁVEL</h3>
                <h4>No eco+ conectamos pessoas aos destinadores corretos, garantindo que seu lixo chegue ao lugar certo.</h4>
            </section>

            <div className="banner-home">
                <img src={bannerECO} alt="Banner sustentabilidade" />
                </div>
        </div>

            <section className="pg2-container">
                <section className="pg2">
                    <h1>O QUE É O <br/> eco+?</h1>
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
                    <button><a href="h-planos.html">SAIBA MAIS</a></button>
                </section>
            </section>
    
            <footer>
                <section className="organizacao">
                    <section className="caixa-das-sociais">
                        <p className="siga">NOS SIGA:</p>
                        <section className="sociais">
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </section>
                    </section>
                    <section className="footer-options">
                        <section className="servicos">
                            <p className="footerstrong">NAVEGAÇÃO</p>
                            <a href="h-home.html">Home</a>
                            <a href="h-sobre.html">Sobre</a>
                        </section>
                        <section className="servicos">
                            <p className="footerstrong">INFORMAÇÕES</p>
                            <a href="h-planos.html">Planos</a>
                        </section>
                        <section className="servicos">
                            <p className="footerstrong">Suporte</p>
                            <a href="">Contato</a>
                        </section>
                    </section>
                </section>
                <p className="direitos">© 2024 eco+. Todos os direitos reservados.</p>
                <section className="termos">
                    <a href="inst-seguranca.html">Segurança</a>
                    <a href="inst-acessibilidade.html">Declaração de acessibilidade</a>
                    <a href="">Configurações de Cookie</a>  
                    <a href="inst-privacidade.html">Política de Privacidade</a>
                    <a href="inst-termos-de-uso.html">Termos de Uso</a>
                </section>
            </footer>
        </div>
    );
}

export default Home;