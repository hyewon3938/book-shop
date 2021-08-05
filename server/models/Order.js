const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  productList: [
    {
      productId: {
        type: String,
        require: true,
      },
      countOfOrder: {
        type: Number,
        require: true,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  paymentType: {
    type: String,
    require: true,
    default: "적립금",
  },
  totalPayment: {
    type: Number,
    require: true,
  },
  orderStatus: {
    type: String,
    require: true,
    default: "결제완료",
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
