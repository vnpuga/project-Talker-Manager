const express = require('express');
const bodyParser = require('body-parser');
// const fsReadFile = require('./helpers/fsReadFile');
const req1 = require('./middlewares/req1');
const req2 = require('./middlewares/req2');
const req3 = require('./middlewares/req3');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', req1);

app.get('/talker/:id', req2);

app.post('/login', req3);

app.listen(PORT, () => {
  console.log('Online');
});
