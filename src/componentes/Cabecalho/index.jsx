import LinksNavegacao from 'componentes/LinksNavegacao';
import styles from './Cabecalho.module.css';
import carrinhoCompra from 'assets/icones/icon-cart-cinza.svg';
import fotoUsuario from './foto-perfil.png';
import { useCarrinhoCompras } from 'contextos/CarrinhoCompras';
import CarrinhoProduto from 'componentes/CarrinhoProduto';
import menuHamburguer from './icon-menu.svg';
import logo from './logo.svg';

function Cabecalho() {
  const {quantidadeProduto, ativaCarrinho} = useCarrinhoCompras();

  return (
    <header className={styles.cabecalho}>
      <div className={styles.containerNavegacao}>
        <img src={menuHamburguer} alt="foto do menu do site" className={styles.menuHamburguer}/>
        <img src={logo} alt="foto da logo sneakers" className={styles.logo}/>
        <LinksNavegacao />
      </div>
      <div className={styles.containerCarrinho}>
        <button 
          className={styles.carrinhoBotao}
          disabled={quantidadeProduto === 0}
          onClick={() => ativaCarrinho(true)}
        >
          <span 
            className={styles.caixaQuantidadeProduto}
            style={quantidadeProduto === 0 ? {display: 'none'} : {display: 'block'}}
          >
            {quantidadeProduto}
          </span>
          <img src={carrinhoCompra} alt="icone do carrinho de compra" className={styles.carrinhoCompra} />
        </button>
        <CarrinhoProduto />
        <img src={fotoUsuario} alt="foto do usuário Gabriel Vieira" className={styles.fotoUsuario}/>
      </div>
    </header>
  )
}

export default Cabecalho;