const fs = require('fs').promises;

const fsWriteFile = async (data) => {
  const newData = await fs.writeFile('./talker.json', JSON.stringify(data));
  return newData;
};

module.exports = fsWriteFile;