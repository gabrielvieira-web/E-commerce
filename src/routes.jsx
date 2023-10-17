import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { FotosProdutosProvider } from 'contextos/FotosProdutos';
import { CarrinhoComprasProvider } from 'contextos/CarrinhoCompras';
 
function RoutesApp() {
  return (
    <BrowserRouter>
    <FotosProdutosProvider>
      <CarrinhoComprasProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </CarrinhoComprasProvider>
    </FotosProdutosProvider>
    </BrowserRouter>
  )
}

export default RoutesApp;
