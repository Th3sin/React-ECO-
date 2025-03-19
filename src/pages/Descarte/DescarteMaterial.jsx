import React, { useState } from "react";
import "./descarte.css";
import { Link } from 'react-router-dom';

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

function DescarteMaterial() {
    const [formData, setFormData] = useState({
        cep: "",
        distancia: "3",
        porteMaterial: "3",
        material: ""
});

const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "cep") {
            setFormData({ ...formData, cep: formatarCEP(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <div className="pagina-descarte-material">
            <div className="container-descarte">
                <div className="form-material">
                    <h1>Encontre os pontos de recebimentos mais próximos de você:</h1>

                    <div className="material-inputs">
                        <label htmlFor="cep" className="label">CEP</label>
                        <input type="text" name="cep" value={formData.cep} onChange={handleChange} maxLength="9" 
                        placeholder="_____-___"
                        required />
                    </div>

                    <div className="material-inputs">
                        <label htmlFor="distancia" className="label">Distância</label>
                        <select name="distancia" id="distancia" className="selecione-distancia" value={formData.distancia}
                        onChange={handleChange} >

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
                        <select name="porteMaterial" id="input-porte" className="selecione-porte" value={formData.porteMaterial}
                        onChange={handleChange} >

                        <option value="3">Todos os portes</option>
                        <option value="7">Porte pequeno</option>
                        <option value="10">Porte grande</option>

                        </select>
                    </div>

                    <div className="material-inputs">
                        <label htmlFor="selecao-material" className="label">Material</label>
                        <select name="material" id="material" className="selecione-material" value={formData.material}
                        onChange={handleChange} >

                        <option value="" disabled>Selecione um material</option>

                        {materiaisEletronicos.map((material, index) => (
                            <option key={index} value={material}>{material}</option>
                        ))}

                    </select>
                </div>
                    <button className="botao-encontrar">ENCONTRAR PONTOS</button>
                </div>

                <div className="mapBox">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117038.93242014991!2d-46.71274482954122!3d-23.551678445343168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sponto%20de%20descarte!5e0!3m2!1spt-BR!2sbr!4v1732460621148!5m2!1spt-BR!2sbr"
                        width="650px" 
                        height="550px" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
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

export default DescarteMaterial;