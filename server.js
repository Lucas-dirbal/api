const express = require('express');
const sendMessageHandler = require('./sendMessage'); // seu arquivo de envio

require('dotenv').config({ path: './bot.env' });

const app = express();
const PORT = 3000;

// Para entender JSON no body das requisições POST
app.use(express.json());

// Servir arquivos estáticos (como seu HTML, CSS, imagens)
app.use(express.static(__dirname));

// Rota que recebe os dados do formulário e envia para o Telegram
app.post('/api/send-message', sendMessageHandler);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
