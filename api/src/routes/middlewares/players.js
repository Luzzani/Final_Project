const router = require("express").Router();

const { getPlayers } = require("../controllers/getControllers");
const { postPlayers } = require("../controllers/postControllers");
const { putPlayers } = require("../controllers/putControllers");
const { deletePlayers } = require("../controllers/deleteControllers");

// router.get("/", getPlayers)
// router.get("/:id", getPlayers)
router.post("/create", postPlayers);
// router.put("/update/:id", putPlayers);
// router.delete("/delete/:id", deletePlayers);

module.exports = router;
