import * as S from './styles/app.styles'
import Logo from './assets/img/devmemory_logo.png'
import {InfoItem} from './components/information'
const App = () => {
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
          
          <button>Restart</button>
        </S.Info>
        <S.GridArea>
          ...
        </S.GridArea>
    </S.Container>
  );
}

export default App;
