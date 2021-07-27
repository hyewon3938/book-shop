const Product = require("../models/Products");

const getNewArrival = async (req, res) => {
  try {
    const current = new Date();
    const aMonthAgo = new Date(current.setMonth(current.getMonth() - 1));
    let product = await Product.find({
      receivingDate: { $gte: aMonthAgo },
    }).select("title price coverImage writer category");

    if (product.length === 0) {
      product = await Product.find({})
        .sort({ receivingDate: -1 })
        .limit(15)
        .select("title price coverImage writer category");
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getNewArrival,
};
