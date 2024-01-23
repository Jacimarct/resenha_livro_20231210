// src/Sinopse.js
import React from 'react';

const Resenha = ({ conteudo }) => {
  return (
    <div>
      <h2>{conteudo.tipo === 'resenha' ? 'Resenha' : 'Resenha Completa'}</h2>
      <p>{conteudo.texto}</p>
    </div>
  );
};

export default Resenha;
