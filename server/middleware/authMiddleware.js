const User = require("../models/User");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.x_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { authMiddleware };
