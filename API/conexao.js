// Importar o módulo 'mysql'
const mysql = require('mysql');

// Configurações de conexão com o banco de dados
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
  console.log('Conexão bem-sucedida ao banco de dados');
});

// Exemplo de função para inserir dados no banco de dados
function inserirDados(dados) {
  const sql = 'INSERT INTO sua_tabela (coluna1, coluna2) VALUES (?, ?)';
  connection.query(sql, [dados.valor1, dados.valor2], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return;
    }
    console.log('Dados inseridos com sucesso:', result);
  });
}

// Exemplo de função para buscar dados do banco de dados
function buscarDados() {
  const sql = 'SELECT * FROM sua_tabela';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return;
    }
    console.log('Dados encontrados:', results);
    // Aqui você pode retornar os resultados para sua página ou fazer o que precisar com eles
  });
}

// Exemplo de função para atualizar dados no banco de dados
function atualizarDados(novoValor, id) {
  const sql = 'UPDATE sua_tabela SET coluna1 = ? WHERE id = ?';
  connection.query(sql, [novoValor, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return;
    }
    console.log('Dados atualizados com sucesso:', result);
  });
}

// Exemplo de função para excluir dados do banco de dados
function excluirDados(id) {
  const sql = 'DELETE FROM sua_tabela WHERE id = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir dados:', err);
      return;
    }
    console.log('Dados excluídos com sucesso:', result);
  });
}

// Exportar as funções necessárias
module.exports = {
  inserirDados,
  buscarDados,
  atualizarDados,
  excluirDados
};
