const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Products");

const checkCountOfStock = async (req, res) => {
  try {
    const outOfStockList = await Promise.all(
      req.body.map(async (product) => {
        const outOfStock = await Product.findOne({
          _id: product.productId,
          countInStock: { $lt: product.countOfOrder },
        }).select("title countInStock");
        return outOfStock;
      })
    );

    res.json(outOfStockList.filter((item) => item));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

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
  checkCountOfStock,
};
