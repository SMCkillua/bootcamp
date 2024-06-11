import React from 'react';
import CharacterTable from './components/TablaDePersonajes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Personajes de rick y morty</h1>
      <CharacterTable />
    </div>
  );
};

export default App;
