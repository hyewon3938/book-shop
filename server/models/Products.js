const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  descriptionImageUrl: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
