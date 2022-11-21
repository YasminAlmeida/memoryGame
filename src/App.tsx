import * as S from './styles/app.styles'
import Logo from './assets/img/devmemory_logo.png'
import {InfoItem} from './components/information'
import {Button} from './components/button'
import Icon from './assets/svgs/restart.svg'
import { useEffect, useState } from 'react'
import { GridType } from './types/gridType'

const App = () => {

  const [play, setPlay] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItens, setGridItens] = useState<GridType[]>([]);
  useEffect(()=> resetCreated(), []);

  const resetCreated = () => {
    //reset
    setTime(0);
    setMoveCount(0);
    setMoveCount(0);

    //criar slots
    let tempGrid: GridType[] = [];

    for(let i = 0; i < 12 ;i++){
      tempGrid.push({
        item: null,
        show: false,
        permanent: false,
      })
    }
    //complet slot

    // put inside the state
    
    //start game
    setPlay(true);    
  }
  return (
    <S.Container>
        <S.Info>
          <S.LogoLink href="/">
            <img src={Logo} width="200" alt="Logo do Jogo"/>
          </S.LogoLink>

          <S.InfoArea>
            <InfoItem label="Time" value="00:00"/>
            <InfoItem label="Moviment" value="0"/>
          </S.InfoArea>
          
          <Button icon={Icon} label='Restart' onClick={resetCreated}/>
        </S.Info>
        <S.GridArea>
          <S.Grid>
          </S.Grid>
        </S.GridArea>
    </S.Container>
  );
}

export default App;
