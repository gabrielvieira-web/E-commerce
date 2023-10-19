import Botao from 'componentes/Botao';
import styles from './DescricaoProduto.module.css';
import carrinhoCompra from 'assets/icones/icon-cart-branco.svg';
import Input from 'componentes/Input';

function DescricaoProduto() {
  return (
    <div className={styles.container}>
      <h2>Empresa de Tênis</h2>
      <h1>Edição Limitada de Tênis de Outono</h1>
      <p>Estes tênis de perfil baixo são o seu companheiro perfeito para o vestuário casual. Com uma sola exterior de borracha durável, resistirão a tudo o que o tempo possa oferecer.</p>
      <div className={styles.containerPrecos}>
        <div className={styles.containerPromocional}>
          <span className={styles.valorPromocional}>R$125.00</span>
          <span className={styles.desconto}>50%</span>
        </div>
        <span className={styles.valorSemDesconto}>R$250.00</span>
      </div>
      <div className={styles.containerBotoes}>
        <Input />
        <Botao>
          <img src={carrinhoCompra} alt="Icone do carrinho de compra" />
          Adicionar ao Carrinho
        </Botao>
      </div>
    </div>
  )
}

export default DescricaoProduto;