const express = require("express");
const characterController = require("./../controllers/charactersControllers");

const router = express.Router();

router
  .route("/")
  .get(characterController.getCharacters)
  .post(characterController.createCharacter);
router
  .route("/:id")
  .put(characterController.updateCharacter)
  .delete(characterController.deleteCharacter);

module.exports = router;
