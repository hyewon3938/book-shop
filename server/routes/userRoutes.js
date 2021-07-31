const express = require("express");
const router = express.Router();

const { postUserInfo } = require("../controller/userController");

// @desc POST userInfo
// @route POST /api/register
// @access Public
router.post("/", postUserInfo);

module.exports = router;
