import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./ecomapa.css";
import { Link } from 'react-router-dom';
import botao from "../../img/botao-voltar-verde.png"

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const tipoResiduo = [
    "Resíduos orgânicos", "Resíduos eletrônicos", "Resíduos hospitalares", "Resíduos perigosos", 
    "Resíduos de construção e demolição", "Resíduos têxteis", "Resíduos perfurocortantes", 
    "Resíduos químicos", "Resíduos radioativos", "Resíduos perigosos"
];

const materiaisEletronicos = [
    "Celular", "Notebook", "Computador", "Tablet", "Televisão",
    "Monitor", "Impressora", "Teclado", "Mouse", "Carregador",
    "Fone de ouvido", "Roteador", "Modem", "HD externo",
    "Pendrive", "Câmera digital", "Caixa de som", "DVD player",
    "Vídeo game", "Bateria recarregável"
];

const formatarCEP = (cep) => {
    return cep
        .replace(/\D/g, '') 
        .slice(0, 8) 
        .replace(/(\d{5})(\d{1,3})$/, '$1-$2'); 
};

function Ecomapa() {
    const [formData, setFormData] = useState({
        cep: "",
        distancia: "3",
        porteMaterial: "3",
        material: "",
        residuo: ""  
    });

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey
    });
    
    useEffect(() => {
        console.log("Minha chave de API:", apiKey);
    }, []);    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFindPoints = () => {
        // A lógica para buscar os pontos de coleta baseado no CEP, distância e tipo de material SERÁ IMPLEMENTADA AQUI!
        alert("Busca iniciada!");
    };

    const mapContainerStyle = {
        width: "800px",
        height: "500px",
    };

    const defaultCenter = {
        lat: -23.5123429,
        lng: -46.889781,
    };

    return (
        <div className="pagina-descarte-material">

            <div className="container-descarte">
                <div className="form-material">
                    <h1>Encontre os pontos de recebimentos mais próximos de você:</h1>

                    <div className="material-inputs">
                        <label htmlFor="cep" className="label">CEP</label>
                        <input 
                            type="text" name="cep" value={formData.cep} onChange={handleChange} maxLength="9" placeholder="_____-___"
                            required />
                    </div>

                    <div className="material-inputs">
                        <label htmlFor="distancia" className="label">Distância</label>
                        <select name="distancia" id="distancia" className="selecione-distancia" value={formData.distancia} onChange={handleChange} >
                            <option value="3">3 (km)</option>
                            <option value="7">7 (km)</option>
                            <option value="10">10 (km)</option>
                            <option value="15">15 (km)</option>
                            <option value="20">20 (km)</option>
                            <option value="25">25 (km)</option>
                            <option value="30">30 (km)</option>
                        </select>
                    </div>

                    <div className="material-inputs">
                        <label htmlFor="porte-material" className="label">Porte</label>
                        <select name="porteMaterial" id="input-porte" className="selecione-porte" value={formData.porteMaterial} onChange={handleChange} >
                            <option value="3">Todos os portes</option>
                            <option value="7">Porte pequeno</option>
                            <option value="10">Porte grande</option>
                        </select>
                    </div>

                    <div className="material-inputs">
                        <label htmlFor="residuo" className="label">Tipo do Resíduo</label>
                        <select name="residuo" id="residuo" className="selecione-tipo-residuo" value={formData.residuo} onChange={handleChange} >
                            <option value="" disabled>Selecione o tipo do resíduo</option>
                            {tipoResiduo.map((residuo, index) => (
                                <option key={index} value={residuo}>{residuo}</option>
                            ))}
                        </select>
                    </div>

                    <div className="material-inputs">
                        <label htmlFor="material" className="label">Material</label>
                        <select name="material" id="material" className="selecione-material" value={formData.material} onChange={handleChange} >
                            <option value="" disabled>Selecione um material</option>
                            {materiaisEletronicos.map((material, index) => (
                                <option key={index} value={material}>{material}</option>
                            ))}
                        </select>
                    </div>

                    <button 
                        className="botao-encontrar" 
                        onClick={handleFindPoints} >
                        ENCONTRAR PONTOS
                    </button>
                </div>

                <div className="mapBox">
                    {!isLoaded ? (
                        <div>Carregando Mapa...</div>
                    ) : (
                        <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={10} />
                    )}
                </div>
            </div>

            <div className="link-to-informativo">
                <Link to="/Informativo">
                    <h2>Clique aqui para saber mais sobre resíduos, reciclagem +</h2>
                </Link>
            </div>
        </div>
    );
}

export default Ecomapa;