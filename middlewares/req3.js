const { randomUUID } = require('crypto');

const req3 = (_req, res) => {
  const token = randomUUID().split('-').join('').substring(0, 16);
  // console.log(token, token.length);
  return res.status(200).send({ token });
};

module.exports = req3;

// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
// obrigada Nina pela dica (monitoria em grupo 20/06/22).