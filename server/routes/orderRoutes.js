const express = require("express");
const router = express.Router();

const { pay, addOrder, checkCountOfStock } = require("../controller/orderController");

// @desc POST orderInfo to db
// @route POST /api/orders
// @access Public
router.post("/", pay, addOrder);

// @desc POST productList to check count of stock
// @route POST /api/orders/check-stock
// @access Public
router.post("/check-stock", checkCountOfStock);

module.exports = router;
