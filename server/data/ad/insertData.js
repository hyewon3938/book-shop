require("dotenv").config();

const adData = require("./ad");
const connectDB = require("../../config/db");
const Ad = require("../../models/Ad");

connectDB();

const importData = async () => {
  try {
    await Ad.deleteMany({});

    await Ad.insertMany(adData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
