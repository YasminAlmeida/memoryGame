import styled from "styled-components";

export const ContainerBtn = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #1550FF;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1;
  transition: all ease .3s;
  align-items: center;
  justify-content: space-between;
  &:hover {
    opacity: .8;
  }
`
export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, .2);
`
export const Icon = styled.img`
  height: 20px;
  padding: 10px;
`
export const Label = styled.p`
  height: inherit;
  color: #FFF;
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 1.5rem;
  align-items: center
`