import { createContext, useContext, useEffect, useState } from "react";

const CarrinhoComprasContext = createContext();
CarrinhoComprasContext.displayName = 'Carrinho Compras';

export const CarrinhoComprasProvider = ({children}) => {
  const [quantidadeProduto, setQuantidadeProduto] = useState(0);
  const [valorTotalProduto, setValorTotalProduto] = useState(125.00);
  const [habilitaCarrinho, setHabilitaCarrinho] = useState(false);

  return (
    <CarrinhoComprasContext.Provider 
      value={{
        quantidadeProduto, 
        setQuantidadeProduto,
        valorTotalProduto,
        setValorTotalProduto,
        habilitaCarrinho,
        setHabilitaCarrinho
      }}>
      {children}
    </CarrinhoComprasContext.Provider>
  )
}

export const useCarrinhoCompras = () => {
  const {
    quantidadeProduto, 
    setQuantidadeProduto, 
    valorTotalProduto, 
    setValorTotalProduto,
    habilitaCarrinho,
    setHabilitaCarrinho
  } = useContext(CarrinhoComprasContext);

  function multiplicaValorProduto(quantidade) {
    const novoValorProduto = 125.00 * quantidade;
    setValorTotalProduto(novoValorProduto);
  }

  function removeQuantidade() {
    const quantidade = quantidadeProduto - 1;
    setQuantidadeProduto(quantidade);
    multiplicaValorProduto(quantidade)
  }

  function adicionaQuantidade() {
    const quantidade = quantidadeProduto + 1;
    setQuantidadeProduto(quantidade);
    multiplicaValorProduto(quantidade);
  }

  function ativaCarrinho() {
    if(quantidadeProduto === 0) {
      alert("Informe a quantidade do produto, para adicionar ao carrinho!")
    } else {
      setHabilitaCarrinho(true)
    }
  }

  function excluiProduto() {
    setQuantidadeProduto(0)
    setValorTotalProduto(125.00)
  }

  function efetuaCompra() {
    alert("Compra finalizada com sucesso!");
    excluiProduto();
  }

  useEffect(() => {
    if (quantidadeProduto === 0) {
      setHabilitaCarrinho(false)
    } 
  }, [quantidadeProduto, setHabilitaCarrinho])


  return {
    quantidadeProduto, 
    removeQuantidade,
    adicionaQuantidade,
    valorTotalProduto,
    habilitaCarrinho,
    ativaCarrinho,
    excluiProduto,
    efetuaCompra
  }
}