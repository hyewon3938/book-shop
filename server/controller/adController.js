const Ad = require("../models/Ad");

const getAds = async (req, res) => {
  try {
    const ads = await Ad.find({});

    res.status(200).json(ads[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAds,
};
