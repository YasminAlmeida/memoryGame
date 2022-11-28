import * as S from './styles/app.styles';

import Logo from './assets/img/devmemory_logo.png';
import Icon from './assets/svgs/restart.svg';

import { InfoItem } from './components/information';
import { Button } from './components/button';
import { GridItem } from './components/gridItem';

import { useEffect, useState } from 'react';
import { GridType } from './types/gridType';
import { Itens } from './data/itens';
import { FormatTime } from './helpers/formateTime';

const App = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItens, setGridItens] = useState<GridType[]>([]);

  useEffect(() => resetCreated(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (play) setTime(time + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [play, time]);

  //verify if the card is the same
  useEffect(() => {
    if (showCount === 2) {
      let opened = gridItens.filter((item) => item.show === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItens];
          for (let i in tmpGrid) {
            if (tmpGrid[i].show) {
              tmpGrid[i].permanent = true;
              tmpGrid[i].show = false;
            }
          }
          setGridItens(tmpGrid);
          setShowCount(0);
        }
      }
    }
  }, [showCount, gridItens]);
  ////apagar depois
  const StopTimer = () => {
    setPlay(false);
    setTime(0);
    setMoveCount(0);
    setShowCount(0);
  };
  const resetCreated = () => {
    //reset
    setTime(0);
    setMoveCount(0);
    setShowCount(0);

    //created slots
    let tempGrid: GridType[] = [];

    for (let i = 0; i < Itens.length * 2; i++)
      tempGrid.push({
        item: null,
        show: false,
        permanent: false,
      });

    //complet slot
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < Itens.length; i++) {
        let random = -1;
        while (random < 0 || tempGrid[random].item !== null) {
          random = Math.floor(Math.random() * (Itens.length * 2));
        }
        tempGrid[random].item = i;
      }
    }

    // put inside the state
    setGridItens(tempGrid);

    //start game
    setPlay(true);
  };

  const handleItemClick = (index: number) => {
    if (play && index !== null && showCount < 2) {
      let tempGrid = [...gridItens];
      if (
        tempGrid[index].permanent === false &&
        tempGrid[index].show === false
      ) {
        tempGrid[index].show = true;
        setShowCount(showCount + 1);
      }
      setGridItens(tempGrid);
    }
  };

  return (
    <S.Container>
      <S.Info>
        <S.LogoLink href="/">
          <img src={Logo} width="200" alt="Logo do Jogo" />
        </S.LogoLink>
        <S.InfoArea>
          <InfoItem label="Time" value={FormatTime(time)} />
          <InfoItem label="Moviment" value="0" />
        </S.InfoArea>
        <Button icon={Icon} label="Restart" onClick={resetCreated} />
        /apagar depois
        <button onClick={StopTimer}>Stop</button>
      </S.Info>
      <S.GridArea>
        <S.Grid>
          {gridItens.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </S.Grid>
      </S.GridArea>
    </S.Container>
  );
};

export default App;
