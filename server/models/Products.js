const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
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
  pages: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
  sideImageUrl: {
    type: String,
  },
  backImageUrl: {
    type: String,
    required: true,
  },
  descriptionImageUrl: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
