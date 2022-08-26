const { ulid } = require("ulid");
const {
  createCharacterDal,
  getCharactersDal,
  searchCharactersDal,
  updateCharacterDal,
} = require("./characters.dal");

exports.createCharacterService = async (data) => {
  data.id = `CHA-${ulid()}`;
  const result = await createCharacterDal(data);
  return result;
};
exports.updateCharacterService = async (id, data) =>
  await updateCharacterDal(id, data);
exports.getCharactersService = async (filters) =>
  await getCharactersDal(filters);
exports.searchCharacterService = async (filters) =>
  await searchCharactersDal(filters);
