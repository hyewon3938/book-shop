const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  carouselAd: [
    {
      imageUrl: {
        pc: { type: String, required: true },
        mobile: { type: String, required: true },
      },
      url: { type: String, required: true },
    },
  ],
  imageAd: {
    imageUrl: {
      pc: { type: String, required: true },
      mobile: { type: String, required: true },
    },
    url: { type: String, required: true },
  },
});

const Ad = mongoose.model("ad", adSchema);

module.exports = Ad;
