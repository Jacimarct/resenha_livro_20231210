// src/App.js
import React from 'react';
import ListaLivros from './ListaLivros';

// import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Livros resenhados</h1>
        <h2>Ao clicar no botão "Ver Sinopse" ou "Ver Resenha", você terá uma introdução e a resenha um pouco mais completa.</h2>

        <h1> Versão 0.0.0.1</h1>
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
