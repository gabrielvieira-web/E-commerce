import { Link } from "react-router-dom";
import styles from './LinksNavegacao.module.css';

function LinksNavegacao() {
  return (
    <nav className={styles.navegacao}>
      <Link to="colecao">
        Coleção
      </Link>
      <Link to="homens">
        Homens
      </Link>
      <Link to="mulheres">
        Mulheres
      </Link>
      <Link to="sobre">
        Sobre
      </Link>
      <Link to="contato">
        Contato
      </Link>
      </nav>
  )
}

export default LinksNavegacao;