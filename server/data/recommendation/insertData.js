require("dotenv").config();

const recommendationData = require("./recommendation");
const connectDB = require("../../config/db");
const Recommendation = require("../../models/Recommendation");

connectDB();

const importData = async () => {
  try {
    await Recommendation.deleteMany({});

    await Recommendation.insertMany(recommendationData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
