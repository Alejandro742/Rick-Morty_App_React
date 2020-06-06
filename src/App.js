import React, { useState } from 'react';
import Form from './components/Form';
import Character from './components/Character';

function App() {
  // character name state
  const [character,saveCharacter] = useState({});



  



  return (
    <main className = 'container text-center p-5'>
      <h1>Personajes Rick & Morty</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">
              Formulario
            </div>
            <div className="card-body p-5">
              <Form
                saveCharacter = {saveCharacter}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-header">
              Personaje
            </div>
            <div className="card-body p-5">
              <Character 
                character = {character}
              />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
