import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(0deg, #c71800 10%, #fcc245 100%);
  width: 400px;
  height: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
`;

export const PokemonImage = styled.img`
  width: 50%;
`;

export const ContainerStatus = styled.div`
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.216);
  row-gap: 1rem;
`;

export const StatusDiv = styled.div`
  display: flex;
`;

export const PokemonName = styled.h1``;

export const PokemonStat = styled.p``;

export const FooterStatus = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  column-gap: 5rem;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;
