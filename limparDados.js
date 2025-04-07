/* JS PARA EXCLUIR DADOS DO DB.JSON */
/* RODAR NO TERMINAL COM COMANDO: "node limparDados.js" */

import fs from 'fs';

fs.unlink('db.json', 'enderecos.json', (err) => {
  if (err) {
    console.error('Erro ao excluir o arquivo:', err);
  } else {
    console.log('Arquivo JSON excluído com sucesso!');
  }
});