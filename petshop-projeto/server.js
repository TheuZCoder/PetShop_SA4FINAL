const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'petshop',
  password: 'postgres',
  port: 5432,
});

client.connect();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.post('/clientes', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    
    const result = await client.query('INSERT INTO clientes (nome, email, senha) VALUES ($1, $2, $3) RETURNING id',
      [nome, email, senha]);

    const novoClienteId = result.rows[0].id;

    res.status(201).json({ id: novoClienteId, message: 'Cliente criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

app.get('/clientes', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/planos', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM planos');
      res.json(result.rows);
    } catch (error) {
      console.error('Erro ao obter planos:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
