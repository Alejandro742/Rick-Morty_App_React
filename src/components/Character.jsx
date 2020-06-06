import React, { Fragment, useState } from "react";

const Character = ({ character }) => {
  //character state

  return (
    <Fragment>
      <p>
        Nombre: <span id="nombre-span">{character.name}</span>
      </p>
      <p>
        Estado: <span id="estado-span">{character.status}</span>
      </p>
      <p>
        Género: <span id="especie-span">{character.gender}</span>
      </p>
      <p>
        Especie: <span id="especie-span">{character.species}</span>
      </p>
      <img src={character.image} alt="imagen_personaje"/>
    </Fragment>
  );
};

export default Character;
