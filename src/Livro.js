// src/Livro.js
import React from 'react';
import './Livro.css';

const Livro = ({ imagemSrc, titulo, autor, resenha }) => {
  return (
  <ul className="livros-lista">
    <li className="livro-item">
      <div className="livro-card">
        <img src={imagemSrc} className="Capa_livro" alt={`Capa do ${titulo}`} />
        <div className="livro-info">
          <h1>{titulo}</h1>
          <p>Autor: {autor}</p>
          <p>{resenha}</p>
        </div>
        <div className="livro-buttons">
          <button className="ver-sinopse">Ver Sinopse</button>
          <button className="ver-resenha">Ver Resenha Completa</button>
        </div>
      </div>
    </li>
  </ul>
  );
};

export default Livro;