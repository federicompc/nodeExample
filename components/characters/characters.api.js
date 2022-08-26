const { Router } = require("express");
const {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  searchCharacter,
} = require("./characters.handlers");

const router = Router();

router.route("/").get(getCharacters).post(createCharacter);
router.route("/:id").put(updateCharacter).delete(deleteCharacter);
router.get("/search/:text", searchCharacter);
module.exports = router;
