const Order = require("../models/Order");

const addOrder = (req, res) => {
  const order = new Order(req.body);

  order.save((err, order) => {
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
  addOrder,
};
