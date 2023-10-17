import { useCarrinhoCompras } from 'contextos/CarrinhoCompras';
import styles from './Botao.module.css';

function Botao({children}) {
  const { ativaCarrinho, efetuaCompra} = useCarrinhoCompras();

  return (
    <button className={styles.botao} onClick={() => children === "Finalizar Compra" ? efetuaCompra() : ativaCarrinho()}>
      {children}
    </button>
  )
}

export default Botao;