import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { FotosProdutosProvider } from 'contextos/FotosProdutos';
import { CarrinhoComprasProvider } from 'contextos/CarrinhoCompras';
import { MenuLateralProvider } from 'contextos/MenuLateral';
 
function RoutesApp() {
  return (
    <BrowserRouter>
    <FotosProdutosProvider>
      <CarrinhoComprasProvider>
        <MenuLateralProvider>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </MenuLateralProvider>
      </CarrinhoComprasProvider>
    </FotosProdutosProvider>
    </BrowserRouter>
  )
}

export default RoutesApp;
