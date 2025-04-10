import React, { useState, useEffect } from "react";
import "./registro.css";
// import { Link } from "react-router-dom";
import empresaIcon1 from "../../img/Destinadora-icon.png";
import empresaIcon2 from "../../img/Pessoa-fisica-icon.png";
import axios from "axios";

const Registro = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);
  const [formularioVisivel, setFormularioVisivel] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/usuarios")
      .then((res) => setUsuarios(res.data))
      .catch((err) => console.error("Erro ao buscar usuários", err));
  }, []);

  const exibirFormulario = (perfil) => {
    setPerfilSelecionado(perfil);
    setFormularioVisivel(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/usuarios", {
        nome,
        email,
        senha,
      });
      alert("Usuário cadastrado com sucesso!");
      console.log("Usuário cadastrado com sucesso:", response.data);
      setUsuarios((prev) => [...prev, response.data]);
    } catch (error) {
      alert("Erro ao cadastrar. Verifique todos os campos!");
      console.log("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <div className="registro-container">
      {!formularioVisivel ? (
        <>
          <h1>Qual o seu perfil?</h1>
          <div className="entidades-container">
            <div className="item-entidade">

              <button onClick={() => exibirFormulario("Empresa Destinadora")} className="entidade-botao" >
                <img src={empresaIcon1} alt="Ícone Empresa Coletora" className="entidade-icon" />
                <h2 className="coletora">Empresa Destinadora</h2>
              </button>

            </div>
            <div className="item-entidade">

              <button onClick={() => exibirFormulario("Empresa Geradora")} className="entidade-botao" >
                <img src={empresaIcon2} alt="Ícone Empresa ou Organização" className="entidade-icon" />
                <h2 className="pessoa-juridica">Empresa Geradora</h2>
              </button>
              
            </div>
          </div>
        </>
      ) : (
        <div className="formulario-cadastro" id="formulario-cadastro">
          <h2>Seja bem-vindo!</h2>
          <form onSubmit={handleSubmit}>
            
            <label>Nome</label>
            <input type="text" placeholder="Digite o nome da sua empresa" value={nome} onChange={(e) => setNome(e.target.value)} 
            required />

            <label>E-mail</label>
            <input type="email" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Senha</label>
            <div className="input-container">

            <input type={showPassword ? "text" : "password"} placeholder="Crie uma senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />

            <i className={`fas fa-eye${showPassword ? "-slash" : ""} eyeIcon`} onClick={togglePasswordVisibility}> </i>

            </div>

            <label>Confirmar senha</label>
            <div className="input-container">

              <input type={showPassword ? "text" : "password"} placeholder="Confirme a sua senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />

              <i className={`fas fa-eye${showPassword ? "-slash" : ""} eyeIcon`} onClick={togglePasswordVisibility}></i>
            </div>

            <div className="form-group">

              <button type="submit" alt="botão de cadastrar usuário no sistema" title="Clique para finalizar seu cadastro" >
                Cadastrar
              </button>

            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registro;