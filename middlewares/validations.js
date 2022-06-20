const checkEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = regexEmail.test(email);
    if (!email) {
      return res.status(400).send({ message: 'O campo "email" é obrigatório' });
    }
    if (!isEmailValid) {
      return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const checkPassword = (req, res, next) => {
  try {
    const { password } = req.body;
    const MIN_LENGTH = 6;
    if (!password) {
      return res.status(400).send({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < MIN_LENGTH) {
      return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

module.exports = {
  checkEmail,
  checkPassword,
};
