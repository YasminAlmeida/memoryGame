import styled from "styled-components";

type ContainerProps={
  showBackGround:boolean;
}

export const Container = styled.section<ContainerProps>`
  background-color: ${props => props.showBackGround ? "#1515bf" : "#E2E2E2"};
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
type IconProps={
  opacity?:number;
}
export const Icon = styled.img<IconProps>`
  opacity: ${props => props.opacity?? 1};
  width: 80px;
`