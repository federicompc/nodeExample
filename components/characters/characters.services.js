const { ulid } = require("ulid");
const {
  createCharacterDal,
  getCharactersDal,
  searchCharactersDal,
  updateCharacterDal,
  deleteCharacterDal,
} = require("./characters.dal");

exports.getCharactersService = async (filters) =>
  await getCharactersDal(filters);

exports.searchCharacterService = async (filters) =>
  await searchCharactersDal(filters);

exports.createCharacterService = async (data) => {
  data.id = `CHA-${ulid()}`;
  const result = await createCharacterDal(data);
  return result;
};

exports.updateCharacterService = async (id, data) =>
  await updateCharacterDal(id, data);

exports.deleteCharacterService = async (id) => await deleteCharacterDal(id);
