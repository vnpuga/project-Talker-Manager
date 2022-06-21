const { randomBytes } = require('crypto');

const req3 = (_req, res) => {
  const token = randomBytes(8).toString('hex');
  // console.log(token, token.length);
  return res.status(200).send({ token });
};

module.exports = req3;

// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
// obrigada Nina pela dica (monitoria em grupo 20/06/22).
// o split vai tirar os traços gerados no token;o join vai junta-lo e o substring vai trazer apenas 16 caracteres