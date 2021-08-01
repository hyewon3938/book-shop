const express = require("express");
const router = express.Router();

const { postUserInfo, emailDuplicateCheck } = require("../controller/userController");
  auth,

// @desc POST userInfo to db
// @route POST /api/users/register
// @access Public
router.post("/register", postUserInfo);

// @desc POST email to check
// @route POST /api/users/check-email
// @access Public
router.post("/check-email", emailDuplicateCheck);

// @desc GET
// @route GET /api/users/auth
// @access Public
router.get("/auth", authMiddleware, auth);

module.exports = router;
