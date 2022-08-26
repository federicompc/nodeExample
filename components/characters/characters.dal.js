const Characters = require("./characters.models");

exports.createCharacterDal = async (data) => await Characters.create(data);
exports.updateCharacterDal = async (id, data) =>
  await Characters.findOneAndUpdate({ id: id }, data, {
    new: true,
  });
exports.deleteCharacterDal = async (id, data) =>
  await Characters.findOneAndUpdate(
    { id: id },
    { active: false },
    {
      new: true,
    }
  );
exports.getCharactersDal = async (filters) =>
  await Characters.find({ ...filters, active: true });
exports.searchCharactersDal = async (text) =>
  await Characters.search(text, (e) => {
    console.log(e);
  });
