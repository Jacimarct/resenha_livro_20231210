// api_enviar_avaliacao.js
const enviarDadosParaServidor = (dados) => {
    fetch('/rota-de-insercao-no-banco-de-dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => {
      // Lidar com a resposta do servidor, se necessário
    })
    .catch(error => {
      // Lidar com erros de requisição, se necessário
      console.error('Erro ao enviar dados para o servidor:', error);
    });
  };
  
  export default enviarDadosParaServidor;
  