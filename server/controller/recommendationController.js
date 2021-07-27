const Recommendation = require("../models/Recommendation");
const Product = require("../models/Products");

const getRecommendation = async (req, res) => {
  try {
    const recommendation = await Recommendation.aggregate([
      { $addFields: { product_id: { $toObjectId: "$product_id" } } },
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "_id",
          as: "productInfo",
        },
      },
      { $unwind: "$productInfo" },
      {
        $project: {
          description: 1,
          title: "$productInfo.title",
          coverImage: "$productInfo.coverImage.front",
        },
      },
    ]);

    res.json(recommendation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getRecommendation,
};
