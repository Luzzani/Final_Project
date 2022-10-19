const router = require("express").Router();

const { create } = require("../controllers/utils"); //(o)
const { asyncGetProducts } = require("../controllers/getControllers");
const { asyncPostProduct } = require("../controllers/postControllers");
const { asyncDeleteProduct } = require("../controllers/deleteControllers");
const { asyncUpdateProduct } = require("../controllers/putControllers");
const { asyncGetProductById } = require("../controllers/getControllers");

router
  .get("/", asyncGetProducts)
  .get("/:id", asyncGetProductById)
  .post("/create", asyncPostProduct)
  .delete("/delete/:id", asyncDeleteProduct)
  .put("/update/:id", asyncUpdateProduct);

module.exports = router;
