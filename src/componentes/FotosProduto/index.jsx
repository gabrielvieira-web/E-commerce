import styles from './FotosProduto.module.css';
import { useFotosProdutos } from 'contextos/FotosProdutos';

function FotosProdutos() {
  const {fotoAtual, listaTenis, trocaFotoCards, setModal} = useFotosProdutos();

  return (
    listaTenis.length !== 0 && 
    <div className={styles.container}>
      <img 
        src={fotoAtual.length === 0 ? listaTenis[0].fotoProduto : fotoAtual.fotoProduto} 
        alt="imagem de tênis" 
        className={styles.fotoAtual}
        onClick={() => setModal(true)}
      />
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
  )
}

export default FotosProdutos;