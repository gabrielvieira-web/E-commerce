import styles from "./FotosProduto.module.css";
import { useFotosProdutos } from "contextos/FotosProdutos";
import BotaoSeta from "componentes/BotaoSeta";
import setaEsquerda from "assets/icones/icon-previous.svg";
import setaDireita from "assets/icones/icon-next.svg";

function FotosProdutos() {
  const {
    fotoAtual,
    listaTenis,
    trocaFotoCards,
    setModal
  } = useFotosProdutos();

  return (
    <div className={styles.container}>
      <BotaoSeta botaoSetaHome={true}>
        <img src={setaEsquerda} alt="icone de seta para a esquerda" />
      </BotaoSeta>
      <img
        src={fotoAtual.length === 0 ? listaTenis[0].fotoProduto : fotoAtual.fotoProduto}
        alt="imagem de tênis"
        className={styles.fotoAtual}
        onClick={() => setModal(true)}
      />
      <BotaoSeta botaoSetaHome={true}>
        <img src={setaDireita} alt="icone de seta a direita" />
      </BotaoSeta>
      <ul className={styles.listaDeFotos}>
        {listaTenis.map((item) => {
          return (
            <li key={item.id} className={item.ativo ? styles.itemAtivo : ""}>
              <img
                src={item.fotoThumbnail}
                alt={item.alt}
                className={item.ativo ? styles.imgAtivo : ""}
                onClick={() => trocaFotoCards(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FotosProdutos;
