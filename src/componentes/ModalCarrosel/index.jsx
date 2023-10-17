import styles from './ModalCarrosel.module.css';
import { useFotosProdutos } from "contextos/FotosProdutos";
import close from './icon-close.svg';
import setaEsquerda from './icon-previous.svg';
import setaDireita from './icon-next.svg';

function ModalCarrosel() {
  const {
    fotoAtual, 
    listaTenis, 
    trocaFotoCards, 
    modal, 
    setModal, 
    proximaFoto, 
    fotoAnterior
  } = useFotosProdutos();

  return (
    <>
      {modal && <>
        <div className={styles.overlay}></div>
        <dialog open={modal} className={styles.dialog}>
          <img 
            src={close} 
            alt="icone de fechar" 
            className={styles.close}
            onClick={() => setModal(null)}
          />
          <div className={styles.container}>
            <button 
              className={styles.setaEsquerda}
              onClick={() => fotoAnterior(fotoAtual)}
            >
              <img src={setaEsquerda} alt="icone de seta para a esquerda" />
            </button>
            <img 
              src={fotoAtual.length === 0 ? listaTenis[0].fotoProduto : fotoAtual.fotoProduto} 
              alt="imagem de tênis" 
              className={styles.fotoAtual}
            />
            <button 
              className={styles.setaDireita}
              onClick={() => proximaFoto(fotoAtual)}
            >
              <img src={setaDireita} alt="icone de seta a direita" />
            </button>
            <ul className={styles.listaDeFotos}>
              {listaTenis.map(item => {
                return (
                  <li key={item.id} className={item.ativo ? styles.itemAtivo : ''}>
                    <img 
                      src={item.fotoThumbnail} 
                      alt={item.alt}
                      className={item.ativo ? styles.imgAtivo : ''}
                      onClick={() => trocaFotoCards(item.id)} 
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </dialog>
      </>}
    </>
  )
}

export default ModalCarrosel;