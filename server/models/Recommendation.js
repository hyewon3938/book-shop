const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Recommendation = mongoose.model("recommendation", recommendationSchema);

module.exports = Recommendation;
