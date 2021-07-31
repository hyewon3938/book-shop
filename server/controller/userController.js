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

module.exports = {
  postUserInfo,
};
