const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Aplicação no ar com CI/CD!');
});

module.exports = app;
