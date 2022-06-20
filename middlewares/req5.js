const fsReadFile = require('../helpers/fsReadFile');
const fsWriteFile = require('../helpers/fsWriteFile');

const req5 = async (req, res) => {
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
};

module.exports = req5;