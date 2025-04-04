import React from 'react';
import styles from './cadastroEmpresaColetora.module.css';

const CadastroEmpresaColetora = () => {
  return (
    <div className={styles.formularioColetora}>
      <h2>Informações</h2>
      <form>

        <div className={styles.camposColetora}>
          <label>Nome da Empresa</label>
          <input type="text" name="nome" placeholder="Digite o nome da empresa" required />
        </div>

        <div className={styles.camposColetora}>
          <label>CNPJ</label>
          <input type="text" name="cnpj" placeholder="Digite o CNPJ da empresa" required />
        </div>

        <div className={styles.camposColetora}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Digite o e-mail' required />
        </div>

        <div className={styles.camposColetora}>
          <label>Senha</label>
          <input type="password" name="senha" placeholder="Digite a senha" />
        </div>

        <div className={styles.camposColetora}>
          <label>Área de Atuação</label>
          <input type="text" name="areaAtuacao" placeholder="Área de atuação" />
        </div>

        <div className={styles.camposColetora}>
          <label>Classe de Resíduo</label>
          <select name="classeResiduo">
            <option value="">Selecione</option>
            <option value="perigosos">Perigosos</option>
            <option value="não perigosos">Não Perigosos</option>
          </select>
        </div>

        <div className={styles.camposColetora}>
          <label>Grupo de Resíduo</label>
          <select name="grupoResiduo">
            <option value="">Selecione</option>
            <option value="A">Grupo A</option>
            <option value="B">Grupo B</option>
            <option value="C">Grupo C</option>
            <option value="D">Grupo D</option>
            <option value="E">Grupo E</option>
          </select>
        </div>

        <h3>Endereço</h3>
        <div className={styles.camposColetora}>
          <label>Logradouro</label>
          <input type="text" name="logradouro" placeholder="Logradouro" />
        </div>

        <div className={styles.camposColetora}>
          <label>Número</label>
          <input type="text" name="numero" placeholder="Número" />
        </div>

        <div className={styles.camposColetora}>
          <label>Bairro</label>
          <input type="text" name="bairro" placeholder="Bairro" />
        </div>

        <div className={styles.camposColetora}>
          <label>Cidade</label>
          <input type="text" name="cidade" placeholder="Cidade" />
        </div>

        <div className={styles.camposColetora}>
          <label>Estado</label>
          <input type="text" name="estado" placeholder="Estado" />
        </div>

        <div className={styles.camposColetora}>
          <label>CEP</label>
          <input type="text" name="cep" placeholder="CEP" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroEmpresaColetora;