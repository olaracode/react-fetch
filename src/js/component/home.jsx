import React, { useState } from "react";

// Nuestro endpoint sacado de  https://rickandmortyapi.com/documentation
const characterListUrl = "https://rickandmortyapi.com/api/character";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);

  // Declaramos una funcion que maneja el evento click
  // Manejo directo de la promesa usando .then
  const handleClick = () => {
    fetch(characterListUrl)
      .then((response) => response.json()) // Traduzco a json
      .then((data) => setCharacterList(data.results)); // Asigno los resultados a mi estado
  };

  // Lo mismo que en handle click pero usando otra sintaxis
  // Manejo de la promesa usando Async/Await
  const asyncHandleClick = async () => {
    const respuesta = await fetch(characterListUrl); // La respuesta del servidor

    // Se espera a que se cumpla la promesa anterior
    const informacion = await respuesta.json(); // Traducimos a JSON
    setCharacterList(informacion.results); // Asignamos la informacion al estado
  };
  return (
    <div className="text-center">
      <p>Personajes de rick y morty</p>
      <button onClick={() => asyncHandleClick()}>Buscar personajes</button>
      {characterList.map((personaje) => {
        return <p key={personaje.id}>{personaje.name}</p>;
      })}
    </div>
  );
};

export default Home;
