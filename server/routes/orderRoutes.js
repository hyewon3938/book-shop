const express = require("express");
const router = express.Router();

const { pay, addOrder } = require("../controller/orderController");

// @desc POST userInfo to db
// @route POST /api/orders
// @access Public
router.post("/", pay, addOrder);

module.exports = router;
