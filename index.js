const express = require('express');
const bodyParser = require('body-parser');
// const fsReadFile = require('./helpers/fsReadFile');
// const fsWriteFile = require('./helpers/fsWriteFile');
const req1 = require('./middlewares/req1');
const req2 = require('./middlewares/req2');
const req3 = require('./middlewares/req3');
const req5 = require('./middlewares/req5');
const { checkEmail, checkPassword, checkAuthorization,
  checkName, checkAge, checkTalk, checkTalkWatchedAt,
  checkTalkRate } = require('./middlewares/validations');

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

app.post('/login', checkEmail, checkPassword, req3);

app.post('/talker', checkAuthorization, checkName, checkAge, checkTalk,
  checkTalkWatchedAt, checkTalkRate, req5);

app.listen(PORT, () => {
  console.log('Online');
});
