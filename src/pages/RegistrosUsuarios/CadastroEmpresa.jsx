import React, { useState } from 'react';
import styles from './cadastroEmpresa.module.css';

const CadastroEmpresa = () => {
  const [formData, setFormData] = useState({
    cnpj: '',
    nome: '',
    razaoSocial: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',  // Adicionando confirmarSenha ao estado
    ramo: '',
    tipoEmpresa: '',
    endereco: {
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se o campo for parte do endereço
    if (name.startsWith('endereco.')) {
      const enderecoKey = name.split('.')[1]; // Obtém o nome da chave (logradouro, bairro, etc.)
      setFormData((prevData) => ({
        ...prevData,
        endereco: {
          ...prevData.endereco,
          [enderecoKey]: value  // Atualiza o campo correto do endereço
        }
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value  // Para os campos fora de 'endereco'
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);

    // Resetando o estado após envio
    setFormData({
      cnpj: '',
      nome: '',
      razaoSocial: '',
      email: '',
      telefone: '',
      senha: '',
      confirmarSenha: '',
      ramo: 'comercial',
      tipoEmpresa: '',
      endereco: {
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: ''
      }
    });
  };

  return (
    <div className={styles.formularioEmpresa}>
      <h2>Informações </h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="nome">Nome da Empresa:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Digite o nome da empresa" />
        </div>

        <div>
          <label htmlFor="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required placeholder="Digite o CNPJ da empresa" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Digite o e-mail' required />
        </div>

        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder='Digite o telefone' required />
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} placeholder='Digite uma senha' required />
        </div>

        <div>
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} placeholder="Confirme sua senha"
          />
        </div>

        <div>
          <label htmlFor="ramo">Ramo:</label>
          <select id="ramo" name="ramo" value={formData.ramo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="comercial">Comercial</option>
            <option value="industrial">Industrial</option>
            <option value="serviços">Serviços</option>
          </select>
        </div>

        <div>
          <label htmlFor="tipoEmpresa">Tipo de Empresa:</label>
          <input type="text" id="tipoEmpresa" name="tipoEmpresa" value={formData.tipoEmpresa} onChange={handleChange} placeholder='Fábrica, Restaurante, Hospital, etc.' required />
        </div>

        <h3>Endereço</h3>
        <div>
          <label>Logradouro</label>
          <input
            type="text" name="endereco.logradouro" value={formData.endereco.logradouro} onChange={handleChange} required placeholder="Rua, avenida, etc." />
        </div>

        <div>
          <label>Bairro</label>
          <input
            type="text" name="endereco.bairro" value={formData.endereco.bairro} onChange={handleChange} required placeholder="Seu bairro" />
        </div>

        <div>
          <label>Cidade</label>
          <input
            type="text" name="endereco.cidade" value={formData.endereco.cidade} onChange={handleChange} required placeholder="Sua cidade" />
        </div>

        <div>
          <label>Estado</label>
          <input
            type="text" name="endereco.estado" value={formData.endereco.estado} onChange={handleChange} required placeholder="Seu estado" />
        </div>

        <div>
          <label>CEP</label>
          <input
            type="text" name="endereco.cep" value={formData.endereco.cep} onChange={handleChange} maxLength="9" required placeholder="Seu CEP" />
        </div>

        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroEmpresa;