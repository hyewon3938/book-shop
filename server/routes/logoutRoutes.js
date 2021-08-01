const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const { logout } = require("../controller/loginLogoutController");

// @desc POST
// @route POST /api/logout
// @access Public
router.get("/", auth, logout);

module.exports = router;
