// src/ListaLivros.js
import React from 'react';
import Livro from './Livro';

const ListaLivros = () => {
  const livros = [
    {
      imagemSrc: '/Imagens/a_menina_que_nao_sabia_ler.jpg',
      titulo: 'A menina que não sabia ler 2',
      autor: 'Maria celia olivier alves tinelli 2',
      resenha: 'Uma breve descrição do Livro 2.'
    },
    {
        imagemSrc: '/Imagens/a_decima_profecia.jpg',
        titulo: 'A décima profecia 1',
        autor: 'Jacimar carlos tinelli 1',
        resenha: 'Uma breve descrição do Livro 1.'
      },
  
    // Adicione mais livros conforme necessário
  ];

  return (
    <ul className="livros-lista">
      {livros.map((livro, index) => (
        <Livro
          key={index}
          imagemSrc={livro.imagemSrc}
          titulo={livro.titulo}
          autor={livro.autor}
          resenha={livro.resenha}
        />
      ))}
    </ul>
  );
};

export default ListaLivros;
