import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 750px;
  margin: auto;
  padding: 50px 0;
  display: flex;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
`;
export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;
  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;
export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 430px;
`;

export const ButtonPause = styled.button`
  border: 0;
  background-color: #1550FF;
  color: #fff;
  font-size: 1rem;
  margin-top: 40px;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  @media (max-width: 750px) {
    margin-top: 20px;
  }
`