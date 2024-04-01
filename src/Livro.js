// src/Livro.js
import React, { useState } from 'react';
import './Livro.css';
import './botao_muda_cor.css';
import Sinopse from './Sinopse';
// import enviarDadosParaServidor from './api_enviar_avaliacao';

// Livro.js
// eslint-disable-next-line no-unused-vars
//import Resenha from './resenha';

  const Livro = ({ imagemSrc, titulo, autor, editora, ano_lancamento, isbn, sinopse, resenha }) => {
  const [mostrarSinopse, setMostrarSinopse] = useState(false);
  //const [mostrarResenhaCompleta, setMostrarResenhaCompleta] = useState([]);
  const [mostrarResenhaCompleta, setMostrarResenhaCompleta] = useState(false);
 // eslint-disable-next-line
  const [mostrarFormAvaliacao, setMostrarFormAvaliacao] = useState(false);
  //const [ setMostrarFormAvaliacao] = useState();
  const [avaliacoes, setAvaliacoes] = useState([]);  // Adicione esta linha  

  const limiteCaracteresSinopse = 300;
  const limiteCaracteresResenha = 1000;
// ********************************************************
  const pontuacaoMaxima = 5; // Defina o valor máximo da pontuação
  const pontuacaoMinima = 1; // Defina o valor mínimo da pontuação
// ********************************************************

  

  const handleVerSinopse = () => {
    setMostrarSinopse(!mostrarSinopse);
    setMostrarResenhaCompleta(false);
  };

  const handleVerResenhaCompleta = () => {
    setMostrarResenhaCompleta(!mostrarResenhaCompleta);
    setMostrarSinopse(false);
  };

  const [usuario, setUsuario] = useState('');
  const [pontuacao, setPontuacao] = useState(0);
  const [comentario, setComentario] = useState('');
  const [dataHoraFormatada, setdataHoraFormatada]= useState('');

  const handleEnviarAvaliacao = (usuario, pontuacao, comentario) => {
    
  // const dataHoraAtual = new Date().toISOString();

      // Linha 46: Modificada - Obtenção da data e hora atual
      const dataHoraAtual = new Date();
      // Linhas 48-52: Adicionadas - Obtenção dos componentes individuais da data e hora
      const dia = dataHoraAtual.getDate().toString().padStart(2, '0');
      const mes = (dataHoraAtual.getMonth() + 1).toString().padStart(2, '0'); // Mês é indexado a partir de zero
      const ano = dataHoraAtual.getFullYear();
      const horas = dataHoraAtual.getHours().toString().padStart(2, '0');
      const minutos = dataHoraAtual.getMinutes().toString().padStart(2, '0');
      // Linha 54: Adicionada - Formatação da data e hora no formato desejado
      const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  // document.getElementById('data_hora_avaliacao').value = dataHoraAtual;

    const novaAvaliacao = { usuario, pontuacao, comentario, dataHoraFormatada };
    setAvaliacoes([...avaliacoes, novaAvaliacao]);
    setMostrarFormAvaliacao(false); // Esconde o formulário após enviar a avaliação
    // Limpa os campos do formulário
    setUsuario('');
    setPontuacao(1); //********************************************************************************************************************** */
    setComentario('');
    setdataHoraFormatada('');
  };
//*************************************************************************
  const renderizarEstrelas = (pontuacao) => {
    const estrelas = '★'.repeat(pontuacao) + '☆'.repeat(5 - pontuacao);
    return <span>{estrelas}</span>;
  };

  //*************************************************************************//*************************************************************************
 
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

              <button
                className={`ver-resenha ${mostrarResenhaCompleta ? 'botao-ativo' : ''}`}
                onClick={handleVerResenhaCompleta}
              >
                {mostrarResenhaCompleta ? 'Recolher resenha' : 'Ver resenha'}
              </button>

              <button onClick={() => setMostrarFormAvaliacao(true)}>
                  Quero Avaliar
                </button>
              </div>

                {/* Formulário de Avaliação */}
                {mostrarFormAvaliacao && (
                          <div>
                            <label>
                              Nome do Leitor
                              <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value) } />
                            </label>
                            <br />
                            <label><br />
                              Pontuação:
                              <input 
                              type="number" 
                              value={pontuacao} 
                              min={pontuacaoMinima}
                              max={pontuacaoMaxima}
                              onChange={(e) => {
                                const novaPontuacao = Math.max(pontuacaoMinima, Math.min(pontuacaoMaxima, e.target.value));
                                setPontuacao(novaPontuacao);
                              }}
                              />
                              <br />
                            </label>
                            <br />
                            <label>
                              Comentário:
                              <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
                            </label>
                            <br />
                           
                          </div>
                )}  

            {mostrarSinopse && (
              <Sinopse
                conteudo={{
                  tipo: 'sinopse',
                  texto: mostrarSinopse ? sinopse : sinopse.substring(0, limiteCaracteresSinopse) + '...'
                }}
              />
            )}

            {mostrarResenhaCompleta && (
              <div>
                <p>
                  {resenha.substring(0, limiteCaracteresResenha) + '... '}
                  {/* <button onClick={handleVerResenhaCompleta}>Leia Mais</button> */}
                </p>
              </div>

            )}            

            {mostrarFormAvaliacao && (
              <div>
                <h2>Formulário de Avaliação</h2>
                {/* Aqui você pode adicionar os campos do formulário de avaliação */}

                <button onClick={() => handleEnviarAvaliacao(`${usuario}`, `${pontuacao}`, `${comentario}`, `${dataHoraFormatada}`)}>
                  Enviar Avaliação
                </button>

              </div>
            )}

            {/* {/* Exibição de Avaliações dos Leitores */}
            <div>
              <h2>Avaliações dos Leitores</h2>
              {avaliacoes.length === 0 ? (
                <p>Ainda não há avaliações para este livro.</p>
              ) : (
                <ul>
                  {avaliacoes.map((avaliacao, index) => (                  
                    <li key={index}>
                    <p><strong>Leitor<br /></strong> {avaliacao.usuario}</p>
                    <p><strong>Pontuação<br /></strong> {renderizarEstrelas(avaliacao.pontuacao)} estrelas</p>
                    <p><strong>Comentário<br /></strong> {avaliacao.comentario}</p>
                    <p><strong>Publicado em<br /></strong> {avaliacao.dataHoraFormatada}</p>
                  </li>
))}
                </ul>
              )}
            </div> 
          </div>
        </div>
      </li>
    </ul>
  );
};
export default Livro;
