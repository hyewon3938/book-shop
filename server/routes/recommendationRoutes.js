const express = require("express");
const router = express.Router();

const { getRecommendation } = require("../controller/recommendationController");

// @desc GET recommendation from db
// @route GET /api/recommendation
// @access Public
router.get("/", getRecommendation);

module.exports = router;
