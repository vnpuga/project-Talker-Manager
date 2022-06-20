const fsReadFile = require('../helpers/fsReadFile');

const req2 = async (req, res) => {
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
};

module.exports = req2;