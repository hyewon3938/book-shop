const Order = require("../models/Order");
const User = require("../models/User");
const Product = require("../models/Products");

const checkCountOfStock = async (req, res) => {
  try {
    const outOfStockList = await Promise.all(
      req.body.productArray.map(async (product) => {
        const outOfStock = await Product.findOne({
          _id: product.productId,
          countInStock: { $lt: product.countOfOrder },
        }).select("title countInStock");
        return outOfStock;
      })
    );

    const result = outOfStockList.filter((item) => item);
    if (result.length === 0) return res.json({ isAvailable: true });
    res.json({ isAvailable: false, outOfStockList: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const pay = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.body.orderInfo.userId },
    { $inc: { points: -req.body.orderInfo.totalPayment } },
    (err, user) => {
      if (err) return res.json({ success: false, message: "결제에 실패하였습니다." });
      return next();
    }
  );
};

const updateProductInfo = (req, res, next) => {
  try {
    req.body.orderInfo.productList.forEach(async (product) => {
      await Product.findOneAndUpdate(
        { _id: product.productId },
        { $inc: { countInStock: -product.countOfOrder, sales: +product.countOfOrder } }
      );
    });

    next();
  } catch (error) {
    console.error(error);

    res.status(500).json({ success: false, message: "상품정보 업데이트에 실패하였습니다." });
  }
};

const addOrder = (req, res) => {
  const order = new Order(req.body.orderInfo);

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

const getOrderList = async (req, res) => {
  try {
    const orderList = await Order.aggregate([
      { $match: { userId: req.params.userId } },
      { $unwind: "$productList" },
      { $addFields: { productId: { $toObjectId: "$productList.productId" } } },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "productObjects",
        },
      },
      { $unwind: "$productObjects" },
      {
        $project: {
          orderDate: 1,
          paymentType: 1,
          orderStatus: 1,
          userId: 1,
          totalPayment: 1,
          productList: 1,
          productObjects: {
            _id: 1,
            title: 1,
            coverImage: "$productObjects.coverImage.front",
            category: 1,
            price: 1,
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          orderDate: { $first: "$orderDate" },
          userId: { $first: "$userId" },
          paymentType: { $first: "$paymentType" },
          orderStatus: { $first: "$orderStatus" },
          totalPayment: { $first: "$totalPayment" },
          productList: { $push: { $mergeObjects: ["$productList", "$productObjects"] } },
        },
      },
    ]).sort({ orderDate: -1 });
    res.json(orderList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  pay,
  addOrder,
  checkCountOfStock,
  getOrderList,
  updateProductInfo,
};
