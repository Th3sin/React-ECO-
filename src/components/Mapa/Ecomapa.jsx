import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from "./ecomapa.module.css";
import { Link } from 'react-router-dom';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

// TIPOS DE RESÍDUOS
const tipoResiduo = [ 
    "Orgânico", "Eletrônico", "Hospitalar", "Entulhos", "Têxteis", 
    "Perfurocortante", "Químico", "Radioativo", "Plástico", "Vidro", 
    "Madeira", "Metais", "Papel", "Agroindustrial", "Inerte" 
];

// ORGÂNICO
const materiaisOrgânicos = [ 
    "Sobras de alimentos", "Grãos", "Frutas e vegetais", "Cascas de frutas e legumes", 
    "Polpas", "Restos de carne", "Carnes", "Talos", "Talos de plantas", "Folhas", 
    "Galhos", "Esterco", "Alimentos vencidos" 
];

// ELETRÔNICO
const materiaisEletronicos = [ 
    "Celular", "Notebook", "Computador", "Tablet", "Televisão", "Monitor", 
    "Impressora", "Teclado", "Mouse", "Carregador", "Fone de ouvido", "Roteador", 
    "Modem", "HD externo", "Pendrive", "Câmera digital", "Caixa de som", 
    "DVD player", "Vídeo game", "Bateria recarregável" 
];

// HOSPITALAR
const materiaisHospitalares = [ 
    "Seringas", "Agulhas", "Cânulas", "Lâminas de bisturi", "Lâminas de barbear", 
    "Frascos de medicamentos", "Ampolas de vidro", "Papel absorvente", "Gaze" , 
    "Curativos", "Luvas descartáveis", "Máscaras descartáveis", "Toucas Descartáveis", 
    "Aventais descartáveis", "Escalpes" , "Cateteres" , "Equipamentos de endoscopia", 
    "Fraldas hospitalares", "Bolsas de sangue", "Sacos de soro", 
    "Termômetros descartáveis", "Eletrodos descartáveis", "Papel toalha", 
    "Toalhas descartáveis", "Medicamentos", "Resíduos de exames", "Tecidos", 
    "Produtos de higiene", "Resíduos de produtos odontológicos", 
    "Frascos de vidro quebrados", "Sacos de lixo infectantes" 
];

// ENTULHO 
const residuosConstrucao = ["Tijolos", "Sobras de material", "Entulhos", "Amianto", "Cerâmicas", "Fios e cabos elétricos" ];

// TÊXTEIS
const residuosTexteis = [""];

const formatarCEP = (cep) => {
    const numeros = cep.replace(/\D/g, '').slice(0, 8); 
    return numeros.length > 5 ? numeros.replace(/(\d{5})(\d{1,3})/, '$1-$2') : numeros;
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFindPoints = () => {
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
        <div className={styles.paginaDescarteMaterial}>
            <div className={styles.containerDescarte}>
                <div className={styles.formMaterial}>
                    <h1>Encontre os pontos de recebimentos mais próximos de você:</h1>

                    {/* CEP */}
                    <div className={styles.materialInputs}>
                        <label htmlFor="cep" className={styles.label}>CEP</label>
                        <input 
                            type="text" 
                            name="cep" 
                            value={formatarCEP(formData.cep)} 
                            onChange={handleChange} 
                            maxLength="9" 
                            placeholder="_____-___" 
                            required 
                        />
                    </div>

                    {/* Distância */}
                    <div className={styles.materialInputs}>
                        <label htmlFor="distancia" className={styles.label}>Distância</label>
                        <select 
                            name="distancia" 
                            className={`${styles.selectField} ${styles.selecioneDistancia}`}  
                            value={formData.distancia} 
                            onChange={handleChange}
                        >
                            {[3, 7, 10, 15, 20, 25, 30].map((dist) => (
                                <option key={dist} value={dist}>{dist} (km)</option>
                            ))}
                        </select>
                    </div>

                    {/* Tipo do Resíduo */}
                    <div className={styles.materialInputs}>
                        <label htmlFor="residuo" className={styles.label}>Tipo do Resíduo</label>
                        <select 
                            name="residuo" 
                            className={`${styles.selectField} ${styles.selecioneTipoResiduo}`}  
                            value={formData.residuo} 
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecione o tipo do resíduo</option>
                            {tipoResiduo.map((residuo, index) => (
                                <option key={index} value={residuo}>{residuo}</option>
                            ))}
                        </select>
                    </div>

                    {/* Material */}
                    <div className={styles.materialInputs}>
                        <label htmlFor="material" className={styles.label}>Material</label>
                        <select 
                            name="material" 
                            className={`${styles.selectField} ${styles.selecioneMaterial}`}  
                            value={formData.material} 
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecione um material</option>
                            {materiaisEletronicos.map((material, index) => (
                                <option key={index} value={material}>{material}</option>
                            ))}
                        </select>
                    </div>

                    {/* Porte */}
                    <div className={styles.materialInputs}>
                        <label htmlFor="porteMaterial" className={styles.label}>Porte</label>
                        <select 
                            name="porteMaterial" 
                            className={`${styles.selectField} ${styles.selecionePorte}`} 
                            value={formData.porteMaterial} 
                            onChange={handleChange}
                        >
                            <option value="3">Todos os portes</option>
                            <option value="7">Porte pequeno</option>
                            <option value="10">Porte grande</option>
                        </select>
                    </div>

                    {/* Botão */}
                    <button 
                        className={styles.botaoEncontrar} 
                        onClick={handleFindPoints}
                    >
                        ENCONTRAR PONTOS
                    </button>
                </div>

                {/* Mapa */}
                <div className={styles.mapBox}>
                    {!isLoaded ? (
                        <div>Carregando Mapa...</div>
                    ) : (
                        <GoogleMap 
                            mapContainerStyle={mapContainerStyle} 
                            center={defaultCenter} 
                            zoom={10} 
                        />
                    )}
                </div>
            </div>

            {/* Link Informativo */}
            <div className={styles.linkToInformativo}>
                    <Link to="/Informativo">
                        <h2>Clique aqui para saber mais sobre resíduos, reciclagem +</h2>
                    </Link>
            </div>

        </div>
    );
}

export default Ecomapa;