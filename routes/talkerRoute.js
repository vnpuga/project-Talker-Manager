const express = require('express');
const fsReadFile = require('../helpers/fsReadFile');
const fsWriteFile = require('../helpers/fsWriteFile');
const { checkAuthorization, checkName, checkAge, checkTalk, checkTalkWatchedAt,
  checkTalkRate } = require('../middlewares/validations');

const router = express.Router();

// req1 GET /talker
router.get('/', async (_req, res) => {
  try {
    const data = await fsReadFile();
    // console.log(data);
    if (data) {
      return res.status(200).send(data);
    }
    return res.status(200).send([]);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

// req8 GET /talker/search?q=searchTerm
router.get('/search', checkAuthorization, async (req, res) => {
  try {
    const { q } = req.query;
    const data = await fsReadFile();
    const filteredTalker = data.filter((talker) => talker.name.includes(q));
    if (!q) return res.status(200).send(data);
    if (!filteredTalker) return res.status(200).send([]);
    return res.status(200).send(filteredTalker);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

// req2 GET /talker/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fsReadFile();
    const findId = data.find((person) => person.id === Number(id));
    // console.log(findId);
    if (!findId) {
      return res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).send(findId);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

// req5 POST /talker
router.post('/', checkAuthorization, checkName, checkAge, checkTalk,
  checkTalkWatchedAt, checkTalkRate, async (req, res) => {
    try {
      const { name, age, talk } = req.body;
      const data = await fsReadFile();
      const newTalker = { id: data.length + 1, name, age, talk };
      const allTalker = [...data, newTalker];
      fsWriteFile(allTalker);
      return res.status(201).send(newTalker);
    } catch (error) {
      return res.status(400).send({ message: error });
    }
  });

// req6 PUT /talker/:id
router.put('/:id', checkAuthorization, checkName, checkAge, checkTalk,
  checkTalkWatchedAt, checkTalkRate, async (req, res) => {
    try {
      const { id } = req.params;
      const { name, age, talk } = req.body;
      const data = await fsReadFile();
      const filterOtherTalkers = data.filter((talker) => talker.id !== Number(id));
      const updateTalker = {
        id: Number(id), 
        name, 
        age, 
        talk,
      };
      const newData = [...filterOtherTalkers, updateTalker];
      fsWriteFile(newData);
      return res.status(200).send(updateTalker);
    } catch (error) {
      return res.status(400).send({ message: error });
    }    
  });

// req7 DELETE /talker/:id
router.delete('/:id', checkAuthorization, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fsReadFile();
    const filterNewData = data.filter((talker) => talker.id !== Number(id));
    fsWriteFile(filterNewData);
    // console.log(filterNewData);
    return res.status(204).end();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
});

module.exports = router;