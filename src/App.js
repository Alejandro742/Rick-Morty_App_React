import React from 'react';
import Form from './components/Form';
import Character from './components/Character';

function App() {
  // 
  return (
    <main className = 'container text-center'>
      <h1>Personajes Rick & Morty</h1>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">
              Formulario
            </div>
            <div className="card-body">
              <Form
                
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-header">
              Personaje
            </div>
            <div className="card-body">
              <Character 

              />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
