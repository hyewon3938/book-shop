const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
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
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    depth: { type: Number, required: true },
  },
  weight: {
    type: Number,
    required: true,
  },
  coverImage: {
    front: { type: String, required: true },
    back: { type: String, required: true },
    side: { type: String },
  },
  contents: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  descriptionImageUrl: {
    type: Array,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
