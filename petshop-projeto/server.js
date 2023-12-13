const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');

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
// Função para gerar IDs únicos usando UUID
function gerarID() {
  return uuidv4();
}

app.post('/clientes', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    let novoClienteId;
    do {
      novoClienteId = gerarID();
    } while (await idJaExistente(novoClienteId));

    // Use o client para executar a consulta SQL, não o pool
    const result = await client.query('INSERT INTO clientes (id, nome, email, senha) VALUES ($1, $2, $3, $4) RETURNING id',
      [novoClienteId, nome, email, senha]);
    res.status(201).json({ id: novoClienteId, message: 'Cliente criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

async function idJaExistente(id) {
  const result = await client.query('SELECT COUNT(*) FROM clientes WHERE id = $1', [id]);
  return result.rows[0].count > 0;
}

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
