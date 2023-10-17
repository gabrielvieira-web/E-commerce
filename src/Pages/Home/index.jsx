import styles from './Home.module.css';
import Cabecalho from "componentes/Cabecalho";
import DescricaoProduto from 'componentes/DescricaoProduto';
import DialogCarrosel from 'componentes/ModalCarrosel';
import FotosProdutos from "componentes/FotosProduto";

function Home() {
  return (
    <>
      <Cabecalho />
      <section className={styles.secaoProduto}>
        <FotosProdutos />
        <DescricaoProduto />
      </section>
      <DialogCarrosel />
    </>
  )
}

export default Home;