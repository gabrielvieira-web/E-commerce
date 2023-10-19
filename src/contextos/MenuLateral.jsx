import { createContext, useState } from 'react'

export const MenuLateralContext = createContext();
MenuLateralContext.displayName = "Menu Lateral";

export const MenuLateralProvider = ({children}) => {
  const [ativaMenu, setAtivaMenu] = useState(false);

  return (
    <MenuLateralContext.Provider value={{ativaMenu, setAtivaMenu}}>
      {children}
    </MenuLateralContext.Provider>
  )
}