// const mysql = require('mysql');
const mysql = require('mysql2');


// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'livro_avaliacao'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida');
});

// Exportar a conexão para que ela possa ser usada em outros arquivos
module.exports = connection;
