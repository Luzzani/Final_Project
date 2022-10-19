const router = require("express").Router();

const { getOrder } = require("../controllers/getControllers");
const { postOrders } = require("../controllers/postControllers");
const { putOrders } = require("../controllers/putControllers");

router
  .get("/", getOrder)
  .get("/:id", getOrder)
  .post("/create", postOrders)
  .put("/update/:id", putOrders);

module.exports = router;
