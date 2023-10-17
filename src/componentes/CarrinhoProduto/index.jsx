import Botao from 'componentes/Botao';
import styles from './CarrinhoProduto.module.css';
import iconeExcluir from './icon-delete.svg';
import { useFotosProdutos } from 'contextos/FotosProdutos';
import { useCarrinhoCompras } from 'contextos/CarrinhoCompras';

function CarrinhoProduto() {
  const { listaTenis } = useFotosProdutos();
  const { quantidadeProduto, valorTotalProduto, habilitaCarrinho, excluiProduto } = useCarrinhoCompras();

  return (
    habilitaCarrinho && quantidadeProduto > 0 ? 
      <div className={styles.container} id='containerCarrinho'>
        <h2 className={styles.titulo}>Carrinho</h2>
        <div className={styles.containerProduto}>
          <img src={listaTenis[0].fotoProduto} alt="Imagem do produto Sneakers" className={styles.fotoProduto}/>
          <p>Tênis de edição limitada de Outono</p>
          <p>R$125.00 x {quantidadeProduto}<span>R${valorTotalProduto.toFixed(2)}</span></p>
          <img 
            src={iconeExcluir} 
            alt="icone de lixeira que exclui o produto" 
            className={styles.iconeExcluir}
            onClick={() => excluiProduto()}
          />
          <Botao>
            Finalizar Compra
          </Botao>
        </div>
      </div>
    : ''
  )
}

export default CarrinhoProduto;