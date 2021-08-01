const User = require("../models/User");

const postUserInfo = (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) {
      console.log(err);
      res.json({ success: false, err });
      return;
    }
    res.status(200).json({
      success: true,
    });
  });
};

const emailDuplicateCheck = async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  if (email) return res.status(409).json({ isAvailable: false });

  res.status(200).json({ isAvailable: true });
};

const auth = (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === "User" ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    points: req.user.points,
  });
};
module.exports = {
  postUserInfo,
  emailDuplicateCheck,
  auth,
};
