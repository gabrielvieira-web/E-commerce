import { useFotosProdutos } from 'contextos/FotosProdutos';
import styles from './BotaoSeta.module.css';
 
function BotaoSeta({children}) {
  const { fotoAnterior, proximaFoto, fotoAtual } = useFotosProdutos();
  const botaoEsquerdo = children.props.alt.indexOf('esquerda') != -1;

  return (
    <button 
      className={botaoEsquerdo ? styles.setaEsquerda : styles.setaDireita}
      onClick={() => botaoEsquerdo ? fotoAnterior(fotoAtual) : proximaFoto(fotoAtual)}>
      {children}
    </button>
  )
}

export default BotaoSeta;