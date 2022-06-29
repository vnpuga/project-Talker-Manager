const talkerService = require('../services/talkerService');

const getAll = async (_req, res) => {
    try {
      const data = await talkerService.getAll();
      if (data) {
        return res.status(200).send(data);
      }
      return res.status(200).send([]);
    } catch (error) {
      return res.status(400).send({ message: error });
    }
};

const getSearch = async (req, res) => {
  try {
    const { q } = req.query;
    const data = await talkerService.getSearch(q);    
    if (!data.q) return res.status(200).send(data);
    if (!data) return res.status(200).send([]);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await talkerService.getById(id);
    if (!data.id) {
      return res.status(404).send(data);
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const insert = async (req, res) => {
  try {
    const { name, age, talk } = req.body;
    const data = await talkerService.insert(name, age, talk);    
    return res.status(201).send(data);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const data = await talkerService.update(id, name, age, talk);
  
    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ message: error });
  }    
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await talkerService.remove(id);    
    return res.status(204).end();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

module.exports = { getAll, getSearch, getById, insert, update, remove };
