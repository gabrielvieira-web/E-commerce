import { useFotosProdutos } from 'contextos/FotosProdutos';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  position: absolute;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  left: ${props => props.$botaoEsquerdo ? '-4%' : '96%'};
  top: 38%;
  display: ${props => props.$botaoSetaHome ? 'none' : 'block'};

  img {
    position: relative;
    width: 10px;
    top: 1px;
    left: ${props => props.$botaoEsquerdo ? '-1px' : '1px'};
  }

  @media screen and (max-width: 768px) {
    display: ${props => props.$botaoSetaHome ? 'block' : 'none'};
    left: ${props => props.$botaoEsquerdo ? '4%' : '85%'};
    box-shadow: 3px 5px 15px 2px #00000036;
    width: 45px;
    height: 45px;

    img {
      width: 12px;
    }
  }
` 
 
function BotaoSeta({children, botaoSetaHome}) {
  const { fotoAnterior, proximaFoto, fotoAtual } = useFotosProdutos();
  const botaoEsquerdo = children.props.alt.indexOf('esquerda') != -1;

  return (
    <BotaoEstilizado
      $botaoEsquerdo={botaoEsquerdo}
      $botaoSetaHome={botaoSetaHome} 
      onClick={() => botaoEsquerdo ? fotoAnterior(fotoAtual) : proximaFoto(fotoAtual)}>
      {children}
    </BotaoEstilizado>
  )
}

export default BotaoSeta;