import React from "react";
import { useAuth } from "../AuthContext";

function HomeCliente() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <header>
        {isAuthenticated ? null : <div className="logo">Minha Logo</div>}
      </header>
      <h1>Bem-vindo à Home Especial!</h1>
      {isAuthenticated && (
        <p>Aqui estão funcionalidades extras que só usuários logados veem.</p>
      )}
    </div>
  );
}

export default HomePersonalizada;
