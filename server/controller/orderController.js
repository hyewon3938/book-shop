const Order = require("../models/Order");
const User = require("../models/User");

const pay = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    { $inc: { points: -req.body.totalPayment } },
    (err, user) => {
      if (err) return res.json({ success: false, message: "결제에 실패하였습니다." });
      return next();
    }
  );
};

const addOrder = (req, res) => {
  const order = new Order(req.body);

  order.save((err, order) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: "주문에 실패하였습니다." });
      return;
    }
    res.status(200).json({
      success: true,
    });
  });
};

module.exports = {
  pay,
  addOrder,
};
