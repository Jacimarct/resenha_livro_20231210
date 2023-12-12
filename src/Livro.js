// src/Livro.js
import React, {useState} from 'react';
import './Livro.css';
import './botao_muda_cor.css'
import Sinopse from './Sinopse';

const Livro = ({ imagemSrc, titulo, autor, resenha, sinopse }) => {
  const [mostrarSinopse, setMostrarSinopse] = useState(false);
  const [mostrarResenhaCompleta, setMostrarResenhaCompleta] = useState(false);


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
          <div className="livro-buttons">

              <button 
              className={`ver-sinopse ${mostrarSinopse ? 'botao-ativo' : ''}`}
              onClick={handleVerSinopse}
              >
              {mostrarSinopse ? 'Reconher sinopse' : 'Ver sinopse'}
              </button>

              <button 
              className={`ver-resenha ${mostrarResenhaCompleta ? 'botao-ativo' : ''}`}
              onClick={handleVerResenhaCompleta}
              >
                {mostrarResenhaCompleta ? 'Recolher resenha' : 'Ver resenha'}
              </button>
            </div>

            {mostrarSinopse && <Sinopse conteudo={{ tipo: 'sinopse', texto: sinopse }} />}
            {mostrarResenhaCompleta && (
               <Sinopse conteudo={{ tipo: 'resenha', texto: resenha }} />
              )}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Livro;