import { useContext } from 'react';
import styles from './MenuLateral.module.css';
import LinksNavegacao from 'componentes/LinksNavegacao';
import { MenuLateralContext } from 'contextos/MenuLateral';
import close from "assets/icones/icon-close.svg";

function MenuLateral() {
  const { ativaMenu, setAtivaMenu } = useContext(MenuLateralContext);

  return (
    <div 
      className={styles.container} 
      style={ 
        ativaMenu ? {transition: 'ease .4s', transform: 'translateX(0px)'} 
        : {transition: 'ease .4s',transform: 'translateX(-100%)'}
      }
    >
      <img 
        src={close} 
        alt="icone de fechar o menu" 
        className={styles.close}
        onClick={() => setAtivaMenu(false)}
      />
      <LinksNavegacao />
    </div>
  )
}

export default MenuLateral;