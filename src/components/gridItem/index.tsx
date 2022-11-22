import * as S from './styles'

import {GridType} from '../../types/gridType'

import b7svg from '../../assets/svgs/b7.svg'

import {Itens} from '../../data/itens'
type Props = {
  item: GridType,
  onClick: () => void,
}
export const GridItem = ({item, onClick}: Props) => {
  return(
    <S.Container onClick={onClick}>
      {item.permanent === false && item.show === false && (
        <S.Icon src={b7svg} alt='logo do cartão de jogo'/>
      )}
      {(item.permanent || item.show) && item.item !== null && (
        <S.Icon src={Itens[item.item].icon} alt={Itens[item.item].name}/>
      )}
    </S.Container>
  )
}