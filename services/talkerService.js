const talkerModel = require('../models/talkerModel');

const getAll = async () => {
  const data = await talkerModel.getAll();
  return data;
};

const getSearch = async (q) => {
  const data = await talkerModel.getSearch(q);
  return data;
};

const getById = async (id) => {
  const data = await talkerModel.getById(id);
  if (data === undefined) return { message: 'Pessoa palestrante não encontrada' };
  return data;
};

const insert = async (name, age, talk) => {
  const data = await talkerModel.insert(name, age, talk);
  return data;
};

const update = async (id, name, age, talk) => {
  const data = await talkerModel.update(id, name, age, talk);
  return data;
};

const remove = async (id) => {
  await talkerModel.remove(id);
};

module.exports = { getAll, getSearch, getById, insert, update, remove };
