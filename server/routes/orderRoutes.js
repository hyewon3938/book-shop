const express = require("express");
const router = express.Router();

const {
  pay,
  updateProductInfo,
  addOrder,
  checkCountOfStock,
  getOrderList,
} = require("../controller/orderController");

// @desc POST orderInfo to db
// @route POST /api/orders
// @access Public
router.post("/", pay, updateProductInfo, addOrder);

// @desc POST productList to check count of stock
// @route POST /api/orders/check-stock
// @access Public
router.post("/check-stock", checkCountOfStock);

// @desc GET orderList from db
// @route GET /api/orders/:userId
// @access Public
router.get("/:userId", getOrderList);

module.exports = router;
