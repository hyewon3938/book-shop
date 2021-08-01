const express = require("express");
const router = express.Router();

const {
  postUserInfo,
  emailDuplicateCheck,
  login,
  logout,
  auth,
} = require("../controller/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

// @desc POST userInfo to db
// @route POST /api/users/register
// @access Public
router.post("/register", postUserInfo);

// @desc POST email to check
// @route POST /api/users/check-email
// @access Public
router.post("/check-email", emailDuplicateCheck);

// @desc POST
// @route POST /api/users/login
// @access Public
router.post("/login", login);

// @desc GET
// @route GET /api/users/logout
// @access Public
router.get("/logout", authMiddleware, logout);

// @desc GET
// @route GET /api/users/auth
// @access Public
router.get("/auth", authMiddleware, auth);

module.exports = router;
