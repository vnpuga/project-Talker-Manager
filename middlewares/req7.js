const fsReadFile = require('../helpers/fsReadFile');
const fsWriteFile = require('../helpers/fsWriteFile');

const req7 = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fsReadFile();
    const filterNewData = data.filter((talker) => talker.id !== Number(id));
    fsWriteFile(filterNewData);
    console.log(filterNewData)
    return res.status(204).end();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

module.exports = req7;