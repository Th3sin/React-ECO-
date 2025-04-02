import React, { useState } from 'react';
import styles from "./cadastroEmpresa.module.css";
import InformacoesPessoais from '../../../components/Formularios/InformacoesPessoais';
import Endereco from '../../../components/Formularios/Endereco';

const CadastroEmpresa = () => {
const [formData, setFormData] = useState({ nome: "", cnpj: "", email: "", telefone: "", senha: "", confirmarSenha: "", ramo: "", tipoEmpresa: "",

  endereco: { cep: "", logradouro: "", bairro: "", cidade: "", estado: "",
}
});

const handleInputChange = (e) => {
  const { name, value } = e.target
  const nameParts = name.split('.');
  if (nameParts.length === 2 && nameParts[0] === 'endereco') {
  const field = nameParts[1];
  setFormData({
    ...formData,
    endereco: {
      ...formData.endereco,
      [field]: value
    }
});
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Dados enviados:", formData);
};

  return (
    <div className={styles.formularioEmpresa}>
      <h2>Informações</h2>
      <form onSubmit={handleSubmit}>

        <InformacoesPessoais
          formData={formData}
          handleInputChange={handleInputChange} />

        <Endereco
          formData={formData}
          handleInputChange={handleInputChange} />
        <div>
          
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroEmpresa;