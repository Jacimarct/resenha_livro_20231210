// src/ListaLivros.js
import React from 'react';
import Livro from './Livro';

const ListaLivros = () => {
  const livros = [
    {
      imagemSrc: '/Imagens/a_menina_que_nao_sabia_ler.jpg',
      titulo: 'A menina que não sabia ler',
      autor: 'John Harding',
      editora: 'Bertrand Brasil',
      ano_lancamento: '2009',
      isbn: '9788528612225',
      
      sinopse:'"A Menina que Não Sabia Ler" é um livro escrito por John Harding,\n'+
              'um autor britânico. Publicado em 2009, o livro mistura elementos de \n'+
              'suspense, mistério e drama, criando uma atmosfera envolvente e misteriosa. \n'+
              'A obra destaca-se por sua narrativa intrigante e personagens cativantes.\n'+
              'É recomendado para aqueles que apreciam histórias envolventes, com uma \n'+
              'mistura de elementos psicológicos e góticos. O livro proporciona uma \n'+
              'experiência única de leitura, desafiando as fronteiras entre a realidade \n'+
              'e a imaginação.',
      
      resenha:'A trama se desenrola na Inglaterra vitoriana e segue a história de Florence \n'+
              'Stoker, uma jovem que foi encontrada abandonada em uma estação de trem e acolhida \n'+
              'por uma família. A protagonista cresce em uma casa tranquila, mas sua vida toma um \n'+
              'rumo sombrio quando ela começa a ter visões e pesadelos perturbadores. Florence se vê \n'+
              'envolvida em uma trama de mistério que a leva a descobrir segredos sombrios sobre seu \n'+
              'próprio passado e o de sua família adotiva.\n'+
              'O autor tece uma narrativa habilidosa, explorando temas como o poder da imaginação, \n'+
              'o impacto das histórias na mente humana e os limites entre a realidade e a fantasia. \n'+
              'O livro mantém os leitores envolvidos ao longo da história, combinando elementos \n'+
              'góticos com um toque psicológico.',
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
        titulo: 'COMO ÁGUA PARA CHOCOLATE',
        autor: 'Laura Esquivel',
        editora: 'Martins Fontes',
        ano_lancamento: '1989',
        isbn: '9788533612921',

        sinopse:'"Como Água para Chocolate" é um romance escrito pela autora mexicana Laura Esquivel. \n'+
                'Publicado em 1989, o livro combina elementos de realismo mágico, romance e culinária \n'+
                'para contar a história da jovem Tita De La Garza, que vive no México durante os \n'+
                'turbulentos anos da Revolução Mexicana.\n'+
                'É uma obra que transcende gêneros, oferecendo uma experiência literária única. A combinação \n'+
                'de elementos mágicos, elementos culturais e a narrativa apaixonante fazem deste livro uma \n'+
                'leitura cativante para aqueles que apreciam histórias ricas em simbolismo e sabor.',

         resenha: 'A trama gira em torno da vida de Tita, que desde muito jovem descobre sua paixão pela culinária. \n'+
                 'No entanto, ela enfrenta uma tradição familiar que a impede de se casar, pois, como a filha mais \n'+
                 'nova, é destinada a cuidar de sua mãe até o final da vida. A narrativa é estruturada ao longo de \n'+
                 'doze capítulos, cada um correspondendo a um mês do ano, e cada capítulo começa com uma receita \n'+
                 'culinária que está diretamente relacionada aos eventos da história.\n'+
                 'A autora utiliza o realismo mágico para incorporar elementos fantásticos à narrativa, criando uma \n'+
                 'atmosfera única. As emoções de Tita, expressas através de suas criações culinárias, têm efeitos \n'+
                 'mágicos sobre as pessoas que as consomem. A história explora temas como amor, tradição, repressão e \n'+
                 'liberdade, tudo isso entrelaçado com as cores e os sabores da cozinha mexicana.',
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
