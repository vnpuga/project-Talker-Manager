const fsReadFile = require('../helpers/fsReadFile');

const req8 = async (req, res) => {
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
};

module.exports = req8;