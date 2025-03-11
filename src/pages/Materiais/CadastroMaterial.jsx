import React, { useState } from 'react'
import './cadastroMaterial.module.css'

function CadastroMaterial() {
    const [material, setMaterial] = useState({
        nomeResíduo: '',
        descricao: '',
        categoriaResíduo: '',
        classeResíduo: '',
        grupoResíduo: '',
        quantidade: '',
        unidadeMedida: '',
    });

    const categorias = ['infectante', 'químico', 'radioativo', 'comum', 'perfurocortante', 'entulho', 'eletrônico'];
    const classes = ['perigosos', 'não perigosos'];
    const grupos = ['A', 'B', 'C', 'D', 'E'];
    const unidadesMedida = ['kg', 'litros', 'unidades'];

    return (
        <div className="form-container">
            <h1>Cadastro de Material</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nomeResíduo">Nome do Resíduo:</label>
                    <input
                        type="text"
                        id="nomeResíduo"
                        name="nomeResíduo"
                        value={material.nomeResíduo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={material.descricao}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="categoriaResíduo">Categoria do Resíduo:</label>
                    <select
                        id="categoriaResíduo"
                        name="categoriaResíduo"
                        value={material.categoriaResíduo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {categorias.map((categoria, index) => (
                            <option key={index} value={categoria}>
                                {categoria}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="classeResíduo">Classe do Resíduo:</label>
                    <select
                        id="classeResíduo"
                        name="classeResíduo"
                        value={material.classeResíduo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {classes.map((classe, index) => (
                            <option key={index} value={classe}>
                                {classe}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="grupoResíduo">Grupo do Resíduo:</label>
                    <select
                        id="grupoResíduo"
                        name="grupoResíduo"
                        value={material.grupoResíduo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {grupos.map((grupo, index) => (
                            <option key={index} value={grupo}>
                                {grupo}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input
                        type="number"
                        id="quantidade"
                        name="quantidade"
                        value={material.quantidade}
                        onChange={handleChange}
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="unidadeMedida">Unidade de Medida:</label>
                    <select
                        id="unidadeMedida"
                        name="unidadeMedida"
                        value={material.unidadeMedida}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione</option>
                        {unidadesMedida.map((unidade, index) => (
                            <option key={index} value={unidade}>
                                {unidade}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Cadastrar Material</button>
            </form>
        </div>
    );
}

export default CadastroMaterial;
