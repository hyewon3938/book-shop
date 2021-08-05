const express = require("express");
const router = express.Router();

const { addOrder } = require("../controller/orderController");

// @desc POST userInfo to db
// @route POST /api/orders
// @access Public
router.post("/", addOrder);

module.exports = router;
