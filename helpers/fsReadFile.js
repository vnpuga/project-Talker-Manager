const fs = require('fs').promises;

const fsReadFile = async () => {
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  const data = await JSON.parse(talkers);
  return data;
};

module.exports = fsReadFile;