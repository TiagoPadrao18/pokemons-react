import React, { useEffect, useState } from "react";
import CardComponent from "../../components/Card";
import { getPokemon } from "../../api/pokemon/index";

const MainPage = () => {
  const [pokemon, setpokemon] = useState();

  useEffect(() => {
    getPokemon("flareon").then((res) => {
      setpokemon(res.data);
    });
  }, [pokemon,setpokemon]);

  return (
    <>
      {pokemon ? <CardComponent pokemon={pokemon}/> : <p>loading</p> }
    </>
  );
};

export default MainPage;
