import { createContext, useContext, useState } from "react";
import tenis from 'json/tenis.json';

export const FotosProdutosContext = createContext();
FotosProdutosContext.displayName = 'Fotos Produtos';

export const FotosProdutosProvider = ({ children }) => {
  const [listaTenis, setListaTenis] = useState(tenis);
  const [fotoAtual, setFotoAtual] = useState([]);
  const [modal, setModal] = useState(null);

  return (
    <FotosProdutosContext.Provider 
      value={{ 
        fotoAtual, 
        setFotoAtual, 
        listaTenis, 
        setListaTenis, 
        modal, 
        setModal 
      }}
    >
      {children}
    </FotosProdutosContext.Provider>
  )
}

export const useFotosProdutos = () => {
  const {
    fotoAtual, 
    setFotoAtual, 
    listaTenis, 
    setListaTenis, 
    modal, 
    setModal
  } = useContext(FotosProdutosContext);

  function atualizaLista(id) {
    const listaAtualizada = listaTenis.map(item => {
      if(item.id === id) {
        return {
          ...item,
          ativo: true
        }
      }
      return {
        ...item,
        ativo: false
      };
    })
    setListaTenis(listaAtualizada)
  }

  function trocaFotoCards(id) {
    atualizaLista(id);

    listaTenis.filter(item => {
      if(item.id === id) setFotoAtual(item)
    })
  }

  function mudaFotoCarrosel( fotoId, idVoltaParaUltimo ) {
    const fotoAtualVazia = fotoAtual.length === 0;

    if(fotoAtualVazia) {
      atualizaLista(idVoltaParaUltimo);
  
      listaTenis.filter(item => {
        if(item.id === idVoltaParaUltimo) setFotoAtual(item)
      })  
    } else {
      atualizaLista(fotoId);

      listaTenis.filter(item => {
        if(item.id === fotoId) setFotoAtual(item)
      })  
    }
  }
  
  function fotoAnterior(fotoAtual) {
    let fotoAnteriorId = fotoAtual.id === 1 ? 4 : fotoAtual.id - 1;

    mudaFotoCarrosel(fotoAnteriorId, 4);
  }

  function proximaFoto(fotoAtual) {
    let proximaFotoId = fotoAtual.id === 4 ? 1 : fotoAtual.id + 1;

    mudaFotoCarrosel(proximaFotoId, 1);
  }

  return {
    fotoAtual,
    listaTenis,
    trocaFotoCards,
    modal,
    setModal,
    fotoAnterior,
    proximaFoto
  }

}
