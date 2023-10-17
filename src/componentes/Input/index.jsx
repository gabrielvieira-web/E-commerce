import styles from './Input.module.css';

import iconeSubtracao from 'assets/icones/icon-minus.svg';
import iconeAdicao from 'assets/icones/icon-plus.svg';
import { useCarrinhoCompras } from 'contextos/CarrinhoCompras';

function Input() {
  const {quantidadeProduto, removeQuantidade, adicionaQuantidade} = useCarrinhoCompras();
  
  return (
    <div className={styles.container}> 
      <button 
        className={styles.botao}
        onClick={() => removeQuantidade()}
        disabled={quantidadeProduto === 0}
      >
        <img src={iconeSubtracao} alt="icone de Subtração" />
      </button>
      <span>{quantidadeProduto}</span>
      <button 
        className={styles.botao}
        onClick={() => adicionaQuantidade()}
      >
        <img src={iconeAdicao} alt="icone de Adição" />
      </button>
    </div>
  )
}

export default Input 