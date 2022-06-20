const fsReadFile = require('../helpers/fsReadFile');

const HTTP_OK_STATUS = 200;

const req1 = async (_req, res) => {
  try {
    const data = await fsReadFile();
    // console.log(data);
    if (data) {
      return res.status(HTTP_OK_STATUS).send(data);
    }
    return res.status(HTTP_OK_STATUS).send([]);
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

module.exports = req1;