import React, { Fragment, useState } from "react";
import Message from "./Mensaje";

const Form = ({ saveCharacter }) => {
  //state para obtener nombre del form
  const [name, getName] = useState("");
  // state para manejar error
  const [error, updateError] = useState(false);

  const actualizarState = (e) => {
    getName(e.target.value);
  };

  const submitName = (e) => {
    e.preventDefault();
    //verofy if the form is not empty
    if (name.trim() === "") {
      updateError(true);
      return;
    }
    //clear error state
    updateError(false);

    //clean form
    getName("");
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const character = {
          name: data.results[0].name,
          status: data.results[0].status,
          species: data.results[0].species,
          gender: data.results[0].gender,
          image: data.results[0].image,
        };
        saveCharacter(character);
      });
  };

  return (
    <Fragment>
      {error ? <Message msg="Campo Vacío" /> : null}
      <form onSubmit={submitName}>
        <div className="form-group">
          <label htmlFor="personaje">Nombre del Personaje</label>
          <input
            type="text"
            name="name"
            className="form-control fntsz-secundary"
            autoFocus
            placeholder="Nombre del Personaje"
            onChange={actualizarState}
            value={name}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="form-group btn btn-primary btn-block fntsz-primary"
          >
            Buscar
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
