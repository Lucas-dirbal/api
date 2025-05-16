const express = require('express');
const bodyParser = require('express').json;
const sendMessageHandler = require('./api/sendMessage');

require('dotenv').config({ path: './bot.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());

app.post('/api/send-message', sendMessageHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
