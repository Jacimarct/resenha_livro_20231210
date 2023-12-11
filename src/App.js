// src/App.js
import React from 'react';
import ListaLivros from './ListaLivros';

import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Livros resenhados</h1>
        <h2>Ao passar o mouse sobre a imagem, você terá uma introdução. Ao clicar, terá a resenha completa.</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
      <main>
        <ListaLivros />
      </main>
      <footer>
        {/* Rodapé com links, informações, etc. */}
      </footer>
    </div>
  );
};

export default App;
