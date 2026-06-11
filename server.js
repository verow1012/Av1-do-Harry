const express = require('express');
const path = require('path');
const players = require('./api/players.json');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/players', (req, res) => {
  res.json(players);
});

app.get('/api/players/:id', (req, res) => {
  const player = players.find((item) => item.id === req.params.id);
  if (!player) {
    return res.status(404).json({ error: 'Jogador não encontrado' });
  }
  res.json(player);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
