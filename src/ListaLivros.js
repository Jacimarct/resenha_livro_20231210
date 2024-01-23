// src/ListaLivros.js
import React from 'react';
import Livro from './Livro';

const ListaLivros = () => {
  const livros = [
    {
      imagemSrc: '/Imagens/a_menina_que_nao_sabia_ler.jpg',
      titulo: 'A menina que não sabia ler',
      autor: 'John Harding',
      editora: 'Leya',
      ano_lancamento: '2010',
      isbn: '9788562936111',
      sinopse:'',
      
      resenha:  'Em uma distante e escura mansão, onde nada é o que parece, \n'+
                'a pequena Florence é negligenciada pelo seu tutor e tio. \n'+
                'Guardada como um brinquedo, a menina passa seus dias \n'+
                'perambulando pelos corredores e inventando histórias que \n'+
                'conta a si mesma, em uma rotina tediosa e desinteressante. \n'+
                'Até que um dia Florence encontra a biblioteca proibida da \n'+
                'mansão. E passa a devorar os livros em segredo. \n' +
                // '<span id='pontos'>... </span><span id='mais'> \n'+
                'Mas existem mistérios naquela casa que jamais deveriam ser \n'+
                'revelados. Quem eram seus pais? Por que Florence sonha sempre \n'+
                'com uma misteriosa mulher ameaçando Giles, seu irmão caçula? \n'+
                'O que esconde a Srta. Taylor? E por que o tio a proibiu de ler? \n'+
                'Florence precisa reunir todas as pistas possí­veis e encontrar \n'+
                'respostas que ajudem a defender seu irmão e preservar sua \n'+
                'paixão secreta pelos livros - únicos companheiros e \n'+
                'confidentes - antes que alguém descubra quem ousou abrir as \n'+
                'portas do mundo literário. Ou será que tudo isso não seria \n'+
                'somente delí­rios de uma jovem com muita imaginação?',
    },
    {
        imagemSrc: '/Imagens/a_decima_profecia.jpg',
        titulo: 'A décima profecia',
        autor: 'James Redfield',
        editora: 'Arqueiro',
        ano_lancamento: '1996',
        isbn: '9788573602346',
        sinopse:  '"A Décima Profecia" é um livro escrito por James Redfield. \n'+
                  'Lançado em 1996, ele é a sequência de "A Profecia Celestina", \n'+
                  'que se tornou um best-seller internacional. O livro é categorizado \n'+
                  'como uma obra de ficção espiritual e aventura, com elementos que \n'+
                  'exploram temas esotéricos e metafísicos.',        

        resenha:  '"A Décima Profecia" continua a jornada espiritual iniciada no primeiro \n'+
                  'livro, explorando conceitos como a busca pela verdade, sincronicidade, \n'+
                  'energia espiritual e a evolução da consciência humana. A história se \n'+
                  'desenrola em um cenário místico, onde os personagens enfrentam desafios e \n'+
                  'descobertas que os levam a compreender a importância de viver em sintonia \n'+
                  'com as forças espirituais do universo. \n'+
                  'O autor, James Redfield, tece uma narrativa envolvente que combina elementos \n'+
                  'de aventura com insights espirituais. A trama é impulsionada por uma série de \n'+
                  'visões proféticas que orientam os personagens em sua jornada, proporcionando \n'+
                  'reflexões sobre o propósito da vida e o despertar espiritual..',
      },
      {
        imagemSrc: '/Imagens/como_agua_para_chocolate.jpg',
        titulo: 'A décima profecia',
        autor: '',
        editora: '',
        ano_lancamento: '',
        isbn: '',
        sinopse:'Livro 1 Livro 1 Livro 1 Livro 1',        
        resenha: 'Uma breve descrição do Livro 1.',
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
          editora={livro.editora}
          ano_lancamento={livro.ano_lancamento}
          isbn={livro.isbn}
  
          sinopse={livro.sinopse}
          resenha={livro.resenha}
        />
      ))}
    </ul>
  );
};

export default ListaLivros;
