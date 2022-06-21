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

const checkAuthorization = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const MAX_LENGTH = 16;
    if (!authorization) {
      return res.status(401).send({ message: 'Token não encontrado' });
    }
    if (authorization.length !== MAX_LENGTH) {
      return res.status(401).send({ message: 'Token inválido' });
    }
    next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const checkName = (req, res, next) => {
  try {
    const { name } = req.body;
    const MIN_LENGTH = 3;
    if (!name) {
      return res.status(400).send({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < MIN_LENGTH) {
      return res.status(400).send({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const checkAge = (req, res, next) => {
  try {
    const { age } = req.body;
    const MIN_LENGTH = 18;
    if (!age) {
      return res.status(400).send({ message: 'O campo "age" é obrigatório' });
    }
    if (age < MIN_LENGTH) {
      return res.status(400).send({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const checkTalk = (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk) {
      return res.status(400).send({ message: 'O campo "talk" é obrigatório' });
    }    
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const checkTalkWatchedAt = (req, res, next) => {
  try {
    const { talk: { watchedAt } } = req.body;
    const regexData = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const isDataValid = regexData.test(watchedAt);
    // console.log(isDataValid);
    if (!watchedAt) {
      return res.status(400).send({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!isDataValid) {
      return res.status(400)
        .send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const checkTalkRate = (req, res, next) => {
  try {
    const { talk: { rate } } = req.body;
    const MIN_LENGTH = 1;
    const MAX_LENGTH = 5;
    if ([undefined, null, ''].includes(rate)) {
      return res.status(400).send({ message: 'O campo "rate" é obrigatório' });
    }
    if (rate < MIN_LENGTH || rate > MAX_LENGTH) {
      return res.status(400)
        .send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    return next();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

module.exports = {
  checkEmail,
  checkPassword,
  checkAuthorization,
  checkName,
  checkAge,
  checkTalk,
  checkTalkWatchedAt,
  checkTalkRate,
};
