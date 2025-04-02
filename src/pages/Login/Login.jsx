import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './login.module.css';
import seta from '../../img/botao-voltar-verde.png'
import logoLogin from '../../img/icon-ecoplus-login.png'

function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // VALIDAÇÃO DADOS FIXOS
  const fixedUsername = "admin@admin.com.br";
  const fixedPassword = "123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    if (username === "" || password === "") {
      alert("Por favor, preencha todos os campos");

    } else if (username === fixedUsername && password === fixedPassword) { 
      navigate("/");

    } else {
      setError("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className={styles.containerElementosLogin}>

      <div className={styles.backButton}>
        <Link to={"/"}> <img src={seta} alt="botão para voltar" title="Voltar" /></Link>
      </div>

      <div className={styles.containerLogin}>
        <form onSubmit={handleSubmit}>

        <div className={styles.logoEcoplus}>
          <Link to={"/"}><img src={logoLogin} alt="Logo eco+" title="Eco+" className={styles.logoImg} /></Link>
        </div>

          <h1>Login</h1>

          <div>
            <label htmlFor="email">Usuário</label>
            <input type="email" placeholder="Digite seu e-mail" value={username} onChange={(e) => setUsername(e.target.value)}
            required />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}
              required />
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className={styles.recallForget}>
            <label htmlFor="checkbox">
              <input type="checkbox" />
              Lembre de mim
            </label>
            <Link to="/esqueceu-senha">Esqueceu a senha?</Link>
          </div>

          <button type="submit">Entrar</button>

          <div className={styles.signupLink}>
            <p>Não tem uma conta?
              <Link to="/Registro">Cadastre-se</Link>
            </p>
          </div>  

        </form>
      </div>
    </div>
  );
}

export default Login;