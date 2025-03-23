import React, { useState } from 'react';
import styles from './cadastroCliente.module.css';

const formatarCPF = (cpf) => {
  return cpf
    .replace(/\D/g, '') 
    .slice(0, 11) // 11 caracteres
    .replace(/(\d{3})(\d)/, '$1.$2') // primeiro ponto
    .replace(/(\d{3})(\d)/, '$1.$2') // segundo ponto
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // hífen
};

const formatarTelefone = (telefone) => {
  return telefone
    .replace(/\D/g, '') 
    .slice(0, 11) // 11 caracteres
    .replace(/^(\d{2})(\d)/, '($1) $2') // parênteses
    .replace(/(\d{5})(\d)/, '$1-$2'); // hífen
};

const formatarCEP = (cep) => {
  return cep
    .replace(/\D/g, '') 
    .slice(0, 8) // 8 caracteres
    .replace(/(\d{5})(\d{1,3})$/, '$1-$2'); // hífen
};

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    endereco: {
      logradouro: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
      pais: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // formatação dos campos (3 deles)
    if (name === 'cpf') {
      setFormData((prevData) => ({
        ...prevData,
        cpf: formatarCPF(value),
      }));
    } else if (name === 'telefone') {
      setFormData((prevData) => ({
        ...prevData,
        telefone: formatarTelefone(value),
      }));
    } else if (name === 'endereco.cep') {
      setFormData((prevData) => ({
        ...prevData,
        endereco: {
          ...prevData.endereco,
          cep: formatarCEP(value),
        },
      }));
    } else if (name.includes('endereco')) {
      const enderecoKey = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        endereco: {
          ...prevData.endereco,
          [enderecoKey]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className={styles.formularioCliente}>
      <h2>Informações</h2>
      <form>
        <div>
          <label>Nome Completo</label>
          <input
            type="text" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Digite seu nome completo" />
        </div>

        <div>
          <label>CPF</label>
          <input
            type="text" name="cpf" value={formData.cpf} onChange={handleChange} maxLength="14" required placeholder="Digite seu CPF"/>
        </div>

        <div>
          <label>E-mail</label>
          <input
            type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Digite seu e-mail" />
        </div>

        <div>
          <label>Telefone</label>
          <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} maxLength="15" required placeholder="Digite seu telefone"/>
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password" name="senha" value={formData.senha} onChange={handleChange} required placeholder="Crie uma senha" />
        </div>

        <div>
          <label>Confirmar Senha</label>
          <input
            type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} placeholder="Confirme sua senha"
          />
        </div>

        <h3>Endereço</h3>
        <div>
          <label>Logradouro</label>
          <input
            type="text"name="endereco.logradouro" value={formData.endereco.logradouro} onChange={handleChange}  required placeholder="Rua, avenida, etc." />
        </div>

        <div>
          <label>Bairro</label>
          <input 
          type="text" name="endereco.bairro" value={formData.endereco.bairro} onChange={handleChange} required placeholder="Seu bairro"
          />
        </div>

        <div>
          <label>Cidade</label>
          <input
            type="text" name="endereco.cidade" value={formData.endereco.cidade} onChange={handleChange} required placeholder="Sua cidade"
          />
        </div>

        <div>
          <label>Estado</label>
          <input
            type="text" name="endereco.estado" value={formData.endereco.estado} onChange={handleChange} required placeholder="Seu estado"
          />
        </div>

        <div>
          <label>CEP</label>
          <input
            type="text" name="endereco.cep" value={formData.endereco.cep} onChange={handleChange} maxLength="9" required placeholder="Seu CEP"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;