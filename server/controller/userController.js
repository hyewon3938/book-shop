const User = require("../models/User");

const postUserInfo = (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    try {
      if (err) {
        console.log(err);
        res.json({ success: false, err });
        return;
      }
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
};

const emailDuplicateCheck = async (req, res) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    if (email) return res.status(409).json({ isAvailable: false });

    res.status(200).json({ isAvailable: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  postUserInfo,
  emailDuplicateCheck,
};
