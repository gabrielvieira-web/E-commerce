import { useContext } from "react";
import styles from "./ImagensMenu.module.css";
import menuHamburguer from './icon-menu.svg';
import logo from './logo.svg';
import { MenuLateralContext } from "contextos/MenuLateral";

function ImagensMenu() {
  const { setAtivaMenu } = useContext(MenuLateralContext);

  return (
    <>
      <div className={styles.container}>
        <img
          src={menuHamburguer}
          alt="foto do menu do site"
          className={styles.menuHamburguer}
          onClick={() => setAtivaMenu(true)}
        />
        <img 
          src={logo} 
          alt="foto da logo sneakers" 
          className={styles.logo} 
        />
      </div>
    </>
  );
}

export default ImagensMenu;
