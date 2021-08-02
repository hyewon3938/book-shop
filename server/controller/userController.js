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

const login = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "가입된 이메일이 없습니다.",
      });
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({ loginSuccess: false, message: "잘못된 비밀번호입니다." });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id, userName: user.name });
      });
    });
  });
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

const logout = (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
};

module.exports = {
  postUserInfo,
  emailDuplicateCheck,
  login,
  logout,
  auth,
};
