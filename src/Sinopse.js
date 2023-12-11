// src/Sinopse.js
import React from 'react';

const Sinopse = ({ conteudo }) => {
  return (
    <div>
      <h2>{conteudo.tipo === 'sinopse' ? 'Sinopse' : 'Resenha Completa'}</h2>
      <p>{conteudo.texto}</p>
    </div>
  );
};

export default Sinopse;
