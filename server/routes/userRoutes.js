const express = require("express");
const router = express.Router();

const { postUserInfo } = require("../controller/userController");

// @desc POST userInfo to db
// @route POST /api/users/register
// @access Public
router.post("/register", postUserInfo);

module.exports = router;
