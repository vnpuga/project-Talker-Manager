const fsReadFile = require('../helpers/fsReadFile');
const fsWriteFile = require('../helpers/fsWriteFile');

const getAll = async () => {
  const data = await fsReadFile();
  return data;
};

const getSearch = async (q) => {
  const data = await fsReadFile();
  const filteredTalker = data.filter((talker) => talker.name.includes(q));
  return filteredTalker;
};

const getById = async (id) => {
  const data = await fsReadFile();
  const findId = data.find((person) => person.id === Number(id));
  return findId;
};

const insert = async (name, age, talk) => {
  const data = await fsReadFile();
  const newTalker = { id: data.length + 1, name, age, talk };
  const allTalker = [...data, newTalker];
  fsWriteFile(allTalker);
  return newTalker;
};

const update = async (id, name, age, talk) => {
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
  return updateTalker;
};

const remove = async (id) => {
  const data = await fsReadFile();
  const filterNewData = data.filter((talker) => talker.id !== Number(id));
  fsWriteFile(filterNewData);
};

module.exports = { getAll, getSearch, getById, insert, update, remove };
