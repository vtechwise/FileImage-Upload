const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const uploadImage = require("../controllers/uploadsController");

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/upload").post(uploadImage);

module.exports = router;
