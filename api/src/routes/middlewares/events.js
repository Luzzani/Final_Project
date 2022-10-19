const router = require("express").Router();

const { getEvent } = require("../controllers/getControllers");
const { createEvent } = require("../controllers/postControllers");
const { editEvent } = require("../controllers/putControllers");
const { deleteEvent } = require("../controllers/deleteControllers");

router
  .get("/", getEvent)
  .get("/:id", getEvent)
  .post("/create", createEvent)
  .put("/update/:id", editEvent)
  .delete("/delete/:id", deleteEvent);

module.exports = router;
