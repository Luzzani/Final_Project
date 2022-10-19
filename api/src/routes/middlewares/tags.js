const router = require("express").Router();

const { getFilterTags } = require("../controllers/getControllers");
const { postFilterTag } = require("../controllers/postControllers");

router
    .get("/", getFilterTags)
    .post("/create", postFilterTag);

module.exports = router;
