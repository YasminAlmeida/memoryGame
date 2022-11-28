import * as S from './styles';
// import Icon from '../../assets/svgs/restart.svg'
type Props = {
  label: string;
  icon?: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, icon, onClick }: Props) => {
  return (
    <S.ContainerBtn onClick={onClick}>
      {icon && (
        <S.IconArea>
          <S.Icon src={icon} />
        </S.IconArea>
      )}

      <S.Label>{label}</S.Label>
    </S.ContainerBtn>
  );
};
