const AppError = require("./../utils/error");
const fs = require("fs");
const Character = require("./../data/data");

const writeCh = (data) => {
  fs.writeFile("./data/data.json", JSON.stringify(data), (err) => {
    console.log(err);
  });
};
exports.getCharacters = (req, res, next) => {
  res.status(200).json({
    message: "success",
    data: Character,
  });
};

exports.createCharacter = (req, res, next) => {
  console.log(req.body);
  Character.push(req.body);
  req.body.id = Number(Character.length + 1);
  writeCh(Character);
  res.status(201).json({
    message: "success",
    data: Character,
  });
};

exports.updateCharacter = (req, res, next) => {
  const { name, side, profession } = req.body;
  console.log(req.params.id);
  const updateCharacter = Character.find((j) => j.id == req.params.id);
  if (!name || !side || !profession) {
    return next(new AppError("faltan los datos del personaje", 400));
  }
  updateCharacter.name = name;
  updateCharacter.side = side;
  updateCharacter.profession = profession;
  writeCh(Character);
  res.status(200).json({
    message: "success",
    data: Character,
  });
};
exports.deleteCharacter = (req, res, next) => {
  console.log(req.params.id);
  if (!req.params.id) {
    return next(new AppError("I can't delete without an ID", 400));
  }
  const deleteCharacter = Character.filter(
    (j) => j.id !== Number(req.params.id)
  );
  console.log("updated after delete", deleteCharacter);
  writeCh(deleteCharacter);
  res.status(202).json({
    message: "success",
    data: deleteCharacter,
  });
};
