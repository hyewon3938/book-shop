const Recommendation = require("../models/Recommendation");

const getRecommendation = async (req, res) => {
  try {
    const recommendation = await Recommendation.aggregate([
      { $addFields: { productId: { $toObjectId: "$product_id" } } },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "productInfo",
        },
      },
      { $unwind: "$productInfo" },
      {
        $project: {
          product_id: 1,
          description: 1,
          title: "$productInfo.title",
          coverImage: "$productInfo.coverImage.front",
          category: "$productInfo.category",
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
