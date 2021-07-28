const Ad = require("../models/ad");

const getAds = async (req, res) => {
  try {
    const ads = await Ad.find({});

    res.json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAds,
};
