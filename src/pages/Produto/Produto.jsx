import styles from './produto.module.css';
import imagemProduto from '../../img/garrafaReutilizavel.jpeg';
import imagemProduto2 from '../../img/sacolaEcologica.jpeg';
import imagemProduto3 from '../../img/canudoBambu.jpeg'; 

const produtos = [
  {
    id: 1,
    nome: 'Garrafa Reutilizável',
    descricao: 'Feita de aço inoxidável, ideal para reduzir o uso de plástico.',
    preco: 'R$ 59,90',
    imagem: imagemProduto,
  },
  {
    id: 2,
    nome: 'Sacola Ecológica',
    descricao: 'Sacola feita de algodão reciclado, perfeita para compras.',
    preco: 'R$ 29,90',
    imagem: imagemProduto2,
  },
  {
    id: 3,
    nome: 'Canudo de Bambu',
    descricao: 'Alternativa natural e sustentável para canudos descartáveis.',
    preco: 'R$ 19,90',
    imagem: imagemProduto3, 
  },
];

const Produto = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Produtos Ecológicos</h1>
      <div className={styles.grid}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={styles.image}
            />
            <h2 className={styles.produtoNome}>{produto.nome}</h2>
            <p className={styles.descricao}>{produto.descricao}</p>
            <p className={styles.preco}>{produto.preco}</p>
            <button className={styles.botao}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produto;