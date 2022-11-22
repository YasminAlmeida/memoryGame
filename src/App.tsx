import * as S from './styles/app.styles';

import Logo from './assets/img/devmemory_logo.png';
import Icon from './assets/svgs/restart.svg';

import {InfoItem} from './components/information';
import {Button} from './components/button';
import { GridItem } from './components/gridItem';

import { useEffect, useState } from 'react';
import { GridType } from './types/gridType';
import { Itens } from './data/itens';


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

    //created slots
    let tempGrid: GridType[] = [];

    for(let i = 0; i < (Itens.length * 2) ;i++)tempGrid.push({
        item: null,
        show: true,
        permanent: false,
      })
    
    //complet slot
      for(let w = 0; w < 2; w++){
        for(let i = 0; i < Itens.length; i++){
          let random = -1;
          while(random < 0 || tempGrid[random].item !== null){
            random = Math.floor(Math.random()*(Itens.length*2));
          }
          tempGrid[random].item = i;
      }
    }
    
    // put inside the state
    setGridItens(tempGrid);

    //start game
    setPlay(true);    
  
  }
  const handleItemClick=(index: number) =>{
    return
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
              {gridItens.map((item, index) => (
              <GridItem 
                key={index} 
                item={item} 
                onClick={()=> handleItemClick(index)}
              />
            ))}
          </S.Grid>
        </S.GridArea>
    </S.Container>
  );
}

export default App;


