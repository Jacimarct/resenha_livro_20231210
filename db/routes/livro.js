const express = require('express');
const router = express.Router();
const db = require('../db/conexao');

// Rota para inserir dados no banco de dados
router.post('/', (req, res) => {
    const { id_ISBN, leitor_avaliacao, nota_avaliacao, comentario_avaliacao, quando_avaliado } = req.body;
    const query = `INSERT INTO Livro_avaliacao (id_ISBN, leitor_avaliacao, nota_avaliacao, comentario_avaliacao, quando_avaliado) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [id_ISBN, leitor_avaliacao, nota_avaliacao, comentario_avaliacao, quando_avaliado], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).json({ message: 'Erro ao inserir dados no banco de dados' });
            return;
        }
        console.log('Dados inseridos com sucesso:', result);
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
    });
});

module.exports = router;
