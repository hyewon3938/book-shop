const express = require("express");
const router = express.Router();

const { getNewArrival } = require("../controller/newArrivalController");

// @desc GET newArrival from db
// @route GET /api/newArrival
// @access Public
router.get("/", getNewArrival);

module.exports = router;
