require("dotenv").config();

const newProductsData = require("./newProducts");
const connectDB = require("../config/db");
const Product = require("../models/Products");

connectDB();

const importNewData = async () => {
  try {
    await Product.insertMany(newProductsData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importNewData();
