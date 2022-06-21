const fsReadFile = require('../helpers/fsReadFile');
const fsWriteFile = require('../helpers/fsWriteFile');

const req6 = async (req, res) => {
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
};

module.exports = req6;