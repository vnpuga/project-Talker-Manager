const express = require('express');
const { randomBytes } = require('crypto');
const { checkEmail, checkPassword } = require('../middlewares/validations');

const router = express.Router();

// req3 e 4 POST /login
router.post('/', checkEmail, checkPassword, (_req, res) => {
  const token = randomBytes(8).toString('hex');
  // console.log(token, token.length);
  return res.status(200).send({ token });
});

module.exports = router;