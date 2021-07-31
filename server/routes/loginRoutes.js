const express = require("express");
const router = express.Router();

const { login } = require("../controller/loginLogoutController");

// @desc POST
// @route POST /api/login
// @access Public
router.post("/", login);

module.exports = router;
