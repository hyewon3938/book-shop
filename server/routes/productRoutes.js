const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  getProductByCategory,
} = require("../controller/productController");

// @desc GET all products from db
// @route GET /api/products
// @access Public
router.get("/", getAllProducts);

// @desc GET a products from db
// @route GET /api/products/:id
// @access Public
router.get("/:category/:id", getProductById);

// @desc GET a products from db
// @route GET /api/products/:category
// @access Public
router.get("/:category", getProductByCategory);

module.exports = router;
