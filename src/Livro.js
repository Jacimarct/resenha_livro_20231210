// src/Livro.js
import React, { useState } from 'react';
import './Livro.css';
import './botao_muda_cor.css';
import Sinopse from './Sinopse';


  const Livro = ({ imagemSrc, titulo, autor, editora, ano_lancamento, isbn, sinopse, resenha }) => {
  const [mostrarSinopse, setMostrarSinopse] = useState(false);
  const [mostrarResenhaCompleta, setMostrarResenhaCompleta] = useState(false);
  const limiteCaracteresSinopse = 300;
  const limiteCaracteresResenha = 500;
  
  const handleVerSinopse = () => {
    setMostrarSinopse(!mostrarSinopse);
    setMostrarResenhaCompleta(false);
  };

  const handleVerResenhaCompleta = () => {
    setMostrarResenhaCompleta(!mostrarResenhaCompleta);
    setMostrarSinopse(false);
  };

  return (
    <ul className="livros-lista">
      <li className="livro-item">
        <div className="livro-card">
          <img src={imagemSrc} className="Capa_livro" alt={`Capa do ${titulo}`} />
          <div className="livro-info">
            <h1>{titulo}</h1>
            <p>Autor: {autor}</p>
            <p>Editora:{editora}</p>
            <p>Ano de Lançamento:{ano_lancamento}</p>
            <p>ISBN:{isbn}</p>
            <div className="livro-buttons">

              <button
                className={`ver-sinopse ${mostrarSinopse ? 'botao-ativo' : ''}`}
                onClick={handleVerSinopse}
              >
                {mostrarSinopse ? 'Recolher sinopse' : 'Ver sinopse'}
              </button>

              {mostrarSinopse && sinopse.length > limiteCaracteresSinopse && (
                <button className="leia-mais" onClick={handleVerSinopse}>
                  {/* {mostrarSinopse ? 'Recolher sinopse' : 'Leia Mais'} */}
                </button>
              )}

              <button
                className={`ver-resenha ${mostrarResenhaCompleta ? 'botao-ativo' : ''}`}
                onClick={handleVerResenhaCompleta}
              >
                {mostrarResenhaCompleta ? 'Recolher resenha' : 'Ver resenha'}
              </button>

              {mostrarResenhaCompleta && resenha.length > limiteCaracteresResenha && (
                <button className="leia-mais" onClick={handleVerResenhaCompleta}>
                  {mostrarResenhaCompleta ? 'Recolher resenha' : 'Leia Mais'}
                </button>
              )}
            </div>

            {mostrarSinopse && (
              <Sinopse
                conteudo={{
                  tipo: 'sinopse',
                  texto: mostrarSinopse ? sinopse : sinopse.substring(0, limiteCaracteresSinopse) + '...'
                }}
              />
            )}

          </div>
        </div>
      </li>
    </ul>
  );
};
export default Livro;
