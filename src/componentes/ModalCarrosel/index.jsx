import FotosProdutos from "componentes/FotosProduto";
import styles from "./ModalCarrosel.module.css";
import { useFotosProdutos } from "contextos/FotosProdutos";
import close from "assets/icones/icon-close.svg";
import setaEsquerda from "assets/icones/icon-previous.svg";
import setaDireita from "assets/icones/icon-next.svg";
import BotaoSeta from "componentes/BotaoSeta";

function ModalCarrosel() {
  const { modal, setModal } = useFotosProdutos();

  return (
    <>
      {modal && (
        <>
          <div className={styles.overlay}></div>
          <dialog open={modal} className={styles.dialog}>
            <img
              src={close}
              alt="icone de fechar"
              className={styles.close}
              onClick={() => setModal(null)}
            />
            <BotaoSeta>
              <img src={setaEsquerda} alt="icone de seta para a esquerda" />
            </BotaoSeta>
            <FotosProdutos />
            <BotaoSeta>
              <img src={setaDireita} alt="icone de seta a direita" />
            </BotaoSeta>
          </dialog>
        </>
      )}
    </>
  );
}

export default ModalCarrosel;
