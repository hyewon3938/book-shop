const express = require("express");
const router = express.Router();

const { getAds } = require("../controller/adController");

// @desc GET ad from db
// @route GET /api/ad
// @access Public
router.get("/", getAds);

module.exports = router;
