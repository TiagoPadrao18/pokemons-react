import {
  Card,
  ContainerStatus,
  PokemonImage,
  PokemonName,
  PokemonStat,
  FooterStatus,
  FooterLeft,
  FooterRight,
  StatusDiv,
} from "./styled";

const CardComponent = ({ pokemon }) => {
  const { name, sprites, stats, height, weight, abilities } = pokemon;

  const pokemonStats = [
    stats[0].base_stat,
    stats[1].base_stat,
    stats[2].base_stat,
    stats[3].base_stat,
    stats[4].base_stat,
    stats[5].base_stat,
  ].map((stat) => {
    return <PokemonStat>{stat}</PokemonStat>;
  });

  const names = [
    "HP",
    "ATTACK",
    "DEFENSE",
    "SPECIAL ATTACK",
    "SPECIAL DEFENSE",
    "SPEED",
    "HEIGHT",
    "WEIGHT",
  ].map((name) => {
    return <p>{name}</p>;
  });

  return (
    <>
      <Card>
        <PokemonImage src={sprites.front_default} alt="" />
        <ContainerStatus>
          <PokemonName>{name}</PokemonName>
          {pokemonStats}
        </ContainerStatus>
        <FooterStatus>
          <FooterLeft>
            <PokemonStat>{abilities[0].ability.name}</PokemonStat>{" "}
          </FooterLeft>
          <FooterRight>
            {" "}
            <PokemonStat>{abilities[1].ability.name}</PokemonStat>{" "}
          </FooterRight>
        </FooterStatus>
      </Card>
    </>
  );
};
export default CardComponent;
