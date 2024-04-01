const express = require('express');
const app = express();
const db = require('./db/conexao');

// Rotas
const livrosRoutes = require('./routes/livros');

// Middleware
app.use(express.json());

// Rotas
app.use('/livros', livrosRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Node.js está em execução na porta ${PORT}`);
});
