const AppError = require("./../../utils/error");
const fs = require("fs");
const {
  getCharactersService,
  searchCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
} = require("./characters.services");

const writeCh = (data) => {
  fs.writeFile("./data/data.json", JSON.stringify(data), (err) => {
    console.log(err);
  });
};

exports.getCharacters = async (req, res, next) => {
  try {
    const character = await getCharactersService(req.query);
    res.status(200).json({ status: "success", data: character });
  } catch (err) {
    next(err);
  }
};

exports.searchCharacter = async (req, res, next) => {
  try {
    const { text } = req.params;
    const character = await searchCharacterService(text);

    res.status(200).json({ status: "success", data: character });
  } catch (err) {
    next(err);
  }
};

exports.createCharacter = async (req, res, next) => {
  try {
    const character = await createCharacterService(req.body);
    res.status(201).json({
      message: "success",
      data: character,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(
      "🚀 ~ file: characters.handlers.js ~ line 49 ~ exports.updateCharacter= ~ id",
      id
    );
    if (!id) {
      res.status(400).json({ message: "you miss the ID" });
    } else {
      const character = await updateCharacterService(id, req.body);
      res.status(200).json({
        message: "success",
        data: character,
      });
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteCharacter = (req, res, next) => {
  try {
    console.log(req.params.id);
    if (!req.params.id) {
      return next(new AppError("I can't delete without an ID", 400));
    }
  } catch (err) {
    next(err);
  }
};