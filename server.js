const express = require('express');
const sendMessageHandler = require('./api/sendMenssage'); // ajuste aqui o caminho

require('dotenv').config({ path: './bot.env' });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/send-message', sendMessageHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
