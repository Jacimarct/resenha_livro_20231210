// Importe a conexão com o banco de dados
const db = require('./conexao_livro_avaliacao');

// Tente se conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida com sucesso');
});
