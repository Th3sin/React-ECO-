import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './login.module.css'; 
// import Logo from '../../img/logoecoplusLogin.png';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="email">Usuário</label>
            <input
              type="email"
              placeholder="Digite seu usuário ou e-mail"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.recallForget}>
            <label htmlFor="checkbox">
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit">
            Entrar
          </button>
          <div className={styles.signupLink}>
            <p>Não tem uma conta? 
              <Link to="/Registro"> Cadastre-se</Link>
            </p>
          </div>  
        </form>
      </div>
    </div>
  );
}

export default Login;
